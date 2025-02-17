import { Calendar } from "lucide-react";
import "./date.css"
const DateComp= () => {
    const today = new Date().toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  
    return <div className="day-date"><span><Calendar/></span> {today}</div>;
  };
  
  export default DateComp;
  