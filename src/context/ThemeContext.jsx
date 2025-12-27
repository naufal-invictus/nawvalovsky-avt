import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Cek local storage atau default ke 'arch'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('site-theme') || 'arch';
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Hapus atribut theme lama jika ada
    root.removeAttribute('data-theme');

    // Jika bukan default (arch), set atribut data-theme
    if (theme !== 'arch') {
      root.setAttribute('data-theme', theme);
    }

    // Simpan ke local storage
    localStorage.setItem('site-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
