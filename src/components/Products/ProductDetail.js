import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';
// Simulamos una lista de productos
const products = [
    {
        id: 1,
        name: 'Producto 1',
        price: 100,
        description: 'Descripción completa del Producto 1.',
        image: 'https://images.fravega.com/f500/6782f58fcd5679f80de5d03d8c984a2d.jpg',
    },
    {
        id: 2,
        name: 'Producto 2',
        price: 150,
        description: 'Descripción completa del Producto 2.',
        image: 'https://via.placeholder.com/300x200',
    }
];

function ProductDetail() {
    const { addToCart } = useContext(CartContext);
    const { id } = useParams();
    // id es el nombre que le pasamos en el routing a products.
    const navegate = useNavigate();
    // navegate hace conenciones con otras secciones
    const product = products.find(p => p.id === parseInt(id))
// el find busca el que sea id especificamente.
    if (!product) {
        return <div>Producto no encontrado</div>
    }

    const goToCart = () => {
        navegate('/cart');
        // le da parametro /cart
    };

    return (
        <div>{product.name}
            <img src={product.image}></img>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <button onClick={() => addToCart(product)}>
                Agregar al Carrito
            </button>
            <button onClick={goToCart} style={{ marginLeft: '10px' }}>
                Ver Carrito
                {/* se puede utilizar en inicio de secion y registro */}
            </button>
        </div>
    )
}

export default ProductDetail