import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Signup from "./Signup";
import NewsComponent from "./category";
import "./index.css";
import "./Gauri.css";
import CategoryPage from "./CategoryPage"; // Import the CategoryPage component

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<NewsComponent />} />
        <Route path="/news/:category" element={<CategoryPage />} />{" "}
        {/* Category News Page */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
