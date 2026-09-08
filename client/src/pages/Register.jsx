import { useState } from "react";
import api from "../services/api";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        await api.post("/auth/register", {
            name,
            email,
            password
        });

        alert("Registered Successfully");

        // go to login page after register
        window.location.href = "/login";
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
            />

            <input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button>Register</button>
        </form>
    );
}

export default Register;

