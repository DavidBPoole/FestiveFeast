/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Button, Modal, Table, Form,
} from 'react-bootstrap';
import SupplyCard from '../../components/cards/SupplyCard';
import { viewEventDetails } from '../../api/mergedData';
import { useAuth } from '../../utils/context/authContext';
import { joinEvent, leaveEvent, getEventParticipants } from '../../api/participantData';
import { firebase } from '../../utils/client';

function ViewEvent() {
  const { user: authUser } = useAuth();
  const router = useRouter();
  const [eventDetails, setEventDetails] = useState({});
  const { firebaseKey } = router.query;
  const mountedRef = useRef(true);

  const [showModal, setShowModal] = useState(false);
  const [participantInfo, setParticipantInfo] = useState({
    name: '',
    phone: '',
    email: '',
    partySize: '',
    allergies: '',
    suppliesCommitted: '',
  });
  const [participants, setParticipants] = useState([]);
  const [isParticipant, setIsParticipant] = useState(false);

  const getCurrentUserUid = () => {
    const user = firebase.auth().currentUser;
    return user ? user.uid : null;
  };

  const loadParticipants = () => {
    if (!firebaseKey) return; // Don't proceed if firebaseKey is not available
    getEventParticipants(firebaseKey).then((data) => {
      if (!mountedRef.current) return;
      setParticipants(data);
      const currentUserUid = getCurrentUserUid();
      const userIsParticipant = data.some((participant) => participant.userUid === currentUserUid);
      setIsParticipant(userIsParticipant);
    });
  };

  const showEventDetails = () => {
    if (!firebaseKey) return; // Don't proceed if firebaseKey is not available
    viewEventDetails(firebaseKey).then((data) => {
      if (!mountedRef.current) return;
      setEventDetails(data);
    });
  };

  useEffect(() => {
    mountedRef.current = true;
    showEventDetails();
    loadParticipants();
    return () => {
      mountedRef.current = false;
    };
  }, [firebaseKey]);

  const handleJoinEvent = async () => {
    const newParticipant = {
      ...participantInfo,
      userUid: getCurrentUserUid(),
    };

    if (!firebaseKey) {
      console.error('firebaseKey is undefined or empty');
      return;
    }

    console.warn('Before joinEvent');
    console.warn('firebaseKey:', firebaseKey);
    console.warn('newParticipant:', newParticipant);

    try {
      console.warn('Before joinEvent');
      await joinEvent(firebaseKey, newParticipant);
      console.warn('Join event successful');
      loadParticipants();
      setIsParticipant(true);
      setShowModal(false);
      console.warn('After joinEvent');
    } catch (error) {
      console.error('Error joining event:', error);
      // Handle the error here if needed
    }
  };

  const handleLeaveEvent = () => {
    if (!firebaseKey) return; // Don't proceed if firebaseKey is not available
    leaveEvent(firebaseKey)
      .then(() => {
        loadParticipants();
        setIsParticipant(false);
      })
      .catch((error) => {
        console.error('Error leaving event:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setParticipantInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const renderJoinLeaveButton = () => {
    if (isParticipant) {
      return (
        <Button variant="danger" onClick={handleLeaveEvent}>
          <b><em>LEAVE EVENT</em></b>
        </Button>
      );
    }

    if (firebaseKey) {
      return (
        <Button variant="success" onClick={() => setShowModal(true)}>
          <b><em>JOIN EVENT</em></b>
        </Button>
      );
    }

    return null; // Return null if firebaseKey is undefined (loading)
  };

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <img className="event-img" src={eventDetails.eventImage} alt={eventDetails.eventName} style={{ width: 'auto' }} />
        </div>
        <div className="ms-5">
          <h2>
            {eventDetails.eventName}
          </h2>
          <hr />
          <p><b>Theme:</b> {eventDetails.eventTheme}</p>
          <p><b>Host:</b> {eventDetails.eventHost}</p>
          <p><b>Location:</b> {eventDetails.eventLocation}</p>
          <p><b>Time:</b> {eventDetails.eventTime}</p>
          <p><b>Date:</b> {eventDetails.eventDate}</p>
          <p><b>RSVP By:</b> {eventDetails.rsvpDate}</p>
          <p><b>Meal Type:</b> {eventDetails.mealType}</p>
          <p><b>Food/Items Needed:</b> {eventDetails.eventItems}</p>
          <p><b>Dietary Restrictions:</b> {eventDetails.sensitivities}</p>
          <p><b>Description:</b> {eventDetails.eventDesc}</p>
          <div className="eventDetailsButtons">
            {authUser?.uid === eventDetails.uid && (
              <>
                <Link href={`/events/edit/${firebaseKey}`} passHref>
                  <Button variant="primary" className="m-2" style={{ borderRadius: 50 }}>
                    <b><em>UPDATE</em></b>
                  </Button>
                </Link>
              </>
            )}
          </div>
          <Link passHref href="/events/">
            <Button variant="dark" style={{ fontFamily: 'Playfair Display' }}>Back to Events &#8617;</Button>
          </Link>
          &nbsp;
          &nbsp;
          <Link passHref href="/supplies/">
            <Button variant="dark" style={{ fontFamily: 'Playfair Display' }}>Back to Supplies &#8617;</Button>
          </Link>
          &nbsp;
          &nbsp;
          <Link passHref href="/myItems/">
            <Button variant="dark" style={{ fontFamily: 'Playfair Display' }}>Back to My Items &#8617;</Button>
          </Link>
        </div>
      </div>
      <hr />
      {renderJoinLeaveButton()}
      <h2>Participants</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>RSVP</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Party Size</th>
            <th>Allergies</th>
            <th>Supplies Committed</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant, index) => (
            <tr key={index}>
              <td>{participant.rsvp}</td>
              <td>{participant.name}</td>
              <td>{participant.phone}</td>
              <td>{participant.email}</td>
              <td>{participant.partySize}</td>
              <td>{participant.allergies}</td>
              <td>{participant.suppliesCommitted}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Join Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={participantInfo.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={participantInfo.phone}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={participantInfo.email}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="partySize">
              <Form.Label>Party Size</Form.Label>
              <Form.Control
                type="text"
                name="partySize"
                value={participantInfo.partySize}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="allergies">
              <Form.Label>Allergies</Form.Label>
              <Form.Control
                type="text"
                name="allergies"
                value={participantInfo.allergies}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="suppliesCommitted">
              <Form.Label>Supplies Committed</Form.Label>
              <Form.Control
                type="text"
                name="suppliesCommitted"
                value={participantInfo.suppliesCommitted}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleJoinEvent}>
            <b><em>JOIN</em></b>
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            <b><em>CANCEL</em></b>
          </Button>
        </Modal.Footer>
      </Modal>
      <Link href="/supplies/new" passHref>
        <Button variant="secondary" className="event-supply-btns" style={{ backgroundColor: 'maroon', marginBottom: 5 }}>
          <b><em>Add Supply &#43;</em></b>
        </Button>
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
