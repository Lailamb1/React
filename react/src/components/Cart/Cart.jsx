import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncMock';
import "./Cart.css"

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    useEffect(() => {
        getProducts.then((data) => setProducts(data));
    }, []);

    const addToCart = (productId) => {
        setCart({
            ...cart,
            [productId]: cart[productId] ? cart[productId] + 1 : 1
        });
    };

    const removeFromCart = (productId) => {
        const updatedCart = { ...cart };
        delete updatedCart[productId];
        setCart(updatedCart);
    };

    const total = Object.keys(cart).reduce((acc, productId) => {
        const product = products.find((p) => p.id === parseInt(productId));
        return acc + (product ? parseFloat(product.price.replace(' U$D', '')) * cart[productId] : 0);
    }, 0);

    return (
        <div className="cart-container">
            <h2>Cart</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.title} - Price: {product.price}{' '}
                        <button onClick={() => addToCart(product.id)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
            <h3>Cart Items:</h3>
            <ul>
                {Object.keys(cart).map((productId) => {
                    const product = products.find((p) => p.id === parseInt(productId));
                    return (
                        <li key={productId}>
                            {product.title} - Price: {product.price} - Quantity: {cart[productId]}{' '}
                            <button className="remove-button" onClick={() => removeFromCart(productId)}>X</button>
                        </li>
                    );
                })}
            </ul>
            <p>Total: {total.toFixed(2)} U$D</p>
        </div>
    );
};

export default Cart;