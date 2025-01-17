import React, { useState, useEffect } from "react";
import "./CustomPage.css";

const CustomPage = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Form state for new news item
  const [formData, setFormData] = useState({
    cato: "",
    tittle: "",
    desc: "",
    image: "",
  });

  // Fetch news from your API
  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://news-portal-suby.onrender.com/custom/getNews");
        if (!response.ok) throw new Error("Failed to fetch news");
        const data = await response.json();
        setNews(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit form to save new news item
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://news-portal-suby.onrender.com/custom/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to save news");
      setFormData({ cato: "", tittle: "", desc: "", image: "" });
      setShowForm(false); // Hide form after successful save
    } catch (err) {
      alert("Error saving news: " + err.message);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="custom-page">
      {!showForm ? (
        <div>
          {/* <button onClick={() => setShowForm(true)} className="toggle-button">
            Add News
          </button> */}
          <div className="news-list">
            {news.map((item) => (
              <div className="news-container" key={item.id}>
                <div className="news-title">{item.tittle}</div>
                <div className="news-category">{item.cato}</div>
                <div className="news-image-container">
                  <img src={item.image} alt={item.tittle} className="news-image" />
                </div>
                <div className="news-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="news-form">
          <h2>Add News</h2>
          <div className="form-group">
            <label htmlFor="tittle">Title</label>
            <input
              type="text"
              id="tittle"
              name="tittle"
              value={formData.tittle}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cato">Category</label>
            <input
              type="text"
              id="cato"
              name="cato"
              value={formData.cato}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="desc">Description</label>
            <textarea
              id="desc"
              name="desc"
              value={formData.desc}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* <div className="form-buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </div> */}
        </form>
      )}
    </div>
  );
};

export default CustomPage;
