import { useEffect, useState } from "react";
import "./currencyChart.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CurrencyChart = () => {
  const [isloading,setIsloading]=useState(false);
  useEffect(() => {
    setIsloading(true);
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        width: "100%",
        height: 400,
        symbol: "FX_IDC:USDINR",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        container_id: "tradingview_chart",
      });
    };
    document.body.appendChild(script);
    setIsloading(false);
  }, []);

  return (
    <div className="currency-chart-container">
      {isloading &&    <SkeletonTheme baseColor="#202020" highlightColor="#444" ><Skeleton count={10}/></SkeletonTheme>}
   
      <div id="tradingview_chart" className="tradingview-widget"></div>
    </div>
  );
};

export default CurrencyChart;
