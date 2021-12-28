/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { weekdays, months } from "./CalendarBase";
import { Props } from '../../../types/components/views/DateProps';
import { NextBtn, PrevBtn } from "./CalendarBtn";
import { leftPad } from "../../../lib/common/DateUtils";
import Day from "./Day";

const Calendar: React.FC<Props> = (props:Props) => {

    const [month, setMonth] = useState<number>(0);
    const [year, setYear] = useState<number>(0);
    const [dateSet, setDateSet] = useState<number[][]>([]);
    const [selectedDate, setSelectedDate] = useState<string>('');

    useEffect(() => {
        setYear(props.year);
        setMonth(props.month);
        init(year, month);
        console.log(dateSet);
    },[]);

    useEffect(() => {
        init(year, month);
    },[year, month]);
    
    const init = (year: number, month: number) => {
        const start:Date = new Date(year, month, 1);
        const end:Date = new Date(year, month + 1, 1 - 1);
        
        let startDayOfWeek:number = start.getDay();
        let endDayOfWeek:number = end.getDay();
        let endDate:number = end.getDate();

        let rows:number[][] = [];
        let days:number[] = [];

        for(let i = 0; i < startDayOfWeek; i ++) {
            days.push(0);
        }
        for(let i = 1, j = startDayOfWeek; i <= endDate; i++, j++) {
            if(j % 7 === 6) {
                days.push(i);
                rows.push(days);
                days = [];
            } else days.push(i);
        }
        for(let i = endDayOfWeek; i < 6; i++) {
            days.push(0);
        }
        rows.push(days);

        setDateSet(rows);
    }

    return (
    <>
        <Wrapper>
            <Container>
                <div css={caption}>
                    <PrevBtn year={year} setYear={setYear} month={month} setMonth={setMonth}/>
                    <b>{year + '  ' + months[month]}</b>
                    <NextBtn year={year} setYear={setYear} month={month} setMonth={setMonth}/>
                </div>
                <Table>
                    <Weekday>
                        {weekdays.map((value:string) => {
                            return(<div key={value}>{value}</div>);
                        })}
                    </Weekday>
                    {dateSet.length !== 0 &&
                        dateSet.map((days:number[], index:number) => {
                            return (
                                <Row key={index}>
                                  {days.length !== 0 &&
                                    days.map((day:number, idx:number) => {

                                        let date:string;
                                        if(day !== 0) {
                                            date = `${leftPad(month + 1)}-${leftPad(day)}`;
                                        } else date = `${Math.random().toString(36).substr(2,11)}`;

                                        return <Day key={date} date={date} year={year} month={month} day={day} idx={idx} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
                                    })
                                  }
                                </Row>
                            );
                        })
                    }
                </Table>
            </Container>
        </Wrapper>
    </>
    );
}


export default Calendar;

const floating = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%} 
    100%{background-position:0% 50%} 
`;

const Wrapper = styled.div`
    background-size: 800% 800%;
    -webkit-animation: ${floating} 16s ease infinite;
    -moz-animation: ${floating} 16s ease infinite; 
    -o-animation: ${floating} 16s ease infinite; 
    animation: ${floating} 16s ease infinite;
`;

const Container = styled.div`
    padding-top: 1.5vh;
    padding-bottom: 1.5vh;
    width:100%;
    height: 94.4vh;
    flex-direction: column;
    display: flex;
    margin: 0 auto;
    box-sizing: border-box;
    color: #fff; 
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    opacity: 0.7;
    animation: ${floating} 15s ease infinite !important;
`;

const caption = css`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px 30px 15px;
    & b {
        font-size: 2.5em;
        color: white;
        align-self: center;
    }
`;

const Table = styled.div`
    background-color: #fff;
    width: 90%;
    height: 81%;
    padding: 38px 10px;
    align-self: center;
    box-sizing: border-box;
    color: #444078;
    margin: 0;
    border-radius: 8px;
    font-size: 1.5em;
`;

const Weekday = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;
    & div {
        min-width: 13%;
        max-height: 5%;
        text-align: center;
        font-weight: 600;
        box-sizing: border-box;
    }
`;

const Row = styled.div`
    width: 100%;
    height: 16%;
    display: flex;
    justify-content: space-between;
    padding: 10px 0 10px 0;
    & div {
        width: 13%;
        height: 100%;
        font-weight: 600;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
    }
    & span {
        text-align: center;
        font-size: 0.8em;
    }
`;


