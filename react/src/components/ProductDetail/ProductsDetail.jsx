import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock';
import './ProductsDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const product = getProduct(id);

    const [count, setCount] = useState(1);
    const [cart, setCart] = useState([]);

    const increment = () => {
        if (count < product.stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const addToCart = () => {
        if (count <= product.stock) {
            const newItem = { ...product, quantity: count };
            setCart([...cart, newItem]);
            setCount(1);
            alert('Producto agregado al carrito');
        } else {
            alert('No hay suficiente stock disponible');
        }
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
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>
            <div className="agregar-carrito">
                <button onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetail;