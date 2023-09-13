import React from 'react';
import { NavLink } from 'react-router-dom';

import './VerticalNavBar.css';
import About from './pages/About'; // Check the path to your About component
import Contact from './pages/Contact'; // Check the path to your Contact component
import Portfolio from './pages/Portfolio'; // Check the path to your Portfolio component

const VerticalNavBar = () => {
  return (
    <nav className="vertical-nav">
      <ul>
        <li>
          <NavLink to="/about" activeClassName="active" component={About}>
            About me
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active" component={Contact}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" activeClassName="active" component={Portfolio}>
            Portfolio
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default VerticalNavBar;
