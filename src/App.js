import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './screens/landing';
import ConsoleLayout from './layouts/console-layout';
import Catalogs from './screens/catalogs';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<ConsoleLayout />} >
            <Route path="catalogs" element={<Catalogs />} />
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
