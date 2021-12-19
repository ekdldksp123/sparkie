/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as Arrow } from '../../../assets/next.svg';
import { ClickEventProps } from './DateProps';

export const NextBtn:React.FC<ClickEventProps> = (props) => {
    const onNextClickEventHandler = () => {
        if(props.month === 11) {
            props.setYear(props.year + 1);
            props.setMonth(0);
        } else props.setMonth(props.month + 1);
    }
    return <Arrow css={next} onClick={() => onNextClickEventHandler()}/>;
}

export const PrevBtn:React.FC<ClickEventProps> = (props) => {
    const onPrevClickEventHandler = () => {
        if(props.month === 0) {
            props.setYear(props.year - 1);
            props.setMonth(11);
        } else props.setMonth(props.month - 1);
    }
    return <Arrow css={prev} onClick={() => onPrevClickEventHandler()}/>;
}

const next = css`
    width: 50px;
    height: 50px;
    align-self: flex-end;
`;

const prev = css`
    width: 50px;
    height: 50px;
    align-self: flex-end;
    -ms-transform: rotate(180deg); /* IE 9 */
    -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */
    transform: rotate(180deg);
`;

