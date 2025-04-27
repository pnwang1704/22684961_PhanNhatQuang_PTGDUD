import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, reset } from '../redux/counterSlice';
export default function Counter (){
    const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);

  return (
    <div style={{ padding: 30, textAlign: 'center' }}>
      <h1>🧮 Counter: {count}</h1>

      <div style={{ marginBottom: 10 }}>
        <button onClick={() => dispatch(decrement())}>➖ Giảm</button>
        <button onClick={() => dispatch(increment())} style={{ marginLeft: 10 }}>
          ➕ Tăng
        </button>
        <button onClick={() => dispatch(reset())} style={{ marginLeft: 10 }}>
          🔁 Reset
        </button>
      </div>

      <div style={{ marginTop: 20 }}>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          style={{ marginRight: 10 }}
        />
        <button onClick={() => dispatch(incrementByAmount(step))}>
          ➕ Tăng theo {step}
        </button>
      </div>
    </div>
  );

}

