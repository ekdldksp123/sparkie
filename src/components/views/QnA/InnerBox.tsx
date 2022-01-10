import React from 'react';
import styled from '@emotion/styled';

const StyledBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const UpperBox = styled.div`
  box-sizing: border-box;
  padding: 2rem 1.5rem 2rem 1.5rem;
  display: flex;
  align-items: center;
`;

const LeftBox = styled.div`
  flex: 1;
  h1 {
  }
  span {
    font-size: 0.8rem;
    color: darkgray;
  }
  div {
  }
`;
const RightBox = styled.div``;

const BottomBox = styled.div`
  padding: 1rem;
  p {
  }
`;
type StackInformation = {
  selectedStack: any;
};
const InnerBox: React.FC<StackInformation> = (props) => {
  console.log(props.selectedStack);
  const stack = props.selectedStack;

  return (
    <StyledBox>
      {/* 상단 UI : flex */}
      <UpperBox>
        {/* 중간에 가도록. */}
        <LeftBox>
          <div>
            <h1>{stack.name}</h1>
            {/*<span>timeobj</span>*/}
          </div>
        </LeftBox>
        <RightBox>name</RightBox>
      </UpperBox>
      {/*  하단 UI */}
      <BottomBox>
        <p>{stack.description}</p>
      </BottomBox>
    </StyledBox>
  );
};

export default InnerBox;
