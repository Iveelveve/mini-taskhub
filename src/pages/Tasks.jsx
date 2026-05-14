import { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { fetchTasks, createTask, deleteTask } from "../services/tasksApi";

export default function Tasks() {
  const { theme } = useApp();
  const dark = theme === "dark";
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

  const doneCnt = tasks.filter((t) => t.done).length;

  const addTask = async () => {
    if (newTask.trim().length < 3) {
      setError("Task нэр хамгийн багадаа 3 тэмдэгт байх ёстой!");
      return;
    }
    setError("");
    setLoading(true);
    const created = await createTask({ title: newTask.trim() });
    const newItem = {
      id: created.id || Date.now(),
      title: newTask.trim(),
      done: false,
      createdAt: new Date().toISOString(),
    };
    setTasks([newItem, ...tasks]);
    setNewTask("");
    setLoading(false);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "36px", fontWeight: 700, color: dark ? "#F0EDE8" : "#1A1915", marginBottom: "4px" }}>Tasks</h1>
      <p style={{ color: "#888", fontSize: "14px", marginBottom: "1.5rem" }}>{doneCnt} / {tasks.length} дууссан</p>

      <div style={{ height: "4px", background: dark ? "#2A2A2A" : "#E8E5DD", borderRadius: "4px", marginBottom: "1.5rem" }}>
        <div style={{ height: "100%", width: tasks.length ? `${(doneCnt / tasks.length) * 100}%` : "0%", background: "#E8621A", borderRadius: "4px", transition: "width 0.3s" }} />
      </div>

      <div style={{ display: "flex", gap: "10px", marginBottom: "4px" }}>
        <input
          style={{ flex: 1, padding: "11px 16px", border: dark ? "1.5px solid #333" : "1.5px solid #E0DDD5", borderRadius: "10px", fontSize: "15px", background: dark ? "#1E1E1E" : "#fff", color: dark ? "#F0EDE8" : "#1A1915", outline: "none", fontFamily: "inherit" }}
          placeholder="Шинэ task нэмэх... (min 3 тэмдэгт)"
          value={newTask}
          onChange={(e) => { setNewTask(e.target.value); setError(""); }}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button
          onClick={addTask}
          disabled={loading}
          style={{ padding: "11px 22px", background: loading ? "#ccc" : "#E8621A", color: "#fff", border: "none", borderRadius: "10px", cursor: loading ? "not-allowed" : "pointer", fontSize: "15px", fontWeight: 600 }}
        >
          {loading ? "..." : "+ Нэмэх"}
        </button>
      </div>
      {error && <p style={{ color: "red", fontSize: "13px", marginBottom: "1rem" }}>{error}</p>}

      <div style={{ marginTop: "1rem" }}>
        {tasks.map((task) => (
          <div key={task.id} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 18px", background: dark ? "#1E1E1E" : "#fff", borderRadius: "12px", marginBottom: "8px", border: dark ? "1.5px solid #2A2A2A" : "1.5px solid #ECEAE3" }}>
            <div
              onClick={() => toggleTask(task.id)}
              style={{ width: "20px", height: "20px", borderRadius: "6px", border: task.done ? "none" : "2px solid #D0CDC5", background: task.done ? "#E8621A" : "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
            >
              {task.done && <span style={{ color: "#fff", fontSize: "12px", fontWeight: 700 }}>✓</span>}
            </div>
            <span style={{ flex: 1, fontSize: "15px", color: task.done ? "#B0ADA6" : (dark ? "#F0EDE8" : "#1A1915"), textDecoration: task.done ? "line-through" : "none" }}>{task.title}</span>
            <button onClick={() => handleDelete(task.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "15px", color: "#CCC" }}>🗑</button>
          </div>
        ))}
      </div>
    </div>
  );
}
