import React, { useEffect, useState } from "react";
import "./cs.css";
import Header from "./components/Header";
import AdminNavbar from "./components/AdminNavbar";

const ContactUsGrid = () => {
  const [contactData, setContactData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://news-portal-suby.onrender.com/contactUs/findAll"
        );
        const data = await response.json();

        if (response.ok) {
          setContactData(data);
        } else {
          throw new Error("Error fetching data");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = contactData.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < Math.ceil(contactData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <>
      <Header />
      <AdminNavbar />
      <div className="contact-grid-container">
        <table className="contact-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td>{item.username || "N/A"}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>{item.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>Page {currentPage}</span>
          <button
            onClick={nextPage}
            disabled={currentPage >= Math.ceil(contactData.length / itemsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactUsGrid;
