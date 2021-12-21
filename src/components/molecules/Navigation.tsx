import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledUl = styled.ul`
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
    &:hover {
      color: red;
    }
  }
`;

const Navigation: React.FC = ({ children }) => {
  return (
    <>
      <nav>
        <StyledUl>
          <li>
            <Link to="/">Intro</Link>
          </li>
          <li>
            <Link to="/main">Main</Link>
          </li>
          <li>
            <Link to="/sparkie">Sparkie</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <Link to="/qna">QnA</Link>
          </li>
          <li>
            <Link to="/about">Who we are</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </StyledUl>
      </nav>
    </>
  );
};

export default Navigation;
