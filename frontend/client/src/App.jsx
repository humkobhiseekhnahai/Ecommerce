import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Pay from './Pay';

const App = () => {
  return (
    <Router>
      <div>
        {/* Conditionally render navigation only when needed */}
        {false && (
          <nav>
            <ul>
              <li>
                <Link to="/pay">PAY</Link>
              </li>
              {/* Add more navigation links as needed */}
            </ul>
          </nav>
        )}

        <Routes>
          <Route path="/pay" element={<Pay />} />
          {/* Add more Route components for other paths */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
