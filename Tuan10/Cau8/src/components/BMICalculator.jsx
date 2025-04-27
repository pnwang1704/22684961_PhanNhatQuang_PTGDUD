import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateInput, calculateResult } from '../redux/bmiSlice';

const BMICalculator = () => {
  const dispatch = useDispatch();
  const { height, weight, result } = useSelector((state) => state.bmi);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateInput({ field: name, value }));
  };

  const handleCalculate = () => {
    dispatch(calculateResult());
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Tính BMI</h2>
      <input
        type="number"
        name="height"
        value={height}
        placeholder="Chiều cao (cm)"
        onChange={handleChange}
        style={{ margin: 10 }}
      />
      <input
        type="number"
        name="weight"
        value={weight}
        placeholder="Cân nặng (kg)"
        onChange={handleChange}
        style={{ margin: 10 }}
      />
      <br />
      <button onClick={handleCalculate}>Tính BMI</button>
      {result && (
        <div style={{ marginTop: 20 }}>
          <strong>Kết quả BMI:</strong> {result}
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
