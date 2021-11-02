import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Assignment from './Assignment';

const AssignmentDisplay = ({ assignments }) => {
    
    return (
        <div>
            {assignments.map((assignment) => {
                return (
                    <div key={uuidv4()}>
                        <Assignment 
                            assignment={assignment}
                            name={assignment.name} 
                            subject={assignment.subject} 
                            
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default AssignmentDisplay
