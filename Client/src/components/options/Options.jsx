import { useNavigate } from "react-router-dom";
import "./options.css";

const Options = () => {
  const navigate = useNavigate();
  const options = ["Watchlist", "Portfolio", "News", "Tracker", "Crypto", "Roadmap","Home"];

  return (
    <div className="options-container">
      {options.map((it) => (
        <button
          className="options-button"
          onClick={() => navigate(`/${it.toLowerCase()}`)}
          key={it}
        >
          {it}
        </button>
      ))}
    </div>
  );
};

export default Options;
