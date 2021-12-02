import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const hotpinkStyle = css`
  color: hotpink;
`;

const greenBg = css`
  background-color: green;
`;

const EmotionJsExample: React.FC = () => {
  return (
    <div css={hotpinkStyle}>
      안녕하세요
      <div css={greenBg}>호우호우</div>
    </div>
  );
};

export default EmotionJsExample;
