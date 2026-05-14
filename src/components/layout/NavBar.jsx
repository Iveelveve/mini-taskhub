import { NavLink } from "react-router-dom";
import { useApp } from "../../context/AppContext";

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2rem",
    height: "60px",
    background: "#1A1915",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#fff",
    fontWeight: 700,
    fontSize: "18px",
    letterSpacing: "-0.3px",
    textDecoration: "none",
  },
  logoIcon: {
    width: "32px",
    height: "32px",
    background: "#E8621A",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: "16px",
    fontWeight: 700,
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  darkToggle: {
    background: "rgba(255,255,255,0.1)",
    border: "none",
    borderRadius: "20px",
    padding: "6px 12px",
    cursor: "pointer",
    color: "#fff",
    fontSize: "18px",
    marginLeft: "8px",
  },
};

export default function NavBar() {
  const { theme, toggleTheme } = useApp();

  return (
    <nav style={styles.nav}>
      <NavLink to="/" style={styles.logo}>
        <div style={styles.logoIcon}>T</div>
        TaskHub
      </NavLink>
      <div style={styles.navLinks}>
        {[
          { path: "/tasks", label: "Tasks" },
          { path: "/notes", label: "Notes" },
          { path: "/about", label: "About" },
        ].map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            style={({ isActive }) => ({
              padding: "6px 16px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 500,
              background: isActive ? "#E8621A" : "transparent",
              color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
              transition: "all 0.15s",
              textDecoration: "none",
            })}
          >
            {label}
          </NavLink>
        ))}
        <button style={styles.darkToggle} onClick={toggleTheme}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
