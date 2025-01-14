import React, { useEffect, useState } from "react";
import "./Gauri.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import EditForm from "./components/EditForm";
import AdminNavbar from "./components/AdminNavbar";

const NewsGrid = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [editData, setEditData] = useState(null);

  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://news-portal-suby.onrender.com/custom/getNews"
        );
        const data = await response.json();

        if (response.ok) {
          setNewsData(data);
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

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://news-portal-suby.onrender.com/custom/delete?id=${id}`,
        { method: "POST" }
      );

      if (response.ok) {
        setNewsData(newsData.filter((item) => item.id !== id));
      } else {
        throw new Error("Error deleting the item");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEditSubmit = async (updatedItem) => {
    try {
      const response = await fetch(
        "https://news-portal-suby.onrender.com/custom/edit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedItem),
        }
      );

      if (response.ok) {
        setNewsData(
          newsData.map((item) => (item.id === updatedItem.id ? updatedItem : item))
        );
        setEditData(null); // Close the edit form
      } else {
        throw new Error("Error updating the item");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const openEditForm = (item) => {
    setEditData(item);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newsData.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const nextPage = () => {
    if (currentPage < Math.ceil(newsData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return editData ? (
    <EditForm
      data={editData}
      onSubmit={handleEditSubmit}
      onCancel={() => setEditData(null)}
    />
  ) : (
    <>
      <Header />
      <AdminNavbar />
      <div className="news-grid-container">
        <table className="news-table">
          <thead>
            <tr>
              <th>Title</th>
              <th style={{ width: "30%" }}>Description</th>
              <th>Category</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td>{item.tittle}</td>
                <td>{item.desc}</td>
                <td>{item.cato}</td>
                <td>
                  <button
                    className="icon-btn edit-icon-btn"
                    onClick={() => openEditForm(item)}
                    title="Edit"
                  >
                    ✏️
                  </button>
                </td>
                <td>
                  <button
                    className="icon-btn delete-icon-btn"
                    onClick={() => handleDelete(item.id)}
                    title="Delete"
                  >
                    🗑️
                  </button>
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
          <button onClick={nextPage} disabled={currentPage >= Math.ceil(newsData.length / itemsPerPage)}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsGrid;
