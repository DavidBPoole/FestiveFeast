// /* eslint-disable react-hooks/exhaustive-deps */
// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';
// import Head from 'next/head';
// import { getAllEvents } from '../../api/eventData'; // Replace with your product data fetching function
// import { useAuth } from '../../utils/context/authContext';
// import EventCard from '../../components/cards/EventCard';

// export default function SearchResult() {
//   const [searchResults, setSearchResults] = useState([]);
//   const { user } = useAuth();
//   const router = useRouter();
//   const { searchInput } = router.query;

//   const getSearchResults = () => {
//     getAllEvents(user.uid).then((searchResultsArray) => {
//       const filterResults = searchResultsArray.filter((event) => event.title.toLowerCase().includes(searchInput)
//           || event.description.toLowerCase().includes(searchInput));
//       setSearchResults(filterResults);
//     });
//   };

//   useEffect(() => {
//     getSearchResults();
//     return () => {
//       setSearchResults([]);
//     };
//   }, [searchInput]);

//   return (
//     <div>
//       <Head>
//         <title>Search</title>
//       </Head>
//       <h4 className="pageheaderflexwrap">Here are the results...</h4>
//       <div className="productcardcontainer">
//         {searchResults.length === 0 ? (<h5 className="pageheaderflexwrap">No items found</h5>)
//           : (searchResults.map((event) => (
//             <EventCard key={event.firebaseKey} eventObj={event} onUpdate={getSearchResults} />
//           )))}
//       </div>
//     </div>
//   );
// }
