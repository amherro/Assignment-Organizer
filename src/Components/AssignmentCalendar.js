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
            <div className='content-display'>
                <div className='date-title-input-grid'>
                    <div className='date-title-btn'>
                        <h3 className="dates-title">Dates</h3>
                        <button className='add-date-btn' onClick={toggleDateInput}>Add Date</button>
                    </div>
                    {showDateInput && <DatesInput className='display' dates={dates} addDate={addDate}/>}
                </div>
                <div className='date-display-area'>
                    <DatesDisplay dates={dates} deleteDate={deleteDate} />
                </div>
            </div>
        </main>
    )
}

export default AssignmentCalendar
