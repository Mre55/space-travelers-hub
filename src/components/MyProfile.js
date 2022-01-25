import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.missionsReducer);

  const missionsReserved =
    missions[0] && missions[0].filter((mission) => mission.reserved === true);

  return (
    <div>
      <div>
        {missionsReserved &&
          missionsReserved.map((mission) => (
            <div key={mission.id}>{mission.title}</div>
          ))}
      </div>
    </div>
  );
};

export default MyProfile;
