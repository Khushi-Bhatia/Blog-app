package com.example.blogapp.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.blogapp.entity.Blog;
import com.example.blogapp.entity.User;
import com.example.blogapp.repository.BlogRepository;
import com.example.blogapp.repository.UserRepository;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    private final UserRepository userRepo;
    private final BlogRepository blogRepo;

    public AdminController(UserRepository userRepo, BlogRepository blogRepo) {
        this.userRepo = userRepo;
        this.blogRepo = blogRepo;
    }

    // ALL USERS
    @GetMapping("/users")
    public List<User> getUsers() {
        return userRepo.findAll();
    }

    // DELETE USER
    @DeleteMapping("/user/{id}")
    public void deleteUser(@PathVariable Long id) {
        userRepo.deleteById(id);
    }

    //  ALL BLOGS
    @GetMapping("/blogs")
    public List<Blog> getAllBlogs() {
        return blogRepo.findAll();
    }

    // DELETE BLOG
    @DeleteMapping("/blog/{id}")
    public void deleteBlog(@PathVariable Long id) {
        blogRepo.deleteById(id);
    }
}