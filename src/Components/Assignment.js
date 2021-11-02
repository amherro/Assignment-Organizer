import React, { useState } from 'react'
import '../Styles/Assignment.css'
import { FaTimes, FaCheckCircle } from 'react-icons/fa'

const Assignment = ({ name, subject, id, deleteAssignment }) => {
    const [complete, setComplete] = useState(false)
    const handleSetComplete = () => {
        setComplete(!complete)
    }
    return (
        <div className='assignment-section'>
            <FaCheckCircle 
                className={`complete-btn ${complete ? 'completed-btn-success' : ''}`}
                onClick={handleSetComplete}
            />
            <div className={`assignment-card ${complete ? 'complete-card-success' : ''} `}>
                <div className='top-of-card'>
                    <p className='assignment-names'>
                        {name}
                    </p>
                    <p className='assignment-date bottom-of-card'>
                        {`Class: ${subject}`}
                    </p>
                </div>
                <FaTimes 
                        style={{color: 'red', cursor: 'pointer'}} 
                        className='delete-btn'
                        onClick={() => deleteAssignment(id)}
                    />
            </div>
        </div>
    )
}

// const completeStyle = {
//     color: green
// }

export default Assignment