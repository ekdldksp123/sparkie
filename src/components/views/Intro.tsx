/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import { useEffect } from 'react';
import tesla from '../../assets/tesla.gif';
import Bulb from "./intro/Bulb";
import AnimatedText from "./intro/JustDoIt";
import { useNavigate } from 'react-router';

const Intro:React.FC = () => {
  const navigate = useNavigate();
    
    useEffect(() => {
        setTimeout(() => navigate('/main'), 6500);
    },[]);

  return (
    <Container>
      <Gif>
        <img src={tesla} css={car} alt="init"/>
      </Gif>
      <Wrapper>
        <Bulb/>
        <AnimatedText/>
      </Wrapper>
    </Container>
  );
}

export default Intro;

const Gif = styled.div`
  width: 50vw;
  height: 100vh;
  float: left;
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  z-index: 2;
`;

const Wrapper = styled.div`
  width: 50vw;
  display: flex;
  align-self: center;
`;

const car = css`
  width: 100%;
  height: 100%;
  object-fit: cover !important;
`
