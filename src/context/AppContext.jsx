import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // Theme - localStorage-оос уншина
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("taskhub-theme") || "light";
  });

  // Favorites - зөвхөн олон component-д хэрэгтэй тул context-д байна
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("taskhub-favorites") || "[]");
    } catch {
      return [];
    }
  });

  // Theme HTML class болон localStorage sync
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("taskhub-theme", theme);
  }, [theme]);

  // Favorites sync
  useEffect(() => {
    localStorage.setItem("taskhub-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleFavorite = (id, type) => {
    const key = `${type}-${id}`;
    setFavorites((prev) =>
      prev.includes(key) ? prev.filter((f) => f !== key) : [...prev, key]
    );
  };

  const isFavorite = (id, type) => favorites.includes(`${type}-${id}`);

  return (
    <AppContext.Provider
      value={{ theme, toggleTheme, toggleFavorite, isFavorite, favorites }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Custom hook
export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
