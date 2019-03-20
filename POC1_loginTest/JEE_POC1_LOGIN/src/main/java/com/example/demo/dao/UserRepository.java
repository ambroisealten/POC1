package com.example.demo.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.demo.model.User;

/**
 * 
 * @author Andy Chabalier
 *
 */
public interface UserRepository extends MongoRepository<User, Long> {
	/**
	 * Fetch user by forename
	 * 
	 * @param forename
	 * @return the user
	 */
	User findByForname(String forename);

	/**
	 * Fetch user by mail
	 * 
	 * @param mail
	 * @return the user
	 */
	User findByMail(String mail);

	/**
	 * Fetch list of users with forename like the parameter forename
	 * 
	 * @param forename
	 * @return list of users
	 */
	List<User> findByFornameLike(String forename);

	// Supports native JSON query string
	@Query("{forname:'?0'}")
	List<User> findCustomByForname(String fullName);

}
