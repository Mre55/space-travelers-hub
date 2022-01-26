import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  reserveRocket,
  cancelReservation,
} from '../redux/rockets/rocketsReducer';

const ListRockets = (props) => {
  const {
    rocket: {
      flickrImages, rocketName, description, reserve, id,
    },
  } = props;

  const dispatch = useDispatch();

  const handleReservation = () => {
    if (reserve) {
      dispatch(cancelReservation(id));
    } else {
      dispatch(reserveRocket(id));
    }
  };

  return (
    <div>
      <div className="flex space-x-10">
        <div>
          <img className="flex-none w-80" src={flickrImages} alt="Rocket" />
        </div>
        <div className="flex-none flex flex-col space-y-4 w-8/12">
          <div>
            <div className="text-3xl">{rocketName}</div>
          </div>
          <div>
            {reserve ? (
              <div>
                <div className="bg-emerald-400 text-xs text-white p-2 m-1 rounded w-16">
                  Reserved
                </div>
                <div>{description}</div>
              </div>
            ) : (
              description
            )}
          </div>
          <div>
            {reserve ? (
              <button
                onClick={handleReservation}
                className="bg-inherit border-solid border-2 text-lg text-gray-500 border-gray-400 p-2 rounded"
                type="button"
              >
                Cancel Reservation
              </button>
            ) : (
              <button
                onClick={handleReservation}
                className="bg-blue-600 text-white p-2 w-40 text-lg  rounded"
                type="button"
              >
                Reserve Rocket
              </button>
            )}
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

ListRockets.propTypes = {
  rocket: PropTypes.instanceOf(Object).isRequired,
};

export default ListRockets;
