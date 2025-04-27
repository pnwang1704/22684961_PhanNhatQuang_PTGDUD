import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEvent } from '../redux/eventSlice';

const EventList = ({ setEventToEdit }) => {
  const events = useSelector((state) => state.events.events);
  const dispatch = useDispatch();

  const handleEdit = (event) => {
    setEventToEdit(event);
  };

  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
  };

  return (
    <div>
      <h3>Event List</h3>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h4>{event.name}</h4>
            <p>{event.date}</p>
            <p>{event.description}</p>
            <button onClick={() => handleEdit(event)}>Edit</button>
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
