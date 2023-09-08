import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import SupplyCard from '../components/cards/SupplyCard';
import { getAllSupplies } from '../api/supplyData';

export default function ShowSupplies() {
  const [supplies, setSupplies] = useState([]);

  const fetchAllSupplies = () => getAllSupplies().then((data) => {
    setSupplies(data);
  });

  useEffect(() => {
    document.title = 'Supplies';

    let isMounted = true;

    if (isMounted) {
      fetchAllSupplies();
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <Head>
        <title>Supplies</title>
      </Head>
      <hr />
      <div className="slogan-body">
        <h4>Click the button below to create a new supply item to add to an existing event. Be sure to fill out all details.</h4>
      </div>
      <div className="supplyButtonsContainer">
        <div className="supplyButtons">
          <Link href="/supplies/new" passHref>
            <Button variant="secondary" className="event-supply-btns" style={{ backgroundColor: 'maroon' }}><b><em>ADD SUPPLIES</em></b></Button>
          </Link>
        </div>
      </div>
      <div className="divider">
        <h1><b>All Supplies</b></h1>
        <hr />
      </div>
      <div className="d-flex flex-wrap events-desc-text">
        {supplies.map((supply) => (
          <SupplyCard
            key={supply.firebaseKey}
            supplyObj={supply}
            onUpdate={fetchAllSupplies}
          />
        ))}
      </div>
    </>
  );
}
