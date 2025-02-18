import "./indexCard.css";
import { ArrowUp, ArrowDown } from "lucide-react";

const IndexCard = ({ name, value, change, percentage, trend }) => {
  const isUp = trend === "up"; // Check if trend is up

  return (
    <div className="indexCard-wrapper">
      <div className="index-name">{name}</div>
      <div className="index-details">
        <div className="index-value">{value}</div>
        <div className={`index-change ${isUp ? "up" : "down"}`}>
          {change} {isUp ? <ArrowUp/> : <ArrowDown />}
        </div>
      </div>
      <div className={`index-percentage ${isUp ? "up" : "down"}`}>
        {percentage}%
      </div>
    </div>
  );
};

export default IndexCard;
