import { Calculator, Target, TrendingUp, Wallet } from "lucide-react";
import "./roadmapLanding.css";
import { useNavigate } from "react-router-dom";

const RoadmapLanding = () => {
  const navigate = useNavigate();
  return (
    <div className="roadmap-container">
      <div className="roadmap-hero">
        <h1>Plan Your Financial Journey</h1>
        <p>Calculate, Plan, and Achieve Your Financial Goals</p>
      </div>

      <div className="roadmap-features">
        <div className="feature-card">
          <div className="feature-icon">
            <Calculator size={32} />
          </div>
          <h3>Smart Calculator</h3>
          <p>Input your income and expenses to understand your purchasing power</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
          <Target size={32} />
          </div>
          <h3>Goal Setting</h3>
          <p>Set financial targets and get a clear roadmap to achieve them</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <Wallet size={32} />
          </div>
          <h3>Budget Analysis</h3>
          <p>Get insights on your spending patterns and saving potential</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <TrendingUp size={32} />
          </div>
          <h3>Growth Projection</h3>
          <p>View projected savings and investment growth over time</p>
        </div>
      </div>

      <div className="roadmap-cta">
        <h2>Ready to Start Your Journey?</h2>
        <p>Use our calculator to see what you can afford</p>
        <button className="start-button" onClick={()=>{navigate("/calculator")}}>Start Planning</button>
      </div>

      <div className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Enter Income</h3>
            <p>Input your monthly income and regular expenses</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Set Goals</h3>
            <p>Define what you want to purchase or achieve</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Get Analysis</h3>
            <p>Receive detailed affordability analysis</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Plan Ahead</h3>
            <p>Get a timeline and savings plan to reach your goal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapLanding;
