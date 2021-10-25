import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import { Container, Row } from "reactstrap";

function NewsList() {
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState(["us"]);
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=c4cdb0886df3419282eec9a0813c34aa`
      )
      .then((response) => {
        console.log(response.data.articles);
        setNews(response.data.articles);
      })
      .catch((error) => console.log(error));
  }, [country]);

  return (
    <div className="news">
      <button onClick={() => setCountry("us")}>USA</button>
      <button onClick={() => setCountry("it")}>ITALY</button>
      <Container>
        <Row>
          {news.map((news) => (
            <NewsItem news={news} key={news.publishedAt} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default NewsList;
