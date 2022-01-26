export interface DateProps {
    year:number,
    month:number,
};

export interface ClickEventProps extends DateProps {
    setYear: (value:number) => void,
    setMonth: (value:number) => void,
};