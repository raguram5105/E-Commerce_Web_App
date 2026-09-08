import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const readUser = () => {
            setUser(JSON.parse(localStorage.getItem("user")));
        };

        readUser();

        // update if token/user changes in another tab/window
        window.addEventListener("storage", readUser);
        return () => window.removeEventListener("storage", readUser);
    }, []);

    // also re-check on every render after login/logout
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
    }, []);

    return (
        <nav>
            {user && user.role === "admin" && (
                <>
                    <Link to="/admin/products">Admin Products</Link>
                    <Link to="/admin/orders">Admin Orders</Link>
                </>
            )}
        </nav>
    );
}

export default Navbar;

