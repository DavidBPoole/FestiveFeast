import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllSupplies = () => new Promise((resolve, reject) => {
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

const getUserSupplies = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/supplies.json?orderBy="uid"&equalTo="${uid}"`, {
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
  getAllSupplies,
  getUserSupplies,
  deleteSupply,
  getSingleSupply,
  createSupply,
  updateSupply,
  getSuppliesByEvent,
};
