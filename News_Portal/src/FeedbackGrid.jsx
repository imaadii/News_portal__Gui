
import React, { useState, useEffect } from "react";
import Header from "./components/Header"; // Ensure you have a Header component
import AdminNavbar from "./components/AdminNavbar"; // Ensure you have an AdminNavbar component

const FeedbackGrid = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleteError, setDeleteError] = useState("");

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://news-portal-suby.onrender.com/feedBack/getAll");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setFeedbackList(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeleteError("");
    try {
      const response = await fetch(`https://news-portal-suby.onrender.com/feedBack/delete?id=${id}`, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Failed to delete feedback");
      }
      // Remove the deleted feedback from the list
      setFeedbackList(feedbackList.filter((feedback) => feedback.id !== id));
    } catch (err) {
      setDeleteError(err.message);
    }
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <>
      <Header />
      <AdminNavbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Feedback List</h1>
        {deleteError && <p className="text-red-500 text-center">{deleteError}</p>}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Feedback</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {feedbackList.length > 0 ? (
                feedbackList.map((feedback) => (
                  <tr key={feedback.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">{feedback.date}</td>
                    <td className="border border-gray-300 px-4 py-2">{feedback.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{feedback.email}</td>
                    <td className="border border-gray-300 px-4 py-2">{feedback.feedback}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button
                        onClick={() => handleDelete(feedback.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-gray-500 py-4">
                    No feedback available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FeedbackGrid;
