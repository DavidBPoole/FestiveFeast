import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSupply } from '../../api/supplyData';
import { useAuth } from '../../utils/context/authContext';

export default function SupplyCard({ supplyObj, onUpdate }) {
  const { user } = useAuth();

  if (!supplyObj) {
    return null;
  }

  const {
    supplyImage,
    supplyName,
    supplyAllergens,
    provider,
    firebaseKey,
    uid,
  } = supplyObj;

  const deleteThisSupply = () => {
    if (window.confirm(`Delete ${supplyObj.supplyName}?`)) {
      deleteSupply(supplyObj.firebaseKey).then(() => onUpdate());
    }
  };

  const isOwner = user?.uid === uid;

  const viewLink = `/supplies/${firebaseKey}`;
  const editLink = `/supplies/edit/${firebaseKey}`;

  return (
    <Card className="cards" style={{ width: '18rem', margin: '5px' }}>
      <Card.Body>
        <Card.Img className="supply-img" variant="top" src={supplyImage} alt={supplyName} style={{ height: '250px' }} />
        <Card.Title style={{ fontFamily: 'Playfair Display' }}>{supplyName}</Card.Title>
        <Card.Text><b>Allergens: </b>{supplyAllergens}</Card.Text>
        <Card.Text><b>Supplier: </b>{provider}</Card.Text>
        <Link href={viewLink} passHref>
          <Button variant="primary" style={{ borderRadius: 50 }} className="m-2"><b><em>INFO</em></b></Button>
        </Link>
        {isOwner && (
          <>
            <Link href={editLink} passHref>
              <Button variant="primary" style={{ borderRadius: 50 }}>
                <b><em>UPDATE</em></b>
              </Button>
            </Link>
            {/* DYNAMIC LINK TO REMOVE THE SUPPLY ITEM  */}
            <Button variant="danger" style={{ borderRadius: 50 }} onClick={deleteThisSupply} className="m-2">
              <b><em>REMOVE</em></b>
            </Button>
          </>
        )}
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
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
