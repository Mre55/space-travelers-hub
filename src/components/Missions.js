import React from 'react';
import Mission from './Mission';

const Missions = () => {
  return (
    <div>
      <div className="grid">
        <div className="grid grid-cols-4">
          <div>Mission</div>
          <div>Description</div>
          <div>Status</div>
          <div>Action</div>
        </div>
        <Mission />
        <Mission />
        <Mission />
        <Mission />
      </div>
    </div>
  );
};

export default Missions;
