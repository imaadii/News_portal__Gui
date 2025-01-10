import React, { useEffect, useState } from "react";

// Sidebar Component
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-800 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 w-64`}
    >
      <div className="flex justify-between items-center px-4 py-4 bg-gray-900">
        <h1 className="text-xl font-bold">CodingNepal</h1>
        <button
          onClick={toggleSidebar}
          className="text-xl focus:outline-none text-white"
        >
          &times;
        </button>
      </div>
      <nav className="mt-6">
        <ul className="flex flex-col space-y-4 px-4">
          <li>
            <a href="#" className="hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              Blogs
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              Feedback
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

// Page1 Component
const Page1 = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://news-portal-suby.onrender.com/api/news"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await response.json();
        setNews(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchNews();
  }, []);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="relative flex">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 p-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? "Close Menu" : "Open Menu"}
        </button>

        <div>
          {news.length > 0 ? (
            news.map((article) => (
              <div
                key={article.article_id}
                className="flex flex-col justify-center border p-4 mb-4"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={article.image_url || "https://via.placeholder.com/150"}
                  alt={article.title}
                />
                <h3 className="text-xl font-serif mt-4">{article.title}</h3>
                <p className="text-sm mt-2">
                  {article.description.slice(0, 100)}...
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
            ))
          ) : (
            <p>Loading news...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page1;
