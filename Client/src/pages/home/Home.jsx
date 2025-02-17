
import NewsSection from "../../components/newsSection/newsSection";
import "./home.css";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content-wrapper">
       <NewsSection/>
        <div className="home-right-section">
          <div className="index-insights">
            <div className="home-nifty-insights">
              NSE , previous close : , today's open : , today's high : , today's low : , today's volume : 
            </div>
            <div className="home-sensex-insights">
              BSE , previous close : , today's open : , today's high : , today's low : , today's volume : 
            </div>
          </div>
          <div className="home-heavy-volume-stocks">
            stocks with heavy volume+52W high stocks+52W low stocks
          </div>
          <div className="currency-commodity-section">
          <div className="rupee-vs-dollor-div">
            rupee vs dollor chart
          </div>
          <div className="commodity-section">
            current gold price , current silver price and other commodity prices
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
