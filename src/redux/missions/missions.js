// *Constants
const FETCH = 'FETCH';
const STORE = 'STORE';

// *Actions
// Fetch data from API
export const fetchingData = () => async (dispatch) => {
  const data = await fetch('https://api.spacexdata.com/v3/missions', {
    method: 'GET',
  });
  try {
    const missions = await data.json();
    dispatch(storeMissions(missions));
  } catch (error) {
    console.error(error);
  }
};

// Store data
const storeMissions = (payload) => {
  return {
    type: STORE,
    payload,
  };
};

// *Reducer function
const missionsReducer = (state = [], payload) => {
  switch (payload.type) {
    case STORE:
      return [
        payload.payload.map((mission) => {
          return {
            title: mission.mission_name,
            description: mission.description,
            id: mission.mission_id,
            reserved: false,
          };
        }),
      ];
    default:
      return state;
  }
};

export default missionsReducer;
