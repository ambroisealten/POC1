package com.example.demo.httpStatus;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT, reason = "Conflit, clé déjà existante")
public class ConflictException extends RuntimeException {

	private static final long serialVersionUID = -7105156100966441173L;

	public ConflictException() {
        super();
    }
}
