import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function EventJoinModal({ show, handleClose, handleJoin }) {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    partySize: '',
    allergies: '',
    suppliesCommitted: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Validate form data and submit
    handleJoin(formData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
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
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone #</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="party-size">
            <Form.Label>Party Size</Form.Label>
            <Form.Control
              type="number"
              name="partySize"
              value={formData.partySize}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="supplies-committed">
            <Form.Label>Allergies</Form.Label>
            <Form.Control
              type="text"
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="supplies-committed">
            <Form.Label>Supplies Committed</Form.Label>
            <Form.Control
              type="text"
              name="suppliesCommitted"
              value={formData.suppliesCommitted}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Join
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

EventJoinModal.propTypes = {
  show: PropTypes.bool.isRequired, // Prop for controlling modal visibility
  handleClose: PropTypes.func.isRequired, // Function to close the modal
  handleJoin: PropTypes.func.isRequired, // Function to handle the join action
};

export default EventJoinModal;
