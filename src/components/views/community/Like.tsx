/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import { useState } from "react";
import { ReactComponent as Like } from '../../../assets/like.svg';
import { ReactComponent as NoLike } from '../../../assets/nolike.svg';

interface Likes {
    likes: number,
    setLikes: (v:number) => void,
}

const Heart:React.FC<Likes> = ({likes, setLikes}: Likes) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const setClickedAndLikes = () => {
        setIsClicked(!isClicked);
        if(isClicked) setLikes(likes ++);
        else setLikes(likes --);
    }

    return (
        <>
            {isClicked 
                ? 
                <Like css={heart} onClick={() => setClickedAndLikes()}></Like> 
                :
                <NoLike css={heart} onClick={() => setClickedAndLikes()}></NoLike> 
            }
            {/* <Like css={heart} onClick={() => setClickedAndLikes()}></Like>  */}
            <Counter>{likes}</Counter>
        </>
    );
}

export default Heart;


const heart = css`
    align-self: flex-end;
    height: 45px !important;
    width: auto;

    transition: transform .2s;
    &:hover {
        transform: scale(1.7);
    }
`;

// const counter = css`
//     position: absolute;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     color: #fff;
//     border-radius: 10px;
//     z-index: -1;
//     font-size: 16px;
//     height: 40px;
//     width: 40px;
//     background-color: #FB076D;

//     &:hover {
//         animation: ${beating} 1s forwards;
//         -webkit-animation: ${beating} 1s forwards;
//         -moz-animation: ${beating} 1s forwards;
//         -o-animation: ${beating} 1s forwards;
//         z-index: 1;
//     }
// `;

const Counter = styled.button`
    background: #FEC5E5;
    border-radius: 35%;
    outline: 0;
    border:none;
    color: white;
    height: 20%;
    align-self: flex-start;
`;


