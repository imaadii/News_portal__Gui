import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Footer from "./components/Footer";
import AdminNavbar from "./components/AdminNavbar";
import CustomForm from "./components/CustomForm";

const App = () => {
  return (
    <>
      <div>
        <div className="w-5/6 m-auto relative h-full">
          <Header />
          <Navbar />
          <Page1 />
          <Page2 />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
