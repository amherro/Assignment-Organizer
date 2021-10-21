import React, { useState } from 'react'
import Button from './Button';
import DatesInput from './DatesInput';

const AssignmentCalendar = () => {
    // const [showDateInput, setShowDateInput] = useState(false)
    // const [dates, setDates] = useState([]);
    
    // const addDate = (date) => {
    //     setDates(dates.concat(date))
    //     console.log('Clicked')
    // }
    // const toggleDateInput = () => {
    //     setShowDateInput()
    // }

    return (
        <main className="main-display">
            <h3>Assignment Calendar</h3>
            <h4 className="dates-Title"> Dates
                <Button 
                    text='Add Date' 
                    color='green' 
                />
            </h4>
            <DatesInput />
        </main>
    )
}

export default AssignmentCalendar
