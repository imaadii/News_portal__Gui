import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

const App = () => {
  return (
    <>
      <div className="w-5/6 m-auto">
        <Header />
        <Navbar />
        <Page1 />
        <Page2 />
      </div>
    </>
  );
};

export default App;
