import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { v4 } from 'uuid';
import ListRockets from './ListRockets';

import { fetchingData } from '../redux/rockets/rocketsReducer';
import store from '../redux/configureStore';

const Rockets = () => {
  const rocketsFromStore = useSelector((state) => state.rocketsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!(store.getState().rocketsReducer.length > 0)) {
      dispatch(fetchingData());
    }
  }, []);

  return (
    <div>
      <div className="grid m-12">
        {rocketsFromStore[0] && rocketsFromStore[0].map((rocket) => (
          <ListRockets key={v4()} rocket={rocket} />
        ))}
      </div>
    </div>
  );
};

export default Rockets;
