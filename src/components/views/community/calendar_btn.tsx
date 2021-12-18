/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import { icons } from "../../asset/constants";

export const NextBtn = () => {
    return (
        <Next>
            <img src={icons.calendar_btn}/>
        </Next>
    );
}

export const PrevBtn = () => {

}

const Next = styled.button`
    width: 68px;
    height: 68px;

`;
