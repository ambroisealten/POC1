package model;

import java.util.ArrayList;

public class Users {

	private ArrayList<User> users;
	
	public Users() {
		this.users= new ArrayList<User>();
	}
	
	public Users(ArrayList<User> users) {
		this.users=users;
	}
	
	public String getUserMail(User user)
	{
		return user.getMail();
	}
	
	public String getUserPswd(User user) {
		return user.getPswd();
	}

	public ArrayList<User> getUsers() {
		return users;
	}

	public void setUsers(ArrayList<User> users) {
		this.users = users;
	}
	
	public void addUser(User user) {
		this.users.add(user);
	}
	
}
