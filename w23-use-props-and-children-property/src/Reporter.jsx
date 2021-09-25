import React from 'react'

const Reporter = ({children, name}) => {
    return (
        <div>
            {name}: {children}
        </div>
    )
}

export default Reporter
