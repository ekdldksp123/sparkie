/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Calendar from './community/Calendar';
import {Props} from '../../types/components/views/DateProps';
import Board from "./community/Board";
import { Posts, Post, PostData, Comment } from "../../types/components/views/BoardProps";
import { formatDateToString } from "../../lib/common/DateUtils";

const props:Props = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
}

const comment:Comment = {
  writer: "sangwoo",
  date: "2021-12-27",
  profile: '../../../assets/boy.svg',
  content: `A wonderful serenity has taken possession of my entire soul, 
  like these sweet mornings of spring which I enjoy with my whole heart. 
  I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls 
  like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, 
  that I neglect my talents. I should be incapable of drawing a single stroke at the present moment;
  and yet I feel that I never was a greater artist than now. 
  When, while the lovely valley teems with vapour around me, 
  and the meridian sun strikes the upper surface of the impenetrable foliage of my trees,
  and but a few stray gleams steal into the inner sanctuary, I throw myself down 
  among the tall grass by the trickling stream; and, as I lie close to the earth, 
  a thousand unknown plants are noticed by me: when I hear the buzz of the little world 
  among the stalks, and grow familiar with the countless indescribable forms of 
  the insects and flies, then I feel the presence of the Almighty, who formed us 
  in his own image, and the breath`,
};

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
  comments: [comment],
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