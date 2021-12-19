export const formatDateToString = (date:Date, delimiter:string = '-') => {
    const year = date.getFullYear(); 
    const month = leftPad(date.getMonth() + 1); 
    const day = leftPad(date.getDate());

    return [year, month, day].join(delimiter);
}

export const leftPad = (value:number) => {
    if(value < 10) return `0${value}`;
    else return `${value}`;
}