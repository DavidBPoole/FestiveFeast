import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createEvent, updateEvent } from '../../api/eventData';

const initialState = {
  eventImage: '',
  eventName: '',
  eventTheme: '',
  eventTime: '',
  eventDate: '',
  rsvpDate: '',
  eventLocation: '',
  mealType: '',
  eventItems: '',
  sensitivities: '',
  eventDesc: '',
  eventHost: '',
  firebaseKey: '',
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
      <h2 className="form-text">{obj.firebaseKey ? 'Update' : 'Create'} Event </h2>

      <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter event name"
          name="eventName"
          value={formInput.eventName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Theme" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter event theme"
          name="eventTheme"
          value={formInput.eventTheme}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="Event Image URL" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Event URL Image"
          name="eventImage"
          value={formInput.eventImage}
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Location" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter event location"
          name="eventLocation"
          value={formInput.eventLocation}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Time" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter event time"
          name="eventTime"
          value={formInput.eventTime}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Date" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter event date"
          name="eventDate"
          value={formInput.eventDate}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="RSVP By Date" className="mb-3">
        <Form.Control
          type="text"
          placeholder="RSVP by date"
          name="rsvpDate"
          value={formInput.rsvpDate}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Meal Type" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Meal type"
          name="mealType"
          value={formInput.mealType}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Food or Items Needed" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Items required"
          name="eventItems"
          value={formInput.eventItems}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Food Sensitivities" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Food sensitivities"
          name="sensitivities"
          value={formInput.sensitivities}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Event Description" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Event description"
          name="eventDesc"
          value={formInput.eventDesc}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Event Host" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Event host"
          name="eventHost"
          value={formInput.eventHost}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      {/* SUBMIT BUTTON  */}
      <div className="formButton">
        <Button type="submit">{obj.firebaseKey ? <b><em>UPDATE</em></b> : <b><em>CREATE</em></b>} <b><em>EVENT</em></b></Button>
      </div>
    </Form>
  );
}

EventForm.propTypes = {
  obj: PropTypes.shape({
    eventImage: PropTypes.string,
    eventName: PropTypes.string,
    eventTheme: PropTypes.string,
    eventTime: PropTypes.string,
    eventDate: PropTypes.string,
    rsvpDate: PropTypes.string,
    eventLocation: PropTypes.string,
    mealType: PropTypes.string,
    eventItems: PropTypes.string,
    sensitivities: PropTypes.string,
    eventDesc: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

EventForm.defaultProps = {
  obj: initialState,
};

export default EventForm;
