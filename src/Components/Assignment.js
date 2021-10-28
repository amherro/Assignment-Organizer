import React from 'react'
import '../Styles/Assignment.css'
import { FaTimes, FaCheckCircle } from 'react-icons/fa'

const Assignment = ({ name, subject }) => {
    return (
        <div className='assignment-card'>
            <div className='top-of-card'>
                <FaCheckCircle 
                        style={{color: 'green', cursor: 'pointer'}}
                        className='complete-btn'
                />
                <h6 className='assignment-names'>
                    {name}
                </h6>
                <FaTimes 
                    style={{color: 'red', cursor: 'pointer'}} 
                    className='delete-btn'
                />
            </div>
            <p className='assignment-date bottom-of-card'>
                {subject}
            </p>
        </div>
    )
}

export default Assignment