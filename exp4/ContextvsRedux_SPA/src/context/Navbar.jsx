import { useCart } from './CartContext';

const Navbar = () => {
    const { cart } = useCart();

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', background: '#eee' }}>
            <h2>🛒 Shop (Context API)</h2>
            <span>Cart Items: {cart.length}</span>
        </nav>
    );
};

export default Navbar;
