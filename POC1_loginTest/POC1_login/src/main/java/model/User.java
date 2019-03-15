package model;

public class User {

	final private String mail;
	private String pswd;
	private String name;
	private String forname;
	
	public User(String forname, String name, final String mail, String pswd) {
		this.name=name;
		this.forname=forname;
		this.mail=mail;
		this.pswd=pswd;
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
	
	
}
