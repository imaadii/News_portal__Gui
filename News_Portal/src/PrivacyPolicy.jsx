import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
    <Header />
    <Navbar />

    <div className="bg-white-100 text-black">
      <header className="bg-white py-4 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold border-b-4 border-blue-500 inline-block pb-2">
            Privacy and Policy
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="bg-gradient-to-r from-gray-300 to-gray-700 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            At <strong style={{ color: "rgb(30, 30, 178)" }}>The Global Witness</strong>, your privacy is important to us. This policy outlines how we collect, use, and protect your information:
          </h2>

          <h3 className="text-xl font-medium mb-2">Information We Collect</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Personal information you provide when signing up or contacting us.</li>
            <li className="mb-2">Non-personal information, such as browser type and IP address, for analytics purposes.</li>
          </ul>

          <h3 className="text-xl font-medium mb-2">How We Use Your Information</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">To improve the user experience and provide personalized content.</li>
            <li className="mb-2">To respond to inquiries and provide customer support.</li>
            <li className="mb-2">To analyze trends and gather demographic information.</li>
          </ul>

          <h3 className="text-xl font-medium mb-2">Protecting Your Information</h3>
          <p className="mb-4">
            We implement reasonable security measures to safeguard your information. However, no method of transmission over the internet is completely secure.
          </p>

          <p className="mb-4">
            For more details or questions about our privacy practices, please <a href="/contact" className="text-blue-500 underline">contact us</a>.
          </p>
        </section>
      </main>
    </div>
    <Footer />
    </>
  );
};

export default PrivacyPolicy;
