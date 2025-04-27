import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const Welcome = () => {
  const { user, isLoggedIn } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  if (!isLoggedIn) return null;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Chào mừng, {user.username}!</h2>
      <p>Email: {user.email}</p>
      <button onClick={() => dispatch(logout())}>Đăng xuất</button>
    </div>
  );
};

export default Welcome;
