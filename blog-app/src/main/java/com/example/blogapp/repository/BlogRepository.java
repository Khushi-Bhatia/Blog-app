package com.example.blogapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.blogapp.entity.Blog;



import java.util.List;

public interface BlogRepository extends JpaRepository<Blog, Long> {

    List<Blog> findByAuthor(String author);
    
    boolean existsByContent(String content);
    
    boolean existsByTitle(String Title);
}