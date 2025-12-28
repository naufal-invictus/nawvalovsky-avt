import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Default fallback ke 'planet'
    return localStorage.getItem('site-theme') || 'planet';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    // Hapus atribut lama
    root.removeAttribute('data-theme');
    // Set tema baru
    root.setAttribute('data-theme', theme);
    // Simpan
    localStorage.setItem('site-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
