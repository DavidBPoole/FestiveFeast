/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
// import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
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
          <p>Theme: {eventDetails.eventTheme}</p>
          <p>Location: {eventDetails.eventLocation}</p>
          <p>Time: {eventDetails.eventTime}</p>
          <p>Date: {eventDetails.eventDate}</p>
          <p>RSVP By: {eventDetails.rsvpDate}</p>
          <p>Meal Type: {eventDetails.mealType}</p>
          <p>Food/Items Needed: {eventDetails.eventItems}</p>
          <p>Dietary Restrictions: {eventDetails.sensitivities}</p>
          <p>Description: {eventDetails.eventDesc}</p>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-wrap">
        {eventDetails.supplies?.map((supply) => (
          <SupplyCard key={supply.firebaseKey} supplyObj={supply} onUpdate={showEventDetails} />
        ))}
      </div>
    </>
  );
}

export default ViewEvent;
