import style from "./000_Content.module.css";
import a1 from "./Pic/Bihar_Constable_1.jpg"; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";
const Bihar_Police_Constable_1 = () => {
    
      const [title, setTitle] = useState("");
      const [postname, setPostname] = useState("");
      const [description, setDescription] = useState("");
      const [totalpost, setTotalpost] = useState("");
      const [payscale, setPayscale] = useState("");
      const [startdate, setStartdate] = useState("");
      const [lastdate, setLastdate] = useState("");
      const [date, setDate] = useState("");
      const [link, setLink] = useState("");
      const [quicklink, setQuicklink] = useState([]);
      const [sociallink, setSociallink] = useState([]);
      const [vacancyDetails, setVacancyDetails] = useState([]);
      const shuffleArray = (array) => {
      return array
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    };
    
    useEffect(() => {
      fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/BIHAR_POLICE_CONSTABLE.json")
        .then((res) => res.json())
        .then((data) => {
          const job = data.find((item) => item.id === "biharpoliceconstable1");
          if (job) {
            setTitle(job.title)
            document.title =(job.title)
            setPostname(job.postname)
            setDescription(job.description)
            setTotalpost(job.totalpost)
            setPayscale(job.payscale)
            setStartdate(job.startdate)
            setLastdate(job.lastdate)
            setDate(job.date)
            setLink(job.link)
          }
          if (job && job.vacancydetails) {
            setVacancyDetails(job.vacancydetails);
          }
        });
    }, []);
    useEffect(() => {
      fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/AAA_Config.json")
        .then((res) => res.json())
        .then((data) => {
          const newQuicklink = data.find((item) => item.id === "quicklink");
          const match = data.find(item => item.id === "sociallink");
          if (match) {setSociallink(match.data);}
          if (newQuicklink) {const shuffledJobs = shuffleArray(newQuicklink.data).slice(0, 12); setQuicklink(shuffledJobs)}
           });
    }, []);
     
  return (
    <div className={style.aaa}>
      <div className={style.aaa1}>
        <Ad type="728x90" />
       <section className={style.zxa}>
          <h1 className={style.zxb}>{title}</h1>
          <h2 className={style.sectiontitle}>Post Name :- {postname} </h2>
          <h2 className={style.sectiontitle} style={{ color: "red" }}>Application Start Date :- {startdate}</h2>
          <h2 className={style.sectiontitle} style={{ color: "red" }}>Application Start Date :- {lastdate}</h2>
          
          <p className={style.zxc}>
            <b>Brief Summary :- </b>
           {description}
          </p>
          <div className={style.zxd}>
            <h1 className={style.zxe}>Www.JobForSarkari.Com</h1>
          </div>
           <Ad type="320x50" />
          <div className={style.zxf}>
            <h2 className={style.zxg}>Bihar Police (CSBC)</h2>
            <h3 className={style.zxh}>Total Posts: <span className={style.highlight}>{totalpost}</span></h3>
            <h3 className={style.zxh}>Pay Scale: <span className={style.highlight}>{payscale}</span></h3>
          </div>
          <div className={style.zxi}>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Important Dates</h2>
               <ul className={style.zxk}>{Object.entries(date).map(([key, value]) => (<li key={key}><b>{key} :-</b> {value}</li>))}</ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Application Fee</h2>
              <ul className={style.zxk}>
                <li><b>General/OBC/EWS/Other State:</b> ₹675</li>
                <li><b>SC/ST/Female (Bihar Domicile):</b> ₹180</li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Credit/Debit Card, Net Banking, or UPI. Fee is non-refundable.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Bihar (Various Districts)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/08/2025)</h2>
              <ul className={style.zxk}>
                <li><b>Minimum Age:</b> 18 Years</li>
                <li><b>Maximum Age:</b> 25 Years</li>
                <li><b>Age Relaxation:</b> OBC: 3 years, SC/ST: 5 years, Female (UR): 3 years, as per Bihar Police rules.</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Eligibility Qualification Details</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Post Name</div>
                <div className={style.tablecell}>Eligibility Criteria</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Constable</div>
                <div className={style.tablecell}>12th Pass (Intermediate) or equivalent from a recognized board by 01/08/2025; Maulvi certificate (BSMEB) or Shastri/Acharya (Sanskrit Board) also accepted.</div>
              </div>
            </div>
             <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Post-Wise Vacancy Details</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Post Name</div>
                <div className={style.tablecell}>Total Posts</div>
                <div className={style.tablecell}>Category-Wise Breakdown</div>
              </div>
             {vacancyDetails.map((item, index) => (
               <div className={style.tablerow} key={index}>
                <div className={style.tablecell}>{item.postname}</div>
                <div className={style.tablecell}>{item.totalpost}</div>
                <div className={style.tablecell}>{item.vacancydetails}</div>
              </div>
              ))}
            </div>
             <CollapsibleSection title="Exam Pattern">
              <h2 className={style.sectiontitle}>Written Exam (Objective)</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Section</div>
                <div className={style.tablecell}>Subjects</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>1</div>
                <div className={style.tablecell}>Hindi</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>2</div>
                <div className={style.tablecell}>General Knowledge, Current Affairs, Maths, Science, Social Science (Any Two)</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}></div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Objective-type; no negative marking.</li>
                <li>Qualifying in nature; minimum 30% marks required.</li>
                <li>Total: 100 questions, 100 marks, 2 hours.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <h2 className={style.sectiontitle}></h2>
              <h3 style={{ fontWeight: "700" }}>Written Exam:</h3>
              <ul className={style.zxs}>
                <li><b>Hindi:</b> Grammar, Vocabulary, Comprehension, Sentence Formation.</li>
                <li><b>General Knowledge:</b> History, Geography, Polity, Economy of Bihar and India.</li>
                <li><b>Current Affairs:</b> National/International Events, Sports, Awards (2024-2025).</li>
                <li><b>Mathematics:</b> Percentage, Ratio, Time & Work, Simple Interest, Number System.</li>
                <li><b>Science:</b> Physics, Chemistry, Biology (10th level).</li>
                <li><b>Social Science:</b> History, Civics, Geography (10th level).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Constable:</b> Maintain law and order, perform patrolling duties, assist in investigations, manage crowd control, and ensure public safety across Bihar districts and special armed units.</li>
              </ul>
            </CollapsibleSection>
             
            <CollapsibleSection title="Physical Standards">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Male:</b>
                  <ul>
                    <li><b>Height:</b> UR/OBC: 165 cm, SC/ST: 160 cm.</li>
                    <li><b>Chest:</b> UR/OBC: 81–86 cm, SC/ST: 79–84 cm.</li>
                  </ul>
                </li>
                <li><b>Female/Transgender:</b>
                  <ul>
                    <li><b>Height:</b> All Categories: 155 cm.</li>
                    <li><b>Weight:</b> Minimum 48 kg.</li>
                  </ul>
                </li>
                <li><b>Vision:</b> 6/6 or 6/9 without glasses; no color blindness.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Physical Efficiency Test (PET)">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Male:</b>
                  <ul>
                    <li><b>Running:</b> 1.6 km in 6 minutes.</li>
                    <li><b>High Jump:</b> 4 feet.</li>
                    <li><b>Shot Put:</b> 16 feet (7.25 kg).</li>
                  </ul>
                </li>
                <li><b>Female/Transgender:</b>
                  <ul>
                    <li><b>Running:</b> 1 km in 5 minutes.</li>
                    <li><b>High Jump:</b> 3 feet.</li>
                    <li><b>Shot Put:</b> 12 feet (4 kg).</li>
                  </ul>
                </li>
              </ul>
            </CollapsibleSection>
           
            <CollapsibleSection title="Exam Analysis and Insights">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Written Exam Difficulty (2024):</b> Easy to Moderate; Hindi and Maths were straightforward; Current Affairs focused on Bihar-specific events.</li>
                <li><b>Expected Cut-Offs:</b> General: 70–75, OBC: 65–70, SC/ST: 55–60 (out of 100).</li>
                <li><b>Preparation Focus:</b> Practice Hindi grammar, Bihar GK, and basic Maths.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Selection Process">
              <ul className={style.zxs}>
                <li><b>Written Exam:</b> Objective, qualifying; shortlists for PET/PST.</li>
                <li><b>Physical Efficiency Test (PET):</b> Running, High Jump, Shot Put.</li>
                <li><b>Physical Standard Test (PST):</b> Height, Chest, Weight measurements.</li>
                <li><b>Document Verification:</b> Verify educational and category documents.</li>
                <li><b>Medical Examination:</b> Ensure fitness for police duties.</li>
                <li><b>Final Merit:</b> Based on Written Exam marks and PET/PST qualification.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>10th and 12th mark sheets and certificates.</li>
                <li>Caste Certificate (SC/ST/OBC/EBC, valid as on 01/08/2025).</li>
                <li>EWS Certificate (valid for 2025-26).</li>
                <li>Domicile Certificate (Bihar).</li>
                <li>Photo ID (Aadhaar, Voter ID, or PAN).</li>
                <li>Recent passport-size photographs (6 copies).</li>
                <li>Printed application form and fee payment receipt.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Medical Examination Details">
              <ul className={style.zxs}>
                <li><b>Purpose:</b> Ensure fitness for police duties.</li>
                <li><b>Standards:</b>
                  <ul>
                    <li><b>Vision:</b> 6/6 or 6/9 without glasses; no color blindness.</li>
                    <li><b>Hearing:</b> Normal, without aids.</li>
                    <li><b>General Health:</b> No chronic diseases or physical deformities.</li>
                  </ul>
                </li>
                <li><b>Tests:</b> Vision, hearing, blood tests, physical examination.</li>
                <li><b>Disqualification:</b> Failure to meet standards leads to rejection.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits at Bihar Police">
              <ul className={style.zxs}>
                <li><b>Salary:</b> ₹21,700–₹69,100 (Level 3) + DA, HRA, Medical Allowance.</li>
                <li><b>Job Security:</b> Permanent state government job with pension benefits.</li>
                <li><b>Allowances:</b> Uniform Allowance, Ration Allowance, Medical Facilities.</li>
                <li><b>Career Growth:</b> Promotions to Head Constable, ASI, SI through departmental exams.</li>
                <li><b>Work Environment:</b> Serve in various Bihar districts, contribute to public safety.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li><b>Check Eligibility:</b> Verify age (18–25 years) and education (12th pass by 01/08/2025).</li>
                <li><b>Visit Official Website:</b> <a href="https://csbc.bih.nic.in" target="_blank" className="link">csbc.bih.nic.in</a>.</li>
                <li><b>Register:</b> Click “Apply Online,” enter email, mobile, and upload photo/signature.</li>
                <li><b>Fill Form:</b> Provide personal, educational, and district preferences.</li>
                <li><b>Pay Fee:</b> ₹675 (General/OBC) or ₹180 (SC/ST/Female) via online mode.</li>
                <li><b>Submit:</b> Review, submit, and download application form. Keep Application ID.</li>
                <li><b>Track Application:</b> Check status and admit cards on csbc.bih.nic.in.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Download Admit Card">
              <ol className={style.zxs}>
                <li>Visit the official website: <a href="https://csbc.bih.nic.in" target="_blank" className="link">csbc.bih.nic.in</a>.</li>
                <li>Navigate to “Admit Card” section.</li>
                <li>Select “Bihar Police Constable 2025 Admit Card.”</li>
                <li>Enter Application ID, Date of Birth, and captcha.</li>
                <li>Download and print admit card.</li>
                <li><b>Note:</b> Carry admit card and photo ID to exam/PET; check CSBC website for updates.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li><b>Understand Syllabus:</b> Focus on Hindi, Maths, Bihar GK, and Current Affairs.</li>
                <li><b>Previous Papers:</b> Solve Bihar Police Constable 2023-2024 papers for patterns.</li>
                <li><b>Physical Fitness:</b> Train for running, high jump, and shot put daily.</li>
                <li><b>Current Affairs:</b> Read Patna-based newspapers, Bihar-specific news for 2024-2025.</li>
                <li><b>Hindi:</b> Practice grammar and comprehension from 10th-level books.</li>
                <li><b>Mock Tests:</b> Use Adda247, Testbook for Bihar Police-specific mocks; aim for 80+ marks.</li>
                <li><b>Stay Updated:</b> Follow csbc.bih.nic.in for notifications and exam dates.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li><b>How many vacancies in Bihar Police 2025?</b> 19,838 posts, including 6,717 for females.</li>
                <li><b>Is there negative marking?</b> No negative marking in the written exam.</li>
                <li><b>Can 12th appearing students apply?</b> No, 12th pass certificate required by 01/08/2025.</li>
                <li><b>What is PET for females?</b> 1 km run in 5 minutes, 3 feet high jump, 12 feet shot put.</li>
                <li><b>Where are exam centers?</b> Major cities in Bihar (Patna, Gaya, Muzaffarpur, etc.).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li><a href="https://csbc.bih.nic.in" target="_blank" className="link">CSBC Official Website</a>: Check notifications, admit cards, results.</li>
                <li><a href="https://testbook.com/bihar-police-constable" target="_blank" className="link">Testbook Mock Tests</a>: Bihar Police-specific mocks.</li>
                <li><a href="https://adda247.com/bihar-police" target="_blank" className="link">Adda247 Study Material</a>: Free notes on Hindi, Maths, GK.</li>
                <li><a href="https://www.jagranjosh.com/bihar-police-previous-papers" target="_blank" className="link">Previous Year Papers</a>: Download 2023-2024 papers.</li>
                <li><b>Books:</b>
                  <ul>
                    <li>“Bihar Police Constable Guide” by Arihant Publications.</li>
                    <li>“Lucent’s General Knowledge” for GK and Bihar-specific content.</li>
                    <li>“Objective Hindi” by R.S. Aggarwal for Hindi.</li>
                    <li>“Fast Track Arithmetic” by Rajesh Verma for Maths.</li>
                  </ul>
                </li>
                <li><b>YouTube Channels:</b> “Adda247 Bihar,” “Bihar Police Guru” for exam tips and classes.</li>
              </ul>
            </CollapsibleSection>
            <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
               <div className={style.zxv}>
                <div >{Object.entries(link).map(([key, value]) => ( <li> <a href={value} target="_blank" className="link"> {key}</a></li> ))}</div>
              </div>
            </div>
            <Ad type="NativeBanner" />
            <img src={a1} alt="Bihar Police Constable Recruitment 2025" className={style.imga} />
            <div id={style.ins}>
              <h1>Www.JobForSarkari.Com</h1>
              <h2>Welcome to Our Website</h2>
              <p>Our website provides official links for job-related information, ensuring you stay informed about government job opportunities.</p>
              <p>We do not charge for any services, offering free access to recruitment details and updates.</p>
              <p>Please read all instructions carefully before applying to avoid errors and ensure a smooth process.</p>
            </div>
            <div id={style.ins}>
              <h1>Find the Latest Government Jobs</h1>
              <h2>Latest Sarkari Naukri Updates & Free Job Alerts</h2>
              <p>Looking for Government Jobs? Our portal delivers the latest govt jobs and Sarkari Naukri updates tailored to your needs.</p>
              <p>Explore comprehensive details on age relaxation, eligibility criteria, and recruitment updates for government jobs and vacancies.</p>
              <p>Subscribe to our free job alert service to receive real-time notifications about Sarkari jobs, govt job vacancies, and online applications.</p>
              <p>Discover opportunities across sectors, including police, banking, railways, defense, and education.</p>
              <p>Stay ahead with details on upcoming govt exams and find state-wise government jobs tailored to your location.</p>
              <p>Start your Sarkari job search today and secure your future with the best government career opportunities!</p>
            </div>
            <div id={style.ins}>
              <h1>Latest Government Jobs Updates</h1>
              <h2>Apply for All Types of Jobs like Police, Railway, Bank, SSC, UPSC & More</h2>
              <p>Seeking Police Jobs, Railway Jobs 2025, Bank Jobs Recruitment, or Defense Vacancies?</p>
              <p>Stay updated with free job alert notifications and never miss an opportunity to apply for civil service jobs that match your skills and aspirations.</p>
              <p>Our job portal provides the latest updates on SSC Jobs Online, UPSC Exam Notifications, and Police Government Jobs.</p>
              <p>Explore opportunities in Defense Job Recruitment, Engineering Govt Jobs, Medical Govt Vacancies, and more.</p>
              <p>Whether you’re searching for 10th/12th Pass Government Jobs or specialized roles, we bring you the most recent government job openings.</p>
              <p>Stay ahead with real-time alerts and apply easily through our portal to secure your dream Sarkari Naukri today.</p>
            </div>
            </div>
          </section>
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

export default Bihar_Police_Constable_1;