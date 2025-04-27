import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [], // Mảng chứa thông tin sự kiện
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    editEvent: (state, action) => {
      const { id, updatedEvent } = action.payload;
      const index = state.events.findIndex((event) => event.id === id);
      if (index !== -1) {
        state.events[index] = { ...state.events[index], ...updatedEvent };
      }
    },
    deleteEvent: (state, action) => {
      state.events = state.events.filter((event) => event.id !== action.payload);
    },
  },
});

export const { addEvent, editEvent, deleteEvent } = eventSlice.actions;
export default eventSlice.reducer;
