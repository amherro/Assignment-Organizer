import React, { useState } from 'react';
import Assignments from './Assignments';
import { FaTimes, FaAngleDown } from 'react-icons/fa';
import '../Styles/Date.css';

const Date = ({ date, id, deleteDate }) => {
    const [assignments, setAssignments] = useState([]);
    const [showDateInfo, setShowDateInfo] = useState(false);
    const [showAddAssignment, setShowAddAssignment] = useState(false);

    const addAssignment = (assignment) => {
        setAssignments(assignments.concat(assignment))
    }
    // const toggleOpenInput = () => {
    //     if(showAddAssignment) {
    //         // document.querySelector('.add-assignment-btn').style.animation = 'animation: flipArrowUp 0.5s forwards;'

    //         document.querySelector('.add-assignment-btn').classList.add('flip-arrow-down')
    //         document.querySelector('.add-assignment-btn').classList.remove('flip-arrow-up')
    //     } else {
    //         // document.querySelector('.add-assignment-btn').style.animation = 'animation: flipArrowDown 0.5s forwards;'
    //         document.querySelector('.add-assignment-btn').classList.add('flip-arrow-up')
    //         document.querySelector('.add-assignment-btn').classList.remove('flip-arrow-down')
    //     }
    // }
    const toggleDateInfo = () => {
        setShowDateInfo(!showDateInfo);
    }
    const toggleAssignmentInput = () => {
        setShowAddAssignment(!showAddAssignment);
        // toggleOpenInput();
    }
    const deleteAssignment = (id) => {
        setAssignments(assignments.filter((assignment) => assignment.id !== id))
    }

    return (
        <div className='date-section'>
            <div className='add-assignment-top'>
                <FaTimes style={{color:'red', cursor:'pointer'}} onClick={() => deleteDate(id)} className='date-delete-btn' />
                <h4 className='date'>{date}</h4>
                <FaAngleDown className={`add-assignment-btn ${date}`} onClick={toggleDateInfo} ></FaAngleDown>
            </div>
            {showDateInfo && <div className='assignment-display'>
                <Assignments assignments={assignments} addAssignment={addAssignment} showAddAssignment={showAddAssignment} deleteAssignment={deleteAssignment} toggleAssignmentInput={toggleAssignmentInput} />
            </div>}
        </div>
    )
}

export default Date
