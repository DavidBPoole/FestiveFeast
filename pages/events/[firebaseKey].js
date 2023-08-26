/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
// import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import SupplyCard from '../../components/cards/SupplyCard';
import { viewEventDetails } from '../../api/mergedData';

function ViewEvent() {
  const [eventDetails, setEventDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  const showEventDetails = () => {
    viewEventDetails(firebaseKey).then(setEventDetails);
  };

  useEffect(() => {
    showEventDetails();
  }, [firebaseKey]);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <img src={eventDetails.eventImage} alt={eventDetails.eventName} style={{ width: 'auto' }} />
        </div>
        <div className="text-black ms-5 details">
          <h5>
            {eventDetails.eventName}
          </h5>
          <hr />
          <p><b>Theme:</b> {eventDetails.eventTheme}</p>
          <p><b>Location:</b> {eventDetails.eventLocation}</p>
          <p><b>Time:</b> {eventDetails.eventTime}</p>
          <p><b>Date:</b> {eventDetails.eventDate}</p>
          <p><b>RSVP By:</b> {eventDetails.rsvpDate}</p>
          <p><b>Meal Type:</b> {eventDetails.mealType}</p>
          <p><b>Food/Items Needed:</b> {eventDetails.eventItems}</p>
          <p><b>Dietary Restrictions:</b> {eventDetails.sensitivities}</p>
          <p><b>Description:</b> {eventDetails.eventDesc}</p>
          <Link passHref href="/events/">
            <Button variant="dark">Back to Events</Button>
          </Link>
        </div>
      </div>
      <hr />
      <Link href="/supplies/new" passHref>
        <Button>Add Supply</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {eventDetails.supplies?.map((supply) => (
          <SupplyCard key={supply.firebaseKey} supplyObj={supply} onUpdate={showEventDetails} />
        ))}
      </div>
    </>
  );
}

export default ViewEvent;
