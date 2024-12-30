// 
// import React, { useEffect, useState } from "react";
// import "./App.css";

// const App = () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(
//           "https://news-portal-suby.onrender.com/api/news?category=sports"
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch news.");
//         }
//         const data = await response.json();
//         setNews(data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   if (loading) return <p>Loading news...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="App">
//       <h1>Sports News</h1>
//       <div className="news-container">
//         {news.map((article) => (
//           <div className="news-card" key={article.article_id}>
//             <img
//               src={article.image_url || "https://via.placeholder.com/150"}
//               alt={article.title}
//             />
//             <h3>{article.title}</h3>
//             <p>{article.description}</p>
//             <a href={article.link} target="_blank" rel="noopener noreferrer">
//               Read More
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";

const NewsComponent = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the news data from the API
        axios
            .get("https://news-portal-suby.onrender.com/api/news?category=sports")
            .then((response) => {
                setNews(response.data); // Set the news data
                setLoading(false); // Stop the loading spinner
            })
            .catch((error) => {
                setError("Error fetching news data!");
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Sports News</h1>
            <ul>
                {news.map((article) => (
                    <li key={article.article_id} style={{ marginBottom: "20px" }}>
                        <h2>{article.title}</h2>
                        <img
                            src={article.image_url}
                            alt={article.title}
                            style={{ width: "300px", height: "200px", objectFit: "cover" }}
                        />
                        <p>{article.description}</p>
                        <a href={article.link} target="_blank" rel="noopener noreferrer">
                            Read More
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsComponent;