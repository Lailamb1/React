import { useCart } from '../Cart/CartContext';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock';
import './ProductsDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const product = getProduct(id);
    const { addToCart } = useCart();

    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    return (
        <div className="product-detail">
            <h1>Producto {product.id}</h1>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>Precio: {product.price}</p>
            <p>Cantidad disponible: {product.stock}</p>
            <div className="quantity">
                <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity < product.stock ? quantity + 1 : quantity)}>+</button>
            </div>
            <div className="agregar-carrito">
            <button onClick={handleAddToCart}>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ProductDetail;