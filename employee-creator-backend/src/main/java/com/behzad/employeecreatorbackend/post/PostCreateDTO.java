package com.behzad.employeecreatorbackend.post;

import lombok.Getter;
import lombok.Setter;

public class PostCreateDTO {
	
	@Getter
	@Setter
	private String title;
	
	@Getter
	@Setter
	private String content;
	
	@Getter
	@Setter
	private String category;
	
	public PostCreateDTO(String title, String content, String category) {
		this.title=title;
		this.content=content;
		this.category=category;
		
	}

}
