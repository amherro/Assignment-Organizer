import React from 'react'
import Date from './Date';
import '../Styles/DatesDisplay.css'

const DatesDisplay = ({ dates, deleteDate }) => {
    return (
        <div className='date-display'>
            {dates.map(({ date, id }) => {
                return (
                    <div key={id}>
                        <Date date={date} id={id} deleteDate={deleteDate} />
                    </div>
                )
            })}
        </div>
    )
}

export default DatesDisplay
