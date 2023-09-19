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
      <hr />
      <div className="slogan-body">
        <h4>Click the buttons below to create a new event or supply item to add to an existing event. Be sure to fill out all details pertaining to your event or event item.</h4>
      </div>
      <div className="eventButtonsContainer">
        <div className="eventsAddEventButton">
          <Link href="/events/new" passHref>
            <Button variant="secondary" className="event-supply-btns" style={{ backgroundColor: 'maroon' }}><b><em>ADD EVENT</em></b></Button>
          </Link>
        </div>
          &nbsp;
          &nbsp;
        <div className="eventsAddSupplyButton">
          <Link href="/supplies/new" passHref>
            <Button variant="secondary" className="event-supply-btns" style={{ backgroundColor: 'maroon' }}><b><em>ADD SUPPLY</em></b></Button>
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
      <hr />
    </>
  );
}
