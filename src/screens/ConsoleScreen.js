import React from 'react';
import './ConsoleScreen.css';
import ConsoleBar from '../widgets/ConsoleBar';

const ConsoleScreen = () => {
    return (
        <div>
          {/* Heading Section */}
          <ConsoleBar /> 
    
          {/* Main Screen Section */}
          <div className="main-screen">
            <h2>Your Catalogs</h2>
            <ul>
              {/* Replace with dynamic catalog items */}
              <li>Catalog 1</li>
              <li>Catalog 2</li>
              <li>Catalog 3</li>
            </ul>
          </div>
        </div>
      );
};

export default ConsoleScreen;