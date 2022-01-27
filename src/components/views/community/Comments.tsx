/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Comment } from "../../../types/components/views/community/BoardProps";
import Reply from "./Reply";
import NewReply from "./AddReply";

interface CommentProps {
    toggle: boolean,
    id: string,
    comments: Comment[],
}

const CommentList:React.FC<CommentProps> = ({ comments, id, toggle }) => {

    useEffect(() => {}, [comments.length]);
    
    if(toggle && comments.length > 0) {
        return (
            <>
            { comments.map((reply:Comment, idx:number) => {
                return <Reply key={idx} id ={reply.id} writer={reply.writer} date={reply.date} profile={reply.profile} content={reply.content}/>
            })}
            <NewReply key={comments.length} postId={id}/>
            </>
        );
    } else return (<></>);
}

export default CommentList;