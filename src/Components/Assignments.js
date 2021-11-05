import React from 'react'
import AssignmentInput from './AssignmentInput';
import AssignmentDisplay from './AssignmentDisplay';

const Assignments = ({ assignments, addAssignment, showAddAssignment, deleteAssignment }) => {
    
    return (
        <div>
             
            {showAddAssignment && <div className='assignment-section'>
                <AssignmentInput 
                    addAssignment={addAssignment} 
                /> 
                <AssignmentDisplay 
                    assignments={assignments} 
                    deleteAssignment={deleteAssignment} 
                />
            </div>}
            
        </div>
    )
}
export default Assignments
