// participantData.js
import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// GET PARTICIPANTS BY EVENT ID
const getParticipantsByEvent = (eventId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/participants.json?orderBy="eventId"&equalTo="${eventId}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok');
    })
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// CREATE PARTICIPANT
const createParticipant = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/participants.json`, {
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

// DELETE PARTICIPANT
const deleteParticipant = (uid, eventId) => new Promise((resolve, reject) => {
  // First, fetch the participants for the specified event
  fetch(`${endpoint}/participants.json?orderBy="eventId"&equalTo="${eventId}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        // Convert the response data into an array
        const participants = Object.values(data);

        // Find the participant with the matching UID
        const participantToDelete = participants.find((participant) => participant.uid === uid);

        if (participantToDelete) {
          // If a matching participant is found, delete it
          fetch(`${endpoint}/participants/${participantToDelete.eventId}/${participantToDelete.uid}.json`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => {
              if (response.ok) {
                resolve();
              } else {
                reject(new Error(`Failed to delete participant: ${response.statusText}`));
              }
            })
            .catch(reject);
        } else {
          // If no matching participant is found, resolve without deleting
          resolve();
        }
      } else {
        // If no participants are found for the event, resolve without deleting
        resolve();
      }
    })
    .catch(reject);
});

export {
  getParticipantsByEvent,
  createParticipant,
  deleteParticipant,
};
