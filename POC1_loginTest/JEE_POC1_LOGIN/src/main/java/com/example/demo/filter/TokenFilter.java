package com.example.demo.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.HttpMethod;

import org.jose4j.jwk.RsaJsonWebKey;
import org.jose4j.jwt.JwtClaims;
import org.jose4j.jwt.consumer.InvalidJwtException;
import org.jose4j.jwt.consumer.JwtConsumer;
import org.jose4j.jwt.consumer.JwtConsumerBuilder;

import com.example.demo.security.RsaKeyProducer;
import com.example.demo.utils.Constants;

/**
 * Filter requests by token
 * 
 * @author Andy Chabalier, Camille Schnell
 *
 */
public class TokenFilter implements Filter {

	/**
	 * Filter requests : - if path is in exception list (login, signup,...) --> no
	 * filter - else filter in function of the user status (connected or not). If
	 * connected, mail and role are put in the HTTP request attributes. Else throw
	 * 498 http status "Invalid token".
	 */
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {

		HttpServletRequest httpRequest = (HttpServletRequest) request;

		String token = httpRequest.getHeader("authorization");

		String requestURI = httpRequest.getRequestURI();
		String method = httpRequest.getMethod();
		if (!(requestURI.contains("login") || requestURI.contains("signup") || method.equals(HttpMethod.OPTIONS))) {

			try {
				String[] tokenInfo = validate(token).split("\\|");
				String subject = tokenInfo[0];
				int role = Integer.parseInt(tokenInfo[1]);

				httpRequest.setAttribute("mail", subject);
				httpRequest.setAttribute("role", role);

				chain.doFilter(httpRequest, response);

			} catch (InvalidJwtException e) {
				((HttpServletResponse) response).sendError(498, Constants.er498);
			}
		} else {
			chain.doFilter(request, response);
		}
	}

	/**
	 * Méthode de validation d'un JWT
	 * 
	 * @param jwt le token à tester
	 * @return le contenu du token déchiffré s'il est valide
	 * @throws InvalidJwtException si le token n'est pas valide
	 */
	private String validate(String jwt) throws InvalidJwtException {
		String subject = null;
		RsaJsonWebKey rsaJsonWebKey = RsaKeyProducer.produce();

		// construction du décodeur de JWT
		JwtConsumer jwtConsumer = new JwtConsumerBuilder().setRequireSubject()
				.setVerificationKey(rsaJsonWebKey.getKey()).build();

		// validation du JWT et récupération du contenu
		JwtClaims jwtClaims = jwtConsumer.processToClaims(jwt);
		subject = (String) jwtClaims.getClaimValue("sub");

		return subject;
	}
}
