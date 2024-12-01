package com.todo.backend;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
public class TodoRestController {
    TodoService todoService;

    public TodoRestController(TodoService todoService){
        this.todoService = todoService;
    }

    @GetMapping("/")
    public String hello() {
        return "Hello World";
    }

    @PostMapping("/newTask")
    public ResponseEntity<Task> newTask(@RequestBody Task task) {
        System.out.println("Received Todo: " + task);
        Task createdTask = todoService.saveTask(task);
        return new ResponseEntity<>(createdTask, HttpStatus.CREATED);
    }


}
