import React from 'react'
import AssignmentInput from './AssignmentInput';
import AssignmentDisplay from './AssignmentDisplay';

const Assignments = ({ assignments, addAssignment }) => {
    return (
        <div>
            <AssignmentInput addAssignment={addAssignment} />
            <AssignmentDisplay assignments={assignments} />
        </div>
    )
}
export default Assignments
