/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Posts, Post } from "../../../types/components/views/BoardProps";
import Feed from "./Feed";

const Board:React.FC<Posts> = ({posts}:Posts) => {
    
    return(
        <div css={container}>
            { posts.length != 0 &&
              posts.map((post:Post, idx:number) => {
                return <Feed key={idx} feed={post.feed}/>;
              })
            }
        </div>
    );
}

export default Board;

const container = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
        height: 17%;
        background-color: #E8E8E8;
        border-radius: 10px; 
    }
    &::-webkit-scrollbar-track {
        #background-color: #C4C4C4;
        #opacity: 0.5 !important;
    }
`;
