import { useSelector } from 'react-redux';

const Navbar = () => {
    const cart = useSelector((state) => state.cart);

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', background: '#d4edda' }}>
            <h2>🛒 Shop (Redux)</h2>
            <span>Cart Items: {cart.length}</span>
        </nav>
    );
};

export default Navbar;
