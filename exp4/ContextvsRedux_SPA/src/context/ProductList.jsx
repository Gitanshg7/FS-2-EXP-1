import { useCart } from './CartContext';

const products = [
    { id: 1, name: 'Notebook', price: 50 },
    { id: 2, name: 'Pen', price: 10 },
    { id: 3, name: 'Eraser', price: 5 },
    { id: 4, name: 'Marker', price: 30 },
];

const ProductList = () => {
    const { addToCart } = useCart();

    return (
        <div style={{ padding: '20px' }}>
            <h3>Products</h3>
            {products.map((p) => (
                <div key={p.id} style={{ marginBottom: '10px' }}>
                    {p.name} - ₹{p.price}{' '}
                    <button onClick={() => addToCart(p)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
