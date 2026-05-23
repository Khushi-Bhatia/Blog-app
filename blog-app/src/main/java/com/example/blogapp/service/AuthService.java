


package com.example.blogapp.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.blogapp.dto.AuthRequest;
import com.example.blogapp.dto.RegisterRequest;
import com.example.blogapp.entity.User;
import com.example.blogapp.repository.UserRepository;
import com.example.blogapp.util.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
public class AuthService {

    private final UserRepository userRepo;
    private final PasswordEncoder encoder;
    private final JwtUtil jwtUtil;
    
    public AuthService(UserRepository userRepo,
            PasswordEncoder encoder,
            JwtUtil jwtUtil) {
this.userRepo = userRepo;
this.encoder = encoder;
this.jwtUtil = jwtUtil;
}

    
    public String register(RegisterRequest request) {
    	
    	
    	
    	 if (userRepo.findByUsername(request.getUsername()).isPresent()) {
    	        throw new RuntimeException("Username already exists");
    	    }

    	    
        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(encoder.encode(request.getPassword()));
        user.setRole("USER");

        userRepo.save(user);
        return "User Registered";
        
        
        
    }

    public String login(AuthRequest request) {
        User user = userRepo.findByUsername(request.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!encoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

       
        return jwtUtil.generateToken(user.getUsername(), user.getRole());
        
    }
    
    
    
    
}