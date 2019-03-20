package com.example.demo.httpStatus;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Exception sent when user doesn't have the right rights to access a resource.
 * HTTP Status : 403.
 * 
 * @author Andy Chabalier, Camille Schnell
 *
 */
@ResponseStatus(value = HttpStatus.FORBIDDEN, reason = "Requête refusée. Vous n'avez pas les privilèges requis")
public class ForbiddenException extends RuntimeException {

	private static final long serialVersionUID = 6861810970115266522L;

	public ForbiddenException() {
		super();
	}
}
