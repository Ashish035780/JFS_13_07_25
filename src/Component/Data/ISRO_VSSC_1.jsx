import style from "./000_Content.module.css";
import a1 from "./Pic/ISRO_VSSC_1.jpg";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";
const ISRO_VSSC_1 = () => {
    
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
      fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/ISRO_VSSC.json")
        .then((res) => res.json())
        .then((data) => {
          const job = data.find((item) => item.id === "isrovssc1");
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
            <h2 className={style.zxg}>Vikram Sarabhai Space Centre (ISRO)</h2>
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
                <li><b>General/OBC/EWS:</b> ₹500 (₹400 refunded post-Written Test)</li>
                <li><b>SC/ST/PwBD/ESM/Female:</b> ₹500 (fully refunded post-Written Test)</li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Debit/Credit Card, Net Banking, or UPI. Non-refunded portion is non-refundable.[](https://www.fastjobsearchers.com/job/isro-vssc-recruitment-2025)
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Thiruvananthapuram, Kerala (VSSC)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 15/04/2025)</h2>
              <ul className={style.zxk}>
                <li><b>Minimum Age:</b> 18 Years</li>
                <li><b>Maximum Age:</b> 35 Years for Assistant (Rajbhasha), Fireman-A; 30 Years for Drivers, Cook</li>
                <li><b>Age Relaxation:</b> SC/ST: 5 years, OBC: 3 years, PwBD: 10 years, ESM: As per rules; Women (Widows/Divorced/Separated): Up to 45 years.[](https://www.vssc.gov.in/DetailedAdvt332.html)
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
                <div className={style.tablecell}>Assistant (Rajbhasha)</div>
                <div className={style.tablecell}>
                  Graduation with 60% marks or CGPA 6.32/10 from a recognized university; Hindi Typewriting speed of 35 wpm on computer; Proficiency in computer use.[](https://www.fastjobsearchers.com/job/isro-vssc-recruitment-2025)
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Light Vehicle Driver-A</div>
                <div className={style.tablecell}>
                  SSLC/SSC Pass; Valid LVD license; 3 years’ driving experience (light motor vehicles).[](https://www.fastjobsearchers.com/job/isro-vssc-recruitment-2025)
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Heavy Vehicle Driver-A</div>
                <div className={style.tablecell}>
                  SSLC/SSC Pass; Valid HVD license; Valid Public Service Badge; 5 years’ experience (minimum 3 years as Heavy Vehicle Driver, balance in light vehicles).[](https://www.fastjobsearchers.com/job/isro-vssc-recruitment-2025)
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Fireman-A</div>
                <div className={style.tablecell}>
                  SSLC/SSC Pass; Meet prescribed Physical Fitness & Physical Efficiency Test standards (e.g., 1.5 km run in 7.5 minutes).[](https://www.fastjobsearchers.com/job/isro-vssc-recruitment-2025)
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Cook</div>
                <div className={style.tablecell}>
                  SSLC/SSC Pass; 5 years’ experience in a recognized canteen/hotel.[](https://www.fastjobsearchers.com/job/isro-vssc-recruitment-2025)
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
              <h2 className={style.sectiontitle}>Written Test</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Post</div>
                <div className={style.tablecell}>Subjects</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Assistant (Rajbhasha)</div>
                <div className={style.tablecell}>General English, Hindi, General Knowledge, Arithmetic, Computer Literacy</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>120 Minutes</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Drivers</div>
                <div className={style.tablecell}>General Knowledge, Arithmetic, Road Signs, Traffic Rules</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>120 Minutes</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Fireman-A</div>
                <div className={style.tablecell}>General Intelligence, Basic Science, Firefighting Knowledge, Arithmetic</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>120 Minutes</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Cook</div>
                <div className={style.tablecell}>General Knowledge, Arithmetic, Food Preparation Basics</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>120 Minutes</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Objective-type questions with four options; 1/3rd mark deducted for incorrect answers.</li>
                <li>Bilingual (English/Hindi).</li>
                <li>Qualifying marks: 50% for UR, 45% for OBC/SC/ST.</li>
                <li>Skill Test follows for shortlisted candidates (e.g., typing for Assistant, driving for Drivers).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <h2 className={style.sectiontitle}></h2>
              <h3 style={{ fontWeight: "700" }}>Assistant (Rajbhasha):</h3>
              <ul className={style.zxs}>
                <li><b>General English:</b> Comprehension, Grammar, Vocabulary, Error Spotting.</li>
                <li><b>Hindi:</b> Translation, Grammar, Official Language Policy, Hindi Typing.</li>
                <li><b>General Knowledge:</b> Current Affairs, ISRO History, Science & Technology.</li>
                <li><b>Arithmetic:</b> Percentage, Ratio, Time & Work, Simplification.</li>
                <li><b>Computer Literacy:</b> MS Office, Internet, Basic Hardware/Software.</li>
              </ul>
              <h3 style={{ fontWeight: "700" }}>Light/Heavy Vehicle Driver-A:</h3>
              <ul className={style.zxs}>
                <li><b>General Knowledge:</b> Current Affairs, Geography, Polity.</li>
                <li><b>Arithmetic:</b> Basic Calculations, Fractions, Percentages.</li>
                <li><b>Road Signs & Traffic Rules:</b> Traffic Signals, Road Safety, Motor Vehicle Act.</li>
              </ul>
              <h3 style={{ fontWeight: "700" }}>Fireman-A:</h3>
              <ul className={style.zxs}>
                <li><b>General Intelligence:</b> Analogy, Series, Puzzles.</li>
                <li><b>Basic Science:</b> Physics, Chemistry (Class 10 level).</li>
                <li><b>Firefighting Knowledge:</b> Fire Extinguishers, Safety Procedures, First Aid.</li>
                <li><b>Arithmetic:</b> Basic Calculations, Time & Distance.</li>
              </ul>
              <h3 style={{ fontWeight: "700" }}>Cook:</h3>
              <ul className={style.zxs}>
                <li><b>General Knowledge:</b> Current Affairs, Hygiene Standards.</li>
                <li><b>Arithmetic:</b> Measurements, Ratios, Basic Calculations.</li>
                <li><b>Food Preparation:</b> Cooking Techniques, Nutrition, Kitchen Safety.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Assistant (Rajbhasha):</b> Handle Hindi translation, correspondence, and implementation of official language policies; manage administrative tasks using computers.</li>
                <li><b>Light Vehicle Driver-A:</b> Drive light vehicles for staff transport and logistics; ensure vehicle maintenance and safety compliance.</li>
                <li><b>Heavy Vehicle Driver-A:</b> Operate heavy vehicles for transporting equipment and personnel; maintain vehicles and hold a valid Public Service Badge.</li>
                <li><b>Fireman-A:</b> Respond to fire emergencies, conduct safety drills, and maintain firefighting equipment; meet physical fitness standards.</li>
                <li><b>Cook:</b> Prepare meals for staff and guests at VSSC facilities; ensure hygiene and quality in food preparation.</li>
              </ul>
            </CollapsibleSection>
            
            <CollapsibleSection title="Physical Standards">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Fireman-A:</b>
                  <ul>
                    <li><b>Height:</b> Minimum 165 cm.</li>
                    <li><b>Weight:</b> Minimum 50 kg.</li>
                    <li><b>Chest:</b> 81 cm (unexpanded), 86 cm (expanded).</li>
                    <li><b>Vision:</b> 6/6 without glasses; no color blindness.</li>
                    <li><b>Physical Efficiency Test:</b> 1.5 km run in 7.5 minutes, carrying 63.5 kg for 110 meters in 96 seconds, climbing rope, etc.</li>
                  </ul>
                </li>
                <li><b>Drivers:</b> Normal vision (6/6 without glasses); no color blindness; physically fit for driving duties.</li>
                <li><b>Assistant (Rajbhasha) & Cook:</b> General health; no specific physical standards, but medical fitness required.</li>
              </ul>
            </CollapsibleSection>
            
            <CollapsibleSection title="Exam Analysis and Insights">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Difficulty Level:</b> Moderate; General Knowledge focuses on ISRO and space technology; Arithmetic is Class 10 level.</li>
                <li><b>Key Focus Areas:</b> Hindi proficiency for Assistant, traffic rules for Drivers, firefighting basics for Fireman, cooking hygiene for Cook.</li>
                <li><b>Expected Cut-Offs:</b> UR: 60–65, OBC: 55–60, SC/ST: 50–55 (out of 100).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Selection Process">
              <ul className={style.zxs}>
                <li><b>Written Test:</b> Objective test; qualifies candidates for Skill Test.</li>
                <li><b>Skill Test:</b>
                  <ul>
                    <li><b>Assistant (Rajbhasha):</b> Hindi typing test (35 wpm).</li>
                    <li><b>Drivers:</b> Driving test (Light/Heavy vehicles).</li>
                    <li><b>Fireman-A:</b> Physical Efficiency Test (e.g., running, weight carrying).</li>
                    <li><b>Cook:</b> Practical cooking test.</li>
                  </ul>
                </li>
                <li><b>Document Verification:</b> Verification of certificates and eligibility.</li>
                <li><b>Medical Examination:</b> Ensures fitness for respective duties.</li>
                <li><b>Final Merit List:</b> Based on Written Test marks; Skill Test is qualifying.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>SSLC/SSC certificate and mark sheet (all posts).</li>
                <li>Graduation certificate and mark sheet (Assistant).</li>
                <li>Valid LVD/HVD license and Public Service Badge (Drivers).</li>
                <li>Experience certificates (Drivers, Cook).</li>
                <li>Caste Certificate (SC/ST/OBC-NCL, valid as on 15/04/2025).</li>
                <li>EWS Income & Asset Certificate (valid for 2025-26).</li>
                <li>PwBD Disability Certificate (if applicable).</li>
                <li>Photo ID (Aadhaar, PAN, Voter ID, or Passport).</li>
                <li>Two recent passport-size photographs.</li>
                <li><b>Note:</b> OBC certificates must include non-creamy layer clause; invalid documents lead to disqualification.[](https://www.vssc.gov.in/DetailedAdvt332.html)
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Medical Examination Details">
              <ul className={style.zxs}>
                <li><b>Purpose:</b> Ensure fitness for duties (e.g., driving, firefighting).</li>
                <li><b>Standards:</b>
                  <ul>
                    <li><b>Vision:</b> 6/6 without glasses; no color blindness (all posts).</li>
                    <li><b>Hearing:</b> Normal, without aids.</li>
                    <li><b>General Health:</b> No chronic diseases or deformities affecting job performance.</li>
                  </ul>
                </li>
                <li><b>Tests:</b> Blood tests, vision/hearing tests, physical examination.</li>
                <li><b>Disqualification:</b> Failure to meet standards leads to rejection.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits at ISRO VSSC">
              <ul className={style.zxs}>
                <li><b>Salary:</b> ₹25,500–81,100 (Level-4) for Assistant, Drivers, Fireman; ₹19,900–63,200 (Level-2) for Cook; plus DA, HRA.</li>
                <li><b>Allowances:</b> Medical facilities (Contributory Health Service Scheme), transport allowance, subsidized canteen, housing (subject to availability).[](https://www.vssc.gov.in/DetailedAdvt331.html)
                </li>
                <li><b>Leave:</b> 30 days earned leave, 8 days casual leave, LTC.</li>
                <li><b>Pension:</b> Contributory Pension Scheme and gratuity.</li>
                <li><b>Career Growth:</b> Opportunities for promotion under ISRO’s Merit Promotion Scheme.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li><b>Check Eligibility:</b> Verify age, education, and experience as per post requirements.</li>
                <li><b>Visit Official Website:</b> Access vssc.gov.in and navigate to “Careers.”</li>
                <li><b>Register:</b> Provide email ID, mobile number; upload photo (20-50 KB) and signature (10-20 KB).</li>
                <li><b>Fill Form:</b> Enter personal, educational, and experience details; upload certificates (OBC-NCL, EWS, PwBD if applicable).</li>
                <li><b>Pay Fee:</b> ₹500 via online mode (Debit/Credit Card, Net Banking, UPI).</li>
                <li><b>Submit:</b> Review, submit, and download the application form. Preserve Registration Number.</li>
                <li><b>Track Application:</b> Check status and admit card updates on vssc.gov.in.[](https://www.vssc.gov.in/DetailedAdvt332.html)
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Download Admit Card">
              <ol className={style.zxs}>
                <li>Visit the official website: vssc.gov.in.</li>
                <li>Navigate to “Careers {`>>`} Recruitment.”</li>
                <li>Click on “Download Admit Card” for ISRO VSSC Recruitment 2025.</li>
                <li>Enter Registration Number and Date of Birth.</li>
                <li>Download and print the admit card.</li>
                <li><b>Note:</b> Carry admit card with photo ID to the exam; check website regularly as no email/SMS notifications are sent.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li><b>Understand Syllabus:</b> Focus on post-specific topics (Hindi for Assistant, traffic rules for Drivers, firefighting for Fireman).</li>
                <li><b>Previous Papers:</b> Solve ISRO VSSC 2023 papers for question patterns.</li>
                <li><b>Time Management:</b> Practice 100 questions in 120 minutes; aim for 80% accuracy.</li>
                <li><b>Current Affairs:</b> Read The Hindu, PIB, and ISRO news for 2024-2025 updates.</li>
                <li><b>Physical Fitness (Fireman):</b> Train for 1.5 km run, weight carrying, and rope climbing.</li>
                <li><b>Books:</b> NCERT Class 10 Maths/Science, Lucent’s GK, R.S. Aggarwal Arithmetic.</li>
                <li><b>Mock Tests:</b> Use Testbook, Adda247 for ISRO-specific mocks; target 70+ marks.</li>
                <li><b>Skill Practice:</b> Practice Hindi typing (Assistant), driving (Drivers), or cooking (Cook).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li><b>How many vacancies are there?</b> 16 posts (Assistant: 4, Light Driver: 3, Heavy Driver: 2, Fireman: 4, Cook: 3).</li>
                <li><b>Is there negative marking?</b> Yes, 1/3rd mark deducted per wrong answer.</li>
                <li><b>What documents are needed?</b> SSLC/Graduation certificates, licenses (Drivers), caste/EWS/PwBD certificates.</li>
                <li><b>Can women apply?</b> Yes, women are encouraged; special age relaxations for widows/divorced women.[](https://www.vssc.gov.in/DetailedAdvt332.html)
                </li>
                <li><b>What is the pay scale?</b> ₹25,500–81,100 (Level-4) for most posts; ₹19,900–63,200 (Level-2) for Cook.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li><a href="https://www.vssc.gov.in" target="_blank" className="link">VSSC Official Website</a>: Check notifications, admit cards, and results.</li>
                <li><a href="https://www.testbook.com/isro-vssc" target="_blank" className="link">Testbook Mock Tests</a>: Practice ISRO-specific mocks.</li>
                <li><a href="https://www.adda247.com/isro-recruitment" target="_blank" className="link">Adda247 Study Material</a>: Free notes on GK, Arithmetic.</li>
                <li><a href="https://www.pib.gov.in" target="_blank" className="link">PIB Website</a>: ISRO and space-related current affairs.</li>
                <li><b>Books:</b>
                  <ul>
                    <li>“Lucent’s General Knowledge” for GK.</li>
                    <li>“Quantitative Aptitude” by R.S. Aggarwal for Arithmetic.</li>
                    <li>“Objective General English” by S.P. Bakshi for English.</li>
                    <li>“Firefighting Handbook” by NFPA for Fireman.</li>
                  </ul>
                </li>
                <li><b>YouTube Channels:</b> “Adda247,” “StudyIQ” for ISRO exam tips and GK.</li>
              </ul>
            </CollapsibleSection>
            <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
               <div className={style.zxv}>
                <div >{Object.entries(link).map(([key, value]) => ( <li> <a href={value} target="_blank" className="link"> {key}</a></li> ))}</div>
              </div>
            </div>
            <Ad type="NativeBanner" />
            <img src={a1} alt="ISRO VSSC Recruitment 2025" className={style.imga} />
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

export default ISRO_VSSC_1;