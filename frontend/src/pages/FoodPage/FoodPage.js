import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import ProductRecipes from '../../components/Products/ProductRecipes'
import Comida from '../../components/Products/Comida'
import Footer from '../../components/Footer/Footer'

function FoodPage() {
  return (
    <div className="dashboard-container" >
            <NavBar />
            {/* <ProductRecipes /> */}
            <div style={{ margin: '5vw 0px 10px 15%' }} >
              <Comida />
            </div>
      
              <Footer />
       
            
    </div>
  )
}

export default FoodPage