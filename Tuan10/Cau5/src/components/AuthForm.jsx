import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';

const AuthForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Giả sử thông tin người dùng được nhập vào là hợp lệ
    const userInfo = { username, email: 'user@example.com' }; // Dữ liệu người dùng thực tế sẽ lấy từ API
    dispatch(login(userInfo));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Đăng nhập</h2>
      <div>
        <label>Tên người dùng: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nhập tên người dùng"
        />
      </div>
      <div>
        <label>Mật khẩu: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Nhập mật khẩu"
        />
      </div>
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
};

export default AuthForm;
