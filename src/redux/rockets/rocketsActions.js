// *Constants

export const FETCH_ROCKETS = 'FETCH_ROCKETS';

// *Actions
export const fetchRocketSuccess = (payload) => ({
    type: FETCH_BOOKS,
    payload,
  });

// Fetch data from API
export const fetchRockets = () => async (dispatch) => {
  const rocketData = await fetch('https://api.spacexdata.com/v3/rockets', {
    method: 'GET',
  });
  try {
    const rockets = await rocketData.json();
    dispatch(storeMissions(rockets));
  } catch (error) {
    console.error(error);
  }
};

