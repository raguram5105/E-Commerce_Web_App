import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";

function Home() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await api.get("/products");
            console.log(response.data); // add this
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <h1>Products</h1>

            <div className="products">
                {products.map((product) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    />
                ))}
            </div>
        </>
    );
}

export default Home;