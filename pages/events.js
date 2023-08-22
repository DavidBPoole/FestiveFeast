import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import EventCard from '../components/EventCard';
import { getEvents } from '../api/eventData';

export default function ShowEvents() {
  const [events, setEvents] = useState([]);
  // const router = useRouter();

  const getAllEvents = () => {
    getEvents().then(setEvents);
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <>
      <Head>
        <title>Events</title>
      </Head>
      <div className="d-flex flex-wrap events-desc-text">
        {events.map((event) => (
          <EventCard
            key={event.firebaseKey}
            eventObj={event}
            onUpdate={getAllEvents}
          />
        ))}
        <h3>This is where the events will go.</h3>
      </div>
      <div>
        <EventCard />
      </div>
    </>
  );
}
