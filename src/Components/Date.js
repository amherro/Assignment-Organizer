import React, { useState } from 'react';
import Assignments from './Assignments';

const Date = ({ date }) => {
    const [assignments, setAssignments] = useState([]);
    const [showAddAssignment, setShowAddAssignment] = useState(false);

    const addAssignment = (assignment) => {
        setAssignments(assignments.concat(assignment))
    }
    const toggleAssignmentInput = () => {
        setShowAddAssignment(!showAddAssignment);
    }

    return (
        <div>
            <h5>{date} <button onClick={toggleAssignmentInput}>Add Assignment</button></h5>
            <div className='assignment-display'>
                <Assignments assignments={assignments} addAssignment={addAssignment} showAddAssignment={showAddAssignment} />
            </div>
        </div>
    )
}

export default Date
