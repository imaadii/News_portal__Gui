import React, { useEffect, useState } from "react";
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

  // Group news by category
  const groupedNews = news.reduce((acc, article) => {
    const category = article.category || "Uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(article);
    return acc;
  }, {});

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Main Content */}
        <div className="flex-1 p-4 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4 border-b-2 border-gray-300">
            Top News
          </h2>
          {Object.keys(groupedNews).map((category) => (
            <div key={category} className="mb-8">
              <h3 className="text-lg font-bold mb-2 border-b-2 border-gray-200">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {groupedNews[category].map((article) => (
                  <div
                    key={article.article_id}
                    className="border rounded-lg overflow-hidden shadow-sm"
                  >
                    <img
                      className="w-full h-48 object-cover"
                      src={
                        article.image_url || "https://via.placeholder.com/150"
                      }
                      alt={article.title}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{article.title}</h3>
                      <p className="text-sm text-gray-700 mt-2">
                        {article.description.slice(0, 100)}...
                      </p>
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 mt-2 underline block"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page1;

