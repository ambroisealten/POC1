package com.example.demo.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.demo.model.User;

public interface UserRepository extends MongoRepository<User, Long> {
	 
    User findByForname(String empNo);
    User findByMail(String mail);
 
    List<User> findByFornameLike(String fullName);
  
    // Supports native JSON query string
    @Query("{forname:'?0'}")
    List<User> findCustomByForname(String fullName);
 
}
