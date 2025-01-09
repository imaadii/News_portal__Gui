import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        try {
            const { email, password } = formData;

            // API call with query parameters
            const response = await axios.post(
                "https://news-portal-suby.onrender.com/auth/login?email=adi123@example.con&password=1234",
                {
                    params: { email, password }, // Pass email and password as query parameters
                }
            );

            if (response.status === 200) {
                setMessage("Login successful!");
                // Optionally, store token or user details
                const token = response.data.token; // Assuming the API returns a token
                localStorage.setItem("token", token);
            } else {
                setError("Unexpected response from server.");
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.message || "Login failed. Please try again.");
            } else {
                setError("Network error. Please try again later.");
            }
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mb-4">Login</h2>
                    <form className="p-4 border rounded shadow" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                    {message && <div className="alert mt-3 alert-success text-center">{message}</div>}
                    {error && <div className="alert mt-3 alert-danger text-center">{error}</div>}
                </div>
            </div>
            <h4 className="text-center mt-5">Don't have an account? <a className="no-underline text-black group hover:text-blue-700" href="/signup"><span className="group-hover:text-blue-700">Signup</span></a></h4>
        </div>
    );
};

export default Login;
