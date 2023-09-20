/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
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
  const isMounted = useRef(true);

  const getAllMyEventsAndSupplies = () => {
    getUserEvents(user.uid)
      .then((events) => {
        if (isMounted.current) {
          setEvents(events);
        }
      })
      .catch(() => {
      });
    getUserSupplies(user.uid)
      .then((supplies) => {
        if (isMounted.current) {
          setSupplies(supplies);
        }
      })
      .catch(() => {
      });
  };

  useEffect(() => {
    document.tiutle = 'My Events & Supplies';
    getAllMyEventsAndSupplies();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <>
      <Head>
        <title>My Events & Supplies</title>
      </Head>
      <hr />
      <div className="slogan-body">
        <h4>This space belongs to all your events and items. Add another event or item to your existing events or other events.</h4>
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
        <h1><b>My Events</b></h1>
        <hr />
      </div>
      <div className="d-flex flex-wrap events-desc-text">
        {events.map((event) => (
          <EventCard
            key={event.firebaseKey}
            eventObj={event}
            onUpdate={getAllMyEventsAndSupplies}
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
            onUpdate={getAllMyEventsAndSupplies}
          />
        ))}
      </div>
      <hr />
    </>
  );
}
