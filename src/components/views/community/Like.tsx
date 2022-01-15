/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import { ReactComponent as Like } from '../../../assets/like.svg';

interface Likes {
    likes: number,
    setLikes: (v:number) => void,
}

const Heart:React.FC<Likes> = ({likes, setLikes}: Likes) => {
    return (
        <>
            <Like css={heart} onClick={() => setLikes(likes++)}>
                
            </Like> 
            <Counter>{likes}</Counter>
        </>
    );
}

export default Heart;

const beating = keyframes`
    from {
        top: 0px
    }

    to {
        top: -48px
    }
`;

// const Container = styled.div`
//     & hover .counter {
//         animation: ${beating} 1s forwards;
//         -webkit-animation: ${beating} 1s forwards;
//         -moz-animation: ${beating} 1s forwards;
//         -o-animation: ${beating} 1s forwards;
//         z-index: 1;
//     }
// `

const heart = css`
    align-self: flex-end;
    height: 40px !important;
    width: auto;

    transition: transform .2s;
    &:hover {
        transform: scale(1.7);
    }
`;

const counter = css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 10px;
    z-index: -1;
    font-size: 16px;
    height: 40px;
    width: 40px;
    background-color: #FB076D;

    &:hover {
        animation: ${beating} 1s forwards;
        -webkit-animation: ${beating} 1s forwards;
        -moz-animation: ${beating} 1s forwards;
        -o-animation: ${beating} 1s forwards;
        z-index: 1;
    }
`;

const Counter = styled.button`
    background: #FEC5E5;
    border-radius: 35%;
    outline: 0;
    border:none;
    color: white;
    height: 20%;
    align-self: flex-start;
`;


