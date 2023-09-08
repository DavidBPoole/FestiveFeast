/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { viewSupplyDetails } from '../../api/mergedData';
// import deleteThisSupply  from '../../components/cards/SupplyCard';

export default function ViewSupply() {
  const [supplyDetails, setSupplyDetails] = useState({});
  const router = useRouter();

  // GRAB FIREBASEKEY FROM URL
  const { firebaseKey } = router.query;

  // MAKE CALL TO API LAYER TO GET THE SUPPLY DATA
  useEffect(() => {
    viewSupplyDetails(firebaseKey).then(setSupplyDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img className="supply-img" src={supplyDetails.supplyImage} alt={supplyDetails.supplyName} style={{ width: '300px' }} />
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
        {/* CHANGE THIS NEXT LINE TO LINK BACK TO RECENT EVENT PAGE BASED ON FIREBASEKEY IF POSSIBLE */}
        <Link passHref href="/events/">
          <Button variant="dark" style={{ fontFamily: 'Playfair Display' }}>Back to Events &#8617;</Button>
        </Link>
        &nbsp;
        &nbsp;
        <Link passHref href="/supplies/">
          <Button variant="dark" style={{ fontFamily: 'Playfair Display' }}>Back to Supplies &#8617;</Button>
        </Link>
        {/* SEE IF WE CAN EDIT AND DELETE ITEMS FROM HERE */}
        {/* <Link href={`/supplies/edit/${supplyObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisSupply} className="m-2">
          DELETE
        </Button> */}
      </div>
    </div>
  );
}
