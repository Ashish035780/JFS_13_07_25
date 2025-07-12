import React from "react";
import { useState,useEffect } from "react";

import style from "./Navcss.module.css"
import { Link } from "react-router-dom";
import a1 from "./Icon/Threads.png"
import a2 from "./Icon/twitter.png"
import a3 from "./Icon/Telegram.png"
import a4 from "./Icon/facebook.png"
import a5 from "./Icon/instagram.png"
import a6 from "./Icon/whatsapp.png"
import a7 from "./Icon/youtube.png"
import a8 from "./Icon/linkedln.png"
import Ad from "./Ad";
const Animation = ({data}) => {
     const [quickData, setQuickData] = useState([]);
     const [tlink, setTlink] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/AAA_Config.json")
      .then((res) => res.json())
      .then((data) => {
        const quicklinkData = data.find((item) => item.id === "quicklink");
        if (quicklinkData && Array.isArray(quicklinkData.data)) {
          setQuickData(quicklinkData.data);
        }
         const tlinkdata = data.find((item) => item.id === "sociallink");
        if (tlinkdata && Array.isArray(tlinkdata.data)) {
          setTlink(tlinkdata.data);
        }
      })
      .catch((err) => console.error("Error fetching:", err));
  }, []);
  return (
     <>
     {/* <Ad type="320x50" /> */}
    <div className={style.animation2}>
        

<h2>
</h2>
              <p>Follow Us :-</p>
                                    <a href={tlink[0]?.link} target="_blank" className="link flex items-center">
                                        <img src={a4} alt="Follow us on Facebook" className={style.icon1} />

                                    </a>
                                     
                                    <a href={tlink[1]?.link} target="_blank" className="link flex items-center">
                                        <img src={a5} alt="Follow us on Instagram" className={style.icon1} />
                                        
                                    </a>
                                    
                                    <a href={tlink[2]?.link}  target="_blank" className="link flex items-center">
                                        <img src={a6} alt="Join our WhatsApp" className={style.icon1} />
                                      
                                    </a>
                                
                                    <a href={tlink[3]?.link}  target="_blank" className="link flex items-center">
                                        <img src={a7} alt="Subscribe to our YouTube" className={style.icon1} />
                                        
                                    </a>
                                
                                    <a href={tlink[4]?.link}  target="_blank" className="link flex items-center">
                                        <img src={a8} alt="Follow us on LinkedIn" className={style.icon1} />
                                        
                                    </a>
                                
                                
                                    <a href={tlink[5]?.link}  target="_blank" className="link flex items-center">
                                        <img src={a2} alt="Follow us on X" className={style.icon1} />
                                      
                                    </a>
                                
                                    <a href={tlink[6]?.link}  target="_blank" className="link flex items-center">
                                        <img src={a1} alt="Follow us on Threads" className={style.icon1}/>
                                        
                                    </a>
                                  <a href={tlink[7]?.link}  target="_blank" className="link flex items-center">
                                        <img src={a3}  alt="" className={style.icon1}/>
                                        
                                    </a>
                                  
    </div>
      {/* <Ad type="728x90" /> */}
    <div className={style.marqueecontainer}>
         
          <div className={style.marquee1}>
                  <Link to= {quickData[2]?.link}><p className={style.animation1}>{quickData[2]?.title}<b>||</b></p> </Link>
                  <Link to= {quickData[1]?.link}><p className={style.animation1}>{quickData[1]?.title}<b>||</b></p> </Link>
                  <Link to= {quickData[0]?.link}><p className={style.animation1}>{quickData[0]?.title}<b>||</b></p> </Link>
                  <Link to= {quickData[3]?.link}><p className={style.animation1}>{quickData[3]?.title}<b></b></p> </Link>   
          </div>
      </div><div className={style.marqueecontainer}>
              <div className={style.marquee2}>
              
                  <Link to= {quickData[5]?.link}><p className={style.animation1}>{quickData[5]?.title}<b>||</b></p> </Link>
                  <Link to= {quickData[4]?.link}><p className={style.animation1}>{quickData[4]?.title}<b>||</b></p> </Link>
                  <Link to= {quickData[7]?.link}><p className={style.animation1}>{quickData[7]?.title}<b>||</b></p> </Link>
                  <Link to= {quickData[6]?.link}><p className={style.animation1}>{quickData[6]?.title}<b></b></p> </Link> 
              </div>
              
          </div>
          <div className={style.marqueecontainer}>
          <div className={style.marquee3}>
                  <Link to= {quickData[11]?.link}><p className={style.animation1}>{quickData[11]?.title}<b>||</b></p> </Link>
                  <Link to= {quickData[8]?.link}><p className={style.animation1}>{quickData[8]?.title}<b>||</b></p> </Link>
                  <Link to= {quickData[10]?.link}><p className={style.animation1}>{quickData[10]?.title}<b>||</b></p> </Link>
                  <Link to= {quickData[9]?.link}><p className={style.animation1}>{quickData[9]?.title}<b></b></p> </Link> 
              </div>
           
            </div> 
             <Ad type="728x90" />
            </> 
  );
};
export default Animation
