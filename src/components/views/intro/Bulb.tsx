/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';

const Bulb:React.FC = () => {
    return (
        <Wrapper>
            <LightBulb xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154.72 276.77">
                <Filament d="M55.2 139.26l-.5 1.67 4.63 15.48.5-1.67-4.63-15.48zM85.62 123.84l-.5 1.67 4.63 15.48.49-1.67-4.62-15.48z" />
                <Filament d="M90.24 139.32l-.49 1.67 4.62 15.48.5-1.67-4.63-15.48zM68.11 123.84l-.5 1.67 4.62 15.48.5-1.67-4.62-15.48z" />
                <Filament d="M72.73 139.32l-.5 1.67 4.63 15.48.5-1.67-4.63-15.48zM58.85 154.8l.5 1.67 4.63-15.48-.5-1.67-4.63 15.48z" />
                <Filament d="M76.36 154.8l.5 1.67 4.63-15.48-.5-1.67-4.63 15.48zM63.48 139.32l.5 1.67 4.62-15.48-.49-1.67-4.63 15.48zM80.99 139.32l.5 1.67 4.62-15.48-.49-1.67-4.63 15.48zM93.88 154.8l.49 1.67L99 140.99l-.5-1.67-4.62 15.48z" />
                <rect width="2.36" height="59.85" x="53.05" y="138.65" css={prong} rx="1.18" ry="1.18"/>
                <rect width="2.36" height="58.81" x="98.3" y="138.65" css={prong} rx="1.18" ry="1.18"/>
                <path d="M41.05 193.11h71.61v46.03H41.05z" css={cls2}/>
                <ellipse cx="76.85" cy="239.14" css={cls2} rx="35.81" ry="37.63"/>
                <rect width="83" height="6.33" x="276.75" y="505.69" css={cls3} rx="3.17" ry="3.17" transform="rotate(13.12 1474.696 -687.534)"/>
                <rect width="83" height="6.33" x="277.26" y="518.19" css={cls3} rx="3.17" ry="3.17" transform="rotate(13.12 1475.208 -675.038)"/>
                <rect width="83" height="6.33" x="277.51" y="530.7" css={cls3} rx="3.17" ry="3.17" transform="rotate(13.12 1475.454 -662.554)"/>
                <rect width="27.39" height="6.33" x="278.36" y="536.89" css={cls3} rx="3.17" ry="3.17" transform="rotate(13.12 1448.504 -656.327)"/>
                <rect width="27.47" height="6.33" x="330.82" y="499.48" css={cls3} rx="3.17" ry="3.17" transform="rotate(13.12 1500.99 -693.73)"/>
                <g css={cls4}>
                    <rect width="94.5" height="30.6" x="30.11" y="169.86" css={cls5} rx="12.26" ry="12.26"/>
                    <circle cx="77.36" cy="77.36" r="77.36" css={cls5}/>
                    <path d="M16.24 124.35c4 0 13.86 40.77 13.86 57.21h94.5c0-16.44 9.88-57.21 13.86-57.21H16.24z" css={cls5}/>
                </g>
            </LightBulb>
        </Wrapper>
    );
};


export default Bulb;

const filamentOff = keyframes` 50% { fill: orange; } `;

const filamentOn = keyframes`
    0% { fill: orange; }
    50% { fill: orange; }
    100% { fill: orange; }
`;

const lightOn = keyframes`
    0% { fill: #ffed8c; opacity: 0.8; }
    50% { fill: #ffed8c; opacity: 0.8; }
    100% { fill: #ffed8c; opacity: 0.8; }
`;

const Wrapper = styled.div`
    padding: 0px 60px 20px 60px;
`;

const LightBulb = styled.svg`width: 125px;`;

const Filament = styled.path`
    animation-name: ${filamentOff}, ${filamentOn};
    animation-delay: 0ms, 3000ms !important;
    animation-duration: 300ms, 4000ms;
    animation-iteration-count: infinite, 1;
    animation-timing-function: ease-in-out, step-end;
`;

const cls5 = css`
    fill: #d1d3d4;
    animation-delay: 3500ms !important;
    animation: ${lightOn} 5s step-end 1;
    -webkit-animation: ${lightOn} 5s step-end 1;
    -moz-animation: ${lightOn} 5s step-end 1;
    -o-animation: ${lightOn} 5s step-end 1;
`;

const cls4 = css`opacity: 0.51;`;

const cls3 = css`fill: #939598;`;

const cls2 = css`fill: #808285;`;

const prong = css`fill: #6d6e71;`;
    