import style from "./000_Content.module.css";
import a1 from "./Pic/IRDAI_Associate_Manager_1.jpg"; // Update with relevant image
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";
const IRDAI_Assistant_Manager_1 = () => {
    
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
      fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/IRDAI_ASSISTANT_MANAGER.json")
        .then((res) => res.json())
        .then((data) => {
          const job = data.find((item) => item.id === "irdaiassistantmanager1");
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
            <h2 className={style.zxg}>Insurance Regulatory and Development Authority of India (IRDAI)</h2>
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
                <li><b>General/OBC/EWS:</b> ₹750</li>
                <li><b>SC/ST/PwBD:</b> ₹100</li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Net Banking, Debit/Credit Cards, UPI, or Mobile Wallets. Fee is non-refundable.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Across India (IRDAI offices in Hyderabad, Mumbai, Delhi, etc.)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 29/08/2024)</h2>
              <ul className={style.zxk}>
                <li><b>Minimum Age:</b> 21 Years</li>
                <li><b>Maximum Age:</b> 30 Years (Born between 30/08/1994 and 29/08/2003)</li>
                <li><b>Age Relaxation:</b> SC/ST: 5 years, OBC (Non-Creamy): 3 years, PwBD: 10 years, as per IRDAI rules.</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Eligibility Qualification Details</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Post Name</div>
                <div className={style.tablecell}>Eligibility Criteria</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Assistant</div>
                <div className={style.tablecell}>
                  Bachelor’s Degree in any discipline from a recognized university with minimum 60% marks (55% for SC/ST/PwBD). Knowledge of computer operations is mandatory.
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
              <h2 className={style.sectiontitle}>Phase I: Online Preliminary Examination</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Section</div>
                <div className={style.tablecell}>Subjects</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 1</div>
                <div className={style.tablecell}>Reasoning</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>90 Minutes (Composite)</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 2</div>
                <div className={style.tablecell}>English Language</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 3</div>
                <div className={style.tablecell}>Quantitative Aptitude</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 4</div>
                <div className={style.tablecell}>General Awareness</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}></div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Objective-type questions with four options; 1/4th mark deducted for each incorrect answer.</li>
                <li>Bilingual (English/Hindi) except for the English Language section.</li>
                <li>Qualifying in nature; candidates must meet sectional and overall cut-offs to proceed to Phase II.</li>
                <li>Total: 160 questions, 160 marks, 90 minutes.</li>
              </ul>
              <h2 className={style.sectiontitle}>Phase II: Main Examination (Descriptive)</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Paper</div>
                <div className={style.tablecell}>Subjects</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 1</div>
                <div className={style.tablecell}>English (Essay, Precis, Comprehension)</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>60 Minutes</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 2</div>
                <div className={style.tablecell}>Economic and Social Issues Impacting Insurance</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>60 Minutes</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 3</div>
                <div className={style.tablecell}>Insurance and Management</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>60 Minutes</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Descriptive papers; answers typed on a computer.</li>
                <li>Marks count toward the final merit list.</li>
                <li>Candidates must qualify each paper with minimum cut-off marks.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <h2 className={style.sectiontitle}></h2>
              <h3 style={{ fontWeight: "700" }}>Phase I: Preliminary Examination</h3>
              <ul className={style.zxs}>
                <li><b>Reasoning:</b> Analogy, Series, Coding-Decoding, Blood Relations, Puzzles, Syllogism, Data Sufficiency.</li>
                <li><b>English Language:</b> Reading Comprehension, Grammar, Vocabulary, Cloze Test, Error Spotting.</li>
                <li><b>Quantitative Aptitude:</b> Simplification, Percentage, Ratio & Proportion, Time & Work, Profit & Loss, Data Interpretation.</li>
                <li><b>General Awareness:</b> Current Affairs (6 months), Banking & Insurance Awareness, Static GK, Economic News.</li>
              </ul>
              <h3 style={{ fontWeight: "700" }}>Phase II: Main Examination</h3>
              <ul className={style.zxs}>
                <li><b>Paper 1 (English):</b> Essay, Precis Writing, Comprehension, Business/Office Correspondence.</li>
                <li><b>Paper 2 (Economic and Social Issues):</b> Economic reforms, insurance penetration, social structure, micro-insurance, RSBY health scheme.</li>
                <li><b>Paper 3 (Insurance and Management):</b> Insurance basics, group/health insurance, product design, underwriting, claims, management principles, leadership.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Assistant:</b> Support regulatory and administrative functions, including policyholder complaint resolution, data analysis, compliance monitoring, and coordination with insurance companies. Responsibilities include assisting in drafting reports, managing correspondence, and supporting actuarial, legal, and financial departments.</li>
              </ul>
            </CollapsibleSection>
            
            <CollapsibleSection title="Physical Standards">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>General Health:</b> Candidates must be medically fit, with no chronic illnesses or disabilities that hinder office duties.</li>
                <li><b>Vision:</b> 6/6 or 6/9 in both eyes without glasses; no color blindness.</li>
                <li><b>Hearing:</b> Normal, without aids.</li>
                <li><b>Note:</b> Detailed medical standards will be verified during the final medical examination post-interview.</li>
              </ul>
            </CollapsibleSection>
           
            <CollapsibleSection title="Exam Analysis and Insights">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Phase I Difficulty (2024):</b> Moderate; Quantitative Aptitude and Reasoning were time-consuming, General Awareness focused on 2024 insurance news.</li>
                <li><b>Expected Cut-Offs:</b> General: 90–100, OBC: 85–95, SC/ST: 75–85 (out of 160).</li>
                <li><b>Phase II Preparation:</b> Focus on descriptive writing skills, insurance regulations, and current economic issues.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Selection Process">
              <ul className={style.zxs}>
                <li><b>Phase I (Preliminary Exam):</b> Objective test; qualifying in nature.</li>
                <li><b>Phase II (Main Exam):</b> Descriptive test with three papers; marks contribute to the final merit list.</li>
                <li><b>Phase III (Interview):</b> Assesses personality, communication, and knowledge of insurance regulations.</li>
                <li><b>Document Verification:</b> Verification of educational certificates, identity, and category documents.</li>
                <li><b>Medical Examination:</b> Ensures candidates meet health and fitness standards.</li>
                <li><b>Final Merit List:</b> Based on Phase II marks and Interview performance.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>Original and photocopy of Bachelor’s Degree certificate and mark sheets.</li>
                <li>Caste Certificate (SC/ST/OBC/EWS, in prescribed format).</li>
                <li>Photo ID (Aadhaar, PAN, Voter ID, or Passport).</li>
                <li>Two recent passport-size photographs (same as uploaded).</li>
                <li>Printed application form and fee payment receipt.</li>
                <li><b>Note:</b> Discrepancies in documents lead to disqualification.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Medical Examination Details">
              <ul className={style.zxs}>
                <li><b>Purpose:</b> Ensure fitness for office duties.</li>
                <li><b>Standards:</b>
                  <ul>
                    <li><b>Vision:</b> 6/6 or 6/9 without glasses; no color blindness.</li>
                    <li><b>Hearing:</b> Normal, without aids.</li>
                    <li><b>General Health:</b> No chronic diseases or physical deformities.</li>
                  </ul>
                </li>
                <li><b>Tests:</b> Blood tests, vision/hearing tests, general physical examination.</li>
                <li><b>Disqualification:</b> Failure to meet standards leads to rejection.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits at IRDAI">
              <ul className={style.zxs}>
                <li><b>Salary:</b> ₹28,100–92,350 (Pay Level-6) + Dearness Allowance, House Rent Allowance, and other allowances.</li>
                <li><b>Allowances:</b> Medical benefits, leave travel concession, group insurance.</li>
                <li><b>Leave:</b> 30 days earned leave, 10 days casual leave, and other leave benefits.</li>
                <li><b>Pension:</b> Contributory Pension Scheme and gratuity on retirement.</li>
                <li><b>Career Growth:</b> Opportunities for promotion to Assistant Manager and higher ranks with experience and performance.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li><b>Check Eligibility:</b> Verify age (21–30 years) and education (Bachelor’s Degree with 60% marks).</li>
                <li><b>Visit Official Website:</b> Access the recruitment portal at www.irdai.gov.in.</li>
                <li><b>Register:</b> Enter email ID, mobile number, and upload photo (20-50 KB) and signature (10-20 KB).</li>
                <li><b>Fill Form:</b> Provide personal, educational, and category details; select exam city.</li>
                <li><b>Pay Fee:</b> ₹750 (General/OBC/EWS), ₹100 (SC/ST/PwBD); pay online.</li>
                <li><b>Submit:</b> Review, submit, and download the application form. Keep two printed copies.</li>
                <li><b>Track Application:</b> Use login credentials to check status and download admit cards.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Check Phase I Result">
              <ol className={style.zxs}>
                <li>Visit the official website: www.irdai.gov.in.</li>
                <li>Navigate to “Careers {`>>`} Current Openings.”</li>
                <li>Click on “IRDAI Assistant Recruitment 2024 Phase I Result.”</li>
                <li>Download the result PDF and search for your roll number using Ctrl+F.</li>
                <li>Save the PDF for future reference.</li>
                <li><b>Note:</b> No email/SMS notifications are sent; check the website regularly.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li><b>Phase I:</b> Practice Reasoning and Quantitative Aptitude using R.S. Aggarwal; focus on banking/insurance GK for General Awareness.</li>
                <li><b>Phase II:</b> Improve descriptive writing (essays, precis) using Wren & Martin; study IRDAI regulations and economic issues via PIB and The Hindu.</li>
                <li><b>Previous Papers:</b> Solve IRDAI 2022-2023 papers for question patterns.</li>
                <li><b>Time Management:</b> Practice 160 questions in 90 minutes for Phase I; aim for 80% accuracy.</li>
                <li><b>Current Affairs:</b> Follow 2024 insurance news, economic reforms, and IRDAI updates.</li>
                <li><b>Mock Tests:</b> Use Adda247, Testbook for IRDAI-specific mocks; target 100+ marks in Phase I.</li>
                <li><b>Interview:</b> Prepare for questions on insurance regulations, IRDAI’s role, and personal background.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li><b>How many vacancies are there?</b> 53 Assistant posts.</li>
                <li><b>Is there negative marking in Phase I?</b> Yes, 1/4th mark deducted per wrong answer.</li>
                <li><b>What documents are needed for verification?</b> Degree certificate, mark sheets, caste certificate, photo ID.</li>
                <li><b>Where are the exam centers?</b> Major cities across India, based on candidate’s choice.</li>
                <li><b>What is the role of an Assistant?</b> Support regulatory tasks, policyholder complaint resolution, and data analysis.</li>
                <li><b>How to prepare for Phase II?</b> Focus on descriptive writing, insurance regulations, and economic issues.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li><a href="https://www.irdai.gov.in" target="_blank" className="link">IRDAI Official Website</a>: Check results, admit cards, and notifications.</li>
                <li><a href="https://www.testbook.com/irdai-assistant" target="_blank" className="link">Testbook Mock Tests</a>: Practice IRDAI-specific mocks with analytics.</li>
                <li><a href="https://www.adda247.com/irdai-assistant" target="_blank" className="link">Adda247 Study Material</a>: Free notes on Reasoning, English, and Insurance.</li>
                <li><a href="https://www.pib.gov.in" target="_blank" className="link">PIB Website</a>: Current affairs and insurance updates.</li>
                <li><b>Books:</b>
                  <ul>
                    <li>“Quantitative Aptitude” by R.S. Aggarwal for Phase I.</li>
                    <li>“High School English Grammar” by Wren & Martin for Phase II English.</li>
                    <li>“General Knowledge 2024” by Arihant for current affairs.</li>
                    <li>“Insurance and Risk Management” by P.K. Gupta for Phase II.</li>
                  </ul>
                </li>
                <li><b>YouTube Channels:</b> Follow “Adda247” or “Bankersadda” for IRDAI exam tips and live classes.</li>
              </ul>
            </CollapsibleSection>
            <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
              <div className={style.zxv}>
                <div >{Object.entries(link).map(([key, value]) => ( <li> <a href={value} target="_blank" className="link"> {key}</a></li> ))}</div>
              </div>
            </div>
            <Ad type="NativeBanner" />
            <img src={a1} alt="IRDAI Assistant Recruitment 2024" className={style.imga} />
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

export default IRDAI_Assistant_Manager_1;