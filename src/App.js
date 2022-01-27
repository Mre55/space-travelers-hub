import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import NavBar from './components/NavBar';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </div>
    </div>
  </Provider>
);

export default App;
