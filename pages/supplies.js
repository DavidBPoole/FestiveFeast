import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import SupplyCard from '../components/cards/SupplyCard';
import { getSupplies } from '../api/supplyData';
import { useAuth } from '../utils/context/authContext';

export default function ShowSupplies() {
  const [supplies, setSupplies] = useState([]);
  // const router = useRouter();

  // GET USER IS USING useAuth HOOK
  const { user } = useAuth();
  console.warn(user);

  const getAllSupplies = () => {
    getSupplies().then(setSupplies);
  };

  useEffect(() => {
    document.title = 'Supplies';
    getAllSupplies();
  }, []);

  return (
    <>
      <Head>
        <title>Supplies</title>
      </Head>
      {/* <div><h2>This is where the supplies will go.</h2></div> */}
      <div className="supplyButtonsContainer">
        <div className="supplyButtons">
          <Link href="/supplies/new" passHref>
            <Button variant="secondary">Add Supply</Button>
          </Link>
        </div>
      </div>
      <div className="d-flex flex-wrap events-desc-text">
        {supplies.map((supply) => (
          <SupplyCard
            key={supply.firebaseKey}
            supplyObj={supply}
            onUpdate={getAllSupplies}
          />
        ))}
      </div>
    </>
  );
}
