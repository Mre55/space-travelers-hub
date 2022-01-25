import {
    FETCH_ROCKETS,
  } from './rocketsActions';

// *Reducer function
const rocketsReducer = (state = [], payload) => {
    switch (payload.type) {
      case FETCH_ROCKETS:
        return [
          payload.payload.map((rocket) => ({
            title: rocket.rocket_name,
            description: rocket.description,
            id: rocket.rocket_id,
            reserved: false,
          })),
        ];
      default:
        return state;
    }
};

export default rocketsReducer;