import style from "./000_Content.module.css";
import a1 from "./Pic/IDBI_Bank_1.jpg"; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";
const IDBI_Bank_1 = () => {
    
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
      fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/IDBI_BANK.json")
        .then((res) => res.json())
        .then((data) => {
          const job = data.find((item) => item.id === "idbibank1");
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
            <h2 className={style.zxg}>Industrial Development Bank of India (IDBI)</h2>
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
                <li><b>General/OBC/EWS:</b> ₹1,050 (Application Fee + Intimation Charges)</li>
                <li><b>SC/ST/PWD:</b> ₹250 (Intimation Charges Only)</li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Debit Card, Credit Card, Net Banking, IMPS, or Mobile Wallets. Fee is non-refundable.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Across India (IDBI Bank branches and offices)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/10/2024)</h2>
              <ul className={style.zxk}>
                <li><b>Minimum Age:</b> 20 Years</li>
                <li><b>Maximum Age:</b> 25 Years (Born between 02/10/1999 and 01/10/2004)</li>
                <li><b>Age Relaxation:</b> SC/ST: 5 years, OBC: 3 years, PWD: 10 years, Ex-Servicemen: 5 years, as per IDBI rules.
                </li>
              </ul>
            </div>
             <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Eligibility Qualification Details</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Post Name</div>
                <div className={style.tablecell}>Eligibility Criteria</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Executive – Sales and Operations (ESO)</div>
                <div className={style.tablecell}>
                  Bachelor’s degree in any discipline from a recognized university approved by UGC/AICTE by 01/10/2024. Candidates awaiting final results are ineligible.
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
              <h2 className={style.sectiontitle}>Online Test</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Subject</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Logical Reasoning, Data Analysis & Interpretation</div>
                <div className={style.tablecell}>60</div>
                <div className={style.tablecell}>60</div>
                <div className={style.tablecell}>120 Minutes (Composite)</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>English Language</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>120 Minutes (Composite)</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Quantitative Aptitude</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>120 Minutes (Composite)</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>General/Economy/Banking Awareness/Computer/IT</div>
                <div className={style.tablecell}>60</div>
                <div className={style.tablecell}>60</div>
                <div className={style.tablecell}>120 Minutes (Composite)</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>200 multiple-choice questions, 200 marks, 120 minutes.</li>
                <li>0.25 marks deducted per wrong answer; bilingual (English/Hindi) except English Language section.</li>
                <li>Candidates qualifying the online test proceed to Document Verification and Personal Interview.
                </li>
              </ul>
              <h2 className={style.sectiontitle}>Personal Interview</h2>
              <ul className={style.zxs}>
                <li>100 marks; assesses communication, banking knowledge, and personality.</li>
                <li>Minimum qualifying marks: 50% (General), 45% (SC/ST/OBC/PWD).</li>
                <li>Final merit based on Online Test and Interview marks.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <h2 className={style.sectiontitle}></h2>
              <h3 style={{ fontWeight: "700" }}>Online Test:</h3>
              <ul className={style.zxs}>
                <li><b>Logical Reasoning, Data Analysis & Interpretation:</b> Puzzles, Seating Arrangement, Data Sufficiency, Bar Graphs, Pie Charts.</li>
                <li><b>English Language:</b> Reading Comprehension, Cloze Test, Error Detection, Para Jumbles, Vocabulary.</li>
                <li><b>Quantitative Aptitude:</b> Simplification, Number Series, Profit & Loss, Percentages, Ratio & Proportion.</li>
                <li><b>General/Economy/Banking Awareness/Computer/IT:</b> Current Affairs (6 months), Banking Terms, RBI Policies, Basic Computer Knowledge, IT Fundamentals.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Executive – Sales and Operations (ESO):</b> Handle customer services, banking operations, account management, and sales activities. Responsibilities include processing transactions, addressing customer queries, and supporting branch operations.
                </li>
              </ul>
            </CollapsibleSection>
           
            <CollapsibleSection title="Exam Analysis and Insights">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Difficulty Level (Online Test 2024):</b> Moderate; Reasoning and Quantitative Aptitude were time-consuming.</li>
                <li><b>Banking Awareness:</b> Focused on RBI policies, Budget 2024, and recent banking reforms.</li>
                <li><b>Interview:</b> Questions on banking operations, customer service scenarios, and current economic events.</li>
                <li><b>Cut-Off Trends:</b> Expected Online Test cut-off: ~120-130 (General), ~100-110 (OBC/SC/ST).
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Selection Process">
              <ul className={style.zxs}>
                <li><b>Online Test:</b> 200 MCQs, 120 minutes, qualifying in nature.</li>
                <li><b>Document Verification:</b> Verify educational, identity, and category documents.</li>
                <li><b>Personal Interview:</b> 100 marks; assesses banking knowledge and personality.</li>
                <li><b>Pre-Recruitment Medical Test (PRMT):</b> Ensures physical and mental fitness for banking duties.</li>
                <li><b>Final Merit List:</b> Based on Online Test and Interview marks.
                </li>
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
                <li><b>Note:</b> Ensure documents match application details to avoid disqualification.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Medical Examination Details">
              <ul className={style.zxs}>
                <li><b>Purpose:</b> Ensure candidates are fit for banking duties.</li>
                <li><b>Standards:</b>
                  <ul>
                    <li><b>Vision:</b> Normal vision; no color blindness.</li>
                    <li><b>Hearing:</b> Normal hearing without aids.</li>
                    <li><b>General Health:</b> No chronic diseases (e.g., diabetes, hypertension).</li>
                    <li><b>Physical Fitness:</b> No deformities affecting job performance.</li>
                  </ul>
                </li>
                <li><b>Tests:</b> Blood tests, urine tests, vision/hearing tests, physical examination.</li>
                <li><b>Location:</b> Conducted at designated IDBI medical facilities.</li>
                <li><b>Preparation:</b> Maintain health; avoid heavy meals before tests.</li>
                <li><b>Disqualification:</b> Failure to meet standards leads to rejection.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits at IDBI Bank">
              <ul className={style.zxs}>
                <li><b>Competitive Salary:</b> ₹29,000/month (Year 1), ₹31,000/month (Year 2), plus allowances.</li>
                <li><b>Contractual Role:</b> Initial 1-year contract, extendable to 3 years based on performance.</li>
                <li><b>Career Growth:</b> Eligible for Assistant Manager (Grade A) after 3-year contract, subject to selection.
                </li>
                <li><b>Work Environment:</b> Engage in banking operations, customer service, and financial growth initiatives.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li><b>Check Eligibility:</b> Verify age (20–25 years) and education (Bachelor’s degree).</li>
                <li><b>Visit Official Website:</b> <a href="https://www.idbibank.in" target="_blank" className="link">www.idbibank.in</a>.</li>
                <li><b>Register:</b> Click “Careers” “Current Openings” “Recruitment of Executive – Sales and Operations (ESO) 2025-26,” enter details, and upload photo (20-50 KB) and signature (10-20 KB).</li>
                <li><b>Fill Form:</b> Provide personal, educational, and category details; select exam center.</li>
                <li><b>Pay Fee:</b> ₹1,050 (General/OBC/EWS), ₹250 (SC/ST/PWD); pay online.</li>
                <li><b>Submit:</b> Review, submit, and download the application form. Keep two printed copies.</li>
                <li><b>Track Application:</b> Use login credentials to check status and download admit cards.
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Download Admit Card">
              <ol className={style.zxs}>
                <li>Visit the official website: <a href="https://www.idbibank.in" target="_blank" className="link">www.idbibank.in</a>.</li>
                <li>Navigate to “Careers” “Current Openings.”</li>
                <li>Click on “Call Letter for Document Verification and Personal Interview (ESO) – 2025-26.”</li>
                <li>Enter registration number/roll number and date of birth/password.</li>
                <li>Fill captcha code and click “Login.”</li>
                <li>Download and print the admit card for future reference.</li>
                <li><b>Note:</b> Admit card is available from 27/12/2024 to 06/01/2025; carry it with a valid photo ID to the interview.
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li><b>Understand the Syllabus:</b> Focus on Reasoning, Quantitative Aptitude, and Banking Awareness.</li>
                <li><b>Previous Papers:</b> Solve IDBI ESO 2022-2023 papers for question patterns.</li>
                <li><b>Time Management:</b> Practice 200 MCQs in 120 minutes; aim for 70% accuracy.</li>
                <li><b>Current Affairs:</b> Read The Hindu, Economic Times, and RBI notifications for 2024 updates.</li>
                <li><b>Quantitative Aptitude:</b> Practice Number Series, DI, and Simplification from R.S. Aggarwal.</li>
                <li><b>Reasoning:</b> Focus on Puzzles and Seating Arrangement using Arihant books.</li>
                <li><b>English:</b> Practice Comprehension and Error Detection; use Wren & Martin for grammar.</li>
                <li><b>Mock Tests:</b> Use PracticeMock, BankersAdda for ESO-specific mocks; target 130-140 marks.</li>
                <li><b>Interview Preparation:</b> Study banking terms, RBI policies, and practice mock interviews.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li><b>How many vacancies are there?</b> 1,000 Executive – Sales and Operations (ESO) posts.</li>
                <li><b>Can final-year students apply?</b> No, candidates must have a Bachelor’s degree by 01/10/2024.</li>
                <li><b>Is there negative marking?</b> Yes, 0.25 marks deducted per wrong answer in the Online Test.</li>
                <li><b>What documents are needed for verification?</b> 10th/12th certificates, degree certificate, caste certificate, photo ID.</li>
                <li><b>Where are the exam centers?</b> Major cities across India (Delhi, Mumbai, Kolkata, Chennai, etc.).</li>
                <li><b>What is the role of an ESO?</b> Handle banking operations, customer services, and sales activities.</li>
                <li><b>Is the ESO role permanent?</b> No, it’s a 3-year contract with potential for Assistant Manager (Grade A) after completion.</li>
                <li><b>How to prepare for the Interview?</b> Study banking operations, current affairs, and practice communication skills.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li><a href="https://www.idbibank.in" target="_blank" className="link">IDBI Official Website</a>: Check results, admit cards, and notifications.</li>
                <li><a href="https://www.practicemock.com/idbi-eso" target="_blank" className="link">PracticeMock Tests</a>: Practice ESO-specific mocks with analytics.</li>
                <li><a href="https://www.bankersadda.com/idbi-eso" target="_blank" className="link">BankersAdda Study Material</a>: Free notes on Reasoning, Quantitative Aptitude, and Banking Awareness.</li>
                <li><a href="https://www.rbi.org.in" target="_blank" className="link">RBI Website</a>: Banking updates and policies for exam preparation.</li>
                <li><a href="https://www.jagranjosh.com/idbi-eso-previous-papers" target="_blank" className="link">Previous Year Papers</a>: Download PDFs for 2022-2023 exams.</li>
                <li><b>Books:</b>
                  <ul>
                    <li>“Quantitative Aptitude” by R.S. Aggarwal for Quantitative Aptitude.</li>
                    <li>“Banking Awareness” by Arihant for General Awareness.</li>
                    <li>“High School English Grammar” by Wren & Martin for English.</li>
                    <li>“A Modern Approach to Verbal & Non-Verbal Reasoning” by R.S. Aggarwal.</li>
                  </ul>
                </li>
                <li><b>YouTube Channels:</b> Follow “BankersAdda” or “Adda247” for IDBI ESO exam tips and live classes.</li>
              </ul>
            </CollapsibleSection>
            <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
              <div className={style.zxv}>
                <div >{Object.entries(link).map(([key, value]) => ( <li> <a href={value} target="_blank" className="link"> {key}</a></li> ))}</div>
              </div>
            </div>
            <Ad type="NativeBanner" />
            <img src={a1} alt="IDBI Bank ESO Recruitment 2024" className={style.imga} />
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

export default IDBI_Bank_1;