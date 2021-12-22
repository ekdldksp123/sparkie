/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Post, Comment } from "./BoardProps";
import { ReactComponent as Share } from '../../../assets/share.svg';

const Feed:React.FC<Post> = ({feed}:Post) => {
    
    return (
        <Card>
            <Padding>
                <div css={writtenDate}>
                    <span>{feed.date}</span>
                </div>
                <Title>{feed.title}</Title>
                <Content>{feed.content}</Content>
                <Icons>
                    <Share css={share}/>
                </Icons>
            </Padding>
        </Card>
    );
}

export default Feed;
    
const Card = styled.div`
    position: relative;   
    margin: 0 auto;
    width: 95%;
    height: 50%;
    background-color: #fff;
    margin-top: 10px;
    box-shadow: 2px 4px 8px 2px rgba(0,0,0,0.2);
    border-radius: 8px;
    transition: 0.3s;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`;

const Padding = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 20px 20px 20px;
`;

const writtenDate = css`
    align-self: flex-end;
    & span {
        color: #9B9393;
        font-size: 1.0em;
    }
`;

const Title = styled.div`
    color: #4B4B4B;
    font-size: 1.6em;
    font-weight: bold;
    padding-bottom: 15px;
`;

const Content = styled.div`
    color: #6C6B6B;
    height: 50% !important;
    overflow: hidden; 
`;

const Icons = styled.div`
    position: absolute;
    bottom: 20px;
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    & svg {
        width: 45px;
        height: 45px;
    }
`;

const share = css`
    align-self: flex-end;
`;