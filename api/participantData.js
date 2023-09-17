// firebaseFunctions.js

import { firebase } from '../utils/client';

// Function to get the current user's UID
function getCurrentUserUid() {
  // Use Firebase Authentication to get the current user
  const user = firebase.auth().currentUser;
  return user ? user.uid : null;
}

// Function to join an event and add participant data
function joinEvent(eventId, participantData) {
  // Use Firebase Authentication to get the user's UID
  const userUid = getCurrentUserUid();

  // Reference to the participants node for the event
  const participantsRef = firebase.database().ref(`/events/${eventId}/participants`);

  // Add the participant data with the UID as the key
  participantsRef.child(userUid).set(participantData);
}

// Function to leave an event and remove participant data
function leaveEvent(eventId) {
  return new Promise((resolve, reject) => {
    const userUid = getCurrentUserUid();
    const participantsRef = firebase.database().ref(`/events/${eventId}/participants`);

    // Remove the participant data for the user
    participantsRef.child(userUid).remove()
      .then(() => {
        resolve(); // Resolve the Promise when the operation is complete
      })
      .catch((error) => {
        reject(error); // Reject the Promise if there's an error
      });
  });
}

// Function to get participants for an event
function getEventParticipants(eventId) {
  const participantsRef = firebase.database().ref(`/events/${eventId}/participants`);

  return participantsRef.once('value')
    .then((snapshot) => {
      const participants = snapshot.val() || {};
      return Object.values(participants);
    });
}

export { joinEvent, leaveEvent, getEventParticipants };
