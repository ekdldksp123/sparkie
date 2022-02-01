/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import { useEffect } from 'react';
import tesla from '../../assets/tesla.gif';
import Bulb from "./intro/Bulb";
import AnimatedText from "./intro/JustDoIt";
import { useNavigate } from 'react-router';
import RightArrow from "./intro/Arrow";

const Intro = () => {
  const navigate = useNavigate();
    
    useEffect(() => {
        // setTimeout(() => navigate('/main'), 7000);
    },[]);

  return (
    <>
      <Gif>
        <img src={tesla} css={car} alt="init"/>
      </Gif>
      <Container>
        <Bulb/>
        <AnimatedText/>
        {/* <RightArrow/> */}
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
