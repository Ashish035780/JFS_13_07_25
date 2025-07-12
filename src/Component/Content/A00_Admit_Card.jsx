import style from "./000_Content.module.css";
import { Link } from "react-router-dom";
import img from "./Pic/Admit_Card.jpg";
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Ad from "../Ad";
import { useEffect } from "react";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [quicklink, setQuicklink] = useState([]);
  const [sociallink, setSociallink] = useState([]);
  const shuffleArray = (array) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/AAA_Config.json") 
      .then((res) => res.json())
      .then((data) => {
        const newJobData = data.find((item) => item.id === "admitcard");
        const newQuicklink = data.find((item) => item.id === "quicklink");
        const match = data.find(item => item.id === "sociallink");
         if (match) {setSociallink(match.data);}
         if (newJobData) setJobs(newJobData.data);
         if (newQuicklink) {const shuffledJobs = shuffleArray(newQuicklink.data).slice(0, 12);setQuicklink(shuffledJobs);}
      })
      .catch((err) => console.error("Error fetching new jobs:", err));
  }, []);

  if (!jobs || jobs.length === 0) return <p>No new jobs available.</p>;
const A00_Admit_Card = ({ job }) => {
  const [open, setOpen] = useState(false);

  if (!job) return null;

  return (
    <div className={style.abca}>
      <div className={style.abcb} onClick={() => setOpen(!open)}>
        <div>
          <p className={style.abcc}>{job.date}</p>
          <h2 className={style.abcd}>{job.title}</h2>
        </div>
        <i
          style={{ color: "#4B5563" }} // ❗ Removed the incorrect semicolon here
          className={`fas fa-chevron-${open ? "up" : "down"}`}
        ></i>
      </div>
      {open && (
        <div className={style.abce}>
          <Link to={job.link} className={style.abcf}>
            View Details
          </Link>
        </div>
      )}
    </div>
  );
};


  return (
    <div className={style.aaa}>
        <Ad type="728x90" />
        <div className={style.aaa1}>
        <div className={style.abcg}>
      <div className={style.abch}>
        <h1 className={style.abci}>Admit Cards</h1>
       {jobs.map((job, index) => (<A00_Admit_Card key={index} job={job} />))}
    </div>
        </div>
           <Ad type="468x60" />
          <img src={img} alt="NVS Non-Teaching Recruitment 2024" className={style.imga} />
            <Ad type="NativeBanner" />
        </div>
          <div className={style.aaa2}>
                        <aside className={style.zxw}>
                            <h2 className={style.sectiontitle}>Quick Links</h2>
                            <ul className={style.zxs}>
                              <li> 
                               {quicklink.map((job, index) => ( <Link to={job.link} className={style.link}>
                               <React.Fragment key={index}> <li>{job.title}</li>
                               {index === 1 && (<Ad type="300x250" /> )}
                               {index === 6 && (<Ad type="300x250" />)}
                              </React.Fragment> 
                              </Link>))}
                               </li>
                            </ul>
                        </aside>
                        <Ad type="320x50" />
                        <aside className={style.zxw}>
                            <h2 className={style.sectiontitle}>Follow Us</h2>
                            <ul className={style.zxs}>
                                {sociallink.map((item, index) => (<li key={index}><a href={item.link} target="_blank" className={style.link}>{item.title}</a></li>))}   
                            </ul>
                        </aside> 
                         <Ad type="160x300" />
                       <Ad type="160x600" />
                </div>
    </div>
  );
};

export default App;