import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./options.css";

const Options = () => {
  const navigate = useNavigate();
  const options = ["Home", "Watchlist", "Portfolio", "Tracker", "News", "Ask-Ai", "Roadmap"];
  const [active, setActive] = useState("Home"); 

  return (
    <div className="options-container">
      {options.map((it) => (
        <button
          key={it}
          className={`options-button ${active === it ? "active" : ""}`}
          onClick={() => {
            navigate(`/${it.toLowerCase()}`);
            setActive(it);
          }}
        >
          {it}
        </button>
      ))}
    </div>
  );
};

export default Options;
