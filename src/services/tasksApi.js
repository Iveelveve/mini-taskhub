import apiClient from "./apiClient";

// JSONPlaceholder-аас эхний 10 task авна
export const fetchTasks = () =>
  apiClient.get("/todos?_limit=10").then((todos) =>
    todos.map((t) => ({
      id: t.id,
      title: t.title,
      done: t.completed,
      createdAt: new Date(Date.now() - Math.random() * 1e10).toISOString(),
    }))
  );

// Шинэ task үүсгэх (JSONPlaceholder fake POST)
export const createTask = (taskData) =>
  apiClient.post("/todos", {
    title: taskData.title,
    completed: false,
    userId: 1,
  });

// Task устгах (JSONPlaceholder fake DELETE)
export const deleteTask = (id) => apiClient.delete(`/todos/${id}`);
