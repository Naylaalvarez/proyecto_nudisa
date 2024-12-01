import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Informacion from '../../components/Products/Informacion'
import Footer from '../../components/Footer/Footer'



function InforPage() {

  return (
    // componentes y informacion
      <div className="dashboard-container" >
              <NavBar />
  
            <div style={{ margin: '5% 0px 6% 15%' }} >
                <Informacion/>
            </div>
    
          <Footer />
      </div>
  )
}

export default InforPage