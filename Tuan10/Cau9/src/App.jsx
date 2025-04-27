import React, { useState } from 'react';
import EventForm from './components/EventForm';
import EventList from './components/EventList';

const App = () => {
  const [eventToEdit, setEventToEdit] = useState(null);

  return (
    <div>
      <h1>Event Management</h1>
      <EventForm eventToEdit={eventToEdit} setEventToEdit={setEventToEdit} />
      <EventList setEventToEdit={setEventToEdit} />
    </div>
  );
};

export default App;
