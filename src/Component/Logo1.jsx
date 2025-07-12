//import { hover } from "@testing-library/user-event/dist/hover"
import style from "./Navcss.module.css"
import { Link } from "react-router-dom"

const Logo1=()=>{
    document.title="Home | Job For Sarkari"
    return(
        // <div></div>
        <div id={style.logo1}>
            <div>
                <div><Link to="/bankjob" style={{textDecoration:"none"}}><p style={{color:"white"}}> Bank Jobs</p></Link></div>
                <div><Link to="/defencejob" style={{textDecoration:"none"}}><p style={{color:"white"}}>Defence Jobs</p></Link></div>
                <div><Link to="/railwayjob" style={{textDecoration:"none"}}><p style={{color:"white"}}>Railway Jobs </p></Link></div>
                <div><Link to="/sscjob" style={{textDecoration:"none"}}><p style={{color:"white"}}>SSC Jobs</p></Link></div>
                <div><Link to="/governmentjob" style={{textDecoration:"none"}}><p style={{color:"white"}}>Goverment Jobs</p></Link></div>
        
            </div>
            
        </div>
    )
}

export default Logo1