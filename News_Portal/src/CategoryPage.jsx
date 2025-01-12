import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to access the category parameter
import Navbar from "./components/Navbar";
import Header from "./components/Header";

const CategoryPage = () => {
  const { category } = useParams(); // Get category from the URL
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryNews = async () => {
      try {
        const response = await fetch(`https://news-portal-suby.onrender.com/api/news?category=${category}`);
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await response.json();
        setNews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryNews();
  }, [category]); // Re-fetch news whenever category changes

  // Function to truncate description to 50 words
  const truncateDescription = (description, wordLimit = 50) => {
    const words = description.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : description;
  };

  if (loading) {
    return (
      <>
        <Header />
        <Navbar />
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-xl font-semibold">Loading...</div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <Navbar />
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-xl font-semibold text-red-600">Error: {error}</div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">{category.toUpperCase()} News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article) => (
            <div key={article.article_id} className="border rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={article.image_url || "https://via.placeholder.com/150"}
                alt={article.title}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{article.title}</h3>
                <p className="text-sm mt-2">{truncateDescription(article.description)}</p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mt-2 inline-block"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
