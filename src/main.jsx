import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// 1. Import ThemeProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. Bungkus App dengan ThemeProvider */}
      <App />
  </StrictMode>,
)
