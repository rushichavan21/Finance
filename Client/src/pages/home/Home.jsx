
import Commodities from "../../components/commodities/Commodities";
import CurrencyChart from "../../components/currencyChart/CurrencyChart";
import IndicesData from "../../components/indices/indicesData";
import NewsSection from "../../components/newsSection/newsSection";
import "./home.css";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content-wrapper">
       <NewsSection/>
        <div className="home-right-section">
          <div className="index-insights">
            <IndicesData/>
          </div>
          <div className="currency-commodity-section">
          <div className="rupee-vs-dollor-div">
            <div className="currency-title">Dollor vs Rupee</div>
            <div className="currency-comp">
           <CurrencyChart/>
            </div>
          </div>
          <div className="commodity-section">
            <Commodities/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
