import React, { useState } from 'react';
import styled from '@emotion/styled';
import InnerBox from './InnerBox';
import { Profile } from '../../../types/components/views/QnA';

const StyledRightBox = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 70%;
`;

const StyledContent = styled.div`
  width: 80%;
  height: 600px;
  margin: 1rem 1rem 1rem 1rem;
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 2rem;
  background-color: rgb(251, 253, 255);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  display: flex;
  justify-content: center;
`;

type RightProps = {
  profile: Profile;
  stack: string;
};

const RightLayout: React.FC<RightProps> = ({ profile, stack }) => {
  const stacks = profile.stacks;
  const selectedStack = stacks.find((item: any) => item.name === stack);
  return (
    <StyledRightBox>
      <StyledContent>
        <InnerBox selectedStack={selectedStack} />
      </StyledContent>
    </StyledRightBox>
  );
};

export default RightLayout;
