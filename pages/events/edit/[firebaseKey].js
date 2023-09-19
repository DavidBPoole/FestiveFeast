import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleEvent } from '../../../api/eventData';
import EventForm from '../../../components/forms/EventForm';

export default function EditEvent() {
  const [editEvent, setEditEvent] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleEvent(firebaseKey).then(setEditEvent);
  }, [firebaseKey]);

  return (<EventForm obj={editEvent} />);
}
