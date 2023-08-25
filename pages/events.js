import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import EventCard from '../components/cards/EventCard';
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
      <div><h2>This is where the events will go.</h2></div>
      <Link href="/events/new" passHref>
        <Button>Add Event</Button>
      </Link>
      <Link href="/supplies/new" passHref>
        <Button>Add Supply</Button>
      </Link>
      <div className="d-flex flex-wrap events-desc-text">
        {events.map((event) => (
          <EventCard
            key={event.firebaseKey}
            eventObj={event}
            onUpdate={getAllEvents}
          />
        ))}
      </div>
      <div>
        <EventCard />
      </div>
    </>
  );
}
