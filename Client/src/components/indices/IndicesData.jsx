import { useState, useEffect } from 'react';
import axios from 'axios';
import './indices.css';
import IndexCard from './indexCard/IndexCard';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const IndicesData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIndicesData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/nse-indices');
        console.log(response.data);
        if (response.data && Array.isArray(response.data.data)) {
          setData(response.data.data);
        } else if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          setData([]);
        }
        
        setLoading(false);
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
      {loading && <SkeletonTheme  baseColor="#202020" highlightColor="#444"><Skeleton count={7}/></SkeletonTheme>}
        {data.length > 0 && (
          <IndexCard
            name={data[0].name}
            value={data[0].value}
            change={data[0].change}
            percentage={data[0].percentage}
            trend={data[0].trend}
          />
        )}
        {data.length > 1 && (
          <IndexCard
            name={data[1].name}
            value={data[1].value}
            change={data[1].change}
            percentage={data[1].percentage}
            trend={data[1].trend}
          />
        )}
      </div>
      <div className="indice-right">
      {loading && <SkeletonTheme  baseColor="#202020" highlightColor="#444"><Skeleton count={7}/></SkeletonTheme>}
        {data.length > 2 && (
          <IndexCard
            name={data[2].name}
            value={data[2].value}
            change={data[2].change}
            percentage={data[2].percentage}
            trend={data[2].trend}
          />
        )}
        {data.length > 3 && (
          <IndexCard
            name={data[3].name}
            value={data[3].value}
            change={data[3].change}
            percentage={data[3].percentage}
            trend={data[3].trend}
          />
        )}
      </div>
    </div>
  );
};

export default IndicesData;