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
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={supplyObj.supplyImage} alt={supplyObj.supplyName} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{supplyObj.supplyName}</Card.Title>
        <Card.Text>{supplyObj.supplyAllergens}</Card.Text>
        <Card.Text>{supplyObj.provider}</Card.Text>
        {/* DYNAMIC LINK TO VIEW THE CARD DETAILS  */}
        <Link href={`/supplies/${supplyObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE CARD DETAILS  */}
        <Link href={`/supplies/edit/${supplyObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisSupply} className="m-2">
          DELETE
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
