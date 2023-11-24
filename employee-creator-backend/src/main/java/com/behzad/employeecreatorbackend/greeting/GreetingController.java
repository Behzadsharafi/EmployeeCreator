package com.behzad.employeecreatorbackend.greeting;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/greetings")
public class GreetingController {
	
	// GET request
	
	@GetMapping
	public String helloWorld() {
		return "Hello World";
	}
	
	@GetMapping("/goodbye")
	public String goodBye() {
		return "GoodBye World";
	}
	
	@GetMapping("/{name}")
	public String helloWithName(@PathVariable String name) {
		return String.format("Hello %s", name);
	}

}
