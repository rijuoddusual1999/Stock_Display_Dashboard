export const convertDateToUnixTimestamp = (date) => {
    return Math.floor(date.getTime() / 1000);
  };
  
  export const convertUnixTimestampToDate = (unixTimestamp) => {
    const milliseconds = unixTimestamp * 1000;
    return new Date(milliseconds).toLocaleDateString();
  };
  
  export const createDate = (date, days, fivedays, months,threemonths, sixmonths, years) => {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days + 5 * fivedays);
    newDate.setMonth(newDate.getMonth() + months + 3*threemonths + 6*sixmonths);
    newDate.setFullYear(newDate.getFullYear() + years + 5 * years);
  
    return newDate;
  };
  