import style from "./Navcss.module.css"
import { Link } from "react-router-dom"
import a1 from "./Icon/Threads.png"
import a2 from "./Icon/twitter.png"
import a3 from "./Icon/Telegram.png"
import a4 from "./Icon/facebook.png"
import a5 from "./Icon/instagram.png"
import a6 from "./Icon/whatsapp.png"
import a7 from "./Icon/youtube.png"
import a8 from "./Icon/linkedln.png"
import { useState,useEffect } from "react"
import Ad from "./Ad"
const Footer=({data})=>{
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
    return(
        <div id={style.ab3}>
        
            <div>
                <section></section>
            </div>
            <div id={style.footer}>
               
                <div><div>
                    
                    <h1>Our Services :-</h1> <br />
                    <p>Provide Government Jobs Links</p>
                    <p>Provide the details about job</p>
                    <p>Provide the syllabus</p>
                    <p>Provide the Previous Question Answers</p>
                    <p>WE are Provide all type of government Jobs</p>
                    <p>Provide Admission related Link or Notification</p>
                    <p>Provide Answer Key of Every Examination paper</p>
                </div>
                <div>
                    <h1> Find your job :-</h1><br/>
                    <div><Link to="/bankjob"><p>Bank Jobs</p></Link></div>
                    <div><Link to="/defencejob"><p>Defence Jobs</p></Link></div>
                    <div><Link to="/railwayjob"><p>Railway Jobs</p></Link></div>
                    <div><Link to="/sscjob"><p>SSC Jobs</p></Link></div>
                    <div><Link to="/governmentjob"><p>Government Jobs</p></Link></div>
                    <h1>Contact Us :-</h1> <br />
                    <h4>Email Id :- ab035780@gmail.com</h4>
                    <div><a href={tlink[0]?.link} target="_blank"><p>On Facebook </p></a></div>
                    <div><a href={tlink[1]?.link} target="_blank"><p>On Instagram</p></a></div>
                    <div><a href={tlink[2]?.link} target="_blank"><p>On Whatsapp Channel</p></a></div>
                    <div><a href={tlink[7]?.link} target="_blank"><p>On Telegram Channel</p></a></div>
                    <div><Link to="/contactus"><p>Contact Us</p></Link></div>
                </div>
                <div> <h1>More :-</h1> <br />
                    <div><Link to="/newjob"><p>New Job</p></Link></div>
                    <div><Link to="/admitcard"><p>Admit Card</p></Link></div>
                    <div><Link to="/result"><p>Result</p></Link></div>
                    <div><Link to="/answerkey"><p >Answer Key</p></Link></div>
                    <div><Link to="/syllabus"><p>Syllabus</p></Link></div>
                    <div><Link to="/admission"><p>Admission</p></Link></div> <br />
</div>
                </div>
                <div>
                <div><h1>Join Our Community :-</h1> <br />
                    <div><a href= {tlink[0]?.link} target="_blank"><p>Join Our Facebook Page</p></a></div>
                    <div><a href={tlink[1]?.link} target="_blank"><p>Join Our Instagram Page</p></a></div>
                    <div><a href={tlink[2]?.link} target="_blank"><p>Join Our Whatsapp Channel</p></a></div>
                    <div><a href={tlink[7]?.link} target="_blank"><p>Join Our Telegram Channel</p></a></div>
                    </div>
                    <div>
                    <h1>Disclaimer :-</h1> <br />
                    <p>The information contained on the Service is for general information purposes only.</p>
                    <p>The Company assumes no responsibility for errors or omissions in the contents of the Service.</p>
                    <p>In no event shall the Compan</p>
                    <p>The Service may contain links to external websites</p>
                    <p>If you are Read the all the Disclaimer of our website, Please Click to below the Disclaimer link :-</p>
                    <div><Link to="/disclaimer"><p>Disclaimer</p></Link></div> <br />
                    <h1>About Us :-</h1><p>"Welcome to <Link to="https://jobforsarkari.com">JobForSarkari.Com</Link>, your trusted gateway to endless career opportunities! We connect talented individuals with leading employers, streamlining the job search process and empowering professionals to achieve their career goals.Our mission is simple: to empower individuals and businesses by providing a seamless, efficient, and user-friendly platform for job discovery and recruitment."
                

</p>
                </div>
                </div>
                <div>
                <div>
                    <h1>Privacy Policy :-</h1> <br />
                    
                    <p>Necessary / Essential Cookies</p>
                    <p>Disclosure of Your Personal Data</p>
                    <p>Changes to this Privacy Policy</p>
                    <p>Links to Other Websites</p>
                    <p>If you are Read the all the privacy and policy of our website, Please Click to below the Privacy Policy link :-</p>
                    <div><Link to="/privacypolicy"><p>Privacy Policy</p></Link></div> <br />
                </div>
                <div>
                    <h1>Terms and Conditions :-</h1> <br />
                    <p>By using the platform, you confirm that you accept these terms</p>
                    <p>We are not liable for third-party interactions or employment outcomes.</p>
                    <p>Personal data will be handled as per our Privacy Policy</p>
                    <p>Ensure all job postings and resumes are accurate and do not contain misleading or false information.</p>
                    <p>You are responsible for maintaining the confidentiality of your account and the information provided.</p>
                    <p>Users must be Required years old and comply with applicable laws.</p>
                    <p>Use the platform only for lawful job search or recruitment activities.</p>
                    <p>If you are Read the all the Terms and Conditions of our website, Please Click to below the Terms and Conditions link :-</p>
                    <div><Link to="/termscondition"><p>Terms and Conditions</p></Link></div> <br />
                </div>
                
                </div>
            </div>
             <footer className={style.footer}>
                        <div className={style.footercontainer}>
                            <h2 className={style.footertitle}>Www.JobForSarkari.Com</h2>
                            <p className={style.footerdescription}>Your trusted source for the latest Sarkari Naukri updates and government job alerts.</p>
                            <div className={style.footersociallinks}>
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
                            <p className={style.footercopyright}>© 2025 JobForSarkari. All rights reserved.</p>
                        </div>
                    </footer>

        </div>
    )
}

export default Footer