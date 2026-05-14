import { Routes, Route } from "react-router-dom";
import { useApp } from "./context/AppContext";
import NavBar from "./components/layout/NavBar";
import Tasks from "./pages/Tasks";
import Notes from "./pages/Notes";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import "./index.css";

export default function App() {
  const { theme } = useApp();

  return (
    <div className={theme === "dark" ? "app dark" : "app"}>
      <NavBar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
