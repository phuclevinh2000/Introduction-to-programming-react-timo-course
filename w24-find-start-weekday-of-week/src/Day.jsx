import React from 'react'

const Day = ({month}) => {
    var year = 2019;

    // Get the first day of the month
    var y = year, m = month;
    var firstDay = new Date(y, m-1, 1);
    // console.log(firstDay)

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[firstDay.getDay()];
    return (
        <div>
            Month {month}/2019 starts {n}
        </div>
    )
}

export default Day
