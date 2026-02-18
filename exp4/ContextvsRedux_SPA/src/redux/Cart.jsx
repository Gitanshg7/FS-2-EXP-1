import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './cartSlice';

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div style={{ padding: '20px' }}>
            <h3>Cart ({cart.length} items)</h3>
            {cart.length === 0 && <p>Cart is empty.</p>}
            {cart.map((item) => (
                <div key={item.cartId} style={{ marginBottom: '8px' }}>
                    {item.name} - ₹{item.price}{' '}
                    <button onClick={() => dispatch(removeFromCart(item.cartId))}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default Cart;
