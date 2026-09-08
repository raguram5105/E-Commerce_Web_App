import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import api from "../services/api";

function Checkout() {

    const { cart } = useContext(CartContext);

    const placeOrder = async () => {

        const products = cart.map((item) => ({
            productId: item._id,
            quantity: 1
        }));

        const totalAmount = cart.reduce(
            (sum, item) => sum + item.price,
            0
        );

        try {

            await api.post("/orders", {
                products,
                totalAmount
            });

            alert("Order Placed Successfully");

        } catch (error) {

            console.log(error);

        }
    };

    const totalAmount = cart.reduce(
        (sum, item) => sum + item.price,
        0
    );

    return (
        <div className="checkout">

            <h1>Checkout</h1>

            {
                cart.map((item) => (
                    <div key={item._id}>
                        <h3>{item.name}</h3>
                        <p>₹{item.price}</p>
                    </div>
                ))
            }

            <h2>Total: ₹{totalAmount}</h2>

            <button onClick={placeOrder}>
                Place Order
            </button>

        </div>
    );
}

export default Checkout;