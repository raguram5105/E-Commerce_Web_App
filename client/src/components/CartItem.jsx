function CartItem({ item, removeFromCart }) {

    return (
        <div className="cart-item">
            <h3>{item.name}</h3>

            <h4>₹{item.price}</h4>

            <button onClick={() => removeFromCart(item._id)}>
                Remove
            </button>
        </div>
    );
}

export default CartItem;