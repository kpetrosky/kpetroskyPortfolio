// VerticalNavBar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function VerticalNavBar() {
  return (
    <nav className="vertical-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link> {/* Add the link to the About Me section */}
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default VerticalNavBar;
