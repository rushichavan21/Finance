import { useEffect } from "react";
import "./currencyChart.css";

const CurrencyChart = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        width: "100%",
        height: 500,
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
  }, []);

  return (
    <div className="currency-chart-container">
      <div id="tradingview_chart" className="tradingview-widget"></div>
    </div>
  );
};

export default CurrencyChart;
