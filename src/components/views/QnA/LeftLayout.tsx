import React from 'react';
import styled from '@emotion/styled';

const StyledLeftBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 25%;
  border: 1px solid blue;
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
  position: relative;
  width: 100%;
  height: 9%;
  //height: 150px;
  margin: 0.5rem 0;
  background: bisque;
  border-radius: 50% / 10%;
  color: white;
  text-align: center;
  text-indent: 0.1em;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  &:before {
    content: '';
    position: absolute;
    top: 10%;
    bottom: 10%;
    right: -5%;
    left: -5%;
    background: inherit;
    border-radius: 5% / 50%;
  }
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
