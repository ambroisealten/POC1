package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.convert.DefaultDbRefResolver;
import org.springframework.data.mongodb.core.convert.DefaultMongoTypeMapper;
import org.springframework.data.mongodb.core.convert.MappingMongoConverter;
import org.springframework.data.mongodb.core.mapping.MongoMappingContext;

import com.example.filter.TokenFilter;

@SpringBootApplication
public class JeePoc1LoginApplication {

	public static void main(String[] args) {
		SpringApplication.run(JeePoc1LoginApplication.class, args);
	}
	
	@Bean
	public MongoTemplate mongoTemplate(MongoDbFactory mongoDbFactory, MongoMappingContext context) {

		MappingMongoConverter converter = new MappingMongoConverter(new DefaultDbRefResolver(mongoDbFactory), context);
		converter.setTypeMapper(new DefaultMongoTypeMapper(null));

		MongoTemplate mongoTemplate = new MongoTemplate(mongoDbFactory, converter);

		return mongoTemplate;

	}
	
	@Bean
	 public FilterRegistrationBean < TokenFilter > filterRegistrationBean() {
	  FilterRegistrationBean < TokenFilter > registrationBean = new FilterRegistrationBean();
	  TokenFilter TokenFilter = new TokenFilter();

	  registrationBean.setFilter(TokenFilter);
	  registrationBean.addUrlPatterns("/*");
	  registrationBean.setOrder(1); //set precedence
	  return registrationBean;
	 }

}
