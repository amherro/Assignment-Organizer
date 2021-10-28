import React, { useState } from 'react'
import Button from './Button';

const AssignmentInput = ({ addAssignment }) => {
    const [assignment, setAssignment] = useState({
        name: '',
        subject: '',
    });
    const handleAddName = (e) => {
        setAssignment({
            name: e.target.value,
            subject: assignment.subject,
        })
    }
    const handleAddsubject = (e) => {
        setAssignment({
            name: assignment.name,
            subject: e.target.value,
        })
    }
    const submitNewAssignment = (e) => {
        e.preventDefault();
        addAssignment(assignment);
        setAssignment({
            name: '',
            subject: '',
        });
    }
    return (
        <form onSubmit={submitNewAssignment}>
            <label>Please enter a new assignment...</label>
            <input type='text' maxLength='50' placeholder='Assignment name' value={assignment.name} onChange={handleAddName}></input>
            <input type='text' maxLength='50' placeholder='Subject' value={assignment.subject} onChange={handleAddsubject}></input>
            <Button text='Submit' />
        </form>
    )
}

export default AssignmentInput
