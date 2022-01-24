import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavLink from './components/NavLink';
import Missions from './components/Missions';
import Rockets from './components/Rockets';

const App = () => (
  <div>
    <NavLink />
    <div>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </div>
    {/* <Missions />
    <Rockets /> */}
  </div>
);

export default App;
