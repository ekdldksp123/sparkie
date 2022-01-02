/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Post, Comment } from "../../../types/components/views/BoardProps";
import ShareButton from "./SocialShare";
import { ReactComponent as Cmt } from '../../../assets/comment.svg';

interface Counter {
    cnt: number,
}

const Comments:React.FC<Counter> = ({cnt}:Counter) => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        setCount(cnt);
    },[cnt]);
    
    return(
        <>  
            <Cmt css={cmt}/>
            <Counter>{count}</Counter>  
        </>
    )
}

export default Comments;

const Counter = styled.button`
    background: #FAFAFA;
    border-radius: 35%;
    outline: 0;
    border:none;
    color: black;
    height: 20%;
    align-self: flex-start;
`;

const cmt = css`
    align-self: flex-end;
    height: 40px !important;
    width: auto;

    transition: transform .2s;
    &:hover {
        transform: scale(1.7);
    }
`;