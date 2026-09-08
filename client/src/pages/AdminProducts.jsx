import { useEffect, useState } from "react";
import api from "../services/api";

function AdminProducts() {

    const [products, setProducts] = useState([]);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const response = await api.get("/products");
        setProducts(response.data);
    };

    const addProduct = async () => {

        await api.post("/products", {
            name,
            description,
            price,
            stock
        });

        setName("");
        setDescription("");
        setPrice("");
        setStock("");

        fetchProducts();
    };

    const deleteProduct = async (id) => {

        await api.delete(`/products/${id}`);

        fetchProducts();
    };

    return (
        <div className="admin-container">

            <h1>Manage Products</h1>

            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <input
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
            />

            <button onClick={addProduct}>
                Add Product
            </button>

            <br /><br />

            {
                products.map((product) => (

                    <div className="admin-item" key={product._id}>

                        <h3>{product.name}</h3>

                        <p>{product.description}</p>

                        <h4>₹{product.price}</h4>

                        <button
                            onClick={() => deleteProduct(product._id)}
                        >
                            Delete
                        </button>

                    </div>

                ))
            }

        </div>
    );
}

export default AdminProducts;