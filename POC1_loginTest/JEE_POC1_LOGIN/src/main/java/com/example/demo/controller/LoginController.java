package com.example.demo.controller;

import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.dao.UserRepository;
import com.example.demo.model.User;
import com.example.demo.security.JWTokenUtility;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@Controller
public class LoginController {

	@Autowired
	private UserRepository userRepository;
	
	private final Gson gson;

	public LoginController() {
		GsonBuilder builder = new GsonBuilder();
		this.gson = builder.create();
	}

	/*public Auth authentification(String mail, String pswd) {

		User user = new User("", "", "", "");

		try {

			user = getUserByMail(mail);

		} catch (NoSuchElementException e) {
			return Auth.InvalidUser;
		}

		return checkPswd(user, pswd) ? Auth.Authenticated : Auth.InvalidPswd;

	}


	protected boolean checkPswd(User user, String pswd) {
		return user.getPswd().equals(pswd);
	}*/

//	@RequestMapping(value="/login", method=RequestMethod.GET, produces="application.json")
		//@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/login")
	@ResponseBody
	public String login(@RequestParam String mail, @RequestParam String pswd) throws ParseException{
		userRepository.insert(new User("","",mail,""));
		User user = userRepository.findByMail(mail);
		return gson.toJson(JWTokenUtility.buildJWT(user.getMail()));
	}

	public static List<String> findUserRole(String subject) {
		// TODO return the user list
		return null;
	}

}

