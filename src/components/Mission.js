import React from 'react';
import PropTypes from 'prop-types';

const Mission = (props) => {
  const {
    mission: { title, description, id, reserved },
  } = props;

  Mission.propTypes = {
    mission: PropTypes.instanceOf(Object).isRequired,
  };

  return (
    <div className="grid grid-cols-4">
      <div>{title}</div>
      <div>{description}</div>
      <div>
        <div>{reserved ? 'Active member' : 'Not a member'}</div>
      </div>
      <div>
        <button type="button">Join</button>
      </div>
    </div>
  );
};

export default Mission;
