import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

function NewsList() {
    const [news, setNews] = useState([])
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=c4cdb0886df3419282eec9a0813c34aa"
      )
      .then((response) => {
          console.log(response.data.articles)
          setNews(response.data.articles)
      })
      .catch((error) => console.log(error));
  },[]);

  return <div className="news">
      {news.map(film => <NewsItem title={film.title} image={film.urlToImage} url={film.url} source={film.source[1]}/>)}
  </div>;
}

export default NewsList;
