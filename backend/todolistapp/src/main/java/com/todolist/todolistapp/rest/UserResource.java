package com.todolist.todolistapp.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.todolist.todolistapp.service.UserService;
import org.springframework.web.bind.annotation.PostMapping;



@RestController
@RequestMapping("/api")
public class UserResource {


    @Autowired
    private UserService userService;

    @PostMapping("/user")
    public String createUser(@RequestParam String name) {

        return userService.createUser(name);
    }
    
}
