package com.todo.backend;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoService {
    TodoRepository repo;

    public TodoService(TodoRepository repo) {
        this.repo = repo;
    }

    public ArrayList<Task> getAllTasks(){
        Iterable<Task> tasks = repo.findAll();
        ArrayList<Task> tasksList = new ArrayList<>();
        tasks.forEach(task -> tasksList.add(task));

        return tasksList;
    }

    public Task saveTask(Task task){
        return repo.save(task);
    }
}
