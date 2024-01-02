package com.behzad.employeecreatorbackend.config;



import org.modelmapper.ModelMapper;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.behzad.employeecreatorbackend.converters.StringTrimConverter;



@Configuration
public class ModelMapperConfig {
	
	@Bean 
	public ModelMapper modelMapper() {	
		ModelMapper mapper = new ModelMapper();		
		mapper.typeMap(String.class, String.class).setConverter(new StringTrimConverter());
		mapper.getConfiguration().setSkipNullEnabled(true);
		return mapper;
	}
}