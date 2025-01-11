import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to access the category parameter

const CategoryPage = () => {
  const { category } = useParams(); // Get category from the URL
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryNews = async () => {
      try {
        const response = await fetch(
          `https://news-portal-suby.onrender.com/api/news?category=${category}`
        );
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
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : description;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="relative w-4/5 h-full m-auto">
      <h2 className="text-3xl font-bold text-center mb-4">
        {category.toUpperCase()} News
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {news.map((article) => (
          <div
            key={article.article_id}
            className="flex flex-col justify-center border p-4"
          >
            <img
              className="w-full h-48 object-cover"
              src={article.image_url || "https://via.placeholder.com/150"}
              alt={article.title}
            />
            <h3 className="text-xl font-serif mt-4">{article.title}</h3>
            <p className="text-sm mt-2">
              {truncateDescription(article.description)}
            </p>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2 underline"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
