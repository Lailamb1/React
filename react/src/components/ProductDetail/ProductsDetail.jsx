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
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p><strong>Precio:</strong>{product.price}</p>
            <p><strong>Cantidad disponible:</strong> {product.stock}</p>
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