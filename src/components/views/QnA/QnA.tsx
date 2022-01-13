import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import LeftLayout from './LeftLayout';
import RightLayout from './RightLayout';
import getUserProfile from '../../../lib/api/user/getUserProfile';
import { Profile, Stack } from '../../../types/components/views/QnA';

const StyledSection = styled.section`
  display: flex;
  padding: 2rem;
`;

const StyledTitle = styled.h1`
  line-height: 2.4rem;
  font-size: 3rem;
  padding: 1rem 1rem;
`;

const QnA = () => {
  const [user, setUser] = useState<string>('sunny');
  const [profile, setProfile] = useState<Profile>({
    id: 0,
    name: '',
    messages: [],
    stacks: [],
  });
  const [stack, setStack] = useState<Stack>('frontend');

  useEffect(() => {
    getUserProfile(user).then((res) => {
      setProfile(res.data);
    });

    // 초기화
    setStack('frontend');
  }, [user]);

  return (
    <>
      <StyledTitle>QnA</StyledTitle>
      <StyledSection>
        <LeftLayout
          user={user}
          setUser={setUser}
          profile={profile}
          setStack={setStack}
        />
        <RightLayout stack={stack} profile={profile} />
      </StyledSection>
    </>
  );
};

export default QnA;
