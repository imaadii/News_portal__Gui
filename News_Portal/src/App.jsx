import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
<<<<<<< HEAD
import Slideshow from "./Slideshow";
import Footer from "./Footer";
const App = () => {
    return (
        // <div style={{ textAlign: "center", marginTop: "50px" }}>
        //     <h1>Welcome to the App!</h1>
        //     <p>This is the homepage.</p>
        //     <a href="/signup" style={{ textDecoration: "none", color: "blue" }}>
        //     <button type="submit" className="btn btn-primary w-20">Sign Up</button>
        //     </a>
        //     <a href="/login" style={{ textDecoration: "none", color: "blue" }}>
        //     <button type="submit" className="m-2 btn btn-primary w-20">Login</button>
        //     </a>
        // </div>
        <>
        
        <Header />
        <Navbar />
        <Page1 />
        <Page2 />
        <Footer/>
        </>
    );
=======
import Footer from "./components/Footer";

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
>>>>>>> a6b6c309b56bf3a73d3bcaa33649a5b32778e660
};

export default App;
