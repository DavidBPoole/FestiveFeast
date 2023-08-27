import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSupply } from '../../api/supplyData';

export default function SupplyCard({ supplyObj, onUpdate }) {
  if (!supplyObj) {
    return null;
  }

  const deleteThisSupply = () => {
    if (window.confirm(`Delete ${supplyObj.supplyName}?`)) {
      deleteSupply(supplyObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card className="cards" style={{ width: '18rem', margin: '5px' }}>
      <Card.Body>
        <Card.Img className="supply-img" variant="top" src={supplyObj.supplyImage} alt={supplyObj.supplyName} style={{ height: '250px' }} />
        <Card.Title>{supplyObj.supplyName}</Card.Title>
        <Card.Text><b>Allergens: </b>{supplyObj.supplyAllergens}</Card.Text>
        <Card.Text><b>Provider: </b>{supplyObj.provider}</Card.Text>
        {/* DYNAMIC LINK TO VIEW THE CARD DETAILS  */}
        <Link href={`/supplies/${supplyObj.firebaseKey}`} passHref>
          <Button variant="primary" style={{ borderRadius: 50 }} className="m-2">INFO</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE CARD DETAILS  */}
        <Link href={`/supplies/edit/${supplyObj.firebaseKey}`} passHref>
          <Button variant="info" style={{ borderRadius: 50 }}>UPDATE</Button>
        </Link>
        <Button variant="danger" style={{ borderRadius: 50 }} onClick={deleteThisSupply} className="m-2">
          REMOVE
        </Button>
      </Card.Body>
    </Card>
  );
}

SupplyCard.propTypes = {
  supplyObj: PropTypes.shape({
    supplyImage: PropTypes.string,
    supplyName: PropTypes.string,
    supplyAllergens: PropTypes.string,
    provider: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
