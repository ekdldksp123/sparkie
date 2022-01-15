/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { holidays } from "./CalendarBase";
import { DateProps } from '../../../types/components/views/DateProps';
import { formatDateToString } from "../../../lib/common/DateUtils";

interface DayProps extends DateProps {
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

    const renderDayByIndex = () => {
        if(idx === 0 || idx === 6 || holidays.includes(date)) {
            return <Holiday isSelected={isSelected}>{ day !== 0 ? day : '' }</Holiday>;
        } else {
            return <Commonday isSelected={isSelected}>{ day !== 0 ? day : '' }</Commonday>;
        }
    }

    return(
        <div key={date} onClick={() => onSelected()} >
            {renderDayByIndex()}
            {isToday && <Today>today</Today>}
        </div> 
    );
}

export default Day;

const Commonday = styled.span`
    color: ${({isSelected} : {isSelected:boolean}) => (isSelected ? '#292929' : '#7C7C7C')};
`;

const Holiday = styled.span`
    color: ${({isSelected} : {isSelected:boolean}) => (isSelected ? '#BA0F49' : '#CE879F')}
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
