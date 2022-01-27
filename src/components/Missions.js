import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import store from '../redux/configureStore';
import { fetchingData } from '../redux/missions/missions';
import Mission from './Mission';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!(store.getState().missionsReducer.length > 0)) {
      dispatch(fetchingData());
    }
  }, []);

  const isMobile = () => window.innerWidth < 768;

  const missionsData = useSelector((state) => state.missionsReducer);

  return (
    <div className="p-10">
      <h2 className="text-xl mb-6 md:text-4xl font-semibold font-serif uppercase">
        AVailable Missions
      </h2>
      <div className="hidden md:block">
        <div className="grid grid-cols-12 border border-black auto-cols-min font-bold text-xl">
          <div className="p-2 border-r-black col-span-2 border-r">Mission</div>
          <div className="p-2 border-r-black col-span-6 border-r">
            Description
          </div>
          <div className="p-2 border-r-black col-span-2 border-r">Status</div>
          <div className="p-2 col-span-2">Action</div>
        </div>
        {missionsData[0]
          && missionsData[0].map((mission, index) => (
            <Mission key={mission.id} mission={mission} index={index} />
          ))}
      </div>
      {isMobile() && (
        <div className="flex flex-col gap-6">
          {missionsData[0]
            && missionsData[0].map((mission, index) => (
              <Mission key={mission.id} mission={mission} index={index} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Missions;
