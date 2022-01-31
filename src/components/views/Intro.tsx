/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import React, { useEffect, useState, useRef } from 'react';
import tesla from '../../assets/tesla.gif';
import AnimatedText from "./intro/JustDoIt";

const Intro = () => {
  return (
    <>
      <Gif>
        <img src={tesla} css={car} alt="init"/>
      </Gif>
      <Container>
        <AnimatedText/>
      </Container>
    </>
  );
}

export default Intro;

const Gif = styled.div`
  width: 100vw;
  height: 70vh;
`;

const Container = styled.div`
  display: flex;
`;

const car = css`
  width: 100%;
  height: 100%;
  object-fit: cover !important;
`
