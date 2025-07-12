import style from "./000_Content.module.css";
import a1 from "./Pic/Bihar_Police_Constable_2.png"; // Update with relevant image
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";
const Bihar_Police_Constable_2 = () => {
    
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
          const job = data.find((item) => item.id === "biharpoliceconstable2");
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
            <h2 className={style.zxg}>Central Selection Board of Constables (CSBC)</h2>
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
                <li><b>General/OBC/EWS:</b> ₹675</li>
                <li><b>SC/ST:</b> ₹180</li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Credit/Debit Card, Net Banking, or UPI. Fee is non-refundable.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Across Bihar (Patna, Muzaffarpur, Bhagalpur, Gaya, Darbhanga, etc.)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/08/2023)</h2>
              <ul className={style.zxk}>
                <li><b>Minimum Age:</b> 18 Years</li>
                <li><b>Maximum Age (General):</b> 25 Years (Born between 02/08/1998 and 01/08/2005)</li>
                <li><b>Maximum Age (OBC/EBC):</b> 27 Years (Born between 02/08/1996 and 01/08/2005)</li>
                <li><b>Maximum Age (SC/ST):</b> 30 Years (Born between 02/08/1993 and 01/08/2005)</li>
                <li><b>Age Relaxation:</b> 3 years for OBC/EBC, 5 years for SC/ST, as per Bihar Govt. rules; additional relaxation for Ex-Servicemen and PWD candidates.</li>
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
                <div className={style.tablecell}>
                  12th pass (Intermediate) from a recognized board by 01/08/2023. Candidates awaiting results are ineligible.
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
              <h2 className={style.sectiontitle}>Written Exam</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Subject</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Hindi, English, Mathematics, Social Science (History, Geography, Civics, Economics), Science (Physics, Chemistry, Biology), General Knowledge & Current Affairs</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>100 multiple-choice questions at 12th standard level; qualifying in nature.</li>
                <li>No negative marking; minimum 30% (30 marks) to qualify.</li>
                <li>Top 5 times the vacancies qualify for PET/PMT.</li>
                <li>50 questions from Hindi, English, Mathematics; 50 from two optional subjects (Science, History, Geography, Polity, Economics).</li>
              </ul>
              <h2 className={style.sectiontitle}>Physical Efficiency Test (PET)</h2>
              <ul className={style.zxs}>
                <li><b>Male:</b> 1.6 km run (6 min, max 20 marks), High Jump (4 ft, max 25 marks), Shot Put (16 ft, 16 lb, max 25 marks).</li>
                <li><b>Female:</b> 1 km run (5 min, max 20 marks), High Jump (3 ft, max 25 marks), Shot Put (12 ft, 12 lb, max 25 marks).</li>
                <li><b>Note:</b> PET marks contribute to final merit (max 70 marks).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <h2 className={style.sectiontitle}></h2>
              <h3 style={{ fontWeight: "700" }}>1. Written Exam (Core Subjects):</h3>
              <ul className={style.zxs}>
                <li><b>Hindi:</b> Grammar (Sandhi, Samas, Tenses), Comprehension, Vocabulary.</li>
                <li><b>English:</b> Grammar, Synonyms, Antonyms, Sentence Correction, Comprehension.</li>
                <li><b>Mathematics:</b> Arithmetic (Percentages, Profit/Loss, Time & Work), Algebra, Geometry, Mensuration.</li>
              </ul>
              <h3 className={style.zxu}>2. Optional Subjects (Choose Two):</h3>
              <ul className={style.zxs}>
                <li><b>Science:</b> Physics (Mechanics, Optics), Chemistry (Elements, Reactions), Biology (Human Body, Plants).</li>
                <li><b>History:</b> Ancient India, Medieval India, Freedom Struggle, Bihar’s History.</li>
                <li><b>Geography:</b> Physical Geography, India’s Climate, Rivers, Bihar’s Resources.</li>
                <li><b>Civics:</b> Indian Constitution, Fundamental Rights, Panchayati Raj.</li>
                <li><b>Economics:</b> Budget, Economic Policies, Bihar’s Economy.</li>
              </ul>
              <h3 className={style.zxu}>3. General Knowledge & Current Affairs:</h3>
              <ul className={style.zxs}>
                <li>Current Events: National/International News, Sports, Awards (2022-2023).</li>
                <li>Bihar-Specific: Policies, Culture, Historical Events.</li>
                <li>General Knowledge: Important Days, Books & Authors, Scientific Developments.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Constable:</b> Maintain law and order, perform patrolling, assist in investigations, and ensure public safety in Bihar Police, Home Guards, and other departments. Responsibilities include crowd control, traffic management, and reporting to senior officers.</li>
              </ul>
            </CollapsibleSection>
             
            <CollapsibleSection title="Physical Standards">
              <h2 className={style.sectiontitle}></h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Category</div>
                <div className={style.tablecell}>Height</div>
                <div className={style.tablecell}>Chest (Male Only)</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>General/OBC (Male)</div>
                <div className={style.tablecell}>165 cm</div>
                <div className={style.tablecell}>81 cm (unexpanded), 86 cm (expanded)</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>SC/ST (Male)</div>
                <div className={style.tablecell}>160 cm</div>
                <div className={style.tablecell}>79 cm (unexpanded), 84 cm (expanded)</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Female (All Categories)</div>
                <div className={style.tablecell}>155 cm</div>
                <div className={style.tablecell}>Not Applicable</div>
              </div>
              <ul className={style.zxs}>
                <li><b>Weight (Female):</b> Minimum 48 kg, proportionate to height.</li>
                <li><b>Vision:</b> 6/12 without glasses; no color blindness.</li>
              </ul>
            </CollapsibleSection>
            
            <CollapsibleSection title="Exam Analysis and Insights">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Difficulty Level (Written Exam 2023):</b> Easy to moderate; General Knowledge and Hindi were scoring, Mathematics was time-consuming.</li>
                <li><b>Current Affairs:</b> 20–25 questions on Bihar-specific events (e.g., state schemes) and national news (e.g., ISRO missions).</li>
                <li><b>PET:</b> Running was challenging; high jump and shot put required technique.</li>
                <li><b>Cut-Off Trends:</b> Written Exam: ~60–70 (General), ~50–60 (OBC/SC); Final Merit (including PET): ~100–110 (General), ~90–100 (OBC/SC).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Selection Process">
              <ul className={style.zxs}>
                <li><b>Written Exam:</b> 100 MCQs, 2 hours, qualifying (30% minimum).</li>
                <li><b>Physical Measurement Test (PMT):</b> Verify height, chest, and weight as per standards.</li>
                <li><b>Physical Efficiency Test (PET):</b> Running, high jump, shot put; marks contribute to merit.</li>
                <li><b>Document Verification:</b> Verify educational, identity, and category documents.</li>
                <li><b>Medical Examination:</b> Ensure fitness for police duties (vision, physical health).</li>
                <li><b>Final Merit List:</b> Based on Written Exam marks (100) + PET marks (70); PMT and medical are qualifying.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>Original and photocopy of 10th/12th mark sheets and certificates.</li>
                <li>Caste Certificate (SC/ST/OBC/EWS, in Bihar Govt. format).</li>
                <li>PWD Certificate (if applicable).</li>
                <li>Ex-Servicemen Discharge Book/Service Certificate.</li>
                <li>Photo ID (Aadhaar, PAN, Voter ID, or Passport).</li>
                <li>Recent passport-size photographs (6 copies).</li>
                <li>Printed application form and fee payment receipt.</li>
                <li>Domicile Certificate (for Bihar residents).</li>
                <li><b>Note:</b> Ensure documents match application details to avoid disqualification.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Medical Examination Details">
              <ul className={style.zxs}>
                <li><b>Purpose:</b> Ensure candidates are fit for police duties.</li>
                <li><b>Standards:</b>
                  <ul>
                    <li><b>Vision:</b> 6/12 without glasses; no color blindness.</li>
                    <li><b>Hearing:</b> Normal hearing without aids.</li>
                    <li><b>General Health:</b> No chronic diseases (e.g., diabetes, asthma).</li>
                    <li><b>Physical Fitness:</b> No deformities affecting duty performance.</li>
                  </ul>
                </li>
                <li><b>Tests:</b> Blood tests, urine tests, chest X-ray, ECG, physical examination.</li>
                <li><b>Location:</b> Conducted at designated Bihar Police medical facilities.</li>
                <li><b>Preparation:</b> Maintain fitness; avoid heavy meals before tests.</li>
                <li><b>Disqualification:</b> Failure to meet standards leads to rejection.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits at Bihar Police">
              <ul className={style.zxs}>
                <li><b>Competitive Salary:</b> ₹21,700–₹69,100 (Level 3), plus Dearness Allowance (DA), House Rent Allowance (HRA), and other allowances.</li>
                <li><b>Job Security:</b> Permanent government position with pension benefits under NPS.</li>
                <li><b>Healthcare:</b> Access to CGHS and Bihar Police medical facilities.</li>
                <li><b>Housing:</b> Government quarters or HRA for urban postings.</li>
                <li><b>Career Growth:</b> Promotions to Head Constable, Assistant Sub-Inspector, and higher ranks based on service and exams.</li>
                <li><b>Work Environment:</b> Serve Bihar’s communities, maintain law and order, and contribute to public safety.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li><b>Check Eligibility:</b> Verify age (18–25 years), education (12th pass), and physical standards.</li>
                <li><b>Visit Official Website:</b> <a href="https://csbc.bih.nic.in" target="_blank" className="link">csbc.bih.nic.in</a>.</li>
                <li><b>Register:</b> Click “Apply Online,” enter name, email, mobile, and upload photo (50-100 KB) and signature (20-50 KB).</li>
                <li><b>Fill Form:</b> Provide personal, educational, and category details; select exam city.</li>
                <li><b>Pay Fee:</b> ₹675 (General/OBC/EWS), ₹180 (SC/ST); pay online.</li>
                <li><b>Submit:</b> Review, submit, and download the application form. Keep two printed copies.</li>
                <li><b>Track Application:</b> Use login credentials to check status and download admit cards.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Check Result">
              <ol className={style.zxs}>
                <li>Visit the official website: <a href="https://csbc.bih.nic.in" target="_blank" className="link">csbc.bih.nic.in</a>.</li>
                <li>Navigate to the “Results” section.</li>
                <li>Click on “Bihar Police Constable Recruitment 2023 Result” link.</li>
                <li>Enter roll number, application ID, and password.</li>
                <li>View result PDF, checking name, roll number, marks, and category.</li>
                <li>Download and save the PDF for future reference.</li>
                <li><b>Note:</b> Check cut-off marks and PET/PMT schedule on the portal.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li><b>Understand the Syllabus:</b> Focus on General Knowledge, Current Affairs (Bihar-specific), Hindi, and Mathematics.</li>
                <li><b>Previous Papers:</b> Solve CSBC Constable 2020-2022 papers for question patterns.</li>
                <li><b>Time Management:</b> Practice 100 MCQs in 2 hours; aim for 80% accuracy.</li>
                <li><b>Current Affairs:</b> Read Dainik Jagran (Bihar), The Hindu, and PIB for 2022-2023 updates.</li>
                <li><b>Mathematics:</b> Practice arithmetic (percentages, time & work) from R.S. Aggarwal books.</li>
                <li><b>Hindi:</b> Revise grammar (Tenses, Comprehension) and vocabulary.</li>
                <li><b>Physical Training:</b> Train for PET (1.6 km run, jumps); include sprinting and strength exercises.</li>
                <li><b>Mock Tests:</b> Use Testbook, Adda247 for Constable-specific mocks; target 70–80 marks.</li>
                <li><b>Stay Updated:</b> Follow CSBC website for exam and PET/PMT notifications.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li><b>How many vacancies are there?</b> 21,391 Constable posts in Bihar Police, Home Guards, and other departments.</li>
                <li><b>Can 12th-appearing students apply?</b> No, candidates must have passed 12th by 01/08/2023.</li>
                <li><b>Is there negative marking?</b> No negative marking in the Written Exam.</li>
                <li><b>What documents are needed for verification?</b> 10th/12th certificates, caste/domicile certificate, photo ID.</li>
                <li><b>Where are the exam centers?</b> Major Bihar cities (Patna, Gaya, Muzaffarpur, Bhagalpur, etc.).</li>
                <li><b>What is the PET requirement?</b> Male: 1.6 km run in 6 min; Female: 1 km run in 5 min, plus jumps and shot put.</li>
                <li><b>Can non-Bihar residents apply?</b> Yes, but no specific relaxations apply.</li>
                <li><b>What is the role of a Constable?</b> Maintain law and order, patrol, and assist in police operations.</li>
                <li><b>How to prepare for PET?</b> Train daily with running, jumping, and strength exercises; focus on endurance.</li>
                <li><b>How is the final merit calculated?</b> Based on Written Exam (100 marks) + PET (70 marks).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li><a href="https://csbc.bih.nic.in" target="_blank" className="link">CSBC Official Website</a>: Check results, PET/PMT schedules, and joining details.</li>
                <li><a href="https://testbook.com/bihar-police-constable" target="_blank" className="link">Testbook Constable Mock Tests</a>: Practice Written Exam with analytics.</li>
                <li><a href="https://adda247.com/bihar-police-constable" target="_blank" className="link">Adda247 Study Material</a>: Free notes on Hindi, General Knowledge, and Mathematics.</li>
                <li><a href="https://pib.gov.in" target="_blank" className="link">PIB India</a>: Current affairs updates for Written Exam.</li>
                <li><a href="https://www.jagranjosh.com/bihar-police-constable-previous-papers" target="_blank" className="link">Previous Year Papers</a>: Download PDFs for 2020-2022 exams.</li>
                <li><b>Books:</b>
                  <ul>
                    <li>“Quantitative Aptitude” by R.S. Aggarwal for Mathematics.</li>
                    <li>“Lucent’s General Knowledge” for General Knowledge.</li>
                    <li>“Samanya Hindi” by Arihant for Hindi.</li>
                    <li>“Objective General Science” by Lucent for Science.</li>
                  </ul>
                </li>
                <li><b>YouTube Channels:</b> Follow “Adda247” or “Study IQ” for Bihar Constable exam tips and live classes.</li>
              </ul>
            </CollapsibleSection>
            <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
              <div className={style.zxv}>
                <div >{Object.entries(link).map(([key, value]) => ( <li> <a href={value} target="_blank" className="link"> {key}</a></li> ))}</div>
              </div>
            </div>
            <Ad type="NativeBanner" />
            <img src={a1} alt="CSBC Bihar Police Constable Recruitment 2023" className={style.imga} />
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

export default Bihar_Police_Constable_2;