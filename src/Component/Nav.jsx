import style from "./Navcss.module.css"
import { Link } from "react-router-dom"

const Nav=()=>{
    return(
            <div id={style.nav}>
            <div><Link style={{textDecoration:"none"}} to="/"><h3 className={style.na}>Home</h3></Link></div>
            <div><Link style={{textDecoration:"none"}} to="/upscnda2"><h3 className={style.na}>New Jobs</h3></Link></div> 
            <div><Link style={{textDecoration:"none"}} to="/admitcard"><h3 className={style.na}>Admit Card</h3></Link></div>
            <div><Link style={{textDecoration:"none"}} to="/result"><h3 className={style.na}>Results</h3></Link></div>
            <div><Link style={{textDecoration:"none"}} to="/answerkey"><h3 className={style.na} >Answer Key</h3></Link></div>
            <div><Link style={{textDecoration:"none"}} to="/syllabus"><h3 className={style.na}>Syllabus</h3></Link></div>
           <div><Link style={{textDecoration:"none"}} to="/sarkariyojana"><h3 className={style.na} Link >10th/12th</h3></Link></div>
           <div><Link style={{textDecoration:"none"}} to="/contactus"><h3 className={style.na} Link >Contact Us</h3></Link></div>
            </div>      
    )
}

export default Nav