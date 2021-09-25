import React from 'react'
import './App.css';

const ComponentName = ({country}) => {
    
    return (
        <div className="content">
            <p>Hello {country}!</p>
        </div>
    )
}

export default ComponentName
