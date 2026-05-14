import apiClient from "./apiClient";

// JSONPlaceholder-аас эхний 8 post авна
export const fetchNotes = () =>
  apiClient.get("/posts?_limit=8").then((posts) =>
    posts.map((p) => ({
      id: p.id,
      title: p.title,
      body: p.body.slice(0, 120),
      createdAt: new Date(Date.now() - Math.random() * 1e10).toISOString(),
    }))
  );

// Шинэ note үүсгэх
export const createNote = (noteData) =>
  apiClient.post("/posts", {
    title: noteData.title,
    body: noteData.body,
    userId: 1,
  });

// Note устгах
export const deleteNote = (id) => apiClient.delete(`/posts/${id}`);
