import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Assignment from './Assignment';

const AssignmentDisplay = ({ assignments, deleteAssignment }) => {
    
    return (
        <div>
            {assignments.map((assignment) => {
                return (
                    <Assignment 
                        assignment={assignment}
                        name={assignment.name} 
                        subject={assignment.subject} 
                        deleteAssignment={deleteAssignment}
                        key={uuidv4()}
                        id={assignment.id}
                    />
                )
            })}
        </div>
    )
}

export default AssignmentDisplay
