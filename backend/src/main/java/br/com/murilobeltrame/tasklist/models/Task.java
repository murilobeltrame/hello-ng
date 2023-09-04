package br.com.murilobeltrame.tasklist.models;

public class Task {
    private final String description;

    public String getDescription() {
        return description;
    }

    private final boolean done;

    public boolean isDone() {
        return done;
    }

    public Task(String description, boolean done) {
        this.description = description;
        this.done = done;
    }
}
