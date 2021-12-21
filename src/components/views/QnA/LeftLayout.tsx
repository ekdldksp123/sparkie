import React from 'react';
import styled from '@emotion/styled';

const StyledLeftBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 40%;
`;

const CategoryBox = styled.div`
  margin: 1rem 0 1rem 1rem;
  border-radius: 5rem;
  width: 10%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;

const StyledCategory = styled.div`
  border-radius: 50%;
  width: 100%;
  height: 8%;
  margin-bottom: 1rem;
  background-color: bisque;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const StyledBoard = styled.div`
  width: 60%;
  height: 600px;
  margin: 1rem 1rem 1rem 0;
  padding: 1rem 1rem 1rem 0;
  border-radius: 2rem;
  background-color: rgb(236, 245, 254);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const LeftLayout = (props: any) => {
  return (
    <StyledLeftBox>
      <CategoryBox>
        <StyledCategory />
        <StyledCategory />
        <StyledCategory />
      </CategoryBox>
      <StyledBoard>{props.children}</StyledBoard>
    </StyledLeftBox>
  );
};

export default LeftLayout;
