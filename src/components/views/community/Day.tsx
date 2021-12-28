/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { holidays } from "./CalendarBase";
import { Props } from '../../../types/components/views/DateProps';
import { formatDateToString } from "../../../lib/common/DateUtils";

interface DayProps extends Props {
    date: string,
    day: number,
    idx: number,
    selectedDate: string,
    setSelectedDate: (date:string) => void,
};

const Day: React.FC<DayProps> = ({ date, year, day, idx, selectedDate, setSelectedDate }:DayProps) => {
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [isToday, setIsToday] = useState<boolean>(false);
    const dateToString:string = `${year}-${date}`;
    
    useEffect(() => {
        if(formatDateToString(new Date()) === dateToString) setIsToday(true);
    },[]);
    
    useEffect(() => {
        if(isSelected) {
            if(selectedDate !== dateToString) setIsSelected(!isSelected);
        } 
    },[selectedDate]);
    
    const onSelected = () => {
        if(day !== 0 && selectedDate !== dateToString) {
            setIsSelected(!isSelected);
            setSelectedDate(`${year}-${date}`);
        }
    }

    const renderByStateCase = () => {
        if(isToday) {
            return <Today>today</Today>;
        } else if(isSelected && !isToday) {
            return <Selected>selected</Selected>;
        }
    }

    return(
        <div key={date} onClick={() => onSelected()} >
            <span css={(idx === 0 || idx === 6 || holidays.includes(date)) ? holiday : commonday}>
                { day !== 0 ? day : '' }
            </span>
            {renderByStateCase()}
        </div> 
    );
}

export default Day;

const commonday = css`
    color: #7C7C7C;
`;

const holiday = css`
    color: #CE879F;
`;

const Today = styled.button`
    background: orange;
    border-radius: 4px;
    outline: 0;
    border:none;
    align-self: center;
    color: #fff;
`;

const Selected = styled.button`
    background: #8FE388;
    border-radius: 4px;
    outline: 0;
    border:none;
    align-self: center;
    color: #fff;
`;
