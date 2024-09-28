import Catalog from './Catalog';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemDetailScreen from './screens/ItemDetailScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/item/:id" element={<ItemDetailScreen/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
