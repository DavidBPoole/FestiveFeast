import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleEvent } from '../../../api/eventData';
import EventForm from '../../../components/forms/EventForm';

export default function EditEvent() {
  const [editEvent, setEditEvent] = useState({});
  const router = useRouter();

  // GRAB FIREBASEKEY
  const { firebaseKey } = router.query;

  // MAKE CALL TO API TO GRAB TEAM DATA
  useEffect(() => {
    getSingleEvent(firebaseKey).then(setEditEvent);
  }, [firebaseKey]);

  // PASS OBJECT TO FORM
  return (<EventForm obj={editEvent} />);
}
