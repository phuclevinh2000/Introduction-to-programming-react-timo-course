import React, { useState } from 'react'
import './App.css';

const Interval = () => {
    const [time, setTime] = useState([])
    const handleClick = (element) => {
        var d = new Date()
        var min = d.getMinutes()
        var hour = d.getHours()
        var second = d.getSeconds()
        var milisecond = d.getMilliseconds()
        if(min<10) {
            min = `0${min}`
        }
        if(hour<10) {
            hour = `0${hour}`
        }
        if(second<10) {
            second = `0${second}`
        }
        if(milisecond<10) {
            milisecond = `00${milisecond}`
        } else if (milisecond<100 && milisecond>10) {
            milisecond = `0${milisecond}`
        }
        var output = `${hour}:${min}:${second}-${milisecond}`
        setTime([...time, output])
    } 
    return (
        <div className="output">
            <button onClick={handleClick}>Interval time</button>
            <div className="time">
                {time.map((index) => (
                    <p key={index}>{index}</p>
                ))}
            </div>
        </div>
    )
}

export default Interval
