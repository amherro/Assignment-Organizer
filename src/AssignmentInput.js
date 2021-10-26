import React, { useState } from 'react'
import Button from './Button';

const AssignmentInput = ({ assignments, addAssignment }) => {
    const [assignment, setAssignment] = useState({
        name: '',
        class: '',
    });
    const handleAddName = (e) => {
        setAssignment({
            name: e.target.value,
            class: assignment.class,
        })
    }
    const handleAddClass = (e) => {
        setAssignment({
            name: assignment.name,
            class: e.target.value,
        })
    }
    const submitNewAssignment = (e) => {
        e.preventDefault();
        addAssignment(assignment)
        setAssignment('')
    }
    return (
        <form onSubmit={submitNewAssignment}>
            <label>Please enter a new assignment...</label>
            <input type='text' placeholder='Assignment name' value={assignment.name} onChange={handleAddName}></input>
            <input type='text' placeholder='Class' value={assignment.class} onChange={handleAddClass}></input>
            <Button text='Submit' />
        </form>
    )
}

export default AssignmentInput
