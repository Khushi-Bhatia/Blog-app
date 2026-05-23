
package com.example.blogapp.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.blogapp.dto.BlogDTO;
import com.example.blogapp.entity.Blog;
import com.example.blogapp.entity.User;
import com.example.blogapp.repository.BlogRepository;
import com.example.blogapp.repository.UserRepository;

@Service
public class BlogService {

    private final BlogRepository blogRepo;
    private final UserRepository userRepo;

    
    public BlogService(BlogRepository blogRepo, UserRepository userRepo) {
        this.blogRepo = blogRepo;
        this.userRepo = userRepo;
    }

    
    
    public Blog create(BlogDTO dto, String username) {

        User user = userRepo.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        
        
        
//       Blog bb = new Blog();
//       bb.setTitle("Test");
//       bb.setContent("Blog by Sri");
//       bb.setAuthor("TestAuthor");
//       bb.setUser(user);
//       
//       return blogRepo.save(bb);  
       
        
        
        Blog blog = new Blog();
        blog.setTitle(dto.getTitle());
        blog.setContent(dto.getContent());
        blog.setAuthor(username);
        blog.setUser(user);
        blog.setCreatedAt(LocalDateTime.now());
//        if( blogRepo.findBy(dto.getContent(), "Blog by Sri"))
                    
        //if(dto.getContent().contains("Sri")) throw new RuntimeException("Already exists blog");
        
        //if(dto.getContent().contains("Sri") && blogRepo.equals(dto.getContent()) ) ;
        
         
        if (blogRepo.existsByContent(dto.getContent())) {
            throw new RuntimeException("Content already exists");
        }
        
        if(blogRepo.existsByTitle(dto.getContent())) {
        	System.out.println("same title exists");
        }
        
        
        return blogRepo.save(blog);  
        
}
     
    
    

    public List<Blog> getAll() {
    	
        return blogRepo.findAll();
    }

    public void delete(Long id) {
        blogRepo.deleteById(id);
    }
  
    
    
    public Blog update(Long id, BlogDTO dto, String username) {

        Blog blog = blogRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Blog not found"));

        if (!blog.getAuthor().equals(username)) {
            throw new RuntimeException("You can only edit your own blog");
        }

        blog.setTitle(dto.getTitle());
        blog.setContent(dto.getContent());

        return blogRepo.save(blog);
    }
    
    
}