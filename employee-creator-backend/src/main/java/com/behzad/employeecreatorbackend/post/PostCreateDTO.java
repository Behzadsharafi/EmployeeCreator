package com.behzad.employeecreatorbackend.post;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

public class PostCreateDTO {
	
	@Getter
	@Setter
	@NotBlank
	private String title;
	
	@Getter
	@Setter
	@NotBlank
	private String content;
	
	@Getter
	@Setter
	@NotBlank
	private String category;
	
	public PostCreateDTO(String title, String content, String category) {
		this.title=title;
		this.content=content;
		this.category=category;
		
	}

}
