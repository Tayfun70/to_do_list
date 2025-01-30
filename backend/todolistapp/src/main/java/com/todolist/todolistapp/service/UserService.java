package com.todolist.todolistapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todolist.todolistapp.entity.User;
import com.todolist.todolistapp.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {
    @Autowired
    UserRepository userRepository;

    public String createUser(String name) {
       
        User user = new User();
        user.setName(name);
        userRepository.save(user);
        return name;
    }

}
