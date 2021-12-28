/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Calendar from './community/Calendar';
import {Props} from './community/DateProps';
import Board from "./community/Board";
import { Posts, Post, PostData, Comment } from "./community/BoardProps";
import { formatDateToString } from "../../lib/common/DateUtils";

const props:Props = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
}

const feed:PostData = {
  key: 'noti',
  title: 'Updated Electric vehicle support system',
  date: formatDateToString(new Date(), '.'),
  content: `There are many variations of passages of Lorem Ipsum available, 
  but the majority have suffered alteration in some form, by injected 
  humour, or randomised words which don't look even slightly 
  believable. If you are going to use a passage of Lorem Ipsum, you 
  need to be sure there isn't anything embarrassing hidden in the 
  middle of text. All the Lorem Ipsum generators on the Internet 
  tend to repeat predefined chunks as necessary, making this the 
  first true generator on the Internet. It uses a dictionary of over 200 
  Latin words, combined with a handful of model sentence structures, 
  to generate Lorem Ipsum which looks reasonable. 
  The generated Lorem Ipsum is therefore always free from repetition, 
  injected humour, or non-characteristic words etc.`,
  writer: 'sparkie team',
  likes: 15,
  comments: [],
}

const post:Post = {
  feed:feed,
}

const Community = () => {

  return (
   <div css={community}>
      <div css={board}>
        <Board posts={[post]}/>
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
`;

const calendar = css`
  width: 40%;
  align-self: flex-end;
`;

const board = css`
  width: 60%;
`;