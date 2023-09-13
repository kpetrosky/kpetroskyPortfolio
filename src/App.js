// App.js

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary router components
import VerticalNavBar from './components/VerticalNavBar';
import About from '../src/components/pages/About'; // Import the About component
import Home from './components/pages/Home';
import Contact from './components/pages/Contact'
import Portfolio from './components/pages/Portfolio';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content-wrapper">
          <VerticalNavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> {/* Add this route for the About Me section */}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
