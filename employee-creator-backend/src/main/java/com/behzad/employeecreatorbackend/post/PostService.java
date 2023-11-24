package com.behzad.employeecreatorbackend.post;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class PostService {
	
	@Autowired
	private PostRepository postRepository;

	public List<Post> getAll() {
		return this.postRepository.findAll();
	}
	
	public Post createPost(PostCreateDTO data) {
		
	}

}
