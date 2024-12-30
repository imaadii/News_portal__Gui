import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"; // Import the CSS file for styling

const NewsComponent = () => {
    const [news, setNews] = useState([]); // News data
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const [category, setCategory] = useState("sports"); // Default category
    const [dateTime, setDateTime] = useState({ date: "", time: "" }); // Date & Time state

    // Fetch news based on the selected category
    useEffect(() => {
        setLoading(true); // Start loading spinner
        setError(null); // Reset error state

        axios
            .get(`https://news-portal-suby.onrender.com/api/news?category=${category}`)
            .then((response) => {
                setNews(response.data); // Set the news data
                setLoading(false); // Stop the loading spinner
            })
            .catch((error) => {
                setError("Error fetching news data!"); // Set error message
                setLoading(false);
            });
    }, [category]); // Dependency on 'category'

    // Update date and time dynamically
    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const date = now.toLocaleDateString();
            const time = now.toLocaleTimeString();
            setDateTime({ date, time });
        };

        updateDateTime();
        const intervalId = setInterval(updateDateTime, 1000); // Update every second
        return () => clearInterval(intervalId); // Cleanup interval
    }, []);

    // Handle category selection
    const handleCategoryClick = (selectedCategory) => {
        setCategory(selectedCategory.toLowerCase()); // Update category state
    };

    // Function to truncate description after 40 words
    const truncateDescription = (description, wordLimit = 40) => {
        const words = description.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "..."; // Truncate after 40 words
        }
        return description; // Return full description if under wordLimit
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="news-container">
            <header className="header">
                <div className="weather">
                    Weather | Date: {dateTime.date} | Time: {dateTime.time}
                </div>
                <div className="logo">Logo</div>
                <div className="headlines">Headlines</div>
            </header>
            <div className="main-content">
                <aside className="sidebar">
                    <ul>
                        <li
                            className={category === "sports" ? "active-category" : ""}
                            onClick={() => handleCategoryClick("Sports")}
                        >
                            Sports
                        </li>
                        <li
                            className={category === "technology" ? "active-category" : ""}
                            onClick={() => handleCategoryClick("Technology")}
                        >
                            Technology
                        </li>
                        <li
                            className={category === "business" ? "active-category" : ""}
                            onClick={() => handleCategoryClick("Business")}
                        >
                            Business
                        </li>
                    </ul>
                </aside>
                <main className="news-articles">
                    {news.map((article) => (
                        <div key={article.article_id} className="news-card">
                            <img
                                src={article.image_url}
                                alt={article.title}
                                className="news-image"
                            />
                            <div className="news-content">
                                <h3>{article.title}</h3>
                                <p>
                                    {truncateDescription(article.description)} {/* Truncate long descriptions */}
                                </p>
                                <a href={article.link} target="_blank" rel="noopener noreferrer">
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </main>
            </div>
        </div>
    );
};

export default NewsComponent;
