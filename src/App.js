import Catalog from './Catalog';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemDetailScreen from './screens/ItemDetailScreen';
import ConsoleScreen from './screens/ConsoleScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/item/:id" element={<ItemDetailScreen/>} />
          <Route path="/console" element={<ConsoleScreen/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
