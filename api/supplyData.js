import { clientCredentials } from '../utils/client';
// API CALLS FOR SUPPLIES

const endpoint = clientCredentials.databaseURL;

// GET SUPPLIES
const getSupplies = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/supplies.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// DELETE SUPPLY
const deleteSupply = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/supplies/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

// GET SINGLE SUPPLY
const getSingleSupply = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/supplies/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// CREATE SUPPLY
const createSupply = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/supplies.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE SUPPLY
const updateSupply = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/supplies/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// GET SUPPLIES BY EVENT
const getSuppliesByEvent = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/supplies.json?orderBy="eventId"&equalTo="${firebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getSupplies,
  deleteSupply,
  getSingleSupply,
  createSupply,
  updateSupply,
  getSuppliesByEvent,
};
