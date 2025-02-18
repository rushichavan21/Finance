import { useState, useEffect } from 'react';
import axios from 'axios';
import './indices.css';

const IndicesData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIndicesData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/nse-indices');
        setData(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching data');
        setLoading(false);
        console.error("Failed to fetch indices data:", err);
      }
    };

    fetchIndicesData();
  }, []);
  return (
    <div className="indicesData-wrapper">
    <div className="indice-left">
    <div className="indexCard">Nifty</div>
    <div className="indexCard">Nifty Next 50</div>
    </div>
    <div className="indice-right">
    <div className="indexCard">BankNifty</div>
    <div className="indexCard">Nifty Midcap select</div>
    </div>
    </div>
  )
};

export default IndicesData;