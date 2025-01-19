import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Gauri.css";

const Marquee = () => {
  const [headline, setHeadline] = useState(""); // Headline for marquee

  useEffect(() => {
    axios
      .get("https://news-portal-suby.onrender.com/headline/getHeadline")
      .then((response) => {
        setHeadline(response.data.title); // Set headline text
      })
      .catch(() => {
        setError("Error fetching headline!"); // Handle error if fetching fails
      });
  }, []); // Fetch only once when the component mounts
  return (
    <div className="news-marquee">
      <marquee behavior="scroll" direction="left">
        Breaking News: {headline ? headline : "Loading latest headline..."}
      </marquee>
    </div>
  );
};

export default Marquee;
