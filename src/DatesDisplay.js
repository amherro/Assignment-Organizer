import React from 'react'
import Date from './Date';


const DatesDisplay = ({ dates }) => {
    return (
        <div className='assignment-display'>
            {dates.map(({ date, id }) => {
                return (
                    <div key={id}>
                        <Date date={date}/>
                    </div>
                )
            })}
        </div>
    )
}

export default DatesDisplay
