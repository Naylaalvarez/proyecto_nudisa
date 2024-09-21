import React, { createContext, useState } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Crear el proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Función para agregar productos al carrito
    const addToCart = (product) => {
        // prevCart es el valor anterior de carrito
        setCart((prevCart) => [...prevCart, product]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
