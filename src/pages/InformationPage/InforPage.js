import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Informacion from '../../components/Products/Informacion'
import Footer from '../../components/Footer/Footer'

function InforPage() {

  return (
    // componentes y informacion
      <div className="dashboard-container" >
              <NavBar />
              {/* <ProductRecipes /> */}
              <Informacion/>
              <Footer />
      </div>
  )
}

export default InforPage