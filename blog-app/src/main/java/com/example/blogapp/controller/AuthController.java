

package com.example.blogapp.controller;

import org.springframework.web.bind.annotation.*;

import com.example.blogapp.dto.AuthRequest;
import com.example.blogapp.dto.RegisterRequest;
import com.example.blogapp.service.AuthService;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private AuthService authService;

    //  Constructor Injection
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {
        return authService.register(request);
    }

    @PostMapping("/login")
    public String login(@RequestBody AuthRequest request) {
        return authService.login(request);
    }
}