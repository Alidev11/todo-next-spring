package com.todo.backend;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/tasks")
public class TodoRestController {
    TodoService todoService;

    public TodoRestController(TodoService todoService){
        this.todoService = todoService;
    }

    @GetMapping("/")
    public ArrayList<Task> getTasks() {
        ArrayList<Task> tasks = todoService.getAllTasks();
        return tasks;
    }

    @PostMapping("/newTask")
    public ResponseEntity<Task> newTask(@RequestBody Task task) {
        System.out.println("Received Todo: " + task);
        Task createdTask = todoService.saveTask(task);
        return new ResponseEntity<>(createdTask, HttpStatus.CREATED);
    }


}
