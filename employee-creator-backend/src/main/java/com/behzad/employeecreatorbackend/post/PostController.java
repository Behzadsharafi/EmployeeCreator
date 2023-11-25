package com.behzad.employeecreatorbackend.post;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.behzad.employeecreatorbackend.exceptions.NotFoundException;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/posts")
public class PostController {

	@Autowired
	private PostService postService;

	@GetMapping
	public ResponseEntity<List<Post>> getAll() {
		List<Post> allPosts = this.postService.getAll();
		return new ResponseEntity<>(allPosts, HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<Post> createPost(@Valid @RequestBody PostCreateDTO data) {
		Post newPost = this.postService.createPost(data);
		return new ResponseEntity<Post>(newPost, HttpStatus.CREATED);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Post> getById(@PathVariable Long id) {
		Optional<Post> found = this.postService.getById(id);
		if (found.isPresent()) {
			return new ResponseEntity<Post>(found.get(), HttpStatus.OK);
		}

		throw new NotFoundException(String.format("Post with id: %d does not exist", id));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Post> deleteById(@PathVariable Long id) {
		boolean deleted = this.postService.deleteById(id);
		if (deleted == true) {
			return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
		}
		throw new NotFoundException(String.format("Post with id: %d does not exist, could not delete", id));
	}

	@PatchMapping("/{id}")
	public ResponseEntity<Post> updateById(@PathVariable Long id, @Valid @RequestBody PostUpdateDTO data) {

		Optional<Post> updated = this.postService.updateById(id, data);
		if (updated.isPresent()) {
			return new ResponseEntity<Post>(updated.get(), HttpStatus.OK);
		}
		throw new NotFoundException(String.format("Post with id: %d does not exist, could not update", id));
		
	}

}
