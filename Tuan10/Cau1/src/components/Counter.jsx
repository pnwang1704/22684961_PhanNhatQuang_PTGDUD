import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h2>🧮 Counter App (Redux Toolkit)</h2>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Tăng</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: 10 }}>
        Giảm
      </button>
    </div>
  );
};

export default Counter;
