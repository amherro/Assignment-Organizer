import React, { useState } from 'react';
import Assignments from './Assignments';
import { FaTimes } from 'react-icons/fa';
import '../Styles/Date.css';

const Date = ({ date, id, deleteDate }) => {
    const [assignments, setAssignments] = useState([]);
    const [showAddAssignment, setShowAddAssignment] = useState(false);

    const addAssignment = (assignment) => {
        setAssignments(assignments.concat(assignment))
    }
    const toggleAssignmentInput = () => {
        setShowAddAssignment(!showAddAssignment);
    }
    const deleteAssignment = (id) => {
        setAssignments(assignments.filter((assignment) => assignment.id !== id))
    }

    return (
        <div className='date-section'>
            <FaTimes style={{color:'red', cursor:'pointer'}} onClick={() => deleteDate(id)} className='date-delete-btn' />
            <div className='add-assignment-section'>
                <h5>{date}</h5>
                <button className='add-assignment-btn' onClick={toggleAssignmentInput}>Add Assignment</button>
                <div className='assignment-display'>
                    <Assignments assignments={assignments} addAssignment={addAssignment} showAddAssignment={showAddAssignment} deleteAssignment={deleteAssignment} />
                </div>
            </div>
        </div>
    )
}

export default Date
