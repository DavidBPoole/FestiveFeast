/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Link from 'next/link';
// import { deleteBook } from '../api/bookData';

function SupplyCard({ supplyObj }) {
  // const deleteThisBook = () => {
  //   if (window.confirm(`Delete ${bookObj.title}?`)) {
  //     deleteBook(bookObj.firebaseKey).then(() => onUpdate());
  //   }
  // };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      {/* <Card.Img variant="top" src={sup.image} alt={bookObj.title} style={{ height: '400px' }} /> */}
      <Card.Body>
        <Card.Title>{supplyObj.supply_name}</Card.Title>
        {/* DYNAMIC LINK TO VIEW THE ITEM DETAILS  */}
        {/* <Link href={`/supply/${supplyObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link> */}
        {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
        {/* <Link href={`/supply/edit/${supplyObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link> */}
        {/* <Button variant="danger" onClick={deleteThisBook} className="m-2">
          DELETE
        </Button> */}
      </Card.Body>
    </Card>
  );
}

SupplyCard.propTypes = {
  supplyObj: PropTypes.shape({
    supply_name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
  // .isRequired,
  // onUpdate: PropTypes.func.isRequired,
};

export default SupplyCard;
