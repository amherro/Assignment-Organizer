import React from 'react'
import { FaTimes, FaCheckCircle } from 'react-icons/fa'

const Assignment = ({ assignment }) => {
    return (
        <div>
            <FaCheckCircle style={{color: 'green', cursor: 'pointer'}} />
            <h6 className='assignment-names'>
                {assignment.name}
                <FaTimes 
                    style={{color: 'red', cursor: 'pointer'}} 
                />
            </h6>
            <p className='assignment-date'>
                {assignment.class}
            </p>
        </div>
    )
}

export default Assignment