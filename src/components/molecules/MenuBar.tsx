/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { css } from '@emotion/react';
import './MenuBar.css';

const NavBar = () => {
  return (
    <div className="menu" css={nav}>
      <Burger />
    </div>
  );
};

const Burger = ():JSX.Element => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isClicked) toggleBurger();
  }, [isClicked]);

  const toggleBurger = () => {
    const burger = document.querySelector('.hamburger') as HTMLParagraphElement;
    burger.addEventListener('click', () => {
      burger.classList.toggle('toggle');
    });
    navigate('/main');
  };

  return (
    <div
      className="hamburger"
      css={burger}
      onClick={() => setIsClicked(!isClicked)}
    >
      <div className="line1" />
      <div className="line2" />
      <div className="line3" />
    </div>
  );
};

const nav = css`
  background-color: #f65219;
  padding: 2.5vh 1vw 2.5vh;
`;

const burger = css`
  width: 50px;
  margin-left: 25px;
  & div {
    background-color: white;
    width: 45px;
    height: 5px;
    margin: 5px;
    transition: all 0.5s;
  }
`;

export default NavBar;
