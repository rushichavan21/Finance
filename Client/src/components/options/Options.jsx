import "./options.css"

const Options = () => {
    const options=["Watchlist","portfolio","News","Tracker","Crypto","Roadmap"]
  return (
    <div className="options-container">
      {options.map((it)=>(<button className="options-button" key={it}>{`${it}`}</button>))}
    </div>
  )
}

export default Options