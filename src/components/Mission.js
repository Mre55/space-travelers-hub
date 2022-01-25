import React from 'react';
import PropTypes from 'prop-types';

const Mission = (props) => {
  const {
    mission: { title, description, reserved },
    index,
  } = props;

  return (
    <div
      className={`grid grid-cols-12 border border-t-0 border-black${
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
        {reserved ? (
          <div className="border rounded-md px-2 py-1 text-white">
            Active member
          </div>
        ) : (
          <div className="border rounded-md px-2 py-1 text-white bg-neutral-600 uppercase">
            Not a member
          </div>
        )}
      </div>
      <div className="grid p-2 col-span-2 place-content-center">
        {reserved ? (
          <button
            className="border rounded-md px-4 py-2 text-red-500 border-red-500"
            type="button"
          >
            Leave Mission
          </button>
        ) : (
          <button
            className="border rounded-md px-4 py-2 border-black"
            type="button"
          >
            Join Mission
          </button>
        )}
      </div>
    </div>
  );
};

Mission.propTypes = {
  mission: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
};

export default Mission;
