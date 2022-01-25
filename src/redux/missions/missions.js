// *Constants
// const FETCH = 'FETCH';
const STORE = 'STORE';

// *Actions
// Store data
const storeMissions = (payload) => ({
  type: STORE,
  payload,
});

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

// *Reducer function
const missionsReducer = (state = [], payload) => {
  switch (payload.type) {
    case STORE:
      return [
        payload.payload.map((mission) => ({
          title: mission.mission_name,
          description: mission.description,
          id: mission.mission_id,
          reserved: false,
        })),
      ];
    default:
      return state;
  }
};

export default missionsReducer;
