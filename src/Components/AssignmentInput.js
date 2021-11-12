import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FaTimes } from 'react-icons/fa';
import '../Styles/AssignmentInput.css'

const AssignmentInput = ({ addAssignment, showAddAssignment, toggleAssignmentInput }) => {
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
        showAddAssignment ? <form className='assignment-input' onSubmit={submitNewAssignment}>
            <FaTimes className='close-menu-btn' onClick={toggleAssignmentInput} />
            <label className='input-item'>Please enter a new assignment...</label>
            <div className='assignment-input-area'>
                <input className='input-item name-input' type='text' maxLength='50' placeholder='Assignment name' value={assignment.name} onChange={handleAddName}></input>
                <div className='input-bottom'>
                    <input className='input-item subject-input' type='text' maxLength='50' placeholder='Subject' value={assignment.subject} onChange={handleAddsubject}></input>
                    <button className='submit-new-assingment'>Submit</button>
            </div>
            </div>
        </form> : <button className='show-assignment-input' onClick={toggleAssignmentInput}>Add Assignment</button>
    )
}

export default AssignmentInput
