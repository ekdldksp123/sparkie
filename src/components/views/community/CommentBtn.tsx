/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Post, Comment } from "../../../types/components/views/community/BoardProps";
import ShareButton from "./SocialShare";
import { ReactComponent as Cmt } from '../../../assets/comment.svg';
import { CommentProps } from "../../../types/components/views/community/CounterProps";
import { revealCmt } from "../../../types/store/actions/commentActions";

// const Comments:React.FC<CommentProps> = ({ cnt, showCmts, revealCmts, hideCmts }) => {
const Comments:React.FC<CommentProps> = ({ cnt, showCmts, setShowCmts }) => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        setCount(cnt);
    },[cnt]);

    // const handleVisibiltiy = () => {
    //     console.log(`handleVisibiltiy: ${showCmts}`);
    //     if(showCmts) hideCmts();
    //     else revealCmts();
    // }
    
    return(
        <>  
            <Cmt css={cmt} onClick={() => setShowCmts(!showCmts) }/>
            <Counter>{count}</Counter>  
        </>
    )
}

export default Comments;

const Counter = styled.button`
    background: #84E4F7;
    border-radius: 35%;
    outline: 0;
    border:none;
    color: white;
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