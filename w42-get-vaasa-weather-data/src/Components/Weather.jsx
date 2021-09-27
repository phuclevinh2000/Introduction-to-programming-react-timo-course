import React, { useEffect, useState } from 'react'
import "./weather.css"
import axios from "axios"
import Canvas from './Canvas'
const baseUrl = "https://www.voacap.com/geo/weather.html?city=Vaasa"

const Weather = () => {
    const [temperature, setTemperature] = useState()
    
    useEffect(() => {
        // axios
        //     .get(baseUrl)
        //     .then((response) => {
        //         setTemperature(response.data)
        //         console.log(temperature)
        //     })
        setInterval(() => {
            axios
            .get(baseUrl)
            .then((response) => {
                setTemperature(response.data)
                console.log(temperature)
            })
        }, 15000)
    }, [])

    if(temperature)     //check if data has been fetch yet
        return (
            <div className="weather">
                <div>{temperature[0].temperature}</div>  
                <Canvas pressure = {temperature[0].pressure}/>
            </div>
        )
    else return <></>
    
}

export default Weather
