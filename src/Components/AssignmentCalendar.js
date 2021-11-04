import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import DatesInput from './DatesInput';
import DatesDisplay from './DatesDisplay';
import '../Styles/AssignmentCalendar.css'

const AssignmentCalendar = () => {
    const [dates, setDates] = useState([]);
    const [showDateInput, setShowDateInput] = useState(false);
    
    const addDate = (date) => {
        setDates(dates.concat({
            id: uuidv4(),
            date,
        }))
    }
    const toggleDateInput = () => {
        setShowDateInput(!showDateInput)
    }
    const deleteDate = (id) => {
        setDates(dates.filter((date) => date.id !== id))
    }

    return (
        <main className="main-display">
            <h3 className='calendar-title'>Assignment Calendar</h3>
            <div className='content-display'>
                <div className='date-title-btn-grid'>
                    <div className='date-title-btn'>
                        <h4 className="dates-title">Dates</h4>
                        <button className='add-date-btn' onClick={toggleDateInput}>Add Date</button>
                    </div>
                </div>
                {showDateInput && <DatesInput dates={dates} addDate={addDate}/>}
                <DatesDisplay dates={dates} deleteDate={deleteDate} />
            </div>
        </main>
    )
}

export default AssignmentCalendar
