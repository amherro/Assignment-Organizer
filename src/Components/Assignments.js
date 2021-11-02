import React from 'react'
import AssignmentInput from './AssignmentInput';
import AssignmentDisplay from './AssignmentDisplay';

const Assignments = ({ assignments, addAssignment, showAddAssignment, deleteAssignment }) => {
    
    return (
        <div>
            {showAddAssignment && <AssignmentInput addAssignment={addAssignment} />}
            <AssignmentDisplay assignments={assignments} deleteAssignment={deleteAssignment}  />
        </div>
    )
}
export default Assignments
