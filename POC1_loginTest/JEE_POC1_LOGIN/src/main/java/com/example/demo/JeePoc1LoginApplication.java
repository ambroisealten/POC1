package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.convert.DefaultDbRefResolver;
import org.springframework.data.mongodb.core.convert.DefaultMongoTypeMapper;
import org.springframework.data.mongodb.core.convert.MappingMongoConverter;
import org.springframework.data.mongodb.core.mapping.MongoMappingContext;

import com.example.demo.filter.TokenFilter;

/**
 * Global application class
 * 
 * @author Andy Chabalier, Kylian Gehier, Camille Schnell
 *
 */
@SpringBootApplication
public class JeePoc1LoginApplication {

	/**
	 * Main entry of the application
	 * 
	 * @param args
	 */
	public static void main(String[] args) {
		SpringApplication.run(JeePoc1LoginApplication.class, args);
	}

	/**
	 * 
	 * @param mongoDbFactory
	 * @param context
	 * @return mongo template
	 */
	@Bean
	public MongoTemplate mongoTemplate(MongoDbFactory mongoDbFactory, MongoMappingContext context) {

		MappingMongoConverter converter = new MappingMongoConverter(new DefaultDbRefResolver(mongoDbFactory), context);
		converter.setTypeMapper(new DefaultMongoTypeMapper(null));

		MongoTemplate mongoTemplate = new MongoTemplate(mongoDbFactory, converter);

		return mongoTemplate;

	}

	/**
	 * Registers token filter to filter chain
	 * 
	 * @see TokenFilter
	 * @return registration bean
	 */
	@Bean
	public FilterRegistrationBean<TokenFilter> filterRegistrationBean() {
		FilterRegistrationBean<TokenFilter> registrationBean = new FilterRegistrationBean<TokenFilter>();
		TokenFilter tokenFilter = new TokenFilter();

		registrationBean.setFilter(tokenFilter);
		registrationBean.addUrlPatterns("/*");
		registrationBean.setOrder(2); // set precedence
		return registrationBean;
	}
}
