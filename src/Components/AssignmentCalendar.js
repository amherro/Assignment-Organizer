import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import DatesInput from './DatesInput';
import DatesDisplay from './DatesDisplay';
import '../Styles/AssignmentCalendar.css'

const AssignmentCalendar = (isOpen) => {
    const [dates, setDates] = useState([]);
    const [showDateInput, setShowDateInput] = useState(false);
    
    const addDateOnLoad = () => {
        document.addEventListener('DOMContentLoaded', () => {
            for (let i = 0; i < localStorage.length; i++) {
                console.log(i)
                setDates(dates.concat({
                    id: localStorage.key(i),
                    date: JSON.parse(localStorage.getItem(`${i}`)),
                    
                }))
            }
    
        })
    }
    const addDate = (date) => {
        setDates(dates.concat({
            id: uuidv4(),
            date,
        }))
    }
    const addDateToLocalStorage = (id, date) => {
        (localStorage.setItem(`${id}`, JSON.stringify(date)));
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
                    
                    {isOpen && <div className='date-title-btn'>
                        <h3 className="dates-title">Dates</h3>
                        <button className='add-date-btn' onClick={toggleDateInput}>Add Date</button>
                    </div>}
                    {showDateInput && <DatesInput className='display' dates={dates} addDate={addDate}/>}
                </div>
                <div className='date-display-area'>
                    <DatesDisplay dates={dates} deleteDate={deleteDate} addDateToLocalStorage={addDateToLocalStorage} addDateOnLoad={addDateOnLoad()} />
                </div>
            </div>
        </main>
    )
}

export default AssignmentCalendar
