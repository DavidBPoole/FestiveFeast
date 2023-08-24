import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createEvent, updateEvent } from '../../api/eventData';

const initialState = {
  event_name: '',
  event_theme: '',
  event_location: '',
  event_date: '',
  event_time: '',
  event_desc: '',
  food_sensitivities: '',
};

function EventForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateEvent(formInput).then(() => router.push(`/events/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      console.warn(payload);
      createEvent(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateEvent(patchPayload).then(() => {
          router.push('/events');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-black mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Event </h2>
      <FloatingLabel controlId="floatingInput1" label="Event" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter event name"
          name="event_name"
          value={formInput.event_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Event Theme" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter event theme"
          name="event_theme"
          value={formInput.event_theme}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Event Location" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter event location"
          name="event_location"
          value={formInput.event_location}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Event Date" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter event date"
          name="event_date"
          value={formInput.event_date}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Event Time" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter event time"
          name="event_time"
          value={formInput.event_time}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Event Description" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter event description"
          name="event_desc"
          value={formInput.event_desc}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Food Sensitivities" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter food sensititivies or put none"
          name="food_sensitivities"
          value={formInput.food_sensitivities}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Event</Button>
    </Form>
  );
}

EventForm.propTypes = {
  obj: PropTypes.shape({
    event_name: PropTypes.string,
    event_theme: PropTypes.string,
    event_desc: PropTypes.string,
    event_date: PropTypes.string,
    event_time: PropTypes.string,
    event_location: PropTypes.string,
    event_size: PropTypes.string,
    age_limit: PropTypes.string,
    food_sensitivities: PropTypes.string,
    food_type: PropTypes.string,
    rsvp_date: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

EventForm.defaultProps = {
  obj: initialState,
};

export default EventForm;
