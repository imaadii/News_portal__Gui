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
import CustomForm from "./components/CustomForm";
import Page1 from "./components/Page1";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsGrid from "./NewsGrid";
import Contact from "./contact";
import ContactUsGrid from "./ContactUsGrid";
import Feedback from "./Feedback";
import FeedbackGrid from "./FeedbackGrid";
import AboutPage from "./AboutPage";
import TermsAndConditions from "./TermsAndConditions";
import CustomPage from"./CustomPage";
import PrivacyPolicy from "./PrivacyPolicy";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<NewsComponent />} />
        <Route path="/news/:category" element={<CategoryPage />} />{" "}
        <Route path="/categoryForm" element={<CustomForm />} />
        <Route path="/newsGrid" element={<NewsGrid />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cg" element={<ContactUsGrid />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/fb" element={<FeedbackGrid />} />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/cp" element={<CustomPage />} />
        <Route path="/TermsAndCondition" element={<TermsAndConditions />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

        {/* Category News Page */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
