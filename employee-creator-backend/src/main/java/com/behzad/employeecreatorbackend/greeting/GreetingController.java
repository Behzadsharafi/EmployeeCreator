package com.behzad.employeecreatorbackend.greeting;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/greetings")
public class GreetingController {
	
	// GET request
	public String helloWorld() {
		return "Hello World";
	}

}
