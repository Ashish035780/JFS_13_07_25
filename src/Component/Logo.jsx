import style from "./Navcss.module.css"
import img from "./Image/logo.jpg"
import { Link } from "react-router-dom"
const Logo=()=>{
    return(
         <div className={style.logo}>
                    <div className={style.aaa1}>
                    <h1>JobForSarkari.com</h1>  
                     </div>         
                  <div> 
                    <section id={style.abcd2}>
                    <div><input style={{paddingLeft:"3%"}} type="text" placeholder="   Search"/></div>
                </section>
                </div>
               
        </div>
    )
}

export default Logo