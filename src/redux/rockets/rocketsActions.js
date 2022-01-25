import axios from 'axios';
// *Constants

// export const FETCH_ROCKETS = 'FETCH_ROCKETS';

// *Actions

// // import { FETCH_ROCKETS } from './rocketsActions';

// // Fetch data from API

export function fetchRocketSuccess(payload) {
  return {
    type: 'FETCH_ROCKETS',
    payload,
  };
}

export function fetchRockets() {
  return (dispatch) => axios.get('https://api.spacexdata.com/v3/missions').then((response) => {
    //   const books = response.data;
    dispatch(fetchRocketSuccess(response.data));
    // console.log('books from API is ', books)
    //   return books
  });
}
