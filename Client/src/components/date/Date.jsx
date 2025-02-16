const DateComp= () => {
    const today = new Date().toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  
    return <div>{today}</div>;
  };
  
  export default DateComp;
  