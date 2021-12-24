/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Posts, Post } from "./BoardProps";
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
    height: 100%;
`;