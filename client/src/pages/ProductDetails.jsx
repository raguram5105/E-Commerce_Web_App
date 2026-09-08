import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);

    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const response = await api.get(`/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    if (!product) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="card" style={{ margin: "50px auto" }}>
            <h2>{product.name}</h2>

            <p>{product.description}</p>

            <h3>₹{product.price}</h3>

            <p>Stock: {product.stock}</p>

            <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
    );
}

export default ProductDetails;

