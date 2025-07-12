import style from "./000_Content.module.css";
import a1 from "./Pic/Bihar_STET_1.jpg"; // Update with relevant image
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";
const BIHAR_STET_1 = () => {
    
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
      fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/BIHAR_STET.json")
        .then((res) => res.json())
        .then((data) => {
          const job = data.find((item) => item.id === "biharstet1");
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
            <h2 className={style.zxg}>Bihar School Examination Board (BSEB)</h2>
            <h3 className={style.zxh}>Total Posts: <span className={style.highlight}>{totalpost}</span></h3>
            <h3 className={style.zxh}>Pay Scale: <span className={style.highlight}>{payscale}</span></h3>
          </div>
          <div className={style.zxi}>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Important Dates for BSEB STET 2025</h2>
               <ul className={style.zxk}>{Object.entries(date).map(([key, value]) => (<li key={key}><b>{key} :-</b> {value}</li>))}</ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Application Fee</h2>
              <ul className={style.zxk}>
                <li><b>General/OBC/EWS (Single Paper):</b> ₹960</li>
                <li><b>SC/ST/PWD (Single Paper):</b> ₹760</li>
                <li><b>General/OBC/EWS (Both Papers):</b> ₹1440</li>
                <li><b>SC/ST/PWD (Both Papers):</b> ₹1140</li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Debit/Credit Card, Net Banking, UPI, or SBI Bank Challan. Fee is non-refundable.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Exam Location</h2>
              <ul className={style.zxk}>
                <li>Major cities in Bihar (Patna, Gaya, Muzaffarpur, Bhagalpur, etc.)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Eligibility Criteria</h2>
              <ul className={style.zxk}>
                <li><b>Nationality:</b> Indian citizen; Bihar domicile preferred.</li>
                <li><b>Educational Qualification:</b>
                  <ul>
                    <li><b>Paper 1 (Classes 9-10):</b> Bachelor’s degree in relevant subject (e.g., Hindi, Science) with B.Ed., minimum 50% marks (45% for SC/ST/OBC).</li>
                    <li><b>Paper 2 (Classes 11-12):</b> Master’s degree in relevant subject with B.Ed., minimum 50% marks (45% for SC/ST/OBC).</li>
                    <li><b>Physical Education:</b> Bachelor’s in Physical Education or equivalent.</li>
                  </ul>
                </li>
                <li><b>Age Limit:</b> Minimum 21 years as of 01/08/2025; maximum varies by category (e.g., 37 for General Male, 40 for General Female, per Bihar rules).</li>
                <li><b>Age Relaxation:</b> 3 years for ex-servicemen; 40 years max for trained candidates (per 2024 rules).</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Eligibility Qualification Details</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Paper</div>
                <div className={style.tablecell}>Subjects</div>
                <div className={style.tablecell}>Eligibility Criteria</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 1</div>
                <div className={style.tablecell}>Hindi, Urdu, Science, Maths, Social Science, Physical Education</div>
                <div className={style.tablecell}>Bachelor’s degree in relevant subject + B.Ed., 50% marks (45% for SC/ST/OBC)</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 2</div>
                <div className={style.tablecell}>English, Physics, Chemistry, Biology, Commerce, etc.</div>
                <div className={style.tablecell}>Master’s degree in relevant subject + B.Ed., 50% marks (45% for SC/ST/OBC)</div>
              </div>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Paper-Wise Details</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Paper</div>
                <div className={style.tablecell}>Level</div>
                <div className={style.tablecell}>Eligibility</div>
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
              <h2 className={style.sectiontitle}>BSEB STET 2025 Computer-Based Test</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Paper</div>
                <div className={style.tablecell}>Sections</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 1</div>
                <div className={style.tablecell}>Subject-Specific (100), General Knowledge/Pedagogy (50)</div>
                <div className={style.tablecell}>150</div>
                <div className={style.tablecell}>150</div>
                <div className={style.tablecell}>2.5 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 2</div>
                <div className={style.tablecell}>Subject-Specific (100), General Knowledge/Pedagogy (50)</div>
                <div className={style.tablecell}>150</div>
                <div className={style.tablecell}>150</div>
                <div className={style.tablecell}>2.5 Hours</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Online CBT; 1 mark per question, no negative marking.</li>
                <li>Normalized scores used due to multiple shifts.</li>
                <li>Minimum qualifying marks: 50% (General), 40% (SC/ST/PWD/Women).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <h2 className={style.sectiontitle}></h2>
              <h3 style={{ fontWeight: "700" }}>1. Paper 1 (Secondary, Classes 9-10):</h3>
              <ul className={style.zxs}>
                <li><b>Subject-Specific:</b> Hindi, Urdu, Mathematics, Science, Social Science, Physical Education (NCERT-based).</li>
                <li><b>General Knowledge:</b> Current Affairs, Indian History, Geography, Bihar-specific updates.</li>
                <li><b>Pedagogy:</b> Child Development, Teaching Methodology, Learning Processes.</li>
              </ul>
              <h3 className={style.zxu}>2. Paper 2 (Higher Secondary, Classes 11-12):</h3>
              <ul className={style.zxs}>
                <li><b>Subject-Specific:</b> English, Physics, Chemistry, Biology, Commerce, etc. (graduate-level).</li>
                <li><b>General Knowledge:</b> National/International events, Bihar education policies.</li>
                <li><b>Pedagogy:</b> Adolescent Psychology, Curriculum Design, Assessment Techniques.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Objectives and Career Prospects">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Objective:</b> Qualify candidates for teaching posts in Bihar’s government schools, ensuring high-quality education delivery.</li>
                <li><b>Career Prospects:</b> Eligibility for Secondary and Higher Secondary teaching jobs, with salaries per 7th Pay Commission (approx. ₹36,000–₹56,000 monthly).</li>
              </ul>
            </CollapsibleSection>
            
            <CollapsibleSection title="Physical Standards">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Note:</b> No physical standards required for STET 2025, except for Physical Education teachers, who may need a fitness certificate.</li>
              </ul>
            </CollapsibleSection>
            
            <CollapsibleSection title="Exam Analysis and Insights">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Difficulty Level (STET 2024):</b> Moderate; Subject-Specific questions were concept-heavy, Pedagogy focused on practical teaching.</li>
                <li><b>Current Affairs:</b> Emphasized 2024–2025 events (e.g., Bihar education reforms, national policies).</li>
                <li><b>Expected Cut-Offs:</b> General: ~75–80 (Paper 1), ~80–85 (Paper 2); SC/ST: ~60–65.</li>
                <li><b>Preparation Focus:</b> Revise NCERTs, practice Pedagogy, stay updated on current affairs.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Selection Process">
              <ul className={style.zxs}>
                <li><b>Written Exam (CBT):</b> 150 MCQs, 150 marks, 2.5 hours.</li>
                <li><b>Result & Certificate:</b> Candidates meeting cut-off receive a lifetime-valid STET certificate.</li>
                <li><b>Job Application:</b> Use certificate to apply for teaching vacancies in Bihar government schools.</li>
                <li><b>Note:</b> STET qualifies candidates; actual recruitment depends on school vacancies.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>10th, 12th, Bachelor’s/Master’s mark sheets and certificates.</li>
                <li>B.Ed. degree certificate.</li>
                <li>STET 2025 Admit Card and Result.</li>
                <li>Caste Certificate (SC/ST/OBC/EWS, in Bihar Govt. format).</li>
                <li>PWD Certificate (if applicable).</li>
                <li>Photo ID (Aadhaar, PAN, Voter ID).</li>
                <li>Recent passport-size photographs (6 copies).</li>
                <li>Domicile Certificate (for Bihar residents).</li>
                <li><b>Note:</b> Required during job application, not STET exam.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Medical Examination Details">
              <ul className={style.zxs}>
                <li><b>Purpose:</b> Required for Physical Education teachers during job recruitment.</li>
                <li><b>Standards:</b> Normal vision, hearing, and physical fitness.</li>
                <li><b>Location:</b> Designated medical facilities during recruitment.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits of BSEB STET">
              <ul className={style.zxs}>
                <li><b>Job Security:</b> Qualify for permanent teaching posts in government schools.</li>
                <li><b>Salary:</b> ₹36,000–₹56,000 monthly (7th Pay Commission).</li>
                <li><b>Career Growth:</b> Opportunities for promotions to Headmaster or educational officer roles.</li>
                <li><b>Social Impact:</b> Shape future generations through quality education.</li>
                <li><b>Flexibility:</b> Reappear to improve scores for better job placement.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply for BSEB STET 2025">
              <ol className={style.zxs}>
                <li><b>Check Eligibility:</b> Verify Bachelor’s/Master’s degree, B.Ed., and age criteria.</li>
                <li><b>Visit Official Website:</b> <a href="https://secondary.biharboardonline.com" target="_blank" className="link">secondary.biharboardonline.com</a> or <a href="https://bsebstet.com" target="_blank" className="link">bsebstet.com</a>.</li>
                <li><b>Register:</b> Click “Apply Online for STET 2025,” enter mobile number, email, and select Paper 1/2.</li>
                <li><b>Fill Form:</b> Provide personal, educational, and category details; upload photo (less than 100 KB) and signature.</li>
                <li><b>Pay Fee:</b> ₹960–₹1440 (based on category/papers); pay online or via SBI challan.</li>
                <li><b>Submit:</b> Review, submit, and download the application form.</li>
                <li><b>Track Application:</b> Use login credentials to check status and download admit card.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Check Result">
              <ol className={style.zxs}>
                <li>Visit <a href="https://secondary.biharboardonline.com" target="_blank" className="link">secondary.biharboardonline.com</a>.</li>
                <li>Click “STET Result 2025” link.</li>
                <li>Enter application number and date of birth.</li>
                <li>View result, including normalized score and qualification status.</li>
                <li>Download scorecard for future job applications.</li>
                <li><b>Note:</b> Results available until September 2025 (expected).</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips for BSEB STET 2025">
              <ul className={style.zxs}>
                <li><b>Understand Syllabus:</b> Focus on subject-specific topics, Pedagogy, and Current Affairs.</li>
                <li><b>Previous Papers:</b> Solve STET 2023–2024 papers for question patterns.</li>
                <li><b>Time Management:</b> Practice 150 MCQs in 2.5 hours; aim for 80% accuracy.</li>
                <li><b>Current Affairs:</b> Read The Hindu, Dainik Jagran (Bihar), PIB for 2024–2025 updates.</li>
                <li><b>Pedagogy:</b> Study Child Development, Teaching Methods (NCTE guidelines).</li>
                <li><b>Mock Tests:</b> Use Testbook, Adda247 for STET-specific mocks; target 100–120 marks.</li>
                <li><b>Stay Updated:</b> Follow BSEB website for exam notifications.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li><b>What is BSEB STET 2025?</b> A state-level test to qualify candidates for teaching posts in Bihar’s government schools.</li>
                <li><b>Who can apply?</b> Candidates with Bachelor’s/Master’s degree, B.Ed., and minimum 50% marks (45% for SC/ST).</li>
                <li><b>Is there negative marking?</b> No negative marking in STET 2025.</li>
                <li><b>What is the certificate validity?</b> Lifetime; reappear to improve scores.</li>
                <li><b>Where are exam centers?</b> Major Bihar cities (Patna, Gaya, etc.).</li>
                <li><b>Can non-Bihar residents apply?</b> Yes, but Bihar domicile preferred for job recruitment.</li>
                <li><b>How to prepare?</b> Study NCERTs, Pedagogy books, and take mock tests.</li>
                <li><b>What is the application fee?</b> ₹960–₹1440 (General), ₹760–₹1140 (SC/ST).</li>
                <li><b>When is the exam?</b> Expected June/July 2025.</li>
                <li><b>Is CTET valid for Bihar schools?</b> No, only STET qualifies for Bihar government schools.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li><a href="https://secondary.biharboardonline.com" target="_blank" className="link">BSEB Official Website</a>: Notifications, results, and admit cards.</li>
                <li><a href="https://testbook.com/bihar-stet" target="_blank" className="link">Testbook STET Mock Tests</a>: Practice exams with analytics.</li>
                <li><a href="https://adda247.com/bihar-stet" target="_blank" className="link">Adda247 Study Material</a>: Free notes on Pedagogy, Current Affairs.</li>
                <li><a href="https://pib.gov.in" target="_blank" className="link">PIB India</a>: Current affairs updates.</li>
                <li><a href="https://www.jagranjosh.com/bihar-stet-previous-papers" target="_blank" className="link">Previous Year Papers</a>: Download PDFs for 2023–2024.</li>
                <li><b>Books:</b>
                  <ul>
                    <li>“NCERT Textbooks” for subject-specific preparation.</li>
                    <li>“Child Development & Pedagogy” by Disha Experts.</li>
                    <li>“Lucent’s General Knowledge” for Current Affairs.</li>
                    <li>“Objective General English” by S.P. Bakshi.</li>
                  </ul>
                </li>
                <li><b>YouTube Channels:</b> “Adda247,” “Study IQ” for STET exam tips.</li>
              </ul>
            </CollapsibleSection>
            <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
              <div className={style.zxv}>
                <div >{Object.entries(link).map(([key, value]) => ( <li> <a href={value} target="_blank" className="link"> {key}</a></li> ))}</div>
              </div>
            </div>
            <Ad type="NativeBanner" />
            <img src={a1} alt="BSEB STET Apply Online Form 2025" className={style.imga} />
            <div id={style.ins}>
              <h1>Www.JobForSarkari.Com</h1>
              <h2>Welcome to Our Website</h2>
              <p>Our platform provides official links for BSEB STET and other Sarkari Exam updates, ensuring you stay informed about teaching opportunities in Bihar.</p>
              <p>Access free resources, application guides, and preparation tips for a seamless STET application process.</p>
              <p>Read all instructions carefully before applying to maximize your chances of success.</p>
            </div>
            <div id={style.ins}>
              <h1>Explore BSEB STET 2025</h1>
              <h2>Latest Updates & Free Exam Alerts</h2>
              <p>Searching for <b>BSEB STET Apply Online Form 2025</b>? Our portal delivers real-time updates on the <b>Bihar Teacher Eligibility Test</b>.</p>
              <p>Find detailed guides on eligibility, application process, and exam preparation for STET 2025.</p>
              <p>Subscribe to our free alert service for notifications on application forms, admit cards, and results.</p>
              <p>Start your journey to secure <b>Bihar Teaching Jobs</b> with confidence!</p>
            </div>
            <div id={style.ins}>
              <h1>Latest Exam Updates for STET 2025</h1>
              <h2>Apply for Bihar STET and Other Teaching Exams</h2>
              <p>Need updates on <b>BSEB STET Application Form</b> or other teaching exams?</p>
              <p>Stay informed with free alerts for STET 2025, BPSC TRE, and other opportunities.</p>
              <p>Explore comprehensive resources for syllabus, previous papers, and exam strategies.</p>
              <p>Apply easily through our portal and qualify for <b>Bihar Secondary Teacher Exam</b> today.</p>
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

export default BIHAR_STET_1;