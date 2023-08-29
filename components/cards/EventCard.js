import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteEventSupplies } from '../../api/mergedData';
import { useAuth } from '../../utils/context/authContext';

export default function EventCard({ eventObj, onUpdate }) {
  const { user } = useAuth(); // Gets the authenticated user from authContext

  if (!eventObj) {
    return null;
  }

  const deleteThisEvent = () => {
    if (window.confirm(`Delete ${eventObj.eventName}?`)) {
      deleteEventSupplies(eventObj.firebaseKey).then(() => onUpdate());
    }
  };

  const isOwner = user?.uid === eventObj.uid; // This checks to see if the user is the creator/owner

  return (
    <Card className="cards" style={{ width: '18rem', margin: '5px' }}>
      <Card.Body>
        <Card.Img className="event-img" variant="top" src={eventObj.eventImage} alt={eventObj.eventName} style={{ height: '260px' }} />
        <Card.Title>{eventObj.eventName}</Card.Title>
        <Card.Text>{eventObj.eventLocation}</Card.Text>
        {/* DYNAMIC VS FILE LINK TO VIEW EVENT DETAILS  */}
        <Link href={`/events/${eventObj.firebaseKey}`} passHref>
          <Button variant="primary" style={{ borderRadius: 50 }} className="m-2">INFO</Button>
        </Link>
        {/* DYNAMIC LINK FOR A NON-OWNER USER TO JOIN THE EVENT */}
        <Button variant="warning" style={{ borderRadius: 50 }} className="m-2">
          JOIN (STRETCH)
        </Button>
        {/* DYNAMIC LINK TO UPDATE THE EVENT DETAILS  */}
        {isOwner && (
        <Link href={`/events/edit/${eventObj.firebaseKey}`} passHref>
          <Button variant="info" style={{ borderRadius: 50 }}>UPDATE</Button>
        </Link>
        )}
        {/* DYNAMIC LINK TO REMOVE THE EVENT */}
        {isOwner && (
        <Button variant="danger" style={{ borderRadius: 50 }} onClick={deleteThisEvent} className="m-2">
          REMOVE
        </Button>
        )}
      </Card.Body>
    </Card>
  );
}

EventCard.propTypes = {
  eventObj: PropTypes.shape({
    eventImage: PropTypes.string,
    eventName: PropTypes.string,
    eventLocation: PropTypes.string,
    eventId: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
