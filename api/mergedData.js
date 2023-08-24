/* eslint-disable comma-dangle */
/* eslint-disable consistent-return */
import { getSingleSupply, getSuppliesByEvent, deleteSupply } from './supplyData';
import { getSingleEvent, deleteSingleEvent } from './eventData';

const viewSupplyDetails = (supplyFirebaseKey) => new Promise((resolve, reject) => {
  getSingleSupply(supplyFirebaseKey)
    .then((supplyObject) => {
      getSingleEvent(supplyObject.event_id)
        .then((eventObject) => {
          resolve({ eventObject, ...supplyObject });
        });
    }).catch((error) => reject(error));
});

const viewEventDetails = (eventFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleEvent(eventFirebaseKey), getSuppliesByEvent(eventFirebaseKey)])
    .then(([eventObject, eventSuppliesArray]) => {
      resolve({ ...eventObject, supplies: eventSuppliesArray });
    }).catch((error) => reject(error));
});

const deleteEventSupplies = (eventId) => new Promise((resolve, reject) => {
  getSuppliesByEvent(eventId).then((supplyArray) => {
    console.warn(supplyArray, 'Event Supplies');
    const deleteSupplyPromises = supplyArray.map((supply) => deleteSupply(supply.firebaseKey));

    Promise.all(deleteSupplyPromises).then(() => {
      deleteSingleEvent(eventId).then(resolve);
    });
  }).catch((error) => reject(error));
});

export { viewSupplyDetails, viewEventDetails, deleteEventSupplies };
