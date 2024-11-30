package com.todo.backend;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoRestController {


    @GetMapping("/")
    public String hello() {
        return "Hello Wo";
    }
}
