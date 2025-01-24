import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const TermsAndConditions = () => {
  return (
    <>
     <Header />
     <Navbar />
    <div className="bg-white-100 text-black">
      <header className="bg-white py-4 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold border-b-4 border-blue-500 inline-block pb-2">
            Terms and Conditions
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="bg-gradient-to-r from-gray-300 to-gray-500 bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to <strong style={{ color: "rgb(30, 30, 178)" }}>The Global Witness</strong>. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions:
          </h2>

          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">You must not use the website for any illegal or unauthorized purposes.</li>
            <li className="mb-2">Content on this website is for informational purposes only and is subject to change without notice.</li>
            <li className="mb-2">You agree not to reproduce, duplicate, or exploit any material from this website without written consent.</li>
            <li className="mb-2">We reserve the right to suspend or terminate access to the website at our discretion.</li>
            <li className="mb-2">Users are responsible for ensuring that any information they provide is accurate and up-to-date.</li>
            <li className="mb-2">We are not liable for any damages or losses resulting from the use of this website or reliance on its content.</li>
            <li className="mb-2">The website may contain links to third-party websites. We are not responsible for the content or practices of these external sites.</li>
            <li className="mb-2">All intellectual property rights related to the website content are owned by or licensed to us.</li>
          </ul>

          <p>
            If you have any questions about these terms, please <a href="/contact" className="text-blue-500 underline">contact us</a>.
          </p>
        </section>
      </main>
    </div>
    <Footer />
    </>
  );
};

export default TermsAndConditions;
