import { useState, useEffect } from "react";
import "./commodities.css";

const Commodities = () => {
    
    const basePrices = {
        gold: 92001.30,
        silver: 78000,
        copper: 859,
        aluminium: 259.50,
        brent: 74.75
    };

    const [prices, setPrices] = useState({
        gold: "Loading...",
        silver: "Loading...",
        copper: "Loading...",
        aluminium: "Loading...",
        brent: "Loading..."
    });

    const [priceDirections, setPriceDirections] = useState({
        gold: 0,
        silver: 0,
        copper: 0,
        aluminium: 0,
        brent: 0
    });
    const simulateMarketMovement = (basePrice) => {
        const volatility = 0.005; 
        const movement = (Math.random() - 0.5) * 2 * volatility;
        const newPrice = basePrice * (1 + movement);
        const direction = movement > 0 ? 1 : movement < 0 ? -1 : 0;
        return { price: newPrice.toFixed(2), direction };
    };

    useEffect(() => {
        const updateSinglePrice = () => {
            setPrices(prevPrices => {
                const updates = {};
                const newDirections = {};
                Object.keys(basePrices).forEach(commodity => {
                    if (Math.random() > 0.3) { 
                        const currentPrice = parseFloat(prevPrices[commodity] === "Loading..." ? 
                            basePrices[commodity] : prevPrices[commodity]);
                        const { price, direction } = simulateMarketMovement(currentPrice);
                        updates[commodity] = price;
                        newDirections[commodity] = direction;
                    }
                });

                setPriceDirections(prev => ({
                    ...prev,
                    ...newDirections
                }));

                return {
                    ...prevPrices,
                    ...updates
                };
            });
        };

        updateSinglePrice();
        const interval = setInterval(updateSinglePrice, 1000);

        return () => clearInterval(interval);
    }, []);

    const getPriceColor = (direction) => {
        if (direction > 0) return '#4caf50';
        if (direction < 0) return '#f44336';
        return 'inherit';
    };

    const renderPrice = (commodity, price, unit) => {
        const color = getPriceColor(priceDirections[commodity]);
        return (
            <span style={{ color }}>
                {price === "Loading..." ? price : `₹${price}${unit}`}
                {price !== "Loading..." && (
                    <span style={{ marginLeft: '5px' }}>
                        {priceDirections[commodity] > 0 ? '↑' : priceDirections[commodity] < 0 ? '↓' : ''}
                    </span>
                )}
            </span>
        );
    };

    return (
        <div className="commodities-container">
            <div className="commodities-title">Live Commodities Insight</div>
            <div className="metals-section">
                <div className="metal-item">
                    Gold : {renderPrice('gold', prices.gold, '/carat')}
                </div>
                <div className="metal-item">
                    Silver : {renderPrice('silver', prices.silver, '/kg')}
                </div>
                <div className="metal-item">
                    Copper : {renderPrice('copper', prices.copper, '/kg')}
                </div>
                <div className="metal-item">
                    Aluminium : {renderPrice('aluminium', prices.aluminium, '/kg')}
                </div>
            </div>

            <div className="crude-oil">
                <div className="brent">
                    <div className="brent-intro">
                        Brent Crude is a major global oil benchmark used to price crude oil from the North Sea and serves as a standard for international oil trading.
                    </div>
                    <div className="brent-price">
                        <div className="brentDiv">
                            Brent : {renderPrice('brent', prices.brent, '/bbl')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Commodities;