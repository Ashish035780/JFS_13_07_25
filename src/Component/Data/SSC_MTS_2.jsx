import style from "./000_Content.module.css";
import a1 from "./Pic/SSC_MTS_2.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";

const SSC_MTS_2 = () => {
  
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
    fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/SSCMTS.json")
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((item) => item.id === "sscmts2");
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
            <h2 className={style.zxg}>Staff Selection Commission (SSC)</h2>
            <h3 className={style.zxh}>
              Total Posts: <span className={style.highlight}>{totalpost}</span>
            </h3>
            <h3 className={style.zxh}>
              Pay Scale: <span className={style.highlight}>{payscale}</span>
            </h3>
          </div>
          <div className={style.zxi}>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Important Dates</h2>
              <ul className={style.zxk}>{Object.entries(date).map(([key, value]) => (<li key={key}><b>{key} :-</b> {value}</li>))}</ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Application Fee</h2>
              <ul className={style.zxk}>
                <li><b>General/OBC/EWS:</b> ₹100</li>
                <li><b>SC/ST/Ex-Servicemen/Female/PwD:</b> Nil</li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Credit/Debit Card, Net Banking, UPI, or BHIM. Fee is non-refundable. Correction fee: ₹200 (first time), ₹500 (second time).
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Across India (various government departments for MTS; CBIC/CBN for Havaldar)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/08/2025)</h2>
              <ul className={style.zxk}>
                <li><b>Minimum Age:</b> 18 Years</li>
                <li><b>Maximum Age:</b> 25 Years (MTS/CBN), 27 Years (CBIC/some MTS posts)</li>
                <li><b>Age Relaxation:</b> SC/ST: 5 years, OBC: 3 years, PwD: 10–15 years, Ex-Servicemen: 3 years (after service deduction), as per SSC rules.</li>
                <li>Additional age relaxation as per recruitment guidelines, please read the SSC MTS official notification.</li>
              </ul>
            </div>
            <div className={style.zxj}>
               <h2 className={style.sectiontitle}>Eligibility Qualification Details</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}> <b>Post Name </b></div>
                <div className={style.tablecell}> <b>Eligibility Criteria </b></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>MTS & Havaldar</div>
                <div className={style.tablecell}>10th Pass (Matriculation) from a recognized board</div>
              </div>
               <div className={style.tablerow}>
                <div className={style.tablecell}><li>Read the SSC MTS official announcement notification for post-wise eligibility details.</li></div>
              </div>
            </div>
            <div className={style.zxj}>
               <h2 className={style.sectiontitle}>Vacancy Details</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}> <b>Post Name </b></div>
                <div className={style.tablecell}> <b>Total Posts </b></div>
                <div className={style.tablecell}> <b>Category-Wise Breakdown </b></div>
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
              <h2 className={style.sectiontitle}>Computer-Based Test (CBT)</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Session</div>
                <div className={style.tablecell}>Subjects</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Session 1</div>
                <div className={style.tablecell}>Numerical & Mathematical Ability</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>60</div>
                <div className={style.tablecell}>45 Minutes (60 for PwD)</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Session 1</div>
                <div className={style.tablecell}>Reasoning Ability & Problem Solving</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>60</div>
                <div className={style.tablecell}></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Session 2</div>
                <div className={style.tablecell}>General Awareness</div>
                <div className={style.tablecell}>25</div>
                <div className={style.tablecell}>75</div>
                <div className={style.tablecell}>45 Minutes (60 for PwD)</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Session 2</div>
                <div className={style.tablecell}>English Language & Comprehension</div>
                <div className={style.tablecell}>25</div>
                <div className={style.tablecell}>75</div>
                <div className={style.tablecell}></div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Session 1: Objective-type, no negative marking.</li>
                <li>Session 2: Objective-type, 1 mark deducted per wrong answer.</li>
                <li>Session 1 is qualifying; Session 2 marks used for merit.</li>
                <li>Total: 90 questions, 270 marks, 90 minutes (120 for PwD).</li>
              </ul>
           </CollapsibleSection>
             <CollapsibleSection title="Syllabus Details">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Numerical & Mathematical Ability:</b> Arithmetic, Percentage, Ratio, Time & Work, Averages, Simple Interest.</li>
                <li><b>Reasoning Ability & Problem Solving:</b> Analogies, Coding-Decoding, Series, Puzzles, Non-Verbal Reasoning.</li>
                <li><b>General Awareness:</b> Current Affairs , History, Geography, Polity, Economy, Science.</li>
                <li><b>English Language & Comprehension:</b> Grammar, Vocabulary, Comprehension, Sentence Correction.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>MTS:</b> Perform non-technical tasks like file handling, cleaning, and clerical duties in government offices.</li>
                <li><b>Havaldar (CBIC & CBN):</b> Assist in customs and narcotics operations, including patrolling, inspections, and support duties.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Physical Standards (Havaldar)">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Physical Standard Test (PST):</b>
                  <ul>
                    <li><b>Male:</b> Height: 157.5 cm (152.5 cm for ST), Chest: 76/5 cm.</li>
                    <li><b>Female:</b> Height: 152 cm (147 cm for ST), Weight: 48 kg (46 kg for certain categories).</li>
                  </ul>
                </li>
                <li><b>Physical Efficiency Test (PET):</b>
                  <ul>
                    <li><b>Male:</b> 1,600m walk in 15 minutes.</li>
                    <li><b>Female:</b> 1,000m walk in 20 minutes.</li>
                  </ul>
                </li>
                <li><b>Vision:</b> 6/6 or 6/9 without glasses; no color blindness.</li>
                <li><b>Medical Tests:</b> Blood tests, vision/hearing tests, general health check.</li>
              </ul>
            </CollapsibleSection>
           
            <CollapsibleSection title="Exam Analysis and Insights">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Expected Difficulty:</b> Easy to Moderate; Numerical Ability may be calculation-heavy; General Awareness to focus on 2024-2025 events.</li>
                <li><b>Expected Cut-Offs (Session 2):</b> General: 75–80, OBC: 70–75, SC: 65–70, ST: 60–65 (out of 150).</li>
                <li><b>Preparation Focus:</b> Practice arithmetic, current affairs (2024-2025), and physical fitness for Havaldar PET.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Selection Process">
              <ul className={style.zxs}>
                <li><b>CBT Session 1:</b> Qualifying, no negative marking.</li>
                <li><b>CBT Session 2:</b> Merit-based, negative marking of 1 mark per wrong answer.</li>
                <li><b>PET/PST (Havaldar):</b> Walking tasks and physical measurements.</li>
                <li><b>Document Verification:</b> Verify eligibility and category documents.</li>
                <li><b>Final Merit:</b> Based on Session 2 marks, subject to clearing Session 1 and PET/PST (Havaldar).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>10th mark sheet and certificate.</li>
                <li>Caste Certificate (SC/ST/OBC-NCL).</li>
                <li>EWS Certificate (valid for 2025-26).</li>
                <li>PwD Certificate (if applicable).</li>
                <li>Ex-Servicemen Discharge Book/Service Certificate.</li>
                <li>Photo ID (Aadhaar, PAN, Voter ID, or Passport).</li>
                <li>Recent passport-size photographs (6 copies, 20–50 KB, 200x230 pixels).</li>
                <li>Printed application form and fee payment receipt.</li>
                <li><b>Note:</b> OBC-NCL certificate must mention non-creamy layer; discrepancies lead to disqualification.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Medical Examination Details (Havaldar)">
              <ul className={style.zxs}>
                <li><b>Purpose:</b> Ensure fitness for Havaldar duties in CBIC/CBN.</li>
                <li><b>Standards:</b>
                  <ul>
                    <li><b>Vision:</b> 6/6 or 6/9 without glasses; no color blindness.</li>
                    <li><b>Hearing:</b> Normal, without aids.</li>
                    <li><b>General Health:</b> No chronic diseases or deformities affecting duties.</li>
                  </ul>
                </li>
                <li><b>Tests:</b> Blood tests, vision/hearing tests, physical examination.</li>
                <li><b>Disqualification:</b> Failure to meet standards leads to rejection.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits at SSC MTS & Havaldar">
              <ul className={style.zxs}>
                <li><b>Salary:</b> ₹18,000–₹22,000 (Level 1) + DA, HRA, other allowances.</li>
                <li><b>Job Security:</b> Permanent government posts with pension under NPS.</li>
                <li><b>Allowances:</b> Medical benefits (CGHS), Transport Allowance, Leave Benefits.</li>
                <li><b>Career Growth:</b> Promotions to Lower Division Clerk (LDC) or higher roles via departmental exams.</li>
                <li><b>Work Environment:</b> Stable roles in government offices (MTS) or customs/narcotics operations (Havaldar).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li><b>Check Eligibility:</b> Verify age (18–25/27 years) and education (10th Pass).</li>
                <li><b>Visit Official Website:</b> <a href="https://ssc.gov.in" target="_blank" className="link">ssc.gov.in</a>.</li>
                <li><b>Register:</b> Click “Apply,” enter email, mobile, Aadhaar (optional), and capture live photo (20–50 KB) and signature (10–20 KB).</li>
                <li><b>Fill Form:</b> Provide personal, educational details, and select post preferences.</li>
                <li><b>Pay Fee:</b> ₹100 (General/OBC/EWS) via online mode; exempt for SC/ST/Ex-Servicemen/Female/PwD.</li>
                <li><b>Submit:</b> Review, submit, and download application form. Keep Registration ID.</li>
                <li><b>Track Application:</b> Check status and admit cards on ssc.gov.in.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Download Admit Card">
              <ol className={style.zxs}>
                <li>Visit the official website: <a href="https://ssc.gov.in" target="_blank" className="link">ssc.gov.in</a>.</li>
                <li>Navigate to “Admit Card” section.</li>
                <li>Select “SSC MTS CBT Admit Card.”</li>
                <li>Enter Registration ID, Date of Birth, and captcha.</li>
                <li>Download and print admit card.</li>
                <li><b>Note:</b> Carry admit card and photo ID to exam; check regional SSC website for updates.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li><b>Understand Syllabus:</b> Focus on SSC MTS Syllabus (Numerical Ability, Reasoning, General Awareness, English).</li>
                <li><b>Previous Papers:</b> Solve SSC MTS 2023-2024 papers for question patterns.</li>
                <li><b>Time Management:</b> Practice 90 questions in 90 minutes; aim for 80% accuracy in Session 2.</li>
                <li><b>Current Affairs:</b> Read The Hindu, PIB for updates (e.g., Budget, Elections).</li>
                <li><b>Numerical Ability:</b> Practice basic arithmetic from R.S. Aggarwal (Class 10 level).</li>
                <li><b>English:</b> Revise grammar, vocabulary (Lucent’s GK, Kiran’s English).</li>
                <li><b>Physical Prep (Havaldar):</b> Train for PET (walking); maintain fitness for PST.</li>
                <li><b>Mock Tests:</b> Use Testbook, Adda247 for SSC MTS-specific mocks; target 75+ marks in Session 2.</li>
                <li><b>Stay Updated:</b> Follow ssc.gov.in for notifications and results.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li><b>How many vacancies in SSC MTS?</b>{totalpost}  MTS vacancies to be updated.</li>
                <li><b>Is there negative marking?</b> No in Session 1; 1 mark per wrong answer in Session 2.</li>
                <li><b>Can 10th appearing students apply?</b> No, 10th Pass certificate required.</li>
                <li><b>What documents are needed?</b> 10th certificate, caste/EWS/PwD certificates, photo ID.</li>
                <li><b>Where are exam centers?</b> Major cities across India.</li>
                <li><b>What is the role of MTS/Havaldar?</b> Clerical tasks (MTS) or customs/narcotics support (Havaldar).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li><a href="https://ssc.gov.in" target="_blank" className="link">SSC Official Website</a>: Check SSC MTS Notification, admit cards, results.</li>
                <li><a href="https://testbook.com/ssc-mts" target="_blank" className="link">Testbook Mock Tests</a>: SSC MTS-specific mocks with analytics.</li>
                <li><a href="https://adda247.com/ssc-mts" target="_blank" className="link">Adda247 Study Material</a>: Free notes on Numerical Ability, English, Reasoning.</li>
                <li><a href="https://pib.gov.in" target="_blank" className="link">PIB India</a>: Current affairs for General Awareness.</li>
                <li><a href="https://www.jagranjosh.com/ssc-mts-previous-papers" target="_blank" className="link">Previous Year Papers</a>: Download 2023-2024 papers.</li>
                <li><b>Books:</b>
                  <ul>
                    <li>“SSC MTS Guide” by Arihant for overall prep.</li>
                    <li>“Lucent’s General Knowledge” for General Awareness.</li>
                    <li>“Kiran’s SSC MTS English” for language prep.</li>
                    <li>“Quantitative Aptitude” by R.S. Aggarwal for Numerical Ability.</li>
                  </ul>
                </li>
                <li><b>YouTube Channels:</b> “Adda247,” “StudyIQ” for SSC MTS exam tips and live classes.</li>
              </ul>
            </CollapsibleSection>
            
            <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
              <div className={style.zxv}>
                 <div >{Object.entries(link).map(([key, value]) => ( <li> <a href={value} target="_blank" className="link"> {key}</a></li> ))}</div>
              </div>
            </div>
             <Ad type="NativeBanner" />
            <img src={a1} alt="SSC MTS 2025 Recruitment" className={style.imga} />
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
              <p>Seeking Police Jobs, Railway Jobs, Bank Jobs Recruitment, or Defense Vacancies?</p>
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

export default SSC_MTS_2;