package com.example.demo.httpStatus;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CREATED, reason = "Entité créée")
public class CreatedException extends RuntimeException {

	private static final long serialVersionUID = 1247315017130903282L;

	public CreatedException() {
        super();
    }
}
