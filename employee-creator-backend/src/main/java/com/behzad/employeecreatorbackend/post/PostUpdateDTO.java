package com.behzad.employeecreatorbackend.post;

import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;

public class PostUpdateDTO {
	
	@Getter
	@Setter
	@Pattern(regexp="^(?=\\\\S).*$", message="Title cannot be empty")
	private String title;
	
	@Getter
	@Setter
	@Pattern(regexp="^(?=\\\\S).*$", message="Content cannot be empty")
	private String content;
	
	@Getter
	@Setter
	@Pattern(regexp="^(?=\\\\S).*$", message="Category cannot be empty")
	private String category;
	
}
