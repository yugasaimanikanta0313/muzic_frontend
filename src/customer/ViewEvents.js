import React, { useState, useEffect } from 'react';
import '../main/style.css';
import '../main/form.css';
import config from '../config.js';

const ViewEvents = () => {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${config.url}/viewevents`);
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchEvents();
  }, []);

  const handlePlay = (event) => {
    setCurrentEvent(event);
  };

  const handleEnded = () => {
    setCurrentEvent(null); // Reset current event when audio ends
  };

  return (
    <div className='home-container'>
      <table border={2} align="center">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Singer</th>
            <th>Audio</th>
          </tr>
        </thead>
        <tbody>
          {events.length > 0 ? (
            events.map((event, index) => (
              <tr key={index}>
                <td>{event.title}</td>
                <td>{event.category}</td>
                <td>{event.singer}</td>
                <td>
                  <div className="audio-container">
                    <audio controls={event === currentEvent} onEnded={handleEnded}>
                      <source src={`${config.url}/eventaudio/${event.file}`} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                    <button className="play-option" onClick={() => handlePlay(event)}>Play</button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" align="center">No events found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewEvents;
