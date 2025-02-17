import "./newsCard.css";

const NewsCard = ({news}) => {
  
  return <div className="newsCard-wrapper">
    <div className="newsCard-title">
        {news.title}
    </div>
    <div className="newsCard-description">
        {news.description}
    </div>
    <div className="newsCard-date-source">
        <div className="newsCard-source">
        {`Source : ${news.source}`}
        </div>
        <div className="newsCard-date">{` ${news.date}`}</div>
    </div>
  </div>;
};

export default NewsCard;
