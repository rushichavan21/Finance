import DateComp from "../../components/date/Date";
import "./home.css";
import { Calendar } from "lucide-react";
const Home = () => {
  return (
    <div className="home-container">
      <div className="news-section">
        <div className="day-date">
          <span>
            <Calendar />
          </span>
          <DateComp />
        </div>

        <div className="market-status">
          Exchange Status:
        </div>
      </div>
    </div>
  );
};
export default Home;
