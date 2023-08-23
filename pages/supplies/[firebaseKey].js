/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import Link from 'next/link';
// import Button from 'react-bootstrap/Button';
import { viewSupplyDetails } from '../../api/mergedData';

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
      {/* <div className="d-flex flex-column">
        <img src={memberDetails.image} alt={memberDetails.title} style={{ width: '300px' }} />
      </div> */}
      <div className="text-black ms-5 details">
        <h5>
          {supplyDetails.supply_name}
        </h5>
        <hr />
        <p>Category: {supplyDetails.supply_category}</p>
        <p>Type: {supplyDetails.supply_type}</p>
        <p>Amount: {supplyDetails.supply_amount}</p>
        {/* <Link href={`/member/edit/${memberObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisMember} className="m-2">
          DELETE
        </Button> */}
      </div>
    </div>
  );
}
