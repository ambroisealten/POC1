package com.example.demo.security;

/**
 * Token wrapper
 * @author Andy Chabalier, Camille Schnell
 *
 */
public class Token {
	
	private String token;
	
	public Token(String token) {
		this.token = token;
	}
	
	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
}