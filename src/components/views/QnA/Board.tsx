/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { BaseSyntheticEvent } from 'react';
import styled from '@emotion/styled';
import { Profile, Stack } from '../../../types/components/views/QnA';

const StyledBoard = styled.div`
  width: 60%;
  height: 600px;
  margin: 1rem 1rem 1rem 0;
  padding: 1rem 1rem 1rem;
  border-radius: 2rem;
  background-color: rgb(236, 245, 254);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const MessageBox = styled.div`
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
`;

const StyledMessage = styled.span((props: any) => ({
  display: 'inline-block',
  fontSize: '0.75rem',
  padding: '0.2rem 0.4rem',
  backgroundColor: '#cfe8f3',
  borderRadius: '0.4rem',
  marginBottom: '0.8rem',
}));

const pointerCss = css`
  cursor: pointer;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 1px 2px -0.5px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;
type BoardProps = {
  profile: Profile;
  setStack: React.Dispatch<React.SetStateAction<Stack>>;
};
const Board: React.FC<BoardProps> = ({ profile, setStack }) => {
  const { id, messages, name, stacks } = profile;
  const onDetailClick = (e: BaseSyntheticEvent) => {
    setStack(e.target.innerText);
  };

  return (
    <StyledBoard>
      <MessageBox>
        {messages.map((msg: string | Stack, idx: number) => {
          if (msg === 'frontend' || msg === 'backend' || msg === 'etc') {
            return (
              <StyledMessage onClick={onDetailClick} key={idx} css={pointerCss}>
                {msg}
              </StyledMessage>
            );
          }
          return <StyledMessage key={idx}>{msg}</StyledMessage>;
        })}
      </MessageBox>
    </StyledBoard>
  );
};

export default Board;
