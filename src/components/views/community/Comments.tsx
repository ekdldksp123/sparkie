import React, { useEffect, useState } from 'react';
import { Comment } from "../../../types/components/views/community/BoardProps";
import Reply from "./Reply";
import NewReply from "./AddReply";

interface CommentProps {
    toggle: boolean,
    id: string,
    comments: Comment[],
}

const CommentList:React.FC<CommentProps> = React.memo(props => {
    const { comments, id, toggle } = props;
    // const [show, setShow] = useState(toggle);
    
    // useEffect(() => {
    //     setShow(toggle);
    // },[toggle]);

    if(toggle) {
        if(comments.length > 0) {
            return (
                <>
                { comments.map((reply:Comment, idx:number) => {
                    return <Reply key={idx} id ={reply.id} writer={reply.writer} date={reply.date} profile={reply.profile} content={reply.content}/>
                })}
                <NewReply key={comments.length} postId={id}/>
                </>
            );
        } else return <NewReply key={comments.length} postId={id}/>;
       
    } else return (<></>);
}, (prevProps, nextProps) => prevProps.comments.length === nextProps.comments.length);

export default CommentList;
// export default React.memo(CommentList, (prevProps, nextProps) => { prevProps.comments.length === nextProps.comments.length});