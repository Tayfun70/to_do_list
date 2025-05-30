package com.todolist.todolistapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.todolist.todolistapp.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

}
