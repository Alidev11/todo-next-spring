package com.todo.backend;

import org.springframework.stereotype.Service;

@Service
public class TodoService {
    TodoRepository repo;

    public TodoService(TodoRepository repo) {
        this.repo = repo;
    }

    public Task saveTask(Task task){
        return repo.save(task);
    }
}
