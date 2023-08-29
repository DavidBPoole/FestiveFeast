/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import EventCard from '../components/cards/EventCard';
import { getUserEvents } from '../api/eventData';
import SupplyCard from '../components/cards/SupplyCard';
import { getUserSupplies } from '../api/supplyData';

export default function ShowMyItems() {
  const [events, setEvents] = useState([]);
  const [supplies, setSupplies] = useState([]);
  const { user } = useAuth();

  const getAllMyEvents = () => {
    getUserEvents(user.uid).then(setEvents);
  };

  const getAllMySupplies = () => {
    getUserSupplies(user.uid).then(setSupplies);
  };

  useEffect(() => {
    getAllMyEvents();
    getAllMySupplies();
  }, []);

  return (
    <>
      <Head>
        <title>My Events & Supplies</title>
      </Head>
      {/* <div><h2>This is where user specific events and supplies will go.</h2></div> */}
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
        <h1><b>My Events</b></h1>
        <hr />
      </div>
      <div className="d-flex flex-wrap events-desc-text">
        {events.map((event) => (
          <EventCard
            key={event.firebaseKey}
            eventObj={event}
            onUpdate={getAllMyEvents}
          />
        ))}
      </div>
      <div className="divider">
        <h1><b>My Supplies</b></h1>
      </div>
      <hr />
      <div className="d-flex flex-wrap supplies-desc-text">
        {supplies.map((supply) => (
          <SupplyCard
            key={supply.firebaseKey}
            supplyObj={supply}
            onUpdate={getAllMySupplies}
          />
        ))}
      </div>
    </>
  );
}
