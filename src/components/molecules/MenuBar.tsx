import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import './MenuBar.css';

interface Props {
    isClicked: boolean;

    onClick: () => void;
}

const NavBar = () => {
    
    return(
        <div className="menu" css = {nav}>
            <Burger />
        </div>
    )
}

const Burger = () => {
    const [isClicked, setIsClicked] = useState(false);
    
    useEffect(() => {
        if(isClicked) toggleBurger();
    },[isClicked]);
    
    const toggleBurger = () => {
        const burger = document.querySelector('.hamburger') as HTMLParagraphElement;
        burger.addEventListener('click', () => {
            burger.classList.toggle('toggle');
        })
    }

    return(
        <div className="hamburger" css={burger} onClick={() => setIsClicked(!isClicked)}>
            <div className="line1"/>
            <div className="line2"/>
            <div className="line3"/>
        </div>
    )
}

const nav = css`
    background-color: #F65219;
    width: 100vw;
    padding-top: 2.8vh;
    padding-bottom: 2.8vh;
`;

const burger = css`
    & div {
        background-color: white;
        width: 45px;
        height: 5px;
        margin: 5px;
        margin-left: 25px;
        transition: all 0.5s;
    }
`;

export default NavBar;