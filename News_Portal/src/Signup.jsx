import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNo: "",
        dob: "",
        city: "",
        password: "",
        confirmPassword: ""
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

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const response = await axios.post(
                "https://news-portal-suby.onrender.com/auth/signup",
                formData,
                { headers: { "Content-Type": "application/json" } }
            );
            if (response.status === 200 || response.status === 201) {
                setMessage("Signup successful! Please log in.");
                setFormData({
                    name: "",
                    email: "",
                    phoneNo: "",
                    dob: "",
                    city: "",
                    password: "",
                    confirmPassword: ""
                }); // Reset form after successful signup
            } else {
                setError("Unexpected response from server.");
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.message || "Signup failed. Please try again.");
            } else {
                setError("Network error. Please try again later.");
            }
        }
    };

    return (
        <>
            <Header />
            <Navbar />
            <div className="col-sm-4 offset-sm-4 mt-5">
                <h2 className="text-center mb-4">Signup</h2>
                <form className="p-4 border rounded" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
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
                        <label htmlFor="phoneNo" className="form-label">Phone Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phoneNo"
                            name="phoneNo"
                            value={formData.phoneNo}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dob" className="form-label">Date of Birth</label>
                        <input
                            type="date"
                            className="form-control"
                            id="dob"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="city" className="form-label">City</label>
                        <input
                            type="text"
                            className="form-control"
                            id="city"
                            name="city"
                            value={formData.city}
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
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                </form>
                {message && <div className="alert mt-3 alert-success text-center">{message}</div>}
                {error && <div className="alert mt-3 alert-danger text-center">{error}</div>}
            </div>
        </>
    );
};

export default Signup;
