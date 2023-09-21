/* eslint-disable no-const-assign */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getAllEvents } from '../../api/eventData';
import { createSupply, updateSupply } from '../../api/supplyData';

const initialState = {
  supplyImage: '',
  supplyName: '',
  supplyCategory: '',
  supplyAllergens: '',
  supplyAmount: '',
  supplyDesc: '',
  provider: '',
  eventId: '',
  firebaseKey: '',
  selectedAllergens: [''],
};

const categories = [
  'Appetizer',
  'Entree',
  'Soup',
  'Salad',
  'Dessert',
  'Beverage',
  'Main Course',
  'Side',
  'Condiment',
  'Equipment',
  'Fixtures',
  'Entertainment',
  'Utility'];

function SupplyForm({ supplyObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [events, setEvents] = useState([]);
  const router = useRouter();
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const isMounted = true;

    getAllEvents(user.uid).then((events) => {
      if (isMounted) {
        setEvents(events);
      }
    });

    if (supplyObj.firebaseKey) {
      setFormInput(supplyObj);
      setSelectedCategory(supplyObj.supplyCategory);
    }

    return () => {
      isMounted = false;
    };
  }, [supplyObj, user.uid]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleChange = (e) => {
    const {
      name, value, type, checked,
    } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setFormInput((prevState) => ({
          ...prevState,
          selectedAllergens: [...prevState.selectedAllergens, value],
        }));
      } else {
        setFormInput((prevState) => ({
          ...prevState,
          selectedAllergens: prevState.selectedAllergens.filter((allergen) => allergen !== value),
        }));
      }
    } else {
      setFormInput((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formInput,
      uid: user.uid,
      supplyAllergens: formInput.selectedAllergens.join(' '),
      supplyCategory: selectedCategory,
    };

    if (supplyObj.firebaseKey) {
      updateSupply(payload).then(() => {
        router.push(`/supplies/${supplyObj.firebaseKey}`);
      });
    } else {
      createSupply(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateSupply(patchPayload).then(() => {
          router.push('/events');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="form-text">{supplyObj.firebaseKey ? 'Update' : 'Create'} Supply Item </h2>

      <div style={{ fontFamily: 'Playfair-Display' }}>
        <FloatingLabel controlId="floatingSelect" label="Event">
          <Form.Select
            aria-label="event"
            name="eventId"
            onChange={handleChange}
            className="mb-3"
            value={formInput.eventId}
            required
          >
            <option value="">Select an Event</option>
            {
            events.map((event) => (
              <option
                key={event.firebaseKey}
                value={event.firebaseKey}
              >
                {event.eventName}
              </option>
            ))
          }
          </Form.Select>
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput2" label="Category" className="mb-3">
          <Form.Select
            aria-label="Supply/Food Category"
            name="supplyCategory"
            onChange={handleCategoryChange}
            value={selectedCategory}
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Form.Select>
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput1" label="Item Name" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter supply/food name"
            name="supplyName"
            value={formInput.supplyName}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput1" label="Image URL" className="mb-3">
          <Form.Control
            type="url"
            placeholder="Supply URL Image"
            name="supplyImage"
            value={formInput.supplyImage}
            onChange={handleChange}
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput3" label="Amount (#. lbs, oz)" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter amount of supply/food"
            name="supplyAmount"
            value={formInput.supplyAmount}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        <p>Allergens: </p>
        <FloatingLabel controlId="floatingInput2" label="" className="mb-3">
          <div>
            <label>
              <input
                type="checkbox"
                name="allergen"
                value="N/A"
                checked={formInput.selectedAllergens.includes('N/A')}
                onChange={handleChange}
              /> N/A
            </label>
          &nbsp;
          &nbsp;
            <label>
              <input
                type="checkbox"
                name="allergen"
                value="None"
                checked={formInput.selectedAllergens.includes('None')}
                onChange={handleChange}
              /> None
            </label>
          &nbsp;
          &nbsp;
            <label>
              <input
                type="checkbox"
                name="allergen"
                value="Dairy"
                checked={formInput.selectedAllergens.includes('Dairy')}
                onChange={handleChange}
              /> Dairy
            </label>
          &nbsp;
          &nbsp;
            <label>
              <input
                type="checkbox"
                name="allergen"
                value="Egg"
                checked={formInput.selectedAllergens.includes('Egg')}
                onChange={handleChange}
              /> Egg
            </label>
          &nbsp;
          &nbsp;
            <label>
              <input
                type="checkbox"
                name="allergen"
                value="Fish"
                checked={formInput.selectedAllergens.includes('Fish')}
                onChange={handleChange}
              /> Fish
            </label>
          &nbsp;
          &nbsp;
            <label>
              <input
                type="checkbox"
                name="allergen"
                value="Shellfish"
                checked={formInput.selectedAllergens.includes('Shellfish')}
                onChange={handleChange}
              /> Shellfish
            </label>
          &nbsp;
          &nbsp;
            <label>
              <input
                type="checkbox"
                name="allergen"
                value="Nuts"
                checked={formInput.selectedAllergens.includes('Nuts')}
                onChange={handleChange}
              /> Nuts
            </label>
          &nbsp;
          &nbsp;
            <label>
              <input
                type="checkbox"
                name="allergen"
                value="Wheat/Gluten"
                checked={formInput.selectedAllergens.includes('Wheat/Gluten')}
                onChange={handleChange}
              /> Wheat/Gluten
            </label>
          &nbsp;
          &nbsp;
            <label>
              <input
                type="checkbox"
                name="allergen"
                value="Soy"
                checked={formInput.selectedAllergens.includes('Soy')}
                onChange={handleChange}
              /> Soy
            </label>
          </div>
        </FloatingLabel>

        <FloatingLabel controlId="floatingTextarea" label="Description" className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="Description"
            style={{ height: '100px' }}
            name="supplyDesc"
            value={formInput.supplyDesc}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput3" label="Supplier's Name" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Name of Supplier"
            name="provider"
            value={formInput.provider}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
      </div>

      <div className="formButton">
        <Button type="submit" variant="primary">
          {supplyObj.firebaseKey ? <b><em>UPDATE</em></b> : <b><em>CREATE</em></b>} <b><em>ITEM</em></b>
        </Button>
      </div>
    </Form>
  );
}

SupplyForm.propTypes = {
  supplyObj: PropTypes.shape({
    supplyImage: PropTypes.string,
    supplyName: PropTypes.string,
    supplyCategory: PropTypes.string,
    supplyAllergens: PropTypes.string,
    supplyAmount: PropTypes.string,
    provider: PropTypes.string,
    eventId: PropTypes.string,
    firebaseKey: PropTypes.string,
    selectedAllergens: PropTypes.array,
  }),
};

SupplyForm.defaultProps = {
  supplyObj: initialState,
};

export default SupplyForm;
