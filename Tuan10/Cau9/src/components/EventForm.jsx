import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addEvent, editEvent } from '../redux/eventSlice';

const EventForm = ({ eventToEdit, setEventToEdit }) => {
  const dispatch = useDispatch();
  
  const [event, setEvent] = useState({
    id: '',
    name: '',
    date: '',
    description: '',
  });

  useEffect(() => {
    if (eventToEdit) {
      setEvent(eventToEdit);
    }
  }, [eventToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventToEdit) {
      dispatch(editEvent({ id: event.id, updatedEvent: event }));
    } else {
      dispatch(addEvent(event));
    }
    setEventToEdit(null); // Reset the form after submission
    setEvent({
      id: '',
      name: '',
      date: '',
      description: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={event.name}
        onChange={handleChange}
        placeholder="Event Name"
        required
      />
      <input
        type="date"
        name="date"
        value={event.date}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        value={event.description}
        onChange={handleChange}
        placeholder="Event Description"
        required
      />
      <button type="submit">{eventToEdit ? 'Update Event' : 'Add Event'}</button>
    </form>
  );
};

export default EventForm;
