package br.com.murilobeltrame.tasklist.controllers;

import java.util.Arrays;
import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.murilobeltrame.tasklist.models.Task;

@RestController
@RequestMapping("/api/tasks")
public class TasksController {

    @GetMapping
//    @PreAuthorize("hasRole('ROLE_USER')")
    public List<Task> getTasks() {
        return Arrays.asList(new Task("hello", false), new Task("world", false));
    }
}