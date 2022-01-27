// *Constants
const FETCH_ROCKET = 'FETCH_ROCKET';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const CANCEL_ROCKET = 'CANCEL_ROCKET';

// *Actions
// Store data
export const storeRockets = (payload) => ({
  type: FETCH_ROCKET,
  payload,
});

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

export const cancelReservation = (payload) => ({
  type: CANCEL_ROCKET,
  payload,
});

// Fetch data from API
export const fetchingData = () => async (dispatch) => {
  const data = await fetch('https://api.spacexdata.com/v3/rockets', {
    method: 'GET',
  });
  try {
    const rockets = await data.json();
    dispatch(storeRockets(rockets));
  } catch (error) {
    console.error(error);
  }
};

// *Reducer function
const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ROCKET:
      return [
        action.payload.map((rocket) => ({
          flickrImages: rocket.flickr_images[0],
          rocketName: rocket.rocket_name,
          description: rocket.description,
          id: rocket.rocket_id,
          reserve: false,
        })),
      ];
    case RESERVE_ROCKET:
      return [
        state[0].map((rocket) => (rocket.id === action.payload
          ? { ...rocket, reserve: true } : rocket)),
      ];
    case CANCEL_ROCKET:
      return [
        state[0].map((rocket) => (rocket.id === action.payload
          ? { ...rocket, reserve: false } : rocket)),
      ];
    default:
      return state;
  }
};

export default rocketsReducer;
