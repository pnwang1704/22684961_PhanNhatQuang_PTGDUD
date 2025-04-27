import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  height: '', // cm
  weight: '', // kg
  result: null,
};

const bmiSlice = createSlice({
  name: 'bmi',
  initialState,
  reducers: {
    updateInput: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    calculateResult: (state) => {
      const heightInM = parseFloat(state.height) / 100;
      const weight = parseFloat(state.weight);
      if (heightInM > 0 && weight > 0) {
        const bmi = weight / (heightInM * heightInM);
        state.result = bmi.toFixed(2);
      } else {
        state.result = null;
      }
    },
  },
});

export const { updateInput, calculateResult } = bmiSlice.actions;
export default bmiSlice.reducer;
