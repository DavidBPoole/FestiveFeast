import getSingleEvent from './eventData';
import getSuppliesByEvent from './supplyData';

const viewEventDetails = (eventFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleEvent(eventFirebaseKey), getSuppliesByEvent(eventFirebaseKey)])
    .then(([eventObject, eventSuppliesArray]) => {
      resolve({ ...eventObject, supplies: eventSuppliesArray });
    }).catch((error) => reject(error));
});

export default viewEventDetails;
