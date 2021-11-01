import React, { useState } from 'react'
import '../Styles/Assignment.css'
import { FaTimes, FaCheckCircle } from 'react-icons/fa'

const Assignment = ({ name, subject }) => {
    const [complete, setComplete] = useState(false);

    const handleSetComplete = (e) => {
        e.preventDefault();
        setComplete(!complete)
        if(complete === true) {
            document.querySelector('.complete-btn').style.color = 'green'
            document.querySelector('.assignment-card').style.opacity = '0.45'
        } else {
            document.querySelector('.complete-btn').style.color = 'rgb(172, 172, 172)'
            document.querySelector('.assignment-card').style.opacity = '1.0'
        }
    }
    return (
        <div className='assignment-section'>
            <FaCheckCircle 
                onClick={handleSetComplete}
                
                className='complete-btn'
            />
            <div className='assignment-card'>
                <div className='top-of-card'>
                    <p className='assignment-names'>
                        {name}
                    </p>
                    <FaTimes 
                        style={{color: 'red', cursor: 'pointer'}} 
                        className='delete-btn'
                    />
                </div>
                <p className='assignment-date bottom-of-card'>
                    {`Class: ${subject}`}
                </p>
            </div>
        </div>
    )
}

// const completeStyle = {
//     style: {

//     }
// }

export default Assignment