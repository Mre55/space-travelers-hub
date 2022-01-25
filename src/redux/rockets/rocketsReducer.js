// *Constants
const FETCH_ROCKET = 'FETCH_ROCKET';

// *Actions
// Store data
const storerockets = (payload) => ({
  type: FETCH_ROCKET,
  payload,
});

// Fetch data from API
export const fetchingData = () => async (dispatch) => {
  const data = await fetch('https://api.spacexdata.com/v3/rockets', {
    method: 'GET',
  });
  try {
    const rockets = await data.json();
    dispatch(storerockets(rockets));
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
          flickr_images: rocket.flickr_images[0],
          rocket_name: rocket.rocket_name,
          description: rocket.description,
          id: rocket.rocket_id,
          reserved: false,
        })),
      ][0];
    default:
      return state;
  }
};

export default rocketsReducer;
