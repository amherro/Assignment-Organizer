import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import DatesInput from './DatesInput';
import DatesDisplay from './DatesDisplay';

const AssignmentCalendar = () => {
    const [dates, setDates] = useState([]);
    const [showDateInput, setShowDateInput] = useState(false);
    
    const addDate = (date) => {
        setDates(dates.concat({
            id: uuidv4(),
            date,
            isComplete: false
        }))
    }
    const toggleDateInput = () => {
        setShowDateInput(!showDateInput)
    }

    return (
        <main className="main-display">
            <h3>Assignment Calendar</h3>
            <h4 className="dates-Title">Dates</h4>
            <button onClick={toggleDateInput}>Add Date</button>
            {showDateInput && <DatesInput dates={dates} addDate={addDate}/>}
            <DatesDisplay dates={dates} />
        </main>
    )
}

export default AssignmentCalendar
