/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Calendar from './community/Calendar';
import { DateProps } from '../../types/components/views/DateProps';
import Board from "./community/Board";
import { Post, PostData, Comment } from "../../types/components/views/BoardProps";
import { formatDateToString } from "../../lib/common/DateUtils";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const props:DateProps = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
}

const Community = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const { isFetching, error, data }: any = useQuery("", async () =>
    await axios.get('api/community')
  );

  useEffect(() => {
    document.body.style.cssText = `
      height: 100%;                      
      margin: 0;                          
      overflow: hidden;
    `;
  },[]);

  useEffect(() => {
    if(!isFetching && data) {
      /** post 데이터 세팅하기 */
      const datas = data.data.posts;
      const postDatas:Post[] = [];
      
      datas.map((data:any) => {
        const postData:PostData = {
          id: data._id,
          title: data.title,
          date: formatDateToString(new Date(data.date), '.'),
          writer: data.writer,
          content: data.content,
          likes: data.likes,
          comments :[]      
        }

        if(data.comments.length > 0) {
          data.comments.map((cmt:any) => {
            const comment:Comment = {
              id: cmt._id,
              writer: cmt.writer,
              date: formatDateToString(new Date(cmt.date), '-'),
              profile: '',
              content: cmt.content
            }
            postData.comments.push(comment);
          });
        }
        
        const post:Post = { feed: postData };
        postDatas.push(post);
      });
      setPosts(postDatas);
    }
  },[isFetching, data]);

  if(isFetching) return <div css={loading}>loading...</div>;
  if(error) return <div>{error.message}</div>;
  
  return (
    <div css={community}>
       <div css={board}>
         <Board posts={[...posts]}/>
       </div>
       <div css={calendar}>
         <Calendar year={props.year} month={props.month}/>
       </div>
    </div>
   );
};

export default Community;

const community = css`
  display: flex;
  flex-direction: row;
  margin: 0;
`;

const loading = css`
  margin: 0 auto;
`;

const calendar = css`
  flex-basis: 40%;
  height: calc(100vh - 5vh - 30px);
`;

const board = css`
  flex-basis: 60%;
  height: calc(100vh - 5vh - 30px);
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    height: 15%;
    background-color: #E8E8E8;
    border-radius: 10px; 
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
  }
`;