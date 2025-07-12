import style from "./000_Content.module.css";
import a1 from "./Pic/IBPS_PO_MT_2.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";
const IBPS_PO_MT_2 = () => {
    
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
      fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/IBPS_PO_MT.json")
        .then((res) => res.json())
        .then((data) => {
          const job = data.find((item) => item.id === "ibpspomt2");
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
            <h2 className={style.zxg}>Institute of Banking Personnel Selection (IBPS)</h2>
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
                <li><b>General/OBC/EWS:</b> ₹850</li>
                <li><b>SC/ST/PWD:</b> ₹175</li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Credit/Debit Card, Net Banking, or UPI. Fee is non-refundable.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Across India (based on bank allocation)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/08/2024)</h2>
              <ul className={style.zxk}>
                <li><b>Minimum Age:</b> 20 Years</li>
                <li><b>Maximum Age (General):</b> 30 Years (Born between 02/08/1994 and 01/08/2004)</li>
                <li><b>Age Relaxation:</b> SC/ST: 5 years, OBC: 3 years, PWD: 10 years, Ex-Servicemen: 5 years, as per IBPS rules.</li>
              </ul>
            </div>
             <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Eligibility Qualification Details</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Post Name</div>
                <div className={style.tablecell}>Eligibility Criteria</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Probationary Officer / Management Trainee</div>
                <div className={style.tablecell}>
                  Bachelor’s degree in any discipline from a recognized university by 21/08/2024. Candidates awaiting final results are ineligible.
                </div>
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
              <h2 className={style.sectiontitle}>1. Preliminary Exam</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Subject</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>English Language</div>
                <div className={style.tablecell}>30</div>
                <div className={style.tablecell}>30</div>
                <div className={style.tablecell}>20 Minutes</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Quantitative Aptitude</div>
                <div className={style.tablecell}>35</div>
                <div className={style.tablecell}>35</div>
                <div className={style.tablecell}>20 Minutes</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Reasoning Ability</div>
                <div className={style.tablecell}>35</div>
                <div className={style.tablecell}>35</div>
                <div className={style.tablecell}>20 Minutes</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>100 multiple-choice questions; sectional timing.</li>
                <li>0.25 marks deducted per wrong answer; qualifying in nature.</li>
                <li>Top candidates qualify for Mains Exam based on cut-off.</li>
              </ul>
              <h2 className={style.sectiontitle}>2. Mains Exam</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Subject</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Reasoning & Computer Aptitude</div>
                <div className={style.tablecell}>45</div>
                <div className={style.tablecell}>60</div>
                <div className={style.tablecell}>60 Minutes</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>General/Economy/Banking Awareness</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>35 Minutes</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>English Language</div>
                <div className={style.tablecell}>35</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>40 Minutes</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Data Analysis & Interpretation</div>
                <div className={style.tablecell}>35</div>
                <div className={style.tablecell}>60</div>
                <div className={style.tablecell}>45 Minutes</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>English Language (Descriptive)</div>
                <div className={style.tablecell}>2</div>
                <div className={style.tablecell}>25</div>
                <div className={style.tablecell}>30 Minutes</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Objective (157 questions, 200 marks) + Descriptive (Letter/Essay, 25 marks).</li>
                <li>0.25 marks deducted per wrong answer in objective sections.</li>
                <li>Top candidates qualify for Interview based on Mains marks.</li>
              </ul>
              <h2 className={style.sectiontitle}>3. Interview</h2>
              <ul className={style.zxs}>
                <li>100 marks; assesses communication, banking knowledge, and personality.</li>
                <li>Minimum qualifying marks: 40% (General), 35% (SC/ST/OBC/PWD).</li>
                <li>Final merit based on Mains (80%) + Interview (20%) marks.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <h2 className={style.sectiontitle}></h2>
              <h3 style={{ fontWeight: "700" }}>1. Preliminary Exam:</h3>
              <ul className={style.zxs}>
                <li><b>English Language:</b> Reading Comprehension, Cloze Test, Error Detection, Para Jumbles, Vocabulary.</li>
                <li><b>Quantitative Aptitude:</b> Simplification, Number Series, Data Interpretation, Profit & Loss, Percentages, Ratio & Proportion.</li>
                <li><b>Reasoning Ability:</b> Puzzles, Seating Arrangement, Syllogism, Blood Relations, Coding-Decoding.</li>
              </ul>
              <h3 className={style.zxu}>2. Mains Exam:</h3>
              <ul className={style.zxs}>
                <li><b>Reasoning & Computer Aptitude:</b> Puzzles, Input-Output, Data Sufficiency, Computer Basics (MS Office, Internet).</li>
                <li><b>General/Economy/Banking Awareness:</b> Current Affairs (6 months), Banking Terms, RBI Policies, Budget 2024.</li>
                <li><b>English Language:</b> Comprehension, Essay, Letter Writing, Sentence Improvement, Fillers.</li>
                <li><b>Data Analysis & Interpretation:</b> Bar Graphs, Line Charts, Pie Charts, Quadratic Equations, Probability.</li>
                <li><b>Descriptive Test:</b> Essay (economic, banking issues), Letter (formal/informal).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Probationary Officer / Management Trainee:</b> Manage banking operations, customer services, loan processing, and branch administration. Responsibilities include account management, financial advising, compliance with banking regulations, and team coordination.</li>
              </ul>
            </CollapsibleSection>
           
            <CollapsibleSection title="Exam Analysis and Insights">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Difficulty Level (Prelims 2024):</b> Moderate; Reasoning (35%) and Quantitative Aptitude (40%) were time-intensive.</li>
                <li><b>Current Affairs (Mains):</b> Expected focus on RBI policies, Budget 2024, and international banking (G20, IMF).</li>
                <li><b>Data Analysis:</b> Graphs and caselets dominate; practice DI sets for speed.</li>
                <li><b>Cut-Off Trends:</b> Prelims: ~60-65 (General), ~50-55 (OBC/SC); Mains: ~90-100 (General), ~80-85 (OBC/SC).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Selection Process">
              <ul className={style.zxs}>
                <li><b>Preliminary Exam:</b> 100 MCQs, 1 hour, qualifying in nature.</li>
                <li><b>Mains Exam:</b> Objective (200 marks) + Descriptive (25 marks), 3.5 hours; determines Interview eligibility.</li>
                <li><b>Interview:</b> 100 marks; assesses banking knowledge and personality.</li>
                <li><b>Document Verification:</b> Verify educational, identity, and category documents.</li>
                <li><b>Final Merit List:</b> Mains (80%) + Interview (20%) marks.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>Original and photocopy of 10th/12th mark sheets and certificates.</li>
                <li>Bachelor’s degree certificate and mark sheets.</li>
                <li>Caste Certificate (SC/ST/OBC/EWS, in prescribed format).</li>
                <li>PWD Certificate (if applicable).</li>
                <li>Ex-Servicemen Discharge Book/Service Certificate.</li>
                <li>Photo ID (Aadhaar, PAN, Voter ID, or Passport).</li>
                <li>Recent passport-size photographs (6 copies).</li>
                <li>Printed application form and fee payment receipt.</li>
                <li><b>Note:</b> Ensure documents match application details to avoid disqualification.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits at Public Sector Banks">
              <ul className={style.zxs}>
                <li><b>Competitive Salary:</b> ₹37,360–₹95,510 (JMG Scale-I), plus DA, HRA, and medical allowances.</li>
                <li><b>Job Security:</b> Permanent government banking position with pension benefits under NPS.</li>
                <li><b>Healthcare:</b> Medical insurance and bank hospital facilities.</li>
                <li><b>Housing:</b> Bank quarters or HRA for urban postings.</li>
                <li><b>Career Growth:</b> Promotions to Scale-II, Scale-III, and higher ranks based on performance and exams.</li>
                <li><b>Work Environment:</b> Serve customers, manage financial operations, and contribute to economic growth.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li><b>Check Eligibility:</b> Verify age (20–30 years) and education (Bachelor’s degree).</li>
                <li><b>Visit Official Website:</b> <a href="https://www.ibps.in" target="_blank" className="link">www.ibps.in</a>.</li>
                <li><b>Register:</b> Click “CRP PO/MT-XIV,” enter name, email, mobile, and upload photo (20-50 KB) and signature (10-20 KB).</li>
                <li><b>Fill Form:</b> Provide personal, educational, and category details; select exam center.</li>
                <li><b>Pay Fee:</b> ₹850 (General/OBC/EWS), ₹175 (SC/ST/PWD); pay online.</li>
                <li><b>Submit:</b> Review, submit, and download the application form. Keep two printed copies.</li>
                <li><b>Track Application:</b> Use login credentials to check status and download admit cards.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Check Admit Card & Score Card">
              <ol className={style.zxs}>
                <li>Visit the official website: <a href="https://www.ibps.in" target="_blank" className="link">www.ibps.in</a>.</li>
                <li>Navigate to the “CRP PO/MT-XIV” section.</li>
                <li>Click on “Mains Admit Card” or “Score Card” link.</li>
                <li>Enter registration number, roll number, and password/date of birth.</li>
                <li>View and download the admit card or score card PDF.</li>
                <li><b>Note:</b> Check exam center details and carry admit card with ID to the exam.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li><b>Understand the Syllabus:</b> Focus on Quantitative Aptitude, Reasoning, and Banking Awareness.</li>
                <li><b>Previous Papers:</b> Solve IBPS PO 2021-2023 papers for question patterns.</li>
                <li><b>Time Management:</b> Practice 100 MCQs in 1 hour for Prelims; aim for 70% accuracy.</li>
                <li><b>Current Affairs:</b> Read The Hindu, Economic Times, and RBI notifications for 2023-2024 updates.</li>
                <li><b>Quantitative Aptitude:</b> Practice DI, Simplification, and Number Series from R.S. Aggarwal.</li>
                <li><b>Reasoning:</b> Focus on Puzzles, Seating Arrangement, and Syllogism using Arihant books.</li>
                <li><b>English:</b> Practice Comprehension and Essay writing; use Wren & Martin for grammar.</li>
                <li><b>Mock Tests:</b> Use Oliveboard, Adda247 for PO-specific mocks; target 70-80 marks in Prelims.</li>
                <li><b>Stay Updated:</b> Follow IBPS website for exam and admit card notifications.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li><b>How many vacancies are there?</b> Approximately 4,455 PO/MT posts across participating banks.</li>
                <li><b>Can final-year students apply?</b> No, candidates must have a Bachelor’s degree by 21/08/2024.</li>
                <li><b>Is there negative marking?</b> Yes, 0.25 marks deducted per wrong answer in Prelims and Mains (objective).</li>
                <li><b>What documents are needed for verification?</b> 10th/12th certificates, degree certificate, caste certificate, photo ID.</li>
                <li><b>Where are the exam centers?</b> Major cities across India (Delhi, Mumbai, Kolkata, Chennai, etc.).</li>
                <li><b>What is the role of a PO/MT?</b> Manage banking operations, customer services, and loan processing.</li>
                <li><b>Can non-residents apply?</b> Yes, Indian citizens from any state can apply.</li>
                <li><b>How to prepare for the Interview?</b> Study banking terms, RBI policies, and practice mock interviews.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li><a href="https://www.ibps.in" target="_blank" className="link">IBPS Official Website</a>: Check results, admit cards, and notifications.</li>
                <li><a href="https://www.oliveboard.in/ibps-po" target="_blank" className="link">Oliveboard Mock Tests</a>: Practice Prelims and Mains with analytics.</li>
                <li><a href="https://adda247.com/ibps-po" target="_blank" className="link">Adda247 Study Material</a>: Free notes on Quantitative Aptitude, Reasoning, and Banking Awareness.</li>
                <li><a href="https://www.rbi.org.in" target="_blank" className="link">RBI Website</a>: Banking updates and policies for Mains.</li>
                <li><a href="https://www.jagranjosh.com/ibps-po-previous-papers" target="_blank" className="link">Previous Year Papers</a>: Download PDFs for 2021-2023 exams.</li>
                <li><b>Books:</b>
                  <ul>
                    <li>“Quantitative Aptitude” by R.S. Aggarwal for Data Analysis.</li>
                    <li>“Banking Awareness” by Arihant for General Awareness.</li>
                    <li>“High School English Grammar” by Wren & Martin for English.</li>
                    <li>“A Modern Approach to Verbal & Non-Verbal Reasoning” by R.S. Aggarwal.</li>
                  </ul>
                </li>
                <li><b>YouTube Channels:</b> Follow “Adda247” or “Bankers Point” for IBPS PO exam tips and live classes.</li>
              </ul>
            </CollapsibleSection>
            <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
              <div className={style.zxv}>
                <div >{Object.entries(link).map(([key, value]) => ( <li> <a href={value} target="_blank" className="link"> {key}</a></li> ))}</div>
              </div>
            </div>
            <Ad type="NativeBanner" />
            <img src={a1} alt="IBPS PO/MT Recruitment 2024" className={style.imga} />
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
              <p>Seeking Police Jobs, Railway Jobs 2024, Bank Jobs Recruitment, or Defense Vacancies?</p>
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

export default IBPS_PO_MT_2;