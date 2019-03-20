package com.example.demo.httpStatus;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Exception sent if conflicts when entity already exists in database. HTTP
 * Status : 409.
 * 
 * @authors Andy Chabalier, Camille Schnell
 *
 */
@ResponseStatus(value = HttpStatus.CONFLICT, reason = "Conflit, clé déjà existante")
public class ConflictException extends RuntimeException {

	private static final long serialVersionUID = -7105156100966441173L;

	public ConflictException() {
		super();
	}
}
