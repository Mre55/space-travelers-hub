import React from 'react';

const Mission = (props) => {
  const {
    mission: { title, description, member },
  } = props;

  return (
    <div className="grid grid-cols-4">
      <div>{title}</div>
      <div>{description}</div>
      <div>
        <div>{member ? 'Active member' : 'Not a member'}</div>
      </div>
      <div>
        <button>Join</button>
      </div>
    </div>
  );
};

export default Mission;
