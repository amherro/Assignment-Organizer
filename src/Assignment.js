import React from 'react'
import { FaTimes, FaCheckCircle } from 'react-icons/fa'

const Assignment = ({ name, subject }) => {
    return (
        <div>
            <FaCheckCircle style={{color: 'green', cursor: 'pointer'}} />
            <h6 className='assignment-names'>
                {name}
                <FaTimes 
                    style={{color: 'red', cursor: 'pointer'}} 
                />
            </h6>
            <p className='assignment-date'>
                {subject}
            </p>
        </div>
    )
}

export default Assignment