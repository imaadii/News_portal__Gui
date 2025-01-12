import React, { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";

function CustomForm() {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = "https://news-portal-suby.onrender.com/custom/save";

    // Construct the query string with parameters
    const queryParams = new URLSearchParams({
      cato: category,
      tittle: title,
      desc: description,
    }).toString();

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // Change content type to URL encoded
        },
        body: queryParams, // Send the parameters in the body
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setCategory("");
        setTitle("");
        setDescription("");
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#e9ecef",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "600px",
            width: "90%",
            padding: "40px",
            border: "1px solid #ddd",
            borderRadius: "15px",
            backgroundColor: "#fff",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              marginBottom: "30px",
              fontSize: "28px",
              color: "#333",
            }}
          >
            Submit Your Details
          </h1>
          <label
            style={{
              marginBottom: "10px",
              display: "block",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#555",
            }}
          >
            Category:
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category (e.g., business)"
            required
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "16px",
            }}
          />

          <label
            style={{
              marginBottom: "10px",
              display: "block",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#555",
            }}
          >
            Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            required
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "16px",
            }}
          />

          <label
            style={{
              marginBottom: "10px",
              display: "block",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#555",
            }}
          >
            Description:
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            rows="6"
            required
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "30px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "16px",
            }}
          ></textarea>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default CustomForm;
