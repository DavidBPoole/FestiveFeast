import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleSupply } from '../../../api/supplyData';
import SupplyForm from '../../../components/forms/SupplyForm';

export default function EditSupply() {
  const [editSupplyItem, setEditSupplyItem] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleSupply(firebaseKey).then(setEditSupplyItem);
  }, [firebaseKey]);

  return (<SupplyForm supplyObj={editSupplyItem} />);
}
