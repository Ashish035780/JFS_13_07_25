import style from "./Navcss.module.css"
import { Link } from "react-router-dom"
import { useState,useEffect } from "react"
const Job=()=>{
    document.title="Home | Job For Sarkari"
      const [quickData, setQuickData] = useState([]);
        
          useEffect(() => {
            fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/AAA_Config.json")
              .then((res) => res.json())
              .then((data) => {
                const quicklinkData = data.find((item) => item.id === "job");
                if (quicklinkData && Array.isArray(quicklinkData.data)) {
                  setQuickData(quicklinkData.data);
                }
              })
              .catch((err) => console.error("Error fetching:", err));
          }, []);
    return(
        <div id={style.j}>
        <div id={style.job}>
    
            <div className={style.job1}><Link to={quickData[0]?.link} style={{textDecoration:"none"}}><p className={style.job3}><h2>{quickData[0]?.title1}</h2> <h2>{quickData[0]?.title2}</h2></p></Link> </div>
            <div className={style.job2}><Link to={quickData[1]?.link} style={{textDecoration:"none"}}><p className={style.job3}><h2>{quickData[1]?.title1}</h2> <h2>{quickData[1]?.title2}</h2></p></Link></div>
            <div className={style.job1}><Link to={quickData[2]?.link} style={{textDecoration:"none"}}><p className={style.job3}><h2>{quickData[2]?.title1}</h2> <h2>{quickData[2]?.title2}</h2></p></Link></div>
            <div className={style.job2}><Link to={quickData[3]?.link} style={{textDecoration:"none"}}><p className={style.job3}><h2>{quickData[3]?.title1}</h2> <h2>{quickData[3]?.title2}</h2></p></Link></div>
        </div>
        <div id={style.job}>
    
            <div className={style.job2}><Link to={quickData[4]?.link} style={{textDecoration:"none"}}><p className={style.job3}><h2>{quickData[4]?.title1}</h2> <h2>{quickData[4]?.title2}</h2></p></Link></div>
            <div className={style.job1}><Link to={quickData[5]?.link} style={{textDecoration:"none"}}><p className={style.job3}><h2>{quickData[5]?.title1}</h2> <h2>{quickData[5]?.title2}</h2></p></Link></div>
            <div className={style.job2}><Link to={quickData[6]?.link} style={{textDecoration:"none"}}><p className={style.job3}><h2>{quickData[6]?.title1}</h2> <h2>{quickData[6]?.title2}</h2></p></Link></div>
            <div className={style.job1}><Link to={quickData[7]?.link} style={{textDecoration:"none"}}><p className={style.job3}><h2>{quickData[7]?.title1}</h2> <h2>{quickData[7]?.title2}</h2></p></Link></div>
        </div>
        
     </div>
    )
}

export default Job