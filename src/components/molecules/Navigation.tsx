import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const navigation = css`
  padding: 0 0;
  width: 100%;
  height: 100%;
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-evenly;

  li {
    width: 100px;
    height: 20px;
    text-align: center;
  }

  a {
    color: black;
    text-decoration: none;
    text-align: center;
  }
`;

const Navigation: React.FC = ({ children }) => {
  return (
    <>
      <nav>
        <ul css={navigation}>
          <li>
            <Link to="/">Intro</Link>
          </li>
          <li>
            <Link to="/main">Main</Link>
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
    </>
  );
};

export default Navigation;