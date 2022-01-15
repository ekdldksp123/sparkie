/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Post, Comment } from "../../../types/components/views/BoardProps";
import ShareButton from "./SocialShare";
import { ReactComponent as Like } from '../../../assets/like.svg';
import Comments from "./Comments";
import Reply from "./Reply";
import NewReply from "./AddReply";

const Feed:React.FC<Post> = ({feed}:Post) => {

    const [showCmts, setShowCmts] = useState<boolean>(false);
    const [reply, setReply] = useState<Comment>();

    useEffect(() => {
        const data:Comment = {
            id: 'add',
            writer: '',
            date: '',
            profile: '',
            content: '',
        };
        feed.comments.push(data);
        setReply(data);
    },[feed]);

    return (
        <Container>
            <Card>
                <CardPadding>
                    <div css={contents}>
                        <div css={writtenDate}>
                            <span>{feed.date}</span>
                        </div>
                        <Title id="title">{feed.title}</Title>
                        <Content>{feed.content}</Content>
                    </div>
                    <Icons>
                        <Comments cnt={feed.comments.length - 1} showCmts={showCmts} setShowCmts={setShowCmts}/>
                        <Like />
                        <ShareButton />
                    </Icons>
                </CardPadding>
            </Card>
            {showCmts && feed.comments.map((reply:Comment, idx:number) => {
                if(reply.writer !== '') return <Reply key={idx} id ={reply.id} writer={reply.writer} date={reply.date} profile={reply.profile} content={reply.content}/>
                else return <NewReply key={idx} />
            })}
        </Container>
    );
}

export default Feed;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50%;
`;
    
const Card = styled.div`
    position: relative;
    display: flex;   
    margin: 0 auto;
    width: 95%;
    height: inherit;
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
    padding: 20px 20px 20px 20px;
`;

const contents = css`
    display: flex;
    flex-direction: column;
    height: 85%;
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
    max-height: 78% !important;
    overflow-y: auto; 
    font-size: 1.35em;
    color: #6C6B6B;
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-thumb {
        height: 25%;
        background-color: #D5F591;
        border-radius: 10px; 
        box-shadow: -1px 5px 5px #aaaaaa;
        #box-shadow: -1px 0px 0px 1px rgba(0,0,0,0.1);
    }
`;

const Icons = styled.div`
    position: absolute;
    #padding-top: 20px !important;
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

