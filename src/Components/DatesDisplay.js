import React from 'react'
import Date from './Date';
import '../Styles/DatesDisplay.css'

const DatesDisplay = ({ dates, deleteDate, addDateToLocalStorage }) => {

    return (
        <div className='date-display'>
            {dates.map(({ date, id }) => {
                return (
                    <div key={id}>
                        <Date date={date} id={id} deleteDate={deleteDate} addDateToLocalStorage={addDateToLocalStorage(id, date)} />
                    </div>
                )
            })}
        </div>
    )
}

export default DatesDisplay
