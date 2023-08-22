/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

export default function EventCard({ eventObj }) {
  if (!eventObj) {
    return null;
  }

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{eventObj.event_name}</Card.Title>
        <Card.Text>{eventObj.event_desc}</Card.Text>
        {/* DYNAMIC LINK TO VIEW THE EVENT DETAILS  */}
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
      </Card.Body>
    </Card>
  );
}

EventCard.propTypes = {
  // eslint-disable-next-line react/require-default-props
  eventObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    event_name: PropTypes.string,
    event_desc: PropTypes.string,
  }),
  // .isRequired,
  // onUpdate: PropTypes.func.isRequired,
};
