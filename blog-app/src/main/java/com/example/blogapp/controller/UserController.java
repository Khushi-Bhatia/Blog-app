package com.example.blogapp.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.blogapp.entity.Blog;
import com.example.blogapp.entity.User;
import com.example.blogapp.repository.BlogRepository;
import com.example.blogapp.repository.UserRepository;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserRepository userRepo;
    private final BlogRepository blogRepo;

    public UserController(UserRepository userRepo, BlogRepository blogRepo) {
        this.userRepo = userRepo;
        this.blogRepo = blogRepo;
    }

    //  PROFILE
    @GetMapping("/profile")
    public User getProfile(Principal principal) {
        return userRepo.findByUsername(principal.getName())
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    //  MY BLOGS
    @GetMapping("/my-blogs")
    public List<Blog> myBlogs(Principal principal) {
        return blogRepo.findByAuthor(principal.getName());
    }
}