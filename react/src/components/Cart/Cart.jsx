import { useCart } from './CartContext';
import './Cart.css';

const Cart = () => {
    const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

    const handleQuantityChange = (productId, newQuantity, stock) => {
        if (newQuantity > 0 && newQuantity <= stock) {
            updateQuantity(productId, newQuantity);
        }
    };

    const calculateTotal = () => {
        return cart.reduce((total, product) => total + (parseFloat(product.price) * product.quantity), 0);
    };

    return (
        <div className="cart-container">
            <h2>Cart</h2>
            <div className="cart-items">
                {cart.map((product) => (
                    <div key={product.id} className="cart-item">
                        <div className="product-name">{product.title}</div>
                        <div className="quantity">
                            <button onClick={() => handleQuantityChange(product.id, product.quantity - 1, product.stock)}>-</button>
                            <span>{product.quantity}</span>
                            <button onClick={() => handleQuantityChange(product.id, product.quantity + 1, product.stock)}>+</button>
                        </div>
                        <div className='precio-total'>${parseFloat(product.price) * product.quantity}</div>
                        <button className="remove-button" onClick={() => removeFromCart(product.id)}>Remove</button>
                    </div>
                ))}
            </div>
            <div className="total">Total: ${calculateTotal()}</div>
            <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
        </div>
    );
};

export default Cart;
