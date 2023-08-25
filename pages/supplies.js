import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import SupplyCard from '../components/cards/SupplyCard';
import { getSupplies } from '../api/supplyData';

export default function ShowSupplies() {
  const [supplies, setSupplies] = useState([]);
  // const router = useRouter();

  const getAllSupplies = () => {
    getSupplies().then(setSupplies);
  };

  useEffect(() => {
    getAllSupplies();
  }, []);

  return (
    <>
      <Head>
        <title>Supplies</title>
      </Head>
      <div><h2>This is where the supplies will go.</h2></div>
      <Link href="/supplies/new" passHref>
        <Button>Add Supply</Button>
      </Link>
      <div className="d-flex flex-wrap events-desc-text">
        {supplies.map((supply) => (
          <SupplyCard
            key={supply.firebaseKey}
            eventObj={supply}
            onUpdate={getAllSupplies}
          />
        ))}
      </div>
      <div>
        <SupplyCard />
      </div>
    </>
  );
}
