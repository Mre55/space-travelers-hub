// *Constants
// const FETCH = 'FETCH';
const STORE = 'STORE';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

// *Actions
// Store data
export const storeMissions = (payload) => ({
  type: STORE,
  payload,
});

// Join mission
export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

// Leave mission
export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

// Leave mission

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
const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case STORE:
      return [
        action.payload.map((mission) => ({
          title: mission.mission_name,
          description: mission.description,
          id: mission.mission_id,
          reserved: false,
        })),
      ];
    case JOIN_MISSION:
      return [
        state[0].map((mission) => (mission.id === action.payload
          ? { ...mission, reserved: true }
          : mission)),
      ];
    case LEAVE_MISSION:
      return [
        state[0].map((mission) => (mission.id === action.payload
          ? { ...mission, reserved: false }
          : mission)),
      ];
    default:
      return state;
  }
};

export default missionsReducer;
