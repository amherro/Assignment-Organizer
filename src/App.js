import React, { useState } from 'react'
import AssignmentCalendar from './Components/AssignmentCalendar'
import Header from './Components/Header'
import './Styles/App.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDateInput = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <Header openDateInput={openDateInput} />
      <AssignmentCalendar isOpen={isOpen} />
    </div>
  )
}

export default App
