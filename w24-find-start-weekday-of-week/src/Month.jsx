import React, { useState } from 'react'
import Day from './Day'

const Month = () => {
    const [ passValue, setPassValue ] = useState(1)
    let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]

    const updateChange = (element) => {
        // console.log(element.target.value)   //display selected option
        setPassValue(element.target.value)
    }
    return (
        <div>
            <select name="month" onChange={updateChange}>
                {months.map((month) => (
                    <option key={month} value={month}>{month}</option>
                ))}
            </select>
            <Day month = {passValue}/>
        </div>
    )
}

export default Month
