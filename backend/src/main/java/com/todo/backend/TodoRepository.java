package com.todo.backend;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TodoRepository extends CrudRepository<Task, Long> {
    List<Task> findByTitle(String title);
    Task findById(long id);
}
