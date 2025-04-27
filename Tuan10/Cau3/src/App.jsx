// src/App.jsx
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.body.className = theme; // áp dụng class 'light' hoặc 'dark'
  }, [theme]);

  return (
    <div>
      <ThemeToggle/>
    </div>
  );
}

export default App;
