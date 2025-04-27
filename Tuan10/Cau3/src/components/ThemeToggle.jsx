// src/components/ThemeToggle.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button onClick={handleToggle} style={{ margin: 20 }}>
      Chuyển sang {theme === 'light' ? '🌙 Dark' : '🌞 Light'} Mode
    </button>
  );
};

export default ThemeToggle;
