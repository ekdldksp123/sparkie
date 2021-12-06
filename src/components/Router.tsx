import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Router: React.FC = ({ children }) => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/sparkie">Sparkie</Link>
            </li>
            <li>
              <Link to="/board">Board</Link>
            </li>
            <li>
              <Link to="/about">Who we are</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </BrowserRouter>
    </>
  );
};

export default Router;
