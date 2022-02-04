/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as Arrow } from '../../../assets/next.svg';
import { ClickEventProps } from '../../../types/components/views/community/DateProps';

export const NextBtn:React.FC<ClickEventProps> = ({month, year, setMonth, setYear}) => {
    const onNextClickEventHandler = () => {
        if(month === 11) {
            setYear(year + 1);
            setMonth(0);
        } else setMonth(month + 1);
    }
    return <Arrow css={next} onClick={() => onNextClickEventHandler()}/>;
}

export const PrevBtn:React.FC<ClickEventProps> = ({month, year, setMonth, setYear}) => {
    const onPrevClickEventHandler = () => {
        if(month === 0) {
            setYear(year - 1);
            setMonth(11);
        } else setMonth(month - 1);
    }
    return <Arrow css={prev} onClick={() => onPrevClickEventHandler()}/>;
}

const next = css`
    width: 50px;
    height: 50px;
    align-self: flex-end;

    transition: transform .2s;
    &:hover {
        transform: scale(1.7);
    }
`;

const prev = css`
    width: 50px;
    height: 50px;
    align-self: flex-end;
    -ms-transform: rotate(180deg); /* IE 9 */
    -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */
    transform: rotate(180deg);

    transition: transform .2s;
    &:hover {
        transform: scale(1.7) rotate(180deg);
    }
`;

