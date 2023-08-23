/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
// import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import SupplyCard from '../../components/cards/SupplyCard';
import { viewEventDetails } from '../../api/mergedData';

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
          <img src={eventDetails.image} alt={eventDetails.name} style={{ width: '200px' }} />
        </div> */}
        <div className="text-black ms-5 details">
          <h5>
            {eventDetails.event_name}
          </h5>
          <hr />
          <p>Date: {eventDetails.event_date}</p>
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
