import { useCart } from './CartContext';
import "./Cart.css"

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        {product.name} - Price: {product.price}
                        <button onClick={() => removeFromCart(product.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
};

export default Cart;