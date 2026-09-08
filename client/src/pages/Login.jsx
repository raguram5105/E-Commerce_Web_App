import { useState } from "react";
import api from "../services/api";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        const response = await api.post("/auth/login", {
            email,
            password
        });

        localStorage.setItem("token", response.data.token);
localStorage.setItem(
    "user",
    JSON.stringify(response.data.user)
);

        alert("Login Successful");

        // go to home after login
        window.location.href = "/";
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button>Login</button>
        </form>
    );
}

export default Login;
