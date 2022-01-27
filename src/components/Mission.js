import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missions';

const Mission = (props) => {
  const {
    mission: {
      title, description, id, reserved,
    },
    index,
  } = props;

  const dispatch = useDispatch();

  const handleReservation = () => {
    if (reserved) {
      dispatch(leaveMission(id));
    } else {
      dispatch(joinMission(id));
    }
  };

  return (
    <div>
      <div
        className={`hidden md:grid grid-cols-12 border border-t-0 border-black${
          index % 2 === 0 ? ' bg-neutral-200' : ''
        }`}
      >
        <div className="border-r border-r-black p-2 text-xl font-bold col-span-2">
          {title}
        </div>
        <div className="border-r border-r-black p-2 col-span-6">
          {description}
        </div>
        <div className="border-r border-r-black p-2 col-span-2 grid place-content-center">
          <div
            className={`border rounded-md px-2 py-1 text-white${
              reserved ? ' bg-cyan-600' : ' bg-neutral-600 uppercase'
            }`}
          >
            {reserved ? 'Active member' : 'Not a member'}
          </div>
        </div>
        <div className="grid p-2 col-span-2 place-content-center">
          <button
            className={`border rounded-md px-4 py-2${
              reserved ? ' text-red-500 border-red-500' : ' border-black'
            }`}
            onClick={handleReservation}
            type="button"
          >
            {reserved ? 'Leave Mission' : 'Join Mission'}
          </button>
        </div>
      </div>
      <div className="flex flex-col text-sm md:hidden gap-2 pb-6 border-b-2">
        <div>
          <h3 className="font-semibold text-xl">{title}</h3>
          <p>{description}</p>
        </div>
        <div className="flex justify-between">
          <div
            className={`border whitespace-nowrap rounded-md px-1 text-white${
              reserved ? ' bg-cyan-600' : ' bg-neutral-600 uppercase'
            }`}
          >
            {reserved ? 'Active member' : 'Not a member'}
          </div>
          <button
            className={`border whitespace-nowrap rounded-md px-1${
              reserved ? ' text-red-500 border-red-500' : ' border-black'
            }`}
            onClick={handleReservation}
            type="button"
          >
            {reserved ? 'Leave Mission' : 'Join Mission'}
          </button>
        </div>
      </div>
    </div>
  );
};

Mission.propTypes = {
  mission: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
};

export default Mission;
