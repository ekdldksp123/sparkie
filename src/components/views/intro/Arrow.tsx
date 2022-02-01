/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import { ReactComponent as Arrow } from '../../../assets/arrow.svg';

const RightArrow = () => {
    return <Arrow css={running}/>
}

export default RightArrow;

const running = css`
    width: 100px;
    animation-play-state: paused, running, running;
`;