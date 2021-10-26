import React, { useState } from 'react';
import Assignments from './Assignments';
import Button from './Button';

const Date = ({ date }) => {
    const [assignments, setAssignments] = useState([]);

    const addAssignment = (assignment) => {
        setAssignments(assignments.concat(assignment))
    }
    return (
        <div>
            <h5>{date} <Button text='Add Assignment'/></h5>
            <div className='assignment-display'>
                <Assignments assignments={assignments} addAssignment={addAssignment} />
            </div>
        </div>
    )
}

export default Date
