import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import DatesInput from './DatesInput';
import DatesDisplay from './DatesDisplay';
import '../Styles/AssignmentCalendar.css'

const AssignmentCalendar = () => {
    const [dates, setDates] = useState([]);
    const [showDateInput, setShowDateInput] = useState(false);
    const [hasItems, setHasItems] = useState(false);
    
    // const addDateOnLoad = () => {
    //     document.addEventListener('DOMContentLoaded', () => {
    //         for (let i = 0; i < dates.length; i++) {
    //             setDates(dates.concat({
    //                 id: localStorage.key(i),
    //                 date: localStorage.getItem(i)
    //             }))
    //         }
    //         return (
    //             <div className='date-display'>
    //                 {dates.map(({ date, id }) => {
    //                     return (
    //                         <div key={id}>
    //                             <Date date={date} id={id} deleteDate={deleteDate} addDateToLocalStorage={addDateToLocalStorage(id, date)}  />
    //                         </div>
    //                     )
    //                 })}
    //             </div>
    //         )
    //     })
    // }
    const addDate = (date) => {
        setDates(dates.concat({
            id: uuidv4(),
            date,
        }))
        setHasItems(hasItems === true)
    }
    const addDateToLocalStorage = (id, date) => {
        localStorage.setItem(`${id}`, date);
    }
    // const getDatesFromLocalStorage = (id) => {
    //     let storedDates = JSON.parse(localStorage.getItem(id));
    // }
    const toggleDateInput = () => {
        setShowDateInput(!showDateInput)
    }
    const deleteDate = (id) => {
        setDates(dates.filter((date) => date.id !== id))
    }
    const checkIfHasItems = () => {
        if (dates.length === 0) {
            setHasItems(hasItems === false);
        }
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
                    <DatesDisplay dates={dates} deleteDate={deleteDate} addDateToLocalStorage={addDateToLocalStorage} checkIfHasItems={checkIfHasItems} />
                </div>
            </div>
        </main>
    )
}

export default AssignmentCalendar
