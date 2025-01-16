import React, { useState, useEffect } from "react";

const NewsSlider = () => {
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch news data from API
  const fetchNews = async () => {
    try {
      const response = await fetch("https://news-portal-suby.onrender.com/api/news");
      const data = await response.json();
      const formattedData = data.slice(0, 5).map((item) => ({
        id: item.article_id,
        title: item.title,
        description: item.description,
        image: item.image_url || "https://via.placeholder.com/600x400?text=No+Image",
      }));
      setNews(formattedData);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? news.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === news.length - 1 ? 0 : prevIndex + 1));
  };

  if (loading) {
    return <div className="text-center mt-10 text-gray-600">Loading news...</div>;
  }

  if (!news.length) {
    return (
      <div className="text-center mt-10 text-red-600">
        No news to display. Please try again later.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10">
      {/* Slider Container */}
      <div
        className="relative overflow-hidden rounded-lg shadow-lg bg-white w-full h-96"
        aria-roledescription="carousel"
      >
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {news.map((item) => (
            <div
              key={item.id}
              className="w-full flex-shrink-0 px-6 py-8 flex items-center justify-center"
            >
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h2>
                <p className="text-gray-600 text-sm mb-4">
                  {item.description.slice(0, 120)}...
                </p>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-gray-600"
          aria-label="Previous slide"
        >
          &larr;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-gray-600"
          aria-label="Next slide"
        >
          &rarr;
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {news.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-gray-800" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSlider;
