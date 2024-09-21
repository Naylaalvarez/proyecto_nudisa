import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import DashPage from '../pages/DashPage.js/DashPage';
import ProductDetail from '../components/Products/ProductDetail';
import Cart from '../components/Cart/Cart';
import { CartProvider } from '../Context/CartContext';
import CalendarPage from '../pages/CalendarPage/CalendarPage';
import InforPage from '../pages/InformationPage/InforPage';
import FoodPage from '../pages/FoodPage/FoodPage';

function Routing() {
    return (
        <CartProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/dash" element={<DashPage />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/calen" element={<CalendarPage />} />
                    <Route path="/Info" element={<InforPage />} />
                    <Route path="/comi" element={<FoodPage />} />
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default Routing;
