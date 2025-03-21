import Aboutus from "../../components/aboutUs/Aboutus"; 
import Commodities from "../../components/commodities/Commodities"; 
import CurrencyChart from "../../components/currencyChart/CurrencyChart"; 
import IndicesData from "../../components/indices/indicesData"; 
import NewsSection from "../../components/newsSection/newsSection"; 
import Quote from "../../components/quote/Quote"; 
import "./home.css"; 
import { useEffect, useState } from "react";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="home-container">
      <div className="home-content-wrapper">
        {!isMobile && <NewsSection />}
        <div className="home-right-section">
          <div className="index-insights">
            <IndicesData/>
          </div>
          {isMobile && <NewsSection />}
          <div className="currency-commodity-section">
            <div className="rupee-vs-dollor-div">
              <div className="currency-title">Dollor vs Rupee</div>
              <div className="currency-comp">
                <CurrencyChart/>
              </div>
            </div>
            <div className="compartment-home">
              <div className="compartment-hori">
                <div className="commodity-section">
                  <Commodities/>
                </div>
                <div className="home-aboutus">
                  <Aboutus/>
                </div>
              </div>
              <div className="quote-section">
                <Quote/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;