import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleSupply } from '../../../api/supplyData';
import SupplyForm from '../../../components/forms/SupplyForm';

export default function EditSupply() {
  const [editSupplyItem, setEditSupplyItem] = useState({});
  const router = useRouter();

  // GRAB FIREBASEKEY
  const { firebaseKey } = router.query;

  // MAKE CALL TO API TO GET SUPPLY DATA
  useEffect(() => {
    getSingleSupply(firebaseKey).then(setEditSupplyItem);
  }, [firebaseKey]);

  // PASS OBJECT TO FORM
  return (<SupplyForm obj={editSupplyItem} />);
}
