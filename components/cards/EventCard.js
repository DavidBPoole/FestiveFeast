import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteEventSupplies } from '../../api/mergedData';
import { useAuth } from '../../utils/context/authContext';

export default function EventCard({ eventObj, onUpdate }) {
  const { user } = useAuth();

  if (!eventObj) {
    return null;
  }

  const {
    eventImage,
    eventName,
    eventLocation,
    firebaseKey,
    uid,
  } = eventObj;

  const deleteThisEvent = () => {
    if (window.confirm(`Delete ${eventObj.eventName} along with all of its supplies? Please first reassign any supplies you wish to save.`)) {
      deleteEventSupplies(eventObj.firebaseKey)
        .then(() => {
          onUpdate();
        })
        .catch((error) => {
          console.error('Error deleting event and supplies:', error);
        });
    }
  };

  const isOwner = user?.uid === uid;

  const viewLink = `/events/${firebaseKey}`;
  const editLink = `/events/edit/${firebaseKey}`;

  return (
    <Card className="cards" style={{ width: '18rem', margin: '5px' }}>
      <Card.Body>
        <Card.Img className="event-img" variant="top" src={eventImage} alt={eventName} style={{ height: '260px' }} />
        <Card.Title style={{ fontFamily: 'Playfair-Display', fontWeight: 'bold' }}>{eventName}</Card.Title>
        <Card.Text style={{ fontFamily: 'Playfair-Display' }}>{eventLocation}</Card.Text>
        <Link href={viewLink} passHref>
          <Button variant="primary" style={{ borderRadius: 50 }} className="m-2"><b><em>INFO</em></b></Button>
        </Link>
        {isOwner && (
          <>
            <Link href={editLink} passHref>
              <Button variant="primary" style={{ borderRadius: 50 }}><b><em>UPDATE</em></b></Button>
            </Link>
            <Button variant="danger" style={{ borderRadius: 50 }} onClick={deleteThisEvent} className="m-2">
              <b><em>REMOVE</em></b>
            </Button>
          </>
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
