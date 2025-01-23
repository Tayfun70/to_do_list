package com.todolist.todolistapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TodolistappApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodolistappApplication.class, args);
		System.out.println("merhaba");
		System.out.println("2+2: "+2+2);
	}

}
