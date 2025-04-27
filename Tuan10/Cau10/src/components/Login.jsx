import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    const user = { name: username };
    dispatch(login(user));
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
