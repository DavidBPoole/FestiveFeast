/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteEventSupplies } from '../../api/mergedData';

export default function EventCard({ eventObj, onUpdate }) {
  if (!eventObj) {
    return null;
  }

  const deleteThisEvent = () => {
    if (window.confirm(`Delete ${eventObj.eventName}?`)) {
      deleteEventSupplies(eventObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card className="cards" style={{ width: '18rem', margin: '5px' }}>
      <Card.Body>
        <Card.Img className="event-img" variant="top" src={eventObj.eventImage} alt={eventObj.eventName} style={{ height: '200px' }} />
        <Card.Title>{eventObj.eventName}</Card.Title>
        <Card.Text>{eventObj.eventLocation}</Card.Text>
        {/* DYNAMIC VS FILE LINK TO VIEW EVENT DETAILS  */}
        <Link href={`/events/${eventObj.firebaseKey}`} passHref>
          <Button variant="primary" style={{ borderRadius: 50 }} className="m-2">INFO</Button>
        </Link>
        {/* DYNAMIC LINK TO JOIN THE EVENT DETAILS  */}
        <Link href={`/events/edit/${eventObj.firebaseKey}`} passHref>
          <Button variant="info" style={{ borderRadius: 50 }}>UPDATE</Button>
        </Link>
        <Button variant="warning" style={{ borderRadius: 50 }} className="m-2">
          JOIN (STRETCH)
        </Button>
        <Button variant="danger" style={{ borderRadius: 50 }} onClick={deleteThisEvent} className="m-2">
          REMOVE
        </Button>
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
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
