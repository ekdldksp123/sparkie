/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Calendar from './community/Calendar';
import { Props } from './community/DateProps';

const Community = () => {
  const props: Props = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  };

  return (
    <div css={community}>
      <div css={board}></div>
      <div className="calendar" css={calendar}>
        <Calendar year={props.year} month={props.month} />
      </div>
    </div>
  );
};

export default Community;

const community = css`
  display: flex;
`;

const calendar = css`
  width: 35%;
  align-self: flex-end;
`;

const board = css`
  width: 65%;
`;
