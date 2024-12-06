package com.todo.backend;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TodoRestController {
    TodoService todoService;

    public TodoRestController(TodoService todoService){
        this.todoService = todoService;
    }

    @GetMapping("/")
    public String getTasks() {
        List<Task> tasks = todoService.getAllTasks();
        return tasks;
    }

    @PostMapping("/newTask")
    public ResponseEntity<Task> newTask(@RequestBody Task task) {
        System.out.println("Received Todo: " + task);
        Task createdTask = todoService.saveTask(task);
        return new ResponseEntity<>(createdTask, HttpStatus.CREATED);
    }


}
