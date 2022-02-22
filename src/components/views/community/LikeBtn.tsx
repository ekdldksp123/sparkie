/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import { useEffect, useState } from "react";
import { ReactComponent as Like } from '../../../assets/like.svg';
import { ReactComponent as NoLike } from '../../../assets/nolike.svg';

interface Likes {
    likes: number,
    setLikes: (v:number) => void,
}

const Heart:React.FC<Likes> = ({likes, setLikes}) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    useEffect(() => {
        if(isClicked) setLikes(likes+1);
        else setLikes(likes-1);
    },[isClicked]);

    const onClickHandler = () => {
        setIsClicked(!isClicked);
    }

    return (
        <>
            {isClicked 
                ? 
                <Like css={heart} onClick={() => onClickHandler()}></Like> 
                :
                <NoLike css={heart} onClick={() => onClickHandler()}></NoLike> 
            }
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

const Counter = styled.button`
    background: #FEC5E5;
    border-radius: 35%;
    outline: 0;
    border:none;
    color: white;
    height: 20%;
    align-self: flex-start;
`;


