import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/usersSlice';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === 'loading') return <p>Đang tải dữ liệu...</p>;
  if (status === 'failed') return <p>Lỗi: {error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Danh sách người dùng</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
