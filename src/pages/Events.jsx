import React from 'react';
import './Events.css';
import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpg';
import event4 from '../assets/event4.jpg';

const events = [
  { name: 'Science Fair 2024', image: event1, description: 'A showcase of the latest scientific discoveries and projects by students.' },
  { name: 'Art Exhibition', image: event2, description: 'A display of the finest art from upcoming artists.' },
  { name: 'Sports Day', image: event3, description: 'An exciting day of sports activities and competitions.' },
  { name: 'Music Fest', image: event4, description: 'A weekend filled with music from top bands and artists.' },
];

const Events = () => {
  return (
    <div>
      <h1>Events</h1>
      <div className="events-container">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.name} />
            <h2>{event.name}</h2>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;