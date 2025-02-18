import "./indexCard.css"

const IndexCard = ({name , value ,change,percentage,trend,cost}) => {
  return (
    <div className="indexCard-wrapper">
    {`name:${name}`}
    {`value:${value}`}
    {`change:${change}`}
    {`percentage:${percentage}`}
    {`trend:${trend}`} 
    {`cost:${cost}`} 
    </div>
  )
}

export default IndexCard