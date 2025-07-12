import style from "./000_Content.module.css";
import a1 from "./Pic/SSC_CGL_1.png"; // Update with relevant image
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";
const SSC_CGL_2 = () => {
   
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
    fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/SSCCGL.json")
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((item) => item.id === "ssccgl1");
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
              Total Posts: <span className={style.highlight}></span>
            </h3>
            <h3 className={style.zxh}>
              Pay Scale: <span className={style.highlight}></span>
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
                <li><b>General/OBC:</b> ₹100</li>
                <li><b>SC/ST/PwBD/Ex-Servicemen/Female:</b> Nil</li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Credit/Debit Card, Net Banking, UPI, or BHIM. Fee is non-refundable. Correction fee: ₹200 (first time), ₹500 (second time).
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Across India (Delhi, Mumbai, Kolkata, Chennai, etc.)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/08/2025)</h2>
              <ul className={style.zxk}>
                <li><b>Minimum Age:</b> 18 Years</li>
                <li><b>Maximum Age:</b> 27–32 Years (varies by post)</li>
                <li><b>Age Relaxation:</b> SC/ST: 5 years, OBC: 3 years, PwBD: 10 years, Ex-Servicemen: 3 years (after service deduction), as per SSC rules.</li>
              </ul>
            </div>
            <div className={style.zxj}>
               <h2 className={style.sectiontitle}>Eligibility Qualification Details</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}><b>Post Name</b></div>
                <div className={style.tablecell}><b>Eligibility Criteria</b></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Assistant Audit Officer</div>
                <div className={style.tablecell}>Bachelor’s Degree; desirable: CA/CMA/MBA/M.Com.</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Junior Statistical Officer</div>
                <div className={style.tablecell}>Bachelor’s Degree with 60% in Maths (12th) or Statistics as a subject at degree level.</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Other Posts (Inspector, ASO, etc.)</div>
                <div className={style.tablecell}>Bachelor’s Degree in any discipline from a recognized university by 01/08/2025.</div>
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
              <h2 className={style.sectiontitle}>Tier I: Computer-Based Exam (Objective)</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Section</div>
                <div className={style.tablecell}>Subjects</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>A</div>
                <div className={style.tablecell}>General Intelligence & Reasoning</div>
                <div className={style.tablecell}>25</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}>60 Minutes</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>B</div>
                <div className={style.tablecell}>General Awareness</div>
                <div className={style.tablecell}>25</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>C</div>
                <div className={style.tablecell}>Quantitative Aptitude</div>
                <div className={style.tablecell}>25</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>D</div>
                <div className={style.tablecell}>English Comprehension</div>
                <div className={style.tablecell}>25</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}></div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Objective-type; 0.5 marks deducted per wrong answer.</li>
                <li>Qualifying in nature; marks normalized for final merit.</li>
                <li>Total: 100 questions, 200 marks, 60 minutes.</li>
              </ul>
              <h2 className={style.sectiontitle}>Tier II: Computer-Based Exam (Objective)</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Paper</div>
                <div className={style.tablecell}>Subjects</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper I (Session I)</div>
                <div className={style.tablecell}>Mathematical Abilities, Reasoning</div>
                <div className={style.tablecell}>60</div>
                <div className={style.tablecell}>180</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper I (Session II)</div>
                <div className={style.tablecell}>English Language, General Awareness</div>
                <div className={style.tablecell}>75</div>
                <div className={style.tablecell}>225</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper II</div>
                <div className={style.tablecell}>Statistics (for JSO)</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>200</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper III</div>
                <div className={style.tablecell}>Finance & Accounts (for AAO)</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>200</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Paper I compulsory; Papers II and III for specific posts.</li>
                <li>0.5 marks deducted per wrong answer in Paper I; 1 mark in Papers II/III.</li>
                <li>Marks contribute to final merit.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <h2 className={style.sectiontitle}></h2>
              <h3 style={{ fontWeight: "700" }}>Tier I:</h3>
              <ul className={style.zxs}>
                <li><b>General Intelligence & Reasoning:</b> Analogies, Coding-Decoding, Puzzles, Series, Syllogism.</li>
                <li><b>General Awareness:</b> Current Affairs (2024-2025), History, Geography, Polity, Economy, Science.</li>
                <li><b>Quantitative Aptitude:</b> Percentage, Ratio, Profit/Loss, Time & Work, Geometry, Data Interpretation.</li>
                <li><b>English Comprehension:</b> Reading Comprehension, Grammar, Vocabulary, Error Spotting.</li>
              </ul>
              <h3 style={{ fontWeight: "700" }}>Tier II:</h3>
              <ul className={style.zxs}>
                <li><b>Paper I (Mathematical Abilities):</b> Algebra, Geometry, Trigonometry, Mensuration, Statistics.</li>
                <li><b>Paper I (Reasoning):</b> Verbal/Non-Verbal Reasoning, Data Sufficiency.</li>
                <li><b>Paper I (English):</b> Comprehension, Sentence Correction, Synonyms/Antonyms.</li>
                <li><b>Paper I (General Awareness):</b> Current Events, Government Schemes, Budget 2025.</li>
                <li><b>Paper II (Statistics):</b> Probability, Sampling, Regression, Time Series Analysis.</li>
                <li><b>Paper III (Finance & Accounts):</b> Financial Accounting, Economics, Budgeting.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Assistant Audit Officer (AAO):</b> Conduct audits in CAG offices; handle financial documentation.</li>
                <li><b>Junior Statistical Officer (JSO):</b> Collect and analyze statistical data for MoSPI.</li>
                <li><b>Inspector (Income Tax/Central Excise):</b> Enforce tax laws, conduct inspections, and investigate cases.</li>
                <li><b>Assistant Section Officer (ASO):</b> Administrative support in ministries like MEA, MHA; manage files and reports.</li>
                <li><b>Section Head/Office Superintendent:</b> New posts in 2025; supervise administrative tasks in government offices.</li>
                <li><b>Other Posts:</b> Include Divisional Accountant, Sub Inspector (CBI), Auditor, Tax Assistant, etc., with roles in clerical, enforcement, or data management.</li>
              </ul>
            </CollapsibleSection>
            
            <CollapsibleSection title="Physical Standards">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Inspector/Sub Inspector (CBI, NIA):</b>
                  <ul>
                    <li><b>Male:</b> Height: 165 cm (157 cm for ST), Chest: 76 cm (unexpanded).</li>
                    <li><b>Female:</b> Height: 150 cm (147 cm for ST).</li>
                    <li><b>Vision:</b> 6/6 or 6/9 without glasses; no color blindness.</li>
                  </ul>
                </li>
                <li><b>Other Posts:</b> No specific physical standards; general medical fitness required.</li>
                <li><b>Medical Tests:</b> Conducted for enforcement posts to ensure fitness for fieldwork.</li>
              </ul>
            </CollapsibleSection>
            
            <CollapsibleSection title="Exam Analysis and Insights">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Tier I Difficulty (2024):</b> Moderate; Quantitative Aptitude and Reasoning were time-consuming; General Awareness focused on 2024 events.</li>
                <li><b>Tier II Difficulty:</b> Moderate to Difficult; Paper I (Maths) had advanced geometry; English was scoring.</li>
                <li><b>Expected Cut-Offs (Tier I):</b> General: 150–160, OBC: 140–150, SC/ST: 120–130 (out of 200).</li>
                <li><b>Preparation Focus:</b> Practice Data Interpretation, Current Affairs (Budget, Schemes), and quantitative skills.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Selection Process">
              <ul className={style.zxs}>
                <li><b>Tier I:</b> Objective, qualifying; shortlists for Tier II.</li>
                <li><b>Tier II:</b> Objective, merit-based; Papers II/III for specific posts.</li>
                <li><b>Skill Test (if applicable):</b> Data Entry Skill Test (DEST) for Tax Assistants; Computer Proficiency Test (CPT) for ASO/Inspector posts.</li>
                <li><b>Document Verification:</b> Verify eligibility and category documents.</li>
                <li><b>Final Merit:</b> Based on Tier II marks.</li>
                <li><b>Medical Test:</b> For enforcement posts (Inspector/Sub Inspector).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>10th/12th mark sheets and certificates.</li>
                <li>Bachelor’s degree certificate and mark sheets (by 01/08/2025).</li>
                <li>Caste Certificate (SC/ST/OBC-NCL, valid as on 01/08/2025).</li>
                <li>EWS Certificate (valid for 2025-26).</li>
                <li>PwBD Certificate (if applicable).</li>
                <li>Ex-Servicemen Discharge Book/Service Certificate.</li>
                <li>Photo ID (Aadhaar, PAN, Voter ID, or Passport).</li>
                <li>Recent passport-size photographs (6 copies).</li>
                <li>Printed application form and fee payment receipt.</li>
                <li><b>Note:</b> OBC-NCL certificate must mention non-creamy layer; discrepancies lead to disqualification.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Medical Examination Details">
              <ul className={style.zxs}>
                <li><b>Purpose:</b> Ensure fitness for enforcement posts (e.g., Inspector).</li>
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
            <CollapsibleSection title="Career Benefits at SSC CGL">
              <ul className={style.zxs}>
                <li><b>Salary:</b> ₹25,500–₹1,51,100 (Level 4–8) + DA, HRA, Travel Allowance.</li>
                <li><b>Job Security:</b> Permanent government posts with pension under NPS.</li>
                <li><b>Allowances:</b> Medical benefits (CGHS), LTC, housing (where available).</li>
                <li><b>Career Growth:</b> Promotions to Group A posts (e.g., Under Secretary, Deputy Director) via departmental exams.</li>
                <li><b>Work Environment:</b> Prestigious roles in ministries, CAG, CBI, and other central departments.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li><b>Check Eligibility:</b> Verify age (18–32 years) and education (Bachelor’s degree by 01/08/2025).</li>
                <li><b>Visit Official Website:</b> <a href="https://ssc.gov.in" target="_blank" className="link">ssc.gov.in</a>.</li>
                <li><b>Register:</b> Click “Apply,” enter email, mobile, Aadhaar (optional), and upload photo (4-12 KB) and signature (1-12 KB).</li>
                <li><b>Fill Form:</b> Provide personal, educational, and post preferences; select exam city.</li>
                <li><b>Pay Fee:</b> ₹100 (General/OBC) via online mode; exempt for SC/ST/PwBD/Female.</li>
                <li><b>Submit:</b> Review, submit, and download application form. Keep Registration ID.</li>
                <li><b>Track Application:</b> Check status and admit cards on ssc.gov.in.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Download Admit Card">
              <ol className={style.zxs}>
                <li>Visit the official website: <a href="https://ssc.gov.in" target="_blank" className="link">ssc.gov.in</a>.</li>
                <li>Navigate to “Admit Card” section.</li>
                <li>Select “SSC CGL 2025 Tier I Admit Card.”</li>
                <li>Enter Registration ID, Date of Birth, and captcha.</li>
                <li>Download and print admit card.</li>
                <li><b>Note:</b> Carry admit card and photo ID to exam; check regional SSC website for updates.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li><b>Understand Syllabus:</b> Focus on SSC CGL Syllabus 2025 for Tier I (Reasoning, GA, Quant, English) and Tier II (Maths, Statistics).</li>
                <li><b>Previous Papers:</b> Solve SSC CGL 2023-2024 papers for question patterns.</li>
                <li><b>Time Management:</b> Practice 100 questions in 60 minutes (Tier I); aim for 80% accuracy.</li>
                <li><b>Current Affairs:</b> Read The Hindu, PIB, and Economic Times for 2024-2025 updates.</li>
                <li><b>Quantitative Aptitude:</b> Practice Arithmetic, Algebra, and Data Interpretation from R.S. Aggarwal.</li>
                <li><b>English:</b> Revise grammar (Wren & Martin), vocabulary, and comprehension.</li>
                <li><b>Mock Tests:</b> Use Testbook, Adda247 for SSC CGL-specific mocks; target 160+ marks in Tier I.</li>
                <li><b>Stay Updated:</b> Follow ssc.gov.in for exam dates and notifications.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li><b>How many vacancies in SSC CGL 2025?</b> 14,582 posts.</li>[](https://www.shiksha.com/sarkari-exams/ssc/articles/ssc-cgl-2025-blogId-190738)
                <li><b>Is there negative marking?</b> Yes, 0.5 marks in Tier I/Paper I, 1 mark in Tier II Papers II/III.</li>
                <li><b>Can final-year students apply?</b> Yes, if degree is completed by 01/08/2025.</li>
                <li><b>What documents are needed?</b> Degree certificate, caste/EWS/PwBD certificates, photo ID.</li>
                <li><b>Where are exam centers?</b> Major cities across India (Delhi, Mumbai, Kolkata, etc.).</li>
                <li><b>What is the role of an AAO?</b> Conduct audits in CAG offices; involves financial analysis.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li><a href="https://ssc.gov.in" target="_blank" className="link">SSC Official Website</a>: Check SSC CGL Notification, admit cards, results.</li>
                <li><a href="https://testbook.com/ssc-cgl" target="_blank" className="link">Testbook Mock Tests</a>: SSC CGL-specific mocks with analytics.</li>
                <li><a href="https://adda247.com/ssc-cgl" target="_blank" className="link">Adda247 Study Material</a>: Free notes on Quant, English, Reasoning.</li>
                <li><a href="https://pib.gov.in" target="_blank" className="link">PIB India</a>: Current affairs for General Awareness.</li>
                <li><a href="https://www.jagranjosh.com/ssc-cgl-previous-papers" target="_blank" className="link">Previous Year Papers</a>: Download 2023-2024 papers.</li>
                <li><b>Books:</b>
                  <ul>
                    <li>“Quantitative Aptitude” by R.S. Aggarwal for Maths.</li>
                    <li>“Objective General English” by S.P. Bakshi for English.</li>
                    <li>“Lucent’s General Knowledge” for General Awareness.</li>
                    <li>“A Modern Approach to Reasoning” by R.S. Aggarwal.</li>
                  </ul>
                </li>
                <li><b>YouTube Channels:</b> “Adda247,” “StudyIQ” for SSC CGL exam tips and live classes.</li>
              </ul>
            </CollapsibleSection>
            <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
              <div className={style.zxv}>
                 <div >{Object.entries(link).map(([key, value]) => ( <li> <a href={value} target="_blank" className="link"> {key}</a></li> ))}</div>
              </div>
            </div>
            <Ad type="NativeBanner" />
            <img src={a1} alt="SSC CGL Recruitment 2025" className={style.imga} />
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

export default SSC_CGL_2;