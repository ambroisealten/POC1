package com.example.demo.controller;

import java.io.IOException;
import java.text.ParseException;
import java.util.List;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.example.demo.dao.UserRepository;
import com.example.demo.httpStatus.ConflictException;
import com.example.demo.httpStatus.CreatedException;
import com.example.demo.httpStatus.ForbiddenException;
import com.example.demo.httpStatus.UnauthorizedException;
import com.example.demo.model.User;
import com.example.demo.security.JWTokenUtility;
import com.example.demo.utils.Constants;
import com.example.demo.utils.PasswordUtility;
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
	@PostMapping(value = "/login")
	@ResponseBody
	public String login(@RequestBody JsonNode params) throws Exception{
		User user;
		String mail = params.get("mail").textValue();
		String pswd = params.get("pswd").textValue();

		if( (user = userRepository.findByMail(mail)) != null) {
			if(PasswordUtility.check(pswd, user.getPswd()))
				return gson.toJson(JWTokenUtility.buildJWT(user.getMail()+"|"+user.getRole()));
		}
		throw new ForbiddenException();
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping(value = "/signup")
	@ResponseBody
	public void signup(@RequestBody JsonNode params) throws Exception{
		User user = new User();
		user.setForname(params.get("forname").textValue());
		user.setName(params.get("name").textValue());
		user.setPswd(PasswordUtility.getSaltedHash(params.get("pswd").textValue()));
		user.setMail(params.get("mail").textValue());
		user.setRole(Constants.ROLE_DEFAULT);
		
		try {
			userRepository.insert(user);
		}
		catch(Exception e) {
			throw new ConflictException();
		}
		
		throw new CreatedException();
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping(value = "/users")
	@ResponseBody
	public String getUsers(@RequestAttribute("mail") String mail,@RequestAttribute("role") int role){
		User user = userRepository.findByMail(mail);
		if(!(user.getRole() == role && (role == Constants.ROLE_MANAGER || role == Constants.ROLE_CDR))) {
			throw new ForbiddenException();
		}
		return gson.toJson(userRepository.findAll());		
	}
}

