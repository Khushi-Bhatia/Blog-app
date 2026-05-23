
//
//import lombok.Data;
//
//@Data
//public class BlogDTO {
//    private String username;
//    private String email;
//    private String password;
//}


package com.example.blogapp.dto;
public class BlogDTO {

    private String title;
    private String content;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
