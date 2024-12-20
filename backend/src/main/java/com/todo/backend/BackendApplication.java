package com.todo.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.logging.Logger;

@SpringBootApplication
public class BackendApplication {

    private static final Logger logger = Logger.getLogger(BackendApplication.class.getName());

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

}
