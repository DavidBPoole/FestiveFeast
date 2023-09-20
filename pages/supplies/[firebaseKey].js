/* eslint-disable react/require-default-props */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { viewSupplyDetails, viewEventDetails } from '../../api/mergedData';
import { deleteSupply } from '../../api/supplyData';
import { useAuth } from '../../utils/context/authContext';

export default function ViewSupply() {
  const { user } = useAuth();
  const [supplyDetails, setSupplyDetails] = useState({});
  const [associatedEvent, setAssociatedEvent] = useState(null);
  const router = useRouter();

  const { firebaseKey } = router.query;

  const handleDelete = () => {
    if (window.confirm(`Delete ${supplyDetails.supplyName}?`)) {
      deleteSupply(firebaseKey).then(() => {
        router.push('/supplies');
      });
    }
  };

  useEffect(() => {
    viewSupplyDetails(firebaseKey).then((supplyData) => {
      setSupplyDetails(supplyData);
      if (supplyData.eventId) {
        viewEventDetails(supplyData.eventId).then(setAssociatedEvent);
      }
    });
  }, [firebaseKey]);

  const isOwner = user?.uid === supplyDetails.uid;

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img className="supply-img" src={supplyDetails.supplyImage} alt={supplyDetails.supplyName} style={{ maxWidth: 325, height: 'auto' }} />
      </div>
      <div className="ms-5">
        <h2>
          {supplyDetails.supplyName}
        </h2>
        <hr />
        <p><b>Category:</b> {supplyDetails.supplyCategory}</p>
        <p><b>Allergens:</b> {supplyDetails.supplyAllergens}</p>
        <p><b>Amount:</b> {supplyDetails.supplyAmount}</p>
        <p><b>Description:</b> {supplyDetails.supplyDesc}</p>
        <p><b>Supplier:</b> {supplyDetails.provider}</p>

        {associatedEvent && (
        <div>
          <p><b>Associated Event:</b> {associatedEvent.eventName}</p>
        </div>
        )}
        <div className="supplyDetailsButtons">
          {isOwner && (
            <>
              <Link href={`/supplies/edit/${firebaseKey}`} passHref>
                <Button variant="primary" style={{ borderRadius: 50 }}>
                  <b><em>UPDATE</em></b>
                </Button>
              </Link>
              <Button variant="danger" onClick={handleDelete} className="m-2" style={{ borderRadius: 50 }}>
                <b><em>REMOVE</em></b>
              </Button>
            </>
          )}
        </div>
        <Link passHref href="/events/">
          <Button variant="dark" style={{ fontFamily: 'Playfair Display' }}>Back to Events &#8617;</Button>
        </Link>
        &nbsp;
        &nbsp;
        <Link passHref href="/supplies/">
          <Button variant="dark" style={{ fontFamily: 'Playfair Display' }}>Back to Supplies &#8617;</Button>
        </Link>
        &nbsp;
        &nbsp;
        <Link passHref href="/myItems/">
          <Button variant="dark" style={{ fontFamily: 'Playfair Display' }}>Back to My Items &#8617;</Button>
        </Link>
        <hr />
      </div>
    </div>
  );
}
