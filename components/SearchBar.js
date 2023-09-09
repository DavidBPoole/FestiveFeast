import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

export default function SearchBar() {
  const [searchResult, setSearchResult] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setSearchResult(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchResult !== '') {
      router.push(`/search/searchResult?query=${searchResult}`);
      setSearchResult('');
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} id="searchBar">
        <input className="form-control" type="text" placeholder="Search" onChange={handleChange} value={searchResult} style={{ width: '200px', height: '40px' }} />
      </Form>
    </div>
  );
}
