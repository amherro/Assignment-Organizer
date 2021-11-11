import React from 'react'
import AssignmentInput from './AssignmentInput';
import AssignmentDisplay from './AssignmentDisplay';

const Assignments = ({ assignments, addAssignment, showAddAssignment, deleteAssignment, toggleAssignmentInput }) => {
    
    return (
        <div>
             
            <div className='assignment-section'>
                <AssignmentInput 
                    addAssignment={addAssignment} 
                    showAddAssignment={showAddAssignment}
                    toggleAssignmentInput={toggleAssignmentInput}
                    
                /> 
                <AssignmentDisplay 
                    assignments={assignments} 
                    deleteAssignment={deleteAssignment} 
                />
            </div>
            
        </div>
    )
}
export default Assignments
