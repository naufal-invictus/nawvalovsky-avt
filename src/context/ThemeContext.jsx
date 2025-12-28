import { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Hardcode tema default untuk performa (Green/Cyber)
  const theme = 'default';

  useEffect(() => {
    const root = window.document.documentElement;
    // Reset class
    root.classList.remove('light', 'dark', 'blue', 'red');
    // Set variable CSS secara manual untuk performa tanpa state switching
    root.style.setProperty('--bg-primary', '#050505');
    root.style.setProperty('--bg-secondary', '#0a0a0a');
    root.style.setProperty('--accent', '#00ff41'); // Hacker Green
    root.style.setProperty('--accent-glow', 'rgba(0, 255, 65, 0.5)');
    root.style.setProperty('--text-primary', '#e0e0e0');
    root.style.setProperty('--text-secondary', '#858585');
    root.style.setProperty('--border', '#1a1a1a');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
