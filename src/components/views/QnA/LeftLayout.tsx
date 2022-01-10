import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import Board from './Board';
import { Profile, Stack } from '../../../types/components/views/QnA';

const StyledLeftBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 30%;
`;

const CategoryBox = styled.div`
  margin: 1rem 0.3rem 1rem 1rem;
  border-radius: 5rem;
  width: 10%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;

const StyledCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 9%;
  //height: 150px;
  margin: 0.5rem 0;
  background: #c0d4e8;
  border-radius: 50% / 10%;
  //color: white;
  font-size: 1rem;
  text-indent: 0.1em;
  cursor: pointer;
  box-shadow: rgba(9, 30, 66, 0.1) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  &:hover {
    background-color: #88abce;
    color: white;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }
`;

type LeftProps = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  profile: Profile;
  setStack: React.Dispatch<React.SetStateAction<Stack>>;
};

const LeftLayout: React.FC<LeftProps> = ({
  user,
  setUser,
  profile,
  setStack,
}) => {
  const changeUser = useCallback(
    (username: string) => {
      setUser(username);
    },
    [user],
  );

  return (
    <StyledLeftBox>
      <CategoryBox>
        <StyledCategory onClick={() => changeUser('sunny')}>태</StyledCategory>
        <StyledCategory onClick={() => changeUser('vinchae')}>
          빈
        </StyledCategory>
        <StyledCategory onClick={() => changeUser('joon')}>준</StyledCategory>
      </CategoryBox>
      <Board profile={profile} setStack={setStack} />
    </StyledLeftBox>
  );
};

export default LeftLayout;
