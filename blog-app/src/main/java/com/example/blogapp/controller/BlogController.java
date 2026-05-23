
package com.example.blogapp.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.blogapp.dto.BlogDTO;
import com.example.blogapp.entity.Blog;
import com.example.blogapp.service.BlogService;

@RestController
@RequestMapping("/blogs")
@CrossOrigin(origins = "http://localhost:5173")
public class BlogController {

    private final BlogService blogService;

    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    @PostMapping
    public Blog create(@RequestBody BlogDTO dto, Principal principal) {

        if (principal == null) {
            throw new RuntimeException("User not authenticated");
        }

        return blogService.create(dto, principal.getName());
    }

    @GetMapping
    public List<Blog> getAll() {
        return blogService.getAll();
    }

    
    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public void delete(@PathVariable Long id) {
        blogService.delete(id);
    }

    @PutMapping("/{id}")
    public Blog update(@PathVariable Long id,
                       @RequestBody BlogDTO dto,
                       Principal principal) {

        if (principal == null) {
            throw new RuntimeException("User not authenticated");
        }

        return blogService.update(id, dto, principal.getName());
    }
}