import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteEventSupplies } from '../../api/mergedData';
import { createParticipant, getParticipantsByEvent } from '../../api/participantData';
import { useAuth } from '../../utils/context/authContext';
import EventJoinModal from '../forms/EventJoinModal';

export default function EventCard({ eventObj, onUpdate }) {
  const { user } = useAuth();
  const [participants, setParticipants] = useState([]);
  const [isJoined, setIsJoined] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    partySize: '',
    allergies: '',
    suppliesCommitted: '',
  });

  useEffect(() => {
    const fetchParticipants = () => {
      getParticipantsByEvent(eventObj.firebaseKey)
        .then((participantsData) => {
          setParticipants(participantsData);
        })
        .catch((error) => {
          console.error('Error fetching participants:', error);
        });
    };

    fetchParticipants();
  }, [eventObj.firebaseKey]);

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
    if (window.confirm(`Delete ${eventObj.eventName}?`)) {
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

  const handleJoinLeaveClick = () => {
    if (isOwner) {
      // Handle owner actions (e.g., edit or delete the event)
    } else if (isJoined) {
      setShowModal(true);
    } else {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleJoin = () => {
    const newParticipant = {
      eventId: eventObj.firebaseKey,
      uid: user.uid,
      participant: formData,
    };

    createParticipant(newParticipant)
      .then(() => {
        setIsJoined(true);
        setParticipants([...participants, newParticipant]);
        console.warn('Joined the event');
        setShowModal(false);
      })
      .catch((error) => {
        console.error('Error joining the event:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const viewLink = `/events/${firebaseKey}`;
  const editLink = `/events/edit/${firebaseKey}`;

  return (
    <Card className="cards" style={{ width: '18rem', margin: '5px' }}>
      <Card.Body>
        <Card.Img className="event-img" variant="top" src={eventImage} alt={eventName} style={{ height: '260px' }} />
        <Card.Title style={{ fontFamily: 'Playfair Display' }}>{eventName}</Card.Title>
        <Card.Text style={{ fontFamily: 'Playfair Display' }}>{eventLocation}</Card.Text>
        <Link href={viewLink} passHref>
          <Button variant="primary" style={{ borderRadius: 50 }} className="m-2"><b><em>INFO</em></b></Button>
        </Link>
        {!isOwner && (
          <Button
            variant={isJoined ? 'danger' : 'success'}
            style={{ borderRadius: 50, color: 'white' }}
            className="m-2"
            onClick={handleJoinLeaveClick}
          >
            {isJoined ? <b><em>LEAVE</em></b> : <b><em>JOIN</em></b>}
          </Button>
        )}
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
        <EventJoinModal
          show={showModal}
          handleClose={handleCloseModal}
          handleJoin={handleJoin}
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
        />
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
