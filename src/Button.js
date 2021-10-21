import React from 'react'

const Button = ({ text, color, addDate, toggleDateInput }) => {
    return (
        <button style={{backgroundColor: color}} onClick={toggleDateInput}>
            {text}
        </button>
    )
}

export default Button;