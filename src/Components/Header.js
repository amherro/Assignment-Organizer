import React from 'react'
import '../Styles/Header.css';

const Header = (openDateInput) => {
    return (
        <header>
            <button className='menu-btn' onClick={() => openDateInput}>
                <div className='menu-bar'></div>
                <div className='menu-bar'></div>
                <div className='menu-bar'></div>
            </button>
            <h1 className='main-title'>Assignment Organizer</h1>
        </header>
    )
}

export default Header
