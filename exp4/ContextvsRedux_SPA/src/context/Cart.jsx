import { useCart } from './CartContext';

const Cart = () => {
    const { cart, removeFromCart } = useCart();

    return (
        <div style={{ padding: '20px' }}>
            <h3>Cart ({cart.length} items)</h3>
            {cart.length === 0 && <p>Cart is empty.</p>}
            {cart.map((item) => (
                <div key={item.cartId} style={{ marginBottom: '8px' }}>
                    {item.name} - ₹{item.price}{' '}
                    <button onClick={() => removeFromCart(item.cartId)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default Cart;
