import React, { useState } from 'react'
import Button from './Button';
import { v4 as uuidv4 } from 'uuid';
import AssignmentInput from './AssignmentInput';
import AssignmentDisplay from './AssignmentDisplay';

const DatesDisplay = ({ dates }) => {
    const [assignments, setAssignments] = useState([]);

    const addAssignment = (assignment) => {
        setAssignments(assignments.concat(assignment))
    }

    return (
        <div className='assignment-display'>
            {dates.map((date) => {
                return (
                    <div key={uuidv4()}>
                        <h3>{date} <Button text='Add Assignment' /></h3>
                        <AssignmentInput assignments={assignments} addAssignment={addAssignment} />
                        <AssignmentDisplay assignments={assignments} />
                    </div>
                )
            })}
        </div>
    )
}

export default DatesDisplay
