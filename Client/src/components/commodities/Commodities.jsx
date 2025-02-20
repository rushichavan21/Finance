import { useState, useEffect } from "react";
import axios from "axios";  
// import { Loader } from 'rsuite';
import "./commodities.css";
import Skeleton ,  { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Commodities = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/commodities");
                setData(response.data.data);  
            } catch (error) {
                console.error("Error fetching commodities:", error);
                setError("Failed to fetch commodities");
            } finally {
                setLoading(false); 
            }
        };

        fetchData();
    }, []);

    return (
        <div className="commodities-container">
            
            <div className="commodities-title">Commodities Insight</div>
            {loading && <SkeletonTheme baseColor="#202020" highlightColor="#444" > <Skeleton count={10}/></SkeletonTheme>} 

            {!loading && data && Object.keys(data).length > 0 && (
                <div className="metals-section">
                    {["gold", "silver", "crudeoil"].map((metal) => (
                        <div key={metal} className="metal-item">
                            <div className="metalName">{metal.charAt(0).toUpperCase() + metal.slice(1)}</div>
                            <div className="metal-price">{data[metal]?.price}</div>
                        </div>
                    ))}
                </div>
            )}

            {!loading && data && Object.keys(data).length === 0 && (
                <p>No commodities data available</p>
            )}
        </div>
    );
};

export default Commodities;
