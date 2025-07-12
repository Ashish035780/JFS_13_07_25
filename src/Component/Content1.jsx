import style from "./Navcss.module.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import Ad from "./Ad"

const Content1=()=>{
    document.title="Home | Job For Sarkari"
    const [newJobs, setNewJobs] = useState([]);
    const [results, setResults] = useState([]);
    const [amitcard, setAdmitcard] = useState([]);
    const [answerkey, setAnswerkey] = useState([]);
    const [admission, setAdmission] = useState([]);
    const [syllabus, setSyllabus] = useState([]);
    const [diploma, setDiploma] = useState([]);
    const [th, setTH] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/AAA_Config.json") 
      .then((res) => res.json())
      .then((data) => {
        const newJobData = data.find((item) => item.id === "newjob");
        const resultData = data.find((item) => item.id === "result");
        const admitcardData = data.find((item) => item.id === "admitcard");
        const answerkeyData = data.find((item) => item.id === "answerkey");
        const admissionData = data.find((item) => item.id === "admission");
        const syllabusData = data.find((item) => item.id === "syllabus");
        const diplomaData = data.find((item) => item.id === "diploma");
        const thData = data.find((item) => item.id === "10th");

        if (newJobData) setNewJobs(newJobData.data.slice(0, 18));
        if (resultData) setResults(resultData.data.slice(0, 18));
        if (admitcardData) setAdmitcard(admitcardData.data.slice(0, 18));
        if (answerkeyData) setAnswerkey(answerkeyData.data.slice(0, 7));
        if (admissionData) setAdmission(admissionData.data.slice(0, 7));
        if (syllabusData) setSyllabus(syllabusData.data.slice(0, 7));
        if (diplomaData) setDiploma(diplomaData.data.slice(0, 7));
        if (thData) setTH(thData.data.slice(0, 7));
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);
    
    return(
        <div id={style.con1} >
            <div>
                         {/*-------------------------------- Result ------------------------------------------ */}
                <div> 
                    <h1>Result</h1>
                    <div id={style.con3}><ul>{results.map((job, index) => (<li key={index}><Link to={job.link}><p>{job.title}</p> </Link></li>))}</ul>   </div>
                    <div id={style.view}><Link to="/result" style={{textDecoration:"none"}}> <h3 className={style.view1}>See All</h3></Link></div>
                </div>
                      {/*-------------------------------- Admit Card ------------------------------------------ */}
                <div> 
                    <h1>Admit Card</h1>
                    <div id={style.con3}><ul>{amitcard.map((job, index) => (<li key={index}><Link to={job.link}><p>{job.title}</p> </Link></li>))}</ul>   </div>
                    <div id={style.view}><Link to="/admitcard" style={{textDecoration:"none"}}> <h3 className={style.view1}>See All</h3></Link></div>
                </div>
                       {/*-------------------------------- New Job ------------------------------------------ */}
                <div> 
                    <h1>New Job</h1>
                    <div id={style.con3}><ul>{newJobs.map((job, index) => (<li key={index}><Link to={job.link}><p>{job.title}</p> </Link></li>))}</ul>   </div>
                    <div id={style.view}><Link to="/newjob" style={{textDecoration:"none"}}> <h3 className={style.view1}>See All</h3></Link></div>
                </div>
                   </div>
                   
                   <div>
                      {/*-------------------------------- Answer Key ------------------------------------------ */}
                   <div> 
            
                   

                    <h1>Answer Key</h1>
                    <div id={style.con2}><ul>{answerkey.map((job, index) => (<li key={index}><Link to={job.link}><p>{job.title}</p> </Link></li>))}</ul>   </div>
                    <div id={style.view}><Link to="/answerkey" style={{textDecoration:"none"}}> <h3 className={style.view1}>See All</h3></Link></div>
                </div>
                 {/*-------------------------------- Document Verification ------------------------------------------ */}
                <div> 
                    
                    

                    <h1>Document Verification</h1>
                     <div id={style.con2}>
                        <ul>
                        <li><Link to="/aadharcard"><p>Download Aadhar Card, Check Aadhar Card Status, Modify Aadhar Card Online </p></Link></li>
                        <li><Link to="/voteridcard"><p>Apply New Voter ID Registration, Check Application Status, Modify Voter Id Card Online </p></Link></li>
                        <li><Link to="/pancard"><p>Apply New Pan Card, Download Pan Card, Modification of Pan Card, Link to Aadhar Card Online </p></Link></li>
                        <li><Link to="/biharrtps"><p>Bihar RTPS जाति, निवास, आय Online Form </p></Link></li>
                        <li><Link to="/upedistrict"><p>Uttar Pradesh eDistrict जाति, निवास, आय Online Form </p></Link></li>
                        </ul>   
                    </div>
                    <div id={style.view}><Link to="/document" style={{textDecoration:"none"}}> <h3 className={style.view1}>See All</h3></Link></div>
                </div>
                 {/*-------------------------------- Admission Form ------------------------------------------ */}
                <div> 
                    
                    

                    <h1>Admission Form</h1>
                   <div id={style.con2}><ul>{admission.map((job, index) => (<li key={index}><Link to={job.link}><p>{job.title}</p> </Link></li>))}</ul>   </div>
                    <div id={style.view}><Link to="/admission" style={{textDecoration:"none"}}> <h3 className={style.view1}>See All</h3></Link></div>
                </div>
           </div>
           <div>
             {/*-------------------------------- Syllabus ------------------------------------------ */}
           <div> 
            
                    

                    <h1>Syllabus</h1>
                   <div id={style.con2}><ul>{syllabus.map((job, index) => (<li key={index}><Link to={job.link}><p>{job.title}</p> </Link></li>))}</ul>   </div>
                    <div id={style.view}><Link to="/syllabus" style={{textDecoration:"none"}}> <h3 className={style.view1}>See All</h3></Link></div>
                </div>
                 {/*-------------------------------- Diploma/IT ------------------------------------------ */}
                <div> 
                    
                    

                    <h1>Diploma/IT</h1>
                   <div id={style.con2}><ul>{diploma.map((job, index) => (<li key={index}><Link to={job.link}><p>{job.title}</p> </Link></li>))}</ul>   </div>
                    <div id={style.view}><Link to="/scholarship" style={{textDecoration:"none"}}> <h3 className={style.view1}>See All</h3></Link></div>
                </div>
                {/*-------------------------------- 10th/12th ------------------------------------------ */}
                <div> 
                    
                     

                    <h1>10th/12th</h1>
                   <div id={style.con2}><ul>{th.map((job, index) => (<li key={index}><Link to={job.link}><p>{job.title}</p> </Link></li>))}</ul>   </div>
                    <div id={style.view}><Link to="/sarkariyojana" style={{textDecoration:"none"}}> <h3 className={style.view1}>See All</h3></Link></div>
                </div>
           </div>  
        </div>
    )
}

export default Content1