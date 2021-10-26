import React from 'react'
import { FaTimes, FaCheckCircle } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid';

const AssignmentDisplay = ({ assignments }) => {
    return (
        <div>
            {assignments.map((assignment) => {
                return (
                    <div key={uuidv4()}>
                        <FaCheckCircle style={{color: 'green', cursor: 'pointer'}} />
                        <h6 className='assignment-names'>{assignment.name}</h6>
                        <p className='assignment-date'>{assignment.class}</p>
                        <FaTimes style={{color: 'red', cursor: 'pointer'}} />
                    </div>
                )
            })}
        </div>
    )
}

export default AssignmentDisplay
