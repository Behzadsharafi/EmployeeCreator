package com.behzad.employeecreatorbackend.post;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/posts")
public class PostController {
	
	@Autowired
	private PostService postService;
	
	@GetMapping
	public ResponseEntity<List<Post>> getAll(){
		List<Post> allPosts= this.postService.getAll();
		return new ResponseEntity<>(allPosts, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Post> createPost(@RequestBody PostCreateDTO data){
		System.out.println(data.getCategory());
		System.out.println(data.getContent());
		System.out.println(data.getTitle());
		Post newPost= this.postService.createPost(data);
		
		
		return null;
		
	}

}
