import { firebase } from '../utils/client';

function getCurrentUserUid() {
  const user = firebase.auth().currentUser;
  return user ? user.uid : null;
}

function joinEvent(eventId, participantData) {
  const userUid = getCurrentUserUid();
  const participantsRef = firebase.database().ref(`/events/${eventId}/participants`);
  participantsRef.child(userUid).set(participantData);
}

function leaveEvent(eventId) {
  return new Promise((resolve, reject) => {
    const userUid = getCurrentUserUid();
    const participantsRef = firebase.database().ref(`/events/${eventId}/participants`);

    participantsRef.child(userUid).remove()
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getEventParticipants(eventId) {
  const participantsRef = firebase.database().ref(`/events/${eventId}/participants`);

  return participantsRef.once('value')
    .then((snapshot) => {
      const participants = snapshot.val() || {};
      return Object.values(participants);
    });
}

export { joinEvent, leaveEvent, getEventParticipants };
