package com.example.demo.model;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="user")
public class User implements Serializable {

	private static final long serialVersionUID = -3102945555563965533L;

		
    @Indexed(unique = true)
	private String mail;
	private transient String pswd;
	private String name;
	private String forname;
	
	public User(String forname, String name, final String mail, String pswd) {
		this.name=name;
		this.forname=forname;
		this.mail=mail;
		this.pswd=pswd;
	}

	public User() {
		super();
	}

	public String getPswd() {
		return pswd;
	}

	public void setPswd(String pswd) {
		this.pswd = pswd;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getForname() {
		return forname;
	}

	public void setForname(String forname) {
		this.forname = forname;
	}

	public String getMail() {
		return mail;
	}
	
	public void setMail(String mail) {
		this.mail = mail;
	}
	
	
}

