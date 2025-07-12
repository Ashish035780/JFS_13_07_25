import style from "./000_Content.module.css";
import a1 from "./Pic/BPSC_TRE_1.jpg"; // Update with relevant image
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";
const BPSC_TRE_1 = () => {
    
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
      fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/BPSC_TRE.json")
        .then((res) => res.json())
        .then((data) => {
          const job = data.find((item) => item.id === "bpsctre1");
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
            <h2 className={style.zxg}>Bihar Public Service Commission (BPSC)</h2>
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
                <li><b>SC/ST/PWD/Female (Bihar Domicile):</b> ₹200</li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Credit/Debit Card, Net Banking, or UPI. Fee is non-refundable.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Across Bihar (Patna, Gaya, Muzaffarpur, Bhagalpur, etc.)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/08/2023)</h2>
              <ul className={style.zxk}>
                <li><b>Minimum Age (Primary):</b> 21 Years</li>
                <li><b>Minimum Age (Middle/Secondary/Higher Secondary):</b> 22 Years</li>
                <li><b>Maximum Age (General Male):</b> 37 Years (Born between 02/08/1986 and 01/08/2002)</li>
                <li><b>Maximum Age (General Female/OBC):</b> 40 Years (Born between 02/08/1983 and 01/08/2002)</li>
                <li><b>Maximum Age (SC/ST):</b> 42 Years (Born between 02/08/1981 and 01/08/2002)</li>
                <li><b>Age Relaxation:</b> As per Bihar Govt. rules; additional relaxation for Ex-Servicemen and PWD candidates.</li>
              </ul>
            </div>
              <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Eligibility Qualification Details</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Post Name</div>
                <div className={style.tablecell}>Eligibility Criteria</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Primary Teacher</div>
                <div className={style.tablecell}>12th (50%) + D.El.Ed or B.Ed + CTET/BTET Paper I qualified by 01/08/2023.</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Middle School Teacher</div>
                <div className={style.tablecell}>Bachelor’s degree (50%) + B.Ed or D.El.Ed + CTET/BTET Paper II qualified by 01/08/2023.</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Secondary Teacher</div>
                <div className={style.tablecell}>Bachelor’s degree in relevant subject (50%) + B.Ed + CTET/BTET Paper II qualified by 01/08/2023.</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Higher Secondary Teacher</div>
                <div className={style.tablecell}>Master’s degree in relevant subject (50%) + B.Ed + STET qualified by 01/08/2023.</div>
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
                <div className={style.tablecell}>Section</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Part I: Language (English & Hindi)</div>
                <div className={style.tablecell}>30</div>
                <div className={style.tablecell}>30</div>
                <div className={style.tablecell}>2.5 Hours (Total)</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Part II: General Studies (Primary/Middle) or Subject-Specific (Secondary/Higher Secondary)</div>
                <div className={style.tablecell}>120</div>
                <div className={style.tablecell}>120</div>
                <div className={style.tablecell}>2.5 Hours (Total)</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>150 multiple-choice questions; no negative marking.</li>
                <li>Part I (Language): Qualifying (30% minimum).</li>
                <li>Part II: Merit based on General Studies (Primary/Middle) or Subject-Specific (Secondary/Higher Secondary).</li>
                <li>Exam conducted in offline mode; OMR-based.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <h2 className={style.sectiontitle}></h2>
              <h3 style={{ fontWeight: "700" }}>Part I: Language (English & Hindi):</h3>
              <ul className={style.zxs}>
                <li>English: Grammar, comprehension, vocabulary, sentence structure.</li>
                <li>Hindi: Grammar (Sandhi, Samas), comprehension, idioms, essay writing.</li>
              </ul>
              <h3 className={style.zxu}>Part II: General Studies (Primary/Middle):</h3>
              <ul className={style.zxs}>
                <li>General Science: Physics, Chemistry, Biology basics.</li>
                <li>Mathematics: Arithmetic, number system, percentages.</li>
                <li>Social Studies: Indian History, Geography, Civics, Bihar-specific events.</li>
                <li>Current Affairs: National/international events (2022-2023).</li>
              </ul>
              <h3 className={style.zxu}>Part II: Subject-Specific (Secondary/Higher Secondary):</h3>
              <ul className={style.zxs}>
                <li><b>Mathematics:</b> Algebra, Geometry, Trigonometry, Statistics.</li>
                <li><b>Science:</b> Physics (Mechanics, Optics), Chemistry (Reactions, Elements), Biology (Human Body).</li>
                <li><b>Social Science:</b> History (Mughal era, Independence), Geography (Climate, Rivers), Civics (Constitution).</li>
                <li><b>Languages:</b> Hindi, English, Sanskrit, Urdu (Literature, Grammar).</li>
                <li><b>Other Subjects:</b> Commerce, Economics, Computer Science (as per specialization).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Primary Teacher:</b> Teach foundational subjects (Hindi, English, Math, EVS) to Classes 1-5, focusing on basic literacy and numeracy.</li>
                <li><b>Middle School Teacher:</b> Teach subjects like Hindi, English, Math, Science, and Social Studies to Classes 6-8, emphasizing conceptual understanding.</li>
                <li><b>Secondary Teacher:</b> Teach specialized subjects (Math, Science, Social Studies, Languages) to Classes 9-10, preparing students for board exams.</li>
                <li><b>Higher Secondary Teacher:</b> Teach advanced subjects (Physics, Chemistry, Biology, Math, History, etc.) to Classes 11-12, guiding students for competitive exams.</li>
              </ul>
            </CollapsibleSection>
          
        
            <CollapsibleSection title="Exam Analysis and Insights">
              <ul className={style.zxs}>
                <li><b>Difficulty Level (2023 Exam):</b> Moderate; General Studies (50%) and Language (30%) were key areas.</li>
                <li><b>Language Section:</b> Hindi grammar and comprehension were straightforward; English had tricky vocabulary.</li>
                <li><b>General Studies:</b> Bihar-specific questions (e.g., local history, policies) were prominent.</li>
                <li><b>Subject-Specific:</b> Math and Science questions were conceptual; Social Science focused on NCERT syllabus.</li>
                <li><b>Cut-Off Trends:</b> Primary: ~110-120 (General), ~90-100 (OBC/SC); Secondary: ~120-130 (General), ~100-110 (OBC/SC).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Selection Process">
              <ul className={style.zxs}>
                <li><b>Written Exam:</b> 150 MCQs, 2.5 hours; Language (30 marks) qualifying, merit based on Part II (120 marks).</li>
                <li><b>Document Verification:</b> Verify educational, identity, and category documents.</li>
                <li><b>Final Merit List:</b> Based on written exam marks (Part II); Language section is qualifying.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>Original and photocopy of 10th/12th mark sheets and certificates.</li>
                <li>Bachelor’s/Master’s degree certificate and mark sheets.</li>
                <li>D.El.Ed/B.Ed/CTET/BTET/STET certificate (as applicable).</li>
                <li>Caste Certificate (SC/ST/OBC/EWS, in Bihar Govt. format).</li>
                <li>PWD Certificate (if applicable).</li>
                <li>Photo ID (Aadhaar, PAN, Voter ID, or Passport).</li>
                <li>Recent passport-size photographs (6 copies).</li>
                <li>Printed application form and fee payment receipt.</li>
                <li>Domicile Certificate (for Bihar residents).</li>
                <li><b>Note:</b> Ensure documents match application details to avoid disqualification.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits at Bihar Education Department">
              <ul className={style.zxs}>
                <li><b>Competitive Salary:</b> ₹25,000–₹40,000 (depending on level), plus DA, HRA, and other allowances.</li>
                <li><b>Job Security:</b> Permanent government position with pension benefits under NPS.</li>
                <li><b>Healthcare:</b> Access to CGHS and Bihar Education Department medical facilities.</li>
                <li><b>Housing:</b> Government quarters or HRA for urban postings.</li>
                <li><b>Career Growth:</b> Promotions to Headmaster, Principal, or administrative roles based on service and exams.</li>
                <li><b>Work Environment:</b> Contribute to Bihar’s education system, shaping young minds and fostering academic growth.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li><b>Check Eligibility:</b> Verify age, education (D.El.Ed/B.Ed), and CTET/BTET/STET qualification.</li>
                <li><b>Visit Official Website:</b> <a href="https://www.bpsc.bih.nic.in" target="_blank" className="link">bpsc.bih.nic.in</a>.</li>
                <li><b>Register:</b> Click “Apply Online,” enter name, email, mobile, and upload photo (50-100 KB) and signature (20-50 KB).</li>
                <li><b>Fill Form:</b> Provide personal, educational, and category details; select exam city.</li>
                <li><b>Pay Fee:</b> ₹750 (General/OBC/EWS), ₹200 (SC/ST/PWD/Female); pay online.</li>
                <li><b>Submit:</b> Review, submit, and download the application form. Keep two printed copies.</li>
                <li><b>Track Application:</b> Use login credentials to check status and download admit cards.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Check Result">
              <ol className={style.zxs}>
                <li>Visit the official website: <a href="https://www.bpsc.bih.nic.in" target="_blank" className="link">bpsc.bih.nic.in</a>.</li>
                <li>Navigate to the “Results” section.</li>
                <li>Click on “BPSC TRE 3.0 Result 2024” link.</li>
                <li>Enter roll number, application ID, and password.</li>
                <li>View result PDF, checking name, roll number, marks, and category.</li>
                <li>Download and save the PDF for future reference.</li>
                <li><b>Note:</b> Check cut-off marks and document verification schedule on the portal.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li><b>Understand the Syllabus:</b> Focus on NCERT books for General Studies and subject-specific content.</li>
                <li><b>Previous Papers:</b> Solve BPSC TRE 1.0/2.0 papers for question patterns.</li>
                <li><b>Time Management:</b> Practice 150 MCQs in 2.5 hours; aim for 80% accuracy.</li>
                <li><b>Current Affairs:</b> Read The Hindu, Dainik Jagran (Bihar), and PIB for 2022-2023 updates.</li>
                <li><b>Mathematics & Reasoning:</b> Practice arithmetic and pedagogy from R.S. Aggarwal books.</li>
                <li><b>Hindi/English:</b> Revise grammar and comprehension; practice essay writing on education topics.</li>
                <li><b>Mock Tests:</b> Use Testbook, Adda247 for TRE-specific mocks; target 120-140 marks.</li>
                <li><b>Stay Updated:</b> Follow BPSC website for exam and result notifications.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li><b>How many vacancies are there?</b> Approximately 87,774 teacher posts across Primary, Middle, Secondary, and Higher Secondary levels.</li>
                <li><b>Can final-year students apply?</b> No, candidates must have completed D.El.Ed/B.Ed and CTET/BTET/STET by 01/08/2023.</li>
                <li><b>Is there negative marking?</b> No negative marking in the written exam.</li>
                <li><b>What documents are needed for verification?</b> 10th/12th certificates, degree certificate, D.El.Ed/B.Ed/CTET, caste/domicile certificate.</li>
                <li><b>Where are the exam centers?</b> Major Bihar cities (Patna, Gaya, Muzaffarpur, Bhagalpur, etc.).</li>
                <li><b>Can non-Bihar residents apply?</b> Yes, but only Bihar domicile candidates get fee relaxation.</li>
                <li><b>What is the role of a teacher?</b> Teach subjects, prepare lesson plans, and contribute to students’ academic growth.</li>
                <li><b>How to prepare for the exam?</b> Focus on NCERT syllabus, pedagogy, and Bihar-specific current affairs.</li>
                <li><b>Is Language section qualifying?</b> Yes, 30% minimum required; marks not counted in final merit.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li><a href="https://www.bpsc.bih.nic.in" target="_blank" className="link">BPSC Official Website</a>: Check results, schedules, and joining details.</li>
                <li><a href="https://testbook.com/bpsc-teacher" target="_blank" className="link">Testbook TRE Mock Tests</a>: Practice with analytics.</li>
                <li><a href="https://adda247.com/bpsc-teacher" target="_blank" className="link">Adda247 Study Material</a>: Free notes on General Studies, Pedagogy, and Languages.</li>
                <li><a href="https://pib.gov.in" target="_blank" className="link">PIB India</a>: Current affairs updates.</li>
                <li><a href="https://www.jagranjosh.com/bpsc-teacher-previous-papers" target="_blank" className="link">Previous Year Papers</a>: Download PDFs for TRE 1.0/2.0.</li>
                <li><b>Books:</b>
                  <ul>
                    <li>“NCERT Books” (Classes 1-12) for subject-specific preparation.</li>
                    <li>“Quantitative Aptitude” by R.S. Aggarwal for Mathematics.</li>
                    <li>“Lucent’s General Knowledge” for General Studies.</li>
                    <li>“Samanya Hindi” by Arihant for Hindi.</li>
                  </ul>
                </li>
                <li><b>YouTube Channels:</b> Follow “Adda247” or “Study IQ” for BPSC TRE exam tips and live classes.</li>
              </ul>
            </CollapsibleSection>
            <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
               <div className={style.zxv}>
                <div >{Object.entries(link).map(([key, value]) => ( <li> <a href={value} target="_blank" className="link"> {key}</a></li> ))}</div>
              </div>
            </div>
            <Ad type="NativeBanner" />
            <img src={a1} alt="Bihar BPSC TRE 3.0 Teacher Recruitment 2023-2024" className={style.imga} />
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

export default BPSC_TRE_1;