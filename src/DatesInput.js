import React from 'react'
import Button from './Button'

const DatesInput = () => {
    return (
        <form className='dates-input'>
            <label className='input-label'>Please enter a new date...</label>
            <input type='text'></input>
            <Button text='Submit' />
        </form>
    )
}

export default DatesInput
