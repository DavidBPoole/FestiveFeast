/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
// import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import SupplyCard from '../../components/cards/SupplyCard';
import { viewEventDetails } from '../../api/mergedData';
import { useAuth } from '../../utils/context/authContext';

function ViewEvent() {
  const { user } = useAuth();
  const router = useRouter();
  const [eventDetails, setEventDetails] = useState({});
  const { firebaseKey } = router.query;
  const mountedRef = useRef(true);

  const showEventDetails = () => {
    viewEventDetails(firebaseKey).then((data) => {
      if (!mountedRef.current) return;
      setEventDetails(data);
    });
  };

  useEffect(() => {
    mountedRef.current = true;

    showEventDetails();

    return () => {
      mountedRef.current = false;
    };
  }, [firebaseKey]);

  const isOwner = user?.uid === eventDetails.uid; // This checks to see if the user is the creator/owner

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <img className="event-img" src={eventDetails.eventImage} alt={eventDetails.eventName} style={{ width: 'auto' }} />
        </div>
        <div className="ms-5">
          <h2>
            {eventDetails.eventName}
          </h2>
          <hr />
          <p><b>Theme:</b> {eventDetails.eventTheme}</p>
          <p><b>Host:</b> {eventDetails.eventHost}</p>
          <p><b>Location:</b> {eventDetails.eventLocation}</p>
          <p><b>Time:</b> {eventDetails.eventTime}</p>
          <p><b>Date:</b> {eventDetails.eventDate}</p>
          <p><b>RSVP By:</b> {eventDetails.rsvpDate}</p>
          <p><b>Meal Type:</b> {eventDetails.mealType}</p>
          <p><b>Food/Items Needed:</b> {eventDetails.eventItems}</p>
          <p><b>Dietary Restrictions:</b> {eventDetails.sensitivities}</p>
          <p><b>Description:</b> {eventDetails.eventDesc}</p>
          <div className="eventDetailsButtons">
            {isOwner && (
              <>
                <Link href={`/events/edit/${firebaseKey}`} passHref>
                  <Button variant="primary" className="m-2" style={{ borderRadius: 50 }}>
                    <b><em>UPDATE</em></b>
                  </Button>
                </Link>
              </>
            )}
          </div>
          <Link passHref href="/events/">
            <Button variant="dark" style={{ fontFamily: 'Playfair Display' }}>Back to Events &#8617;</Button>
          </Link>
          &nbsp;
          &nbsp;
          <Link passHref href="/supplies/">
            <Button variant="dark" style={{ fontFamily: 'Playfair Display' }}>Back to Supplies &#8617;</Button>
          </Link>
          &nbsp;
          &nbsp;
          <Link passHref href="/myItems/">
            <Button variant="dark" style={{ fontFamily: 'Playfair Display' }}>Back to My Items &#8617;</Button>
          </Link>
          <hr />
        </div>
      </div>
      {/* <hr /> */}
      <Link href="/supplies/new" passHref>
        <Button variant="secondary" className="event-supply-btns" style={{ backgroundColor: 'maroon', marginBottom: 5 }}><b><em>Add Supply &#43;</em></b></Button>
      </Link>
      {/* &nbsp;
      <Button variant="warning">Categories Filter Dropdown (STRETCH)</Button> */}
      <div className="d-flex flex-wrap">
        {eventDetails.supplies?.map((supply) => (
          <SupplyCard key={supply.firebaseKey} supplyObj={supply} onUpdate={showEventDetails} />
        ))}
      </div>
    </>
  );
}

export default ViewEvent;
