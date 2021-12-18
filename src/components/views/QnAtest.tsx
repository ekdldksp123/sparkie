import React from 'react';
import styled from '@emotion/styled';

const QnAtest = styled.div`
  height: 1024px;
  width: 1440px;
  background-color: #ffffff;
`;
const RightPane = styled.div`
  height: 726px;
  width: 971px;
`;
const RightPaneBox = styled.div`
  border-radius: 0.625rem;
  height: 726px;
  width: 971px;
  background-color: #fafcff;
`;
const PostBox = styled.div`
  height: 634px;
  width: 913px;
`;
const PostBoxLayout = styled.div`
  border-radius: 0.625rem;
  height: 634px;
  width: 913px;
  background-color: #ffffff;
`;
const Text1 = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 36px;
  font-family: SeoulHangang;
  line-height: auto;
  color: #000000;
`;
const Text2 = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 30px;
  font-family: SeoulHangang;
  line-height: auto;
  color: #000000;
`;
const Text3 = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 18px;
  font-family: Noto Sans KR;
  line-height: auto;
  color: #727272;
`;
const Text4 = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 24px;
  font-family: Noto Sans KR;
  line-height: auto;
  color: #000000;
`;
const Img5 = styled.div`
  height: 50px;
  width: 52px;
`;
const HrLine = styled.div`
  height: 0px;
  width: 845px;
  border: 0.0625rem solid #000000;
`;
const Navigation = styled.div`
  height: 95px;
  width: 1440px;
  background-color: #f65219;
`;
const LeftPane = styled.div`
  height: 726px;
  width: 358px;
`;
const LeftPaneBox = styled.div`
  border-radius: 0.625rem;
  height: 726px;
  width: 298px;
  background-color: #ebf5fd;
`;
const LeftPaneVerbBox = styled.div`
  height: 78px;
  width: 274px;
`;
const VerbBox = styled.div`
  border-radius: 0.625rem;
  height: 78px;
  width: 274px;
  background-color: #ffffff;
`;
const Text6 = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 18px;
  font-family: SeoulHangang;
  line-height: auto;
  color: #000000;
`;
const Text7 = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 14px;
  font-family: Noto Sans KR;
  line-height: auto;
  color: #000000;
`;
const Text8 = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 14px;
  font-family: Noto Sans KR;
  line-height: auto;
  color: #727272;
`;
const Img9 = styled.div`
  height: 20px;
  width: 21px;
`;
const LeftPaneButton = styled.div`
  height: 18px;
  width: 54px;
`;
const Text10 = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 18px;
  font-family: SeoulHangang;
  line-height: auto;
  color: #000000;
`;
const LeftShortButton1 = styled.div`
  height: 56px;
  width: 60px;
`;
const LeftshortButton1Shape = styled.div`
  border-radius: 1.875rem 0rem 1.875rem 1.875rem;
  height: 56px;
  width: 60px;
  background-color: #ecf5fe;
`;
const Text11 = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 30px;
  font-family: SeoulHangang;
  line-height: auto;
  color: #7d7c7c;
`;
const Text12 = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 36px;
  font-family: SeoulHangang;
  line-height: auto;
  color: #7d7c7c;
`;
const Text13 = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 60px;
  font-family: Roboto;
  line-height: auto;
  color: #000000;
`;
const QnAB: React.VFC = () => {
  return (
    <QnAtest>
      <RightPane>
        <RightPaneBox />
        <PostBox>
          <PostBoxLayout />
          <Text1>오늘 중고차 구매했는데요..</Text1>
          <Text2>뻥입니다. 하하하하하하하하하하하</Text2>
          <Text3>3분 전</Text3>
          <Text4>써니킴</Text4>
          <img src="" />
          <HrLine />
        </PostBox>
      </RightPane>
      <Navigation />
      <LeftPane>
        <LeftPaneBox />
        <LeftPaneVerbBox>
          <VerbBox />
          <Text6>오늘 중고차 구매했는데요..</Text6>
          <Text7>써니킴</Text7>
          <Text8>3분 전</Text8>
          <img src="" />
        </LeftPaneVerbBox>
        <LeftPaneButton>
          <Text10>글 쓰기</Text10>
        </LeftPaneButton>
        <LeftShortButton1>
          <LeftshortButton1Shape />
          <Text11>🚗</Text11>
        </LeftShortButton1>
        <Text12>자동차</Text12>
      </LeftPane>
      <Text13>QnA</Text13>
    </QnAtest>
  );
};
export default QnAB;
