import { useEffect, useState } from "react";
import "./newsSection.css";
import Date from "../date/Date";
import NewsCard from "../newsCard/NewsCard";

const NewsSection = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(60);

  const fetchNews = () => {
    setLoading(true);
    fetch("/news_data.json")
      .then((response) => response.json())
      .then((data) => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        setNewsData(shuffled.slice(0, 4));
      })
      .catch((error) => console.error("Error fetching news:", error))
      .finally(() => {
        setLoading(false);
        setTime(60);
      });
  };

  useEffect(() => {
    fetchNews();

    const newsInterval = setInterval(fetchNews, 60000);

    const countdown = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 60));
    }, 1000);

    return () => {
      clearInterval(newsInterval);
      clearInterval(countdown);
    };
  }, []);

  return (
    <div className="newsSection-container">
      <Date />
      <div className="newsSection-title">Latest News: refresh in {time}s</div>
      <div className="newsData">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          newsData.map((news, index) => <NewsCard key={index} news={news} />)
        )}
      </div>
    </div>
  );
};

export default NewsSection;
