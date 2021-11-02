import React from 'react'
import AssignmentInput from './AssignmentInput';
import AssignmentDisplay from './AssignmentDisplay';

const Assignments = ({ assignments, addAssignment, showAddAssignment }) => {
    
    return (
        <div>
            {showAddAssignment && <AssignmentInput addAssignment={addAssignment} />}
            <AssignmentDisplay assignments={assignments}  />
        </div>
    )
}
export default Assignments
