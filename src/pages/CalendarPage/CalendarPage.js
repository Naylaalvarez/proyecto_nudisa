import React from 'react'
import Calendar from '../../components/Calendar/Calendar'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'


function CalendarPage() {

  return (
    // componentes y informacion
    <div className="dashboard-container">
      <div>
        <NavBar />
      </div>
      <div>
        <Calendar/>
      </div>
      {/* top, reith, boton, left */}
      <div style={{ margin: '19% 0px -19% -740px' }} >
        <Footer/>
      </div>
    </div>
    
    
  )
}

export default CalendarPage