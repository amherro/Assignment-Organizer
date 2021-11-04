import React, { useState } from 'react'
import Button from './Button'
import '../Styles/DatesInput.css'

const DatesInput = ({ addDate }) => {
    const [ date, setDate ] = useState('')
    
    const typeInDate = (e) => {
        setDate(e.target.value)
    }

    const submitDate = (e) => {
        e.preventDefault();
        addDate(date)
        setDate('')
    }

    return (
        <form className='dates-input' onSubmit={submitDate}>
            <label className='input-label'>Please enter a new date...</label>
            <input type='text' value={date} onChange={typeInDate} ></input>
            <Button text='Submit' />
        </form>
    )
}

export default DatesInput
