import React, { useState } from "react";
import { useEffect } from "react";

const NewsApi = () => {
  const [news, setNews] = useState([]);

  const getNewsData = async () => {
    const res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=58b4bf3f9db54f289cc2ae419e62a1a7"
    );
    const data = await res.json();
    setNews(data.articles);
  };

  useEffect(() => {
    getNewsData();
  }, []);

  return (
    <div>
      <h1>News App</h1>
      <div key={news.title}>
        {news.length > 0
          ? news.map((article) => {
              return <div>{article.title}</div>;
            })
          : "Fetching News"}
      </div>
    </div>
  );
};

export default NewsApi;
