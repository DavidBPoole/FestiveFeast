import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import EventCard from '../components/cards/EventCard';
import { getAllEvents } from '../api/eventData';

export default function ShowEvents() {
  const [events, setEvents] = useState([]);
  const mountedRef = useRef(true);

  const fetchAllEvents = () => {
    getAllEvents().then((data) => {
      if (!mountedRef.current) return;
      setEvents(data);
    });
  };

  useEffect(() => {
    document.title = 'Events';
    fetchAllEvents();

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return (
    <>
      <Head>
        <title>Events</title>
      </Head>
      <div className="eventButtonsContainer">
        <div className="eventsAddEventButton">
          <Link href="/events/new" passHref>
            <Button variant="secondary" className="event-supply-btns" style={{ backgroundColor: 'maroon' }}><b><em>Add Event</em></b></Button>
          </Link>
        </div>
          &nbsp;
          &nbsp;
        <div className="eventsAddSupplyButton">
          <Link href="/supplies/new" passHref>
            <Button variant="secondary" className="event-supply-btns" style={{ backgroundColor: 'maroon' }}><b><em>Add Supply</em></b></Button>
          </Link>
        </div>
      </div>
      <div className="divider">
        <h1><b>All Events</b></h1>
        <hr />
      </div>
      <div className="d-flex flex-wrap events-desc-text">
        {events.map((event) => (
          <EventCard
            key={event.firebaseKey}
            eventObj={event}
            onUpdate={fetchAllEvents}
          />
        ))}
      </div>
    </>
  );
}
