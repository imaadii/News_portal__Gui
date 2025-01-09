import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

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
        </>
    );
};

export default App;
