package com.example.demo.httpStatus;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.UNAUTHORIZED, reason = "Accès refusé. Vous n'êtes pas connecté ou les identifiants sont incorrects")
public class UnauthorizedException extends RuntimeException {
	
	private static final long serialVersionUID = 900489820760681258L;

	public UnauthorizedException() {
        super();
    }
}
