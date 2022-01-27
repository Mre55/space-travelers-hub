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
      <div className="md:flex gap-8">
        <div className="flex justify-center">
          <img className="w-80 md:max-w-md" src={flickrImages} alt="Rocket" />
        </div>
        <div className="flex flex-col items-center pt-7 md:items-start">
          <div>
            <div className="text-3xl">{rocketName}</div>
          </div>
          <div className="pt-3 pb-5 w-4/5 md:w-11/12">
            {reserve ? (
              <div className="gap-4">
                <div className="bg-teal-600 text-sm text-white rounded mt-1 text-center mr-4 align-middle h-5 w-20 float-left">
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
