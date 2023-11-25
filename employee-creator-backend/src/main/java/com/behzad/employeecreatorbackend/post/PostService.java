package com.behzad.employeecreatorbackend.post;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class PostService {

	@Autowired
	private PostRepository postRepository;

	@Autowired
	private ModelMapper modelMapper;

	public List<Post> getAll() {
		return this.postRepository.findAll();
	}

	public Post createPost(PostCreateDTO data) {
	Post newPost= modelMapper.map(data, Post.class);
	newPost.setCreatedAt(new Date());

		Post created = this.postRepository.save(newPost);
		return created;
	}

	public Optional<Post> getById(Long id) {
		Optional<Post> foundPost = postRepository.findById(id);
		return foundPost;
	}

	public boolean deleteById(Long id) {
		Optional<Post> foundPost = this.getById(id);
		if (foundPost.isPresent()) {
			this.postRepository.delete(foundPost.get());
			return true;
		}
		return false;
	}

	public Optional<Post> updateById(Long id, PostUpdateDTO data) {

		Optional<Post> foundPost = this.getById(id);

		if (foundPost.isPresent()) {
			Post toUpdate = foundPost.get();

			modelMapper.map(data, toUpdate);

			Post updatedPost = this.postRepository.save(toUpdate);

			return Optional.of(updatedPost);

		}

		return foundPost;

	}

}
