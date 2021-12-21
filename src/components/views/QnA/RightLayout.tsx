import React from 'react';
import styled from '@emotion/styled';

const StyledRightBox = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 60%;
  border: 1px solid red;
`;

const StyledContent = styled.div`
  width: 80%;
  height: 600px;
  margin: 1rem 1rem 1rem 0;
  padding: 1rem 1rem 1rem 0;
  border-radius: 2rem;
  background-color: rgb(251, 253, 255);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  display: flex;
  justify-content: center;
`;

const InnerBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const RightLayout = (props: any) => {
  return (
    <StyledRightBox>
      <StyledContent>
        <InnerBox>{props.children}</InnerBox>
      </StyledContent>
    </StyledRightBox>
  );
};

export default RightLayout;
