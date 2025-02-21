import { useRecoilValue } from "recoil";
import "./portfolio.css"
import { useAuth0 } from "@auth0/auth0-react";
import accountBalanceAtom from "../../atoms/atom";
const Portfolio = () => {
    const balance=useRecoilValue(accountBalanceAtom);
    const { user,  isAuthenticated } = useAuth0();
  return (
    <div className="portfolio-wrapper">
    {isAuthenticated==1?<div className="Temp">{`${user.name} , Account Balance : ${balance}  `}</div>:<div className="Temp">Login to view this page</div>}
    </div>
  )
}

export default Portfolio