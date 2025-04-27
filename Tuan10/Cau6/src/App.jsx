import React from 'react';
import UserList from './components/UserList';

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>📡 Gọi API với Redux Thunk</h1>
      <UserList />
    </div>
  );
};

export default App;
