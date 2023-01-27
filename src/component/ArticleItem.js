import React from "react";

const ArticleItem = ({ news }) => {
  return (
    <div>
      <h1>Article</h1>
      {news.length > 0
        ? news.map((article) => {
            return <div>{article.title}</div>;
          })
        : "Fetching News"}
    </div>
  );
};

export default ArticleItem;
