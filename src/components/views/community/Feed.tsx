/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Post, Comment } from "./BoardProps";
// import { ReactComponent as Share } from '../../../assets/share.svg';
import ShareButton from "./SocialShare";
import { ReactComponent as Like } from '../../../assets/like.svg';
import { ReactComponent as Comments } from '../../../assets/comment.svg';
import { ReactComponent as P1 } from '../../../assets/boy.svg';
import { ReactComponent as P2 } from '../../../assets/girl.svg';
import Reply from "./Reply";

const Feed:React.FC<Post> = ({feed}:Post) => {
    
    return (
        <>
        <Card>
            <CardPadding>
                <div css={writtenDate}>
                    <span>{feed.date}</span>
                </div>
                <Title id="title">{feed.title}</Title>
                <Content>{feed.content}</Content>
                <Icons>
                    <Comments css={cmt}/>
                    <Like />
                    <ShareButton />
                </Icons>
            </CardPadding>
        </Card>
        {feed.comments.map((reply:Comment, idx:number) => {
            return <Reply key={idx} writer={reply.writer} date={reply.date} profile={reply.profile} content={reply.content}/>
        })}
        </>
    );
}

export default Feed;
    
const Card = styled.div`
    position: relative;
    display: flex;   
    margin: 0 auto;
    width: 95%;
    min-height: 50%;
    background-color: #fff;
    margin-top: 10px;
    box-shadow: 2px 4px 8px 2px rgba(0,0,0,0.2);
    border-radius: 8px;
    transition: 0.3s;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`;

const CardPadding = styled.div`
    display: flex;
    flex-direction: column;
    width: inherit;
    height: inherit;
    padding: 20px 20px 20px 20px;
`;

const writtenDate = css`
    align-self: flex-end;
    & span {
        color: #9B9393;
        font-size: 1.0em;
    }
`;

const Title = styled.p`
    display:inline-block; 
    color: #4B4B4B;
    font-size: 1.8em;
    font-weight: bold;
    padding-bottom: 15px;
    
    &:after {
        display:block;
        content: '';
        left: 0;
        height: 2px;
        width: 100%;
        border-bottom: solid 2px #8BE4BA;  
        transform-origin: right top;
        transform: scale(0, 1);
        transition: color 0.1s, transform 0.3s ease-out;
    }

    &:hover:after {
        transform-origin: left top;
        transform: scale(1, 1);
    }
`;

const Content = styled.div`
    width: 100%;
    flex-basis: 65% !important;
    overflow-y: auto; 
    font-size: 1.35em;
    color: #6C6B6B;
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

const Icons = styled.div`
    position: absolute;
    bottom: 20px;
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    & svg {
        z-index: 1;
        width: 45px;
        height: 45px;
        padding-left: 10px;

        transition: transform .2s;
        &:hover {
            transform: scale(1.7);
        }
    }
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
