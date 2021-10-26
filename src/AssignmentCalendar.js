import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';
import DatesInput from './DatesInput';
import DatesDisplay from './DatesDisplay';

const AssignmentCalendar = () => {
    const [dates, setDates] = useState([]);
    
    const addDate = (date) => {
        setDates(dates.concat({
            id: uuidv4(),
            date,
        }))
    }
    

    return (
        <main className="main-display">
            <h3>Assignment Calendar</h3>
            <h4 className="dates-Title">Dates</h4>
            <Button 
                text='Add Date' 
                color='green'
            />
            <DatesInput dates={dates} addDate={addDate}/>
            <DatesDisplay dates={dates} />
        </main>
    )
}

export default AssignmentCalendar
