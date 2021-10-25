import React from 'react'

const AssignmentInput = ({ assignments, addAssignments }) => {

    return (
        <form>
            <label>Please enter a new assignment...</label>
            <input type='text' placeholder='Assignment name'></input>
            <input type='text' placeholder='Class'></input>
        </form>
    )
}

export default AssignmentInput
