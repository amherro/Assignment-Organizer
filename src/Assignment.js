import React from 'react'
import { FaTimes, FaCheckCircle } from 'react-icons/fa'
const Assignment = () => {
    return (
        <div>
            <FaCheckCircle style={{color: 'green', cursor: 'pointer'}} />
            <h6 className='assignment-names'>Hello
                <FaTimes style={{color: 'red', cursor: 'pointer'}} />
            </h6>
            <p className='assignment-date'></p>
        </div>
    )
}

export default Assignment