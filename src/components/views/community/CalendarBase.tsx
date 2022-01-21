export const weekdays =  ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const holidays = ['03-01', '07-17', '08-15', '10-03', '10-09']; //국경일
export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const init = (year: number, month: number):number[][] => {
    const start: Date = new Date(year, month, 1);
    const end: Date = new Date(year, month + 1, 1 - 1);

    let startDayOfWeek: number = start.getDay();
    let endDayOfWeek: number = end.getDay();
    let endDate: number = end.getDate();

    let rows: number[][] = [];
    let days: number[] = [];

    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(0);
    }
    for (let i = 1, j = startDayOfWeek; i <= endDate; i++, j++) {
      if (j % 7 === 6) {
        days.push(i);
        rows.push(days);
        days = [];
      } else days.push(i);
    }
    for (let i = endDayOfWeek; i < 6; i++) {
      days.push(0);
    }
    rows.push(days);

    return rows;
  };

