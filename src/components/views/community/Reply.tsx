/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Comment } from "./BoardProps";
import { ReactComponent as P1 } from '../../../assets/boy.svg';
import { ReactComponent as P2 } from '../../../assets/girl.svg';

const Reply:React.FC<Comment> = ({writer, date, profile, content }:Comment) => {
    return (
        <div css={reply}>
            <ReplyPadding>
                <Profile><P1/></Profile>
                <div css={right_side}>
                    <Writer>{writer}</Writer>
                    <ReplyContent>{content}</ReplyContent>
                </div>
            </ReplyPadding>
        </div>
    );
}

export default Reply;

const reply = css`
    position: relative;   
    margin: 0 auto;
    width: 95%;
    height: 10%;
    background-color: #fff;
    margin-top: 10px;
    box-shadow: 2px 4px 8px 2px rgba(0,0,0,0.2);
    border-radius: 8px;
    transition: 0.3s;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    overflow-y: auto; 

    &::-webkit-scrollbar {
        width:6px;
    }
    &::-webkit-scrollbar-thumb {
        height: 17%;
        background-color: #E8E8E8;
        border-radius: 10px; 
    }
    &::-webkit-scrollbar-track {
        background-color: #C4C4C4;
        opacity: 0.5 !important;
    }
    
`;

const ReplyPadding = styled.div`
    display: flex;
    flex-direction: row;
    padding: 12px 10px 10px 10px;
`;

const Profile = styled.div`
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    width: 60px;
    height: 100%;
    padding-right: 10px;
    & svg {
        width:100%;
        height:auto;
        align-self: center;
    }
`;

const right_side = css`
    flex-basis: 83%;    
    align-self: flex-end;    
    display: flex;
    flex-direction: column;

    
`;

const Writer = styled.h3`
    padding-bottom: 5px;
`;

const ReplyContent = styled.div`
    width: 100%;
    flex-basis: 50% !important;
    font-size: 1em;
    color: #6C6B6B;


`;



