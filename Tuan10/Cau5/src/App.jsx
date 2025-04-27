import React from 'react';
import AuthForm from './components/AuthForm';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Ứng dụng Quản lý Đăng nhập</h1>
      <AuthForm />
      <Welcome />
    </div>
  );
};

export default App;
