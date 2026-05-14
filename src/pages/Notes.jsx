import { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { fetchNotes, createNote, deleteNote } from "../services/notesApi";

export default function Notes() {
  const { theme } = useApp();
  const dark = theme === "dark";
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNotes().then(setNotes);
  }, []);

  const validate = () => {
    const e = {};
    if (title.trim().length < 1) e.title = "Гарчиг заавал бөглөх ёстой!";
    if (body.trim().length < 10) e.body = "Агуулга хамгийн багадаа 10 тэмдэгт байх ёстой!";
    return e;
  };

  const addNote = async () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setErrors({});
    setLoading(true);
    const created = await createNote({ title: title.trim(), body: body.trim() });
    setNotes([{ id: created.id || Date.now(), title: title.trim(), body: body.trim(), starred: false }, ...notes]);
    setTitle("");
    setBody("");
    setLoading(false);
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    setNotes(notes.filter((n) => n.id !== id));
  };

  const toggleStar = (id) => {
    setNotes(notes.map((n) => (n.id === id ? { ...n, starred: !n.starred } : n)));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "36px", fontWeight: 700, color: dark ? "#F0EDE8" : "#1A1915", marginBottom: "4px" }}>Notes</h1>
      <p style={{ color: "#888", fontSize: "14px", marginBottom: "2rem" }}>{notes.length} тэмдэглэл</p>

      <div style={{ background: dark ? "#1E1E1E" : "#fff", border: dark ? "1.5px solid #2A2A2A" : "1.5px solid #ECEAE3", borderRadius: "14px", padding: "18px", marginBottom: "1.5rem" }}>
        <input
          style={{ width: "100%", boxSizing: "border-box", padding: "11px 16px", border: errors.title ? "1.5px solid red" : dark ? "1.5px solid #333" : "1.5px solid #E0DDD5", borderRadius: "10px", fontSize: "15px", background: dark ? "#111" : "#fff", color: dark ? "#F0EDE8" : "#1A1915", outline: "none", fontFamily: "inherit", marginBottom: "4px" }}
          placeholder="Гарчиг..."
          value={title}
          onChange={(e) => { setTitle(e.target.value); setErrors((p) => ({ ...p, title: "" })); }}
        />
        {errors.title && <p style={{ color: "red", fontSize: "12px", marginBottom: "8px" }}>{errors.title}</p>}

        <textarea
          style={{ width: "100%", boxSizing: "border-box", padding: "10px 14px", border: errors.body ? "1.5px solid red" : dark ? "1.5px solid #333" : "1.5px solid #E0DDD5", borderRadius: "8px", fontSize: "14px", background: dark ? "#111" : "#F7F5F0", color: dark ? "#F0EDE8" : "#1A1915", outline: "none", fontFamily: "inherit", resize: "vertical", minHeight: "80px", marginBottom: "4px" }}
          placeholder="Агуулга (min 10 тэмдэгт)..."
          value={body}
          onChange={(e) => { setBody(e.target.value); setErrors((p) => ({ ...p, body: "" })); }}
        />
        {errors.body && <p style={{ color: "red", fontSize: "12px", marginBottom: "8px" }}>{errors.body}</p>}

        <div style={{ textAlign: "right" }}>
          <button
            onClick={addNote}
            disabled={loading}
            style={{ padding: "11px 22px", background: loading ? "#ccc" : "#E8621A", color: "#fff", border: "none", borderRadius: "10px", cursor: loading ? "not-allowed" : "pointer", fontSize: "15px", fontWeight: 600 }}
          >
            {loading ? "..." : "+ Нэмэх"}
          </button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px" }}>
        {notes.map((note) => (
          <div key={note.id} style={{ background: dark ? "#1E1E1E" : "#fff", border: dark ? "1.5px solid #2A2A2A" : "1.5px solid #ECEAE3", borderRadius: "14px", padding: "18px" }}>
            <p style={{ fontSize: "14px", fontWeight: 600, color: dark ? "#F0EDE8" : "#1A1915", marginBottom: "8px" }}>{note.title}</p>
            <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.55, marginBottom: "12px" }}>{note.body}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "12px", color: "#E8621A", fontWeight: 600 }}>Дэлгэрэнгүй</span>
              <div style={{ display: "flex", gap: "8px" }}>
                <button onClick={() => toggleStar(note.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "16px", color: note.starred ? "#E8621A" : "#CCC" }}>★</button>
                <button onClick={() => handleDelete(note.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "15px", color: "#CCC" }}>🗑</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
