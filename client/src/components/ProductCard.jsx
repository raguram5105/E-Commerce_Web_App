import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h4>₹{product.price}</h4>

            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <button onClick={() => addToCart(product)}>Add To Cart</button>
                <Link to={`/products/${product._id}`}>View</Link>
            </div>
        </div>
    );
}

export default ProductCard;

