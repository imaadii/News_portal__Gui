import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation
import Navbar from "./components/Navbar"; // Adjust the import path if necessary
import Header from "./components/Header";
const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate(); // To redirect after login

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

            // API call with query parameters using Axios config
            const response = await axios.post(
                "https://news-portal-suby.onrender.com/auth/login",
                null, // No request body
                {
                    params: { email, password }, // Query parameters
                }
            );

            if (response.status === 200) {
                setMessage("Login successful!");
                const token = response.data.token; // Assuming token is returned
                localStorage.setItem("token", token); // Store token in localStorage
                navigate("/newsGrid"); // Redirect to admin page
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
        <>
            {/* Navbar included here */}
            <Header/>
            <Navbar />
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
                            <button type="submit"  className="bg-blue-700 px-3 py-2 font-medium text-white rounded group hover:bg-white hover:text-blue-700 transition-colors duration-300">Login</button>
                        </form>
                        {message && <div className="alert mt-3 alert-success text-center">{message}</div>}
                        {error && <div className="alert mt-3 alert-danger text-center">{error}</div>}
                    </div>
                </div>
              
                
            </div>
        </>
    );
};

export default Login;
