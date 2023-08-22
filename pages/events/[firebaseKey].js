/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
// import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
// import BookCard from '../../components/BookCard';
// import AuthorCard from '../../components/AuthorCard';
import viewEventDetails from '../../api/mergedData';
import SupplyCard from '../../components/SupplyCard';

export default function ViewEvent() {
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
        {/* <div className="d-flex flex-column">
          <img src={authorDetails.image} alt={authorDetails.first_name} style={{ width: '200px' }} />
        </div> */}
        <div className="text-white ms-5 details">
          <h5>
            {eventDetails.event_name}
            {eventDetails.event_desc}
            {eventDetails.event_date}
            {eventDetails.event_size}
            {eventDetails.event_time}
            {eventDetails.food_items}
            {eventDetails.food_sensitivities}
            {eventDetails.food_type}
            {eventDetails.location}
            {eventDetails.rsvp_date}
            {eventDetails.theme}
          </h5>
          <hr />
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
