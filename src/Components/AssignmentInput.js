import React, { useState } from 'react'
import Button from './Button';
import { v4 as uuidv4 } from 'uuid';
import '../Styles/AssignmentInput.css'

const AssignmentInput = ({ addAssignment }) => {
    const [assignment, setAssignment] = useState({
        name: '',
        subject: '',
        id: uuidv4(),
    });
    const handleAddName = (e) => {
        setAssignment({
            name: e.target.value,
            subject: assignment.subject,
            id: assignment.id,
        })
    }
    const handleAddsubject = (e) => {
        setAssignment({
            name: assignment.name,
            subject: e.target.value,
            id: assignment.id,
        })
    }
    const submitNewAssignment = (e) => {
        e.preventDefault();
        addAssignment(assignment);
        setAssignment({
            name: '',
            subject: '',
            id: uuidv4()
        });
    }
    return (
        <form className='assignment-input' onSubmit={submitNewAssignment}>
            <label className='input-item'>Please enter a new assignment...</label>
            <div className='assignment-input-area'>
                <input className='input-item name-input' type='text' maxLength='50' placeholder='Assignment name' value={assignment.name} onChange={handleAddName}></input>
                <div className='input-bottom'>
                    <input className='input-item subject-input' type='text' maxLength='50' placeholder='Subject' value={assignment.subject} onChange={handleAddsubject}></input>
                    <Button text='Submit' />
            </div>
            </div>
        </form>
    )
}

export default AssignmentInput
