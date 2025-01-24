import React, { useEffect, useState } from "react";
import "./cs.css";
import Header from "./components/Header";
import AdminNavbar from "./components/AdminNavbar";


const ContactUsGrid = () => {
  const [contactData, setContactData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isRead, setIsRead] = useState(false);

  const itemsPerPage = 10;

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://news-portal-suby.onrender.com/contactUs/findAll?isRead=${isRead}`
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

  const markAsRead = async (id, currentStatus) => {
    try {
      const response = await fetch(
        `https://news-portal-suby.onrender.com/contactUs/edit?id=${id}&isRead=${!currentStatus}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        // Update the grid data locally after successful API call
        setContactData((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, isRead: !currentStatus } : item
          )
        );
        alert("Status updated successfully!");
      } else {
        throw new Error("Failed to update the status");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [isRead]);

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

  const handleFilterChange = (value) => {
    setIsRead(value);
    setCurrentPage(1);
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <>
      <Header />
      <AdminNavbar />
      <div className="contact-grid-container">
        <div className="filter-section">
          <label>
            <input
              type="radio"
              name="filter"
              value="true"
              onChange={() => handleFilterChange(true)}
              checked={isRead === true}
            />
            Unread
          </label>
          <label>
            <input
              type="radio"
              name="filter"
              value="false"
              onChange={() => handleFilterChange(false)}
              checked={isRead === false}
            />
            All
          </label>
        </div>

        <table className="contact-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Remarks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td>{item.username || "N/A"}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>{item.remarks}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={item.isRead}
                    onChange={() => markAsRead(item.id, item.isRead)}
                  />
                </td>
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
