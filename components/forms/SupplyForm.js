import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getEvents } from '../../api/eventData';
import { createSupply, updateSupply } from '../../api/supplyData';

const initialState = {
  supply_name: '',
  supply_category: '',
  supply_type: '',
  supply_amount: '',
  event_id: '',
  firebaseKey: '',
};
function SupplyForm({ supplyObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [events, setEvents] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getEvents(user.uid).then(setEvents);

    if (supplyObj.firebaseKey) setFormInput(supplyObj);
  }, [supplyObj, user.uid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (supplyObj.firebaseKey) {
      updateSupply(formInput).then(() => router.push(`/supplies/${supplyObj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createSupply(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateSupply(patchPayload).then(() => {
          router.push('/');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-black mt-5">{supplyObj.firebaseKey ? 'Update' : 'Create'} Supply Item </h2>

      {/* NAME INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Supply Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter supply name"
          name="name"
          value={formInput.supply_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* CATEGORY INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Supply Category" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter supply category"
          name="text"
          value={formInput.supply_category}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUPPLY TYPE INPUT */}
      <FloatingLabel controlId="floatingInput2" label="Supply Type" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter supply type"
          name="type"
          value={formInput.supply_type}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUPPLY AMOUNT INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Supply Amount" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter amount"
          name="amount"
          value={formInput.supply_amount}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* EVENT SELECT  */}
      <FloatingLabel controlId="floatingSelect" label="Event">
        <Form.Select
          aria-label="event"
          name="event_id"
          onChange={handleChange}
          className="mb-3"
          value={formInput.event_id}
          required
        >
          <option value="">Select an Event</option>
          {
            events.map((event) => (
              <option
                key={event.firebaseKey}
                value={event.firebaseKey}
              >
                {event.name}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>

      {/* SUPPLY DESCRIPTION TEXTAREA  */}
      <FloatingLabel controlId="floatingTextarea" label="Supply Description" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Description"
          style={{ height: '100px' }}
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{supplyObj.firebaseKey ? 'Update' : 'Create'} Supply</Button>
    </Form>
  );
}

SupplyForm.propTypes = {
  supplyObj: PropTypes.shape({
    supply_name: PropTypes.string,
    supply_category: PropTypes.string,
    supply_type: PropTypes.string,
    supply_amount: PropTypes.string,
    event_id: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

SupplyForm.defaultProps = {
  supplyObj: initialState,
};

export default SupplyForm;
