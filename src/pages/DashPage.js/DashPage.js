import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Carousel from '../../components/Carousel/Carousel';
import ProductList from '../../components/Products/ProductList';
import ProductRecipes from '../../components/Products/ProductRecipes.js';
import FoodPage from '../FoodPage/FoodPage.js';
import Footer from '../../components/Footer/Footer.js';

function DashPage() {
    return (
        <div className="dashboard-container" >
            <NavBar />
            <div className="carousel-container" style={{  }}> 
            {/* marginTop: '40vw' */}
                <Carousel />
            </div>
            <div className="product-list-container" >
                {/* style={{ margin: ' 85px 100px' }} */}
                {/* <ProductList />*/}
                {/* <h2>nudisa</h2> */}
            </div>
            {/* top, reith, boton, left */}
            <div style={{ margin: '40% 0px -10% -790px' }} >
                < Footer />
            </div>
            
        </div>
    );
}

export default DashPage;
