import React, { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../api/eventData';
import { getAllSupplies } from '../../api/supplyData';
import { useAuth } from '../../utils/context/authContext';
import EventCard from '../../components/cards/EventCard';
import SupplyCard from '../../components/cards/SupplyCard';

export default function SearchResult() {
  const [searchResults, setSearchResults] = useState([]);
  const { user } = useAuth();
  const router = useRouter();
  const { query } = router.query;

  const getSearchResults = useCallback(() => {
    // Fetch both events and supplies based on the query
    const fetchEvents = getAllEvents(user.uid).then((searchResultsArray) => searchResultsArray.filter((event) => event.eventName.toLowerCase().includes(query) || event.eventLocation.toLowerCase().includes(query)));

    const fetchSupplies = getAllSupplies().then((searchResultsArray) => searchResultsArray.filter((supply) => supply.supplyName.toLowerCase().includes(query) || supply.supplyAllergens.toLowerCase().includes(query)));

    // Combine and set the search results
    Promise.all([fetchEvents, fetchSupplies]).then(([eventResultsArray, supplyResultsArray]) => {
      setSearchResults([...eventResultsArray, ...supplyResultsArray]);
    });
  }, [user.uid, query]);

  useEffect(() => {
    getSearchResults();
    return () => {
      setSearchResults([]);
    };
  }, [query, getSearchResults]);

  return (
    <div>
      <Head>
        <title>Search</title>
      </Head>
      <div className="search-container">
        <h4>Here are the results...</h4>
        <div className="d-flex flex-wrap">
          {searchResults.length === 0
            ? (<h5 className="pageheaderflexwrap"><b>No items found</b></h5>)
            : (searchResults.map((result) => {
              if (result.eventName) {
                // It's an event
                return <EventCard key={result.firebaseKey} eventObj={result} onUpdate={getSearchResults} />;
              } if (result.supplyName) {
                // It's a supply
                return <SupplyCard key={result.firebaseKey} supplyObj={result} onUpdate={getSearchResults} />;
              }
              return null; // Handle other types of results if needed
            }))}
        </div>
      </div>
    </div>
  );
}
