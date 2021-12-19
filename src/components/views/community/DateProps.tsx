export interface Props {
    year:number,
    month:number,
};

export interface ClickEventProps extends Props{
    setYear: (value:number) => void,
    setMonth: (value:number) => void,
};