import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import AdminProducts from "./pages/AdminProducts";
import AdminOrders from "./pages/AdminOrders";

function App() {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    const requireAuth = ({ children }) => {
        if (!token) return <Navigate to="/login" replace />;
        return children;
    };

    const requireAdmin = ({ children }) => {
        if (!token) return <Navigate to="/login" replace />;
        if (!user || user.role !== "admin") return <Navigate to="/" replace />;
        return children;
    };


    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route
                    path="/"
                    element={
                        token ? (
                            <Home />
                        ) : (
                            <Navigate to="/login" replace />
                        )
                    }
                />

                <Route
                    path="/cart"
                    element={
                        token ? <Cart /> : <Navigate to="/login" replace />
                    }
                />

                <Route
                    path="/checkout"
                    element={
                        token ? <Checkout /> : <Navigate to="/login" replace />
                    }
                />

                <Route
                    path="/admin/products"
                    element={
                        requireAdmin({ children: <AdminProducts /> })
                    }
                />

                <Route
                    path="/admin/orders"
                    element={
                        requireAdmin({ children: <AdminOrders /> })
                    }
                />
            </Routes>
        </>
    );
}

export default App;

