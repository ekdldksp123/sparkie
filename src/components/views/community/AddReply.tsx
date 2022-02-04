/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import React, { useState, useRef } from 'react';
import { ReactComponent as Someone } from '../../../assets/who.svg';
import { useMutation } from "react-query";
import axios from "axios";

type Reply = {
    post_id: string,
    writer: string,
    content: string,
}

type NewReplyProps = {
    postId: string,
}

const NewReply:React.FC<NewReplyProps> = ({postId}):JSX.Element => {

    const nameRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);

    const [comment, setComment] = useState<Reply>({
        post_id: postId,
        writer: '',
        content: '',
    });

    const mutation = useMutation( async (data:Reply) => {
        axios.patch('api/community/post/comment', { post_id: data.post_id, writer: data.writer, content: data.content });
    })

    const onChangeHandler = (e: React.ChangeEvent<any>) => {
        const {name, value} = e.target;
        setComment({...comment, [name]: value});
    }

    const onSubmit = () => {
        console.log('submit');
        if(comment.writer === '') nameRef.current?.focus();
        else if(comment.content === '') contentRef.current?.focus();
        else {
            console.log(JSON.stringify(comment));
            mutation.mutateAsync(comment).then(() => {
                console.log('add comment')
            });
            setComment({...comment, writer: '', content: ''});
        }
    }

    return (
        <div css={reply}>
            <ReplyPadding>
                <Profile><Someone/></Profile>
                <div css={right_side}>
                    <Writer>
                        <Input ref={nameRef} name="writer" placeholder="Name / Nickname" onChange={(e) => onChangeHandler(e)}/>
                    </Writer>
                    <ReplyContent>
                        <TextArea ref={contentRef} name="content" onChange={(e) => onChangeHandler(e)} placeholder="Share your thoughts" autoComplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"/>
                    </ReplyContent>
                </div>
                <SubmitBtn onClick={() => onSubmit()}>Submit</SubmitBtn>
            </ReplyPadding>
        </div>
    );
}

export default NewReply;

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
    padding: 8px 10px 8px 10px;
`;

const Profile = styled.div`
    float: left;
    #align-self: flex-start;
    display: flex;
    flex-direction: column;
    width: 60px !important;
    height: 100% !important;
    padding-right: 10px;
    & svg {
        width: 60px;
        height:auto;
        align-self: center;
    }
`;

const right_side = css`
    flex-basis: 80%;    
    align-self: flex-end;    
    display: flex;
    flex-direction: column;  
`;

const Input = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #CCC;
    color: #555;
    box-sizing: border-box;
    font-family: 'Arvo'; 

    &:focus {
        outline: none;    
    }

    &:focus::-webkit-input-placeholder {
        border-bottom: 1px solid #26c2ff;
        color: #26c2ff;
    }
`;

const TextArea = styled.textarea`
    width: 95% !important;
    height: 22px;
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    background: none repeat scroll 0 0 rgba(94,196,255, 0.07);
    border-color: #FFFFFF;
    border-image: none;
    border-radius: 6px 6px 6px 6px;
    border-style: solid solid solid solid;
    border-width: 1px 1px 1px 1px;
    color: #555555;
    font-family: "Helvetica Neue", Helvetica,Arial,sans-serif;
    font-size: 1em;
    line-height: 1.4em;
    padding: 5px 8px;
    transition: background-color 0.2s ease 0s;

    &:focus {
        background: none repeat scroll 0 0 #FFFFFF;
        border-color: #26c2ff;
        outline-width: 0;
    }
`;

const SubmitBtn = styled.button`
    display: block;
    text-align: center;
    text-decoration: none;
    font-weight: 600;
    font-size: 1em;
    text-transform: uppercase;
    color: #fff;
    border-radius: 6px;
    border: none;
    margin: 10px;
    padding: 1em 2em;
    background-size: 300% 300%;
    color: white;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    background-image: linear-gradient(to right, #26c2ff 0%, #abfcff 50%, #5ec4ff 100%);
    transition: 0.5s;

    &: hover {
        background-position: right center;
    }
`;

const Writer = styled.h3`
    padding-bottom: 5px;
    align-self: flex-start;
    font-size: 0.8em;

    background-color: #FFF;
    border-radius: 2px;
    #box-shadow: 0px 2px 1px 0px #DDD;
    box-sizing: border-box;
`;

const ReplyContent = styled.div`
    width: 100%;
    flex-basis: 50% !important;
    font-size: 1em;
    color: #6C6B6B;
`;


