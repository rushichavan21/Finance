import { useState, useEffect } from "react";
import "./quote.css";
import { Loader } from 'rsuite';
const Quote = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("./quotes_data.json");
        const data = await response.json();
        
        if (data.quotes && data.quotes.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.quotes.length);
          setQuote(data.quotes[randomIndex]);
        }
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="quote-wrapper">
      {quote ? (
        <>
          <div className="quote-quote">{quote.quote}</div>
          <div className="quote-author">~ {quote.name}</div>
        </>
      ) : (
        <Loader/>
      )}
    </div>
  );
};

export default Quote;
