import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const navigation = css`
  padding: 0 0;
  height: 100%;
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;

  li {
    width: 400px;
    height: 300px;
    border: 1px solid black;
    text-align: center;
  }

  a {
    text-decoration: none;
  }
`;

const Navigation: React.FC = ({ children }) => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul css={navigation}>
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

export default Navigation;
