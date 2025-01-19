import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Page1 from "./components/Page1";
import Footer from "./components/Footer";
import NewsSlider from "./components/NewsSlider";
import AboutPage from "./AboutPage";
import Marquee from "./components/Marquee";


const App = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="w-5/6 m-auto relative h-full">
          <Header />
          <Navbar />
          <Marquee />
          <Page1 />
          <NewsSlider />
          <AboutPage />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
