import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import writePostApi from '../../../lib/api/post/writePostApi';
import LeftLayout from './LeftLayout';
import RightLayout from './RightLayout';

const StyledSection = styled.section`
  display: flex;
  padding: 2rem;
  border: 1px solid black;
`;

const StyledTitle = styled.h1`
  line-height: 2.4rem;
  font-size: 3rem;
  padding: 1rem 1rem;
`;

const QnA = () => {
  const [post, setPost] = useState<Post>({
    title: '',
    content: '',
  });

  const onChange = (e: any) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const writePost = useCallback(() => {
    writePostApi(post)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.warn(e);
      });
  }, [post]);

  return (
    <>
      <StyledTitle>QnA</StyledTitle>
      <StyledSection>
        <LeftLayout />
        <RightLayout />
        {/*<StyledForm>*/}
        {/*  <input type="text" name="title" onChange={onChange} />*/}
        {/*  <input type="text" name="content" onChange={onChange} />*/}
        {/*  <button*/}
        {/*    onClick={(e) => {*/}
        {/*      e.preventDefault();*/}
        {/*      writePost();*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    post*/}
        {/*  </button>*/}
        {/*</StyledForm>*/}
      </StyledSection>
    </>
  );
};

export default QnA;
