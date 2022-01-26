import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.missionsReducer);

  const missionsReserved = missions[0] && missions[0].filter((m) => m.reserved === true);

  return (
    <div className="p-10 grid grid-cols-2 gap-10">
      <div>
        <h2 className="text-3xl font-semibold px-4 py-2">My Missions</h2>
        <div
          className={`flex flex-col border border-b-0 border-black ${
            missionsReserved ? '' : 'hidden'
          }`}
        >
          {missionsReserved
            && missionsReserved.map((mission) => (
              <div
                className="border-b px-4 py-2 text-xl border-black"
                key={mission.id}
              >
                {mission.title}
              </div>
            ))}
        </div>
      </div>
      <div>Rockets</div>
    </div>
  );
};

export default MyProfile;
