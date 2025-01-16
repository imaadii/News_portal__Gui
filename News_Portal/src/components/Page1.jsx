
import React, { useEffect, useState } from "react";

const Page1 = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

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

  const groupedNews = news.reduce((acc, article) => {
    const category = article.category || "Uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(article);
    return acc;
  }, {});

  if (error) {
    return <div className="text-red-500 text-center py-4">Error: {error}</div>;
  }

  return (
    <div className="w-full mx-auto py-6 h-screen flex flex-wrap">
      {/* Left Section */}
      <div className="w-1/2 h-full py-2 px-3 border-r border-dotted" style={{ borderColor: '#a5a5a5' }}>
        <div className="h-1/2 w-full px-2 py-1 bg-white rounded-lg  overflow-hidden border-b border-dotted" style={{ borderColor: '#a5a5a5' }}>
          {news.length > 0 && (
            <div>
              <img
                className="w-full h-40 object-fill"
                src={news[0].image_url || "https://via.placeholder.com/150"}
                alt={news[0].title || "Article Image"}
              />
              <div className="p-2">
                <h3 className="text-lg font-semibold">{news[0].title}</h3>
                <p className="text-sm text-gray-700">
                  {news[0].description?.slice(0, 100) ||
                    "No description available."}
                  ...
                </p>
                <a
                  href={news[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          )}
        </div>
        <div className="h-1/2 w-full px-2 py-1 flex">
          <div className="w-1/2 h-full px-2 py-1 bg-white rounded-lg overflow-hidden border-r border-dotted" style={{ borderColor: '#a5a5a5' }}>
            {news[1] && (
              <div>
                <img
                  className="w-full h-20 object-cover"
                  src={news[1].image_url || "https://via.placeholder.com/150"}
                  alt={news[1].title || "Article Image"}
                />
                <div className="p-2">
                  <h3 className="text-sm font-semibold">{news[1].title}</h3>
                </div>
                <a
                  href={news[1].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Read more
                </a>
              </div>
            )}
          </div>
          <div className="w-1/2 h-full px-1 py-1 bg-white rounded-lg  overflow-hidden">
            {news[2] && (
              <div>
                <img
                  className="w-full h-20 object-cover"
                  src={news[2].image_url || "https://via.placeholder.com/150"}
                  alt={news[2].title || "Article Image"}
                />
                <div className="p-2">
                  <h3 className="text-sm font-semibold">{news[2].title}</h3>
                </div>
                <a
                  href={news[2].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Read more
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 h-full px-2 py-2 flex flex-wrap justify-evenly">
        {news.slice(3, 9).map((article, index) => (
          <div
            key={index}
            className="w-1/2 h-1/3 px-1 py-1 bg-white rounded-lg  overflow-hidden"
          >
            <div className="flex flex-col w-full h-full justify-evenly">
              <img
                className="w-full h-1/2 object-cover rounded-md"
                src={article.image_url || "https://via.placeholder.com/150"}
                alt={article.title || "Article Image"}
              />
              <div className="px-2 py-1 w-full h-1/2">
                <h3 className="text-sm font-semibold">{article.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page1;

