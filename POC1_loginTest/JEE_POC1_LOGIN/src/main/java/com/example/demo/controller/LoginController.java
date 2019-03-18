package com.example.demo.controller;

import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.dao.UserRepository;
import com.example.demo.model.User;
import com.example.demo.security.JWTokenUtility;
import com.fasterxml.jackson.databind.JsonNode;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.mongodb.MongoWriteException;

@Controller
public class LoginController {

	@Autowired
	private UserRepository userRepository;
	
	private final Gson gson;

	public LoginController() {
		GsonBuilder builder = new GsonBuilder();
		this.gson = builder.create();		
	}

	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/login")
	@ResponseBody
	public String login(@RequestBody JsonNode params) throws ParseException{
		User user;
		String mail = params.get("mail").textValue();
		String pswd = params.get("pswd").textValue();

		if( (user = userRepository.findByMail(mail)) != null) {
			if(user.getPswd().equals(pswd))
				return gson.toJson(JWTokenUtility.buildJWT(mail));
		}
		return HttpStatus.FORBIDDEN.toString();
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/signup")
	@ResponseBody
	public HttpStatus signup(@RequestBody JsonNode params) throws ParseException{
		User user = new User();
		
		user.setForname(params.get("forname").textValue());
		user.setName(params.get("name").textValue());
		user.setPswd(params.get("pswd").textValue());
		user.setMail(params.get("mail").textValue());
		
		try {
			userRepository.insert(user);
		}
		catch(MongoWriteException e) {
			System.out.println("Email already exists");
			return HttpStatus.CONFLICT; // TODO change
		}
		
		return HttpStatus.CREATED;
	}
	
	
	public static List<String> findUserRole(String subject) {
		// TODO return the user list
		return null;
	}
	
	

}

