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
    if (window.confirm(`Delete ${eventObj.event_name}?`)) {
      deleteEventSupplies(eventObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{eventObj.event_name}</Card.Title>
        <Card.Text>{eventObj.event_desc}</Card.Text>
        {/* DYNAMIC VS FILE LINK TO VIEW EVENT DETAILS  */}
        <Link href={`/events/${eventObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO JOIN THE EVENT DETAILS  */}
        {/* <Link href={`/events/join/${eventObj}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link> */}
        <Button variant="warning" className="m-2">
          JOIN
        </Button>
        <Button variant="danger" onClick={deleteThisEvent} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

EventCard.propTypes = {
  // eslint-disable-next-line react/require-default-props
  eventObj: PropTypes.shape({
    event_name: PropTypes.string,
    event_desc: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
  // .isRequired,
  onUpdate: PropTypes.func.isRequired,
};
