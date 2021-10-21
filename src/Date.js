import React from 'react'
import Button from './Button'

const Date = ({ date }) => {
    return (
        <div>
            <h5>{date} <Button text='Add Assignment'/></h5>
            <div className='assignment-display'>

            </div>
        </div>
    )
}

export default Date
