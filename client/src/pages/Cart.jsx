import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

function Cart() {

    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div className="cart">
            <h1>Cart</h1>

            {
                cart.map((item) => (
                    <CartItem
                        key={item._id}
                        item={item}
                        removeFromCart={removeFromCart}
                    />
                ))
            }

            <Link to="/checkout">
    <button>Proceed to Checkout</button>
</Link>
        </div>
    );
}

export default Cart;