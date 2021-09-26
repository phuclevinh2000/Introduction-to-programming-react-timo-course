import React from 'react'
import './App.css';

const ImageBrowser = ({imageUrl}) => {
    return (
        <div className="picture">
            <img src={imageUrl} alt="" />
        </div>
    )
}

export default ImageBrowser
