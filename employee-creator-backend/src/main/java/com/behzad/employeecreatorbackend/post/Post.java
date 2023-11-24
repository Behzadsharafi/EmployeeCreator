package com.behzad.employeecreatorbackend.post;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="posts")
public class Post {
	
	@Getter
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

	@Column
	@Getter
	@Setter
	private String title;
	
	@Column
	@Getter
	@Setter
	private String content;
	
	@Column
	@Getter
	@Setter
	private String category;
	
	@Column
	@Getter
	@Setter
	private Date createdAt;
	
	public Post() {}
	
	public Post(String title, String content, String category, Date createdAt ) {
		this.title=title;
		this.content= content;
		this.category=category;
		this.createdAt=createdAt;
	}

}
