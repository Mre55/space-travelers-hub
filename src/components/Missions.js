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

  const missionsData = useSelector((state) => state.missionsReducer);

  return (
    <div>
      <div className="grid">
        <div className="grid grid-cols-4">
          <div>Mission</div>
          <div>Description</div>
          <div>Status</div>
          <div>Action</div>
        </div>
        {missionsData[0] &&
          missionsData[0].map((mission) => (
            <Mission key={mission.id} mission={mission} />
          ))}
      </div>
    </div>
  );
};

export default Missions;
