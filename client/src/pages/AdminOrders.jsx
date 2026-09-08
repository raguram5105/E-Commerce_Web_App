import { useEffect, useState } from "react";
import api from "../services/api";

function AdminOrders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {

        const response = await api.get("/orders");

        setOrders(response.data);
    };

    const markDelivered = async (id) => {

        await api.put(`/orders/${id}`, {
            status: "Delivered"
        });

        fetchOrders();
    };

    return (

        <div className="admin-container">

            <h1>Manage Orders</h1>

            {
                orders.map((order) => (

                    <div className="admin-item" key={order._id}>

                        <h3>Status : {order.status}</h3>

                        <h4>Total Amount : ₹{order.totalAmount}</h4>

                        <button
                            onClick={() => markDelivered(order._id)}
                        >
                            Mark Delivered
                        </button>

                    </div>

                ))
            }

        </div>

    );
}

export default AdminOrders;