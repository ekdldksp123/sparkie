/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { useEffect, useState } from 'react';
import { weekdays, months, holidays } from "./calendar_base";
import {Props} from './DateProps';

const Calendar: React.FC<Props> = (props:Props) => {

    const [month, setMonth] = useState<number>(0);
    const [year, setYear] = useState<number>(0);
    const [dateSet, setDateSet] = useState<number[][]>([]);

    useEffect(() => {
        console.log(`year: ${props.year} month: ${props.month}}`)
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
            } else if( j % 7 === 0) {
                days.push(i);
            } else days.push(i);
        }
        for(let i = endDayOfWeek; i <= 6; i++) {
            days.push(0);
        }
        rows.push(days);

        setDateSet(rows);
    }

    const renderDaysByIndex = (index:number, day:number, date:string) => {
      
    }

    return (
    <>
        <div css={wrapper}>
            <div css={container}>
                <div css={caption}>
                    <b>{year + '  ' + months[month]}</b>
                </div>
                <div css={table}>
                    <div css={weekday}>
                        {weekdays.map((value:string) => {
                            return(<div key={value}>{value}</div>);
                        })}
                    </div>
                    {dateSet.length !== 0 &&
                        dateSet.map((days:number[], idx:number) => {
                            return (
                                <div css={row}>
                                  
                                  {days.length !== 0 &&
                                    days.map((day:number, idx:number) => {
                                        let date:string;
                                        if(day !== 0) {
                                            date = `${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
                                        } else date = '';
                                        
                                        return(
                                            <div key={idx} data-date={date}>
                                                <span css={(idx === 0 || idx === 6 || holidays.includes(date)) ? holiday : day}>
                                                    { day !== 0 ? day : ''}
                                                </span>
                                            </div> 
                                        );
                                    })
                                  }

                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    </>
    );
}

export default Calendar;

const floating = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%} 
    100%{background-position:0% 50%} 
`;

const wrapper = css`
    background-size: 800% 800%;
    -webkit-animation: ${floating} 16s ease infinite;
    -moz-animation: ${floating} 16s ease infinite; 
    -o-animation: ${floating} 16s ease infinite; 
    animation: ${floating} 16s ease infinite;
`;

const container = css`
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
    width: 50% !important;
    text-align: center;
    margin: 0 auto;
    padding: 10px 10px 30px 10px;
    & b {
        font-size: 2.5em;
        color: white;
    }
`;

const table = css`
    background-color: #fff;
    width: 93%;
    height: 81%;
    padding: 45px 10px;
    align-self: center;
    box-sizing: border-box;
    color: #7C7C7C;
    margin: 0;
    border-radius: 5px;
    font-size: 1.5em;
`;

const weekday = css`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding-bottom: 45px;
    & div {
        min-width: 13%;
        max-height: 5%;
        text-align: center;
        font-weight: 600;
        box-sizing: border-box;
    }
`;

const row = css`
    width: 100%;
    height: 16%;
    display: flex;
    justify-content: space-between;
    padding: 10px 10px 10px 10px;
    & div {
        width: 13%;
        height: 100%;
        font-weight: 600;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
    }
    & span {
        margin: 3px 0 0 3px;
        font-size: 0.8em;
    }
`;

const day = css`
    color: #444078;
`;

const holiday = css`
    color: #CE879F;
`;