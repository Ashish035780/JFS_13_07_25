import style from "./000_Content.module.css";
import a1 from "./Pic/Clat_2.png"; // Update with relevant image
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";
const CLAT_UG_PG_Entrance_2 = () => {
    
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
      fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/CLAT_UG_PG_ENTRANCE.json")
        .then((res) => res.json())
        .then((data) => {
          const job = data.find((item) => item.id === "clatugpgentrance2");
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
            <h2 className={style.zxg}>Consortium of National Law Universities</h2>
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
                <li><b>General/OBC:</b> ₹4,000</li>
                <li><b>SC/ST:</b> ₹3,500</li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Credit/Debit Card, Net Banking, or UPI. Fee is non-refundable.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Exam Location</h2>
              <ul className={style.zxk}>
                <li>Across India (Delhi, Mumbai, Bengaluru, Kolkata, Patna, etc.)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/07/2024)</h2>
              <ul className={style.zxk}>
                <li><b>UG Program:</b> No upper age limit.</li>
                <li><b>PG Program:</b> No upper age limit.</li>
                <li><b>Note:</b> Candidates must meet educational eligibility by the counseling date.</li>
              </ul>
            </div>
             <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Eligibility Qualification Details</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Program</div>
                <div className={style.tablecell}>Eligibility Criteria</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>CLAT UG</div>
                <div className={style.tablecell}>
                  10+2 or equivalent with minimum 45% marks (40% for SC/ST) from a recognized board. Candidates appearing in 12th exams in 2025 are eligible.
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>CLAT PG</div>
                <div className={style.tablecell}>
                  LLB or equivalent degree with minimum 50% marks (45% for SC/ST) from a recognized university. Candidates in final year are eligible.
                </div>
              </div>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Program-Wise Seat Details</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Program</div>
                <div className={style.tablecell}>Total Seats</div>
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
              <h2 className={style.sectiontitle}>CLAT UG</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Section</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Weightage</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>English Language</div>
                <div className={style.tablecell}>22-26</div>
                <div className={style.tablecell}>22-26</div>
                <div className={style.tablecell}>~20%</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Current Affairs & General Knowledge</div>
                <div className={style.tablecell}>28-32</div>
                <div className={style.tablecell}>28-32</div>
                <div className={style.tablecell}>~25%</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Legal Reasoning</div>
                <div className={style.tablecell}>35-39</div>
                <div className={style.tablecell}>35-39</div>
                <div className={style.tablecell}>~25%</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Logical Reasoning</div>
                <div className={style.tablecell}>28-32</div>
                <div className={style.tablecell}>28-32</div>
                <div className={style.tablecell}>~20%</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Quantitative Techniques</div>
                <div className={style.tablecell}>10-14</div>
                <div className={style.tablecell}>10-14</div>
                <div className={style.tablecell}>~10%</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Total: 120 MCQs, 120 marks, 2 hours.</li>
                <li>Marking: +1 for correct, -0.25 for incorrect.</li>
                <li>Passage-based questions testing comprehension and reasoning.</li>
              </ul>
              <h2 className={style.sectiontitle}>CLAT PG</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Section</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Constitutional Law</div>
                <div className={style.tablecell}>60</div>
                <div className={style.tablecell}>60</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Other Law Subjects (Jurisprudence, Contract, Torts, etc.)</div>
                <div className={style.tablecell}>60</div>
                <div className={style.tablecell}>60</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Total: 120 MCQs, 120 marks, 2 hours.</li>
                <li>Marking: +1 for correct, -0.25 for incorrect.</li>
                <li>Passage-based questions focusing on legal knowledge and analysis.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <h2 className={style.sectiontitle}></h2>
              <h3 style={{ fontWeight: "700" }}>CLAT UG</h3>
              <ul className={style.zxs}>
                <li><b>English Language:</b> Comprehension, grammar, vocabulary (passages from editorials, novels).</li>
                <li><b>Current Affairs & GK:</b> National/international news, static GK (2023-2024 events).</li>
                <li><b>Legal Reasoning:</b> Legal principles, case laws, constitutional law basics.</li>
                <li><b>Logical Reasoning:</b> Analogies, syllogisms, critical reasoning.</li>
                <li><b>Quantitative Techniques:</b> Arithmetic (percentages, ratios), data interpretation.</li>
              </ul>
              <h3 className={style.zxu}>CLAT PG</h3>
              <ul className={style.zxs}>
                <li><b>Constitutional Law:</b> Fundamental rights, directive principles, landmark judgments.</li>
                <li><b>Other Law Subjects:</b> Jurisprudence, contract law, torts, criminal law, international law, IPR.</li>
                <li><b>Legal Analysis:</b> Case-based questions, statutory interpretation.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Program Descriptions">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>CLAT UG (5-Year LLB):</b> Integrated program combining BA/BBA/BCom with LLB for aspiring lawyers aiming for corporate law, litigation, or judiciary.</li>
                <li><b>CLAT PG (1-Year LLM):</b> Postgraduate program for law graduates seeking specialization in constitutional law, corporate law, or international law.</li>
              </ul>
            </CollapsibleSection>
           
            <CollapsibleSection title="Exam Analysis and Insights">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Difficulty Level (CLAT 2024):</b> Moderate; Legal Reasoning (30%) and Current Affairs (25%) were key.</li>
                <li><b>Current Affairs:</b> Focused on 2023 events (G20, Chandrayaan-3, new criminal laws).</li>
                <li><b>Legal Reasoning:</b> Passage-based questions on contracts, torts, and constitutional law.</li>
                <li><b>Cut-Off Trends:</b> UG: ~90-100 (General), ~70-80 (OBC/SC); PG: ~80-90 (General).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Selection Process">
              <ul className={style.zxs}>
                <li><b>Entrance Exam:</b> 120 MCQs, 2 hours, testing comprehension and reasoning.</li>
                <li><b>Merit List:</b> Based on exam scores; separate lists for UG and PG.</li>
                <li><b>Counseling:</b> Online process with choice filling for NLUs (January-February 2025).</li>
                <li><b>Document Verification:</b> At allotted NLU during admission.</li>
                <li><b>Final Admission:</b> Based on rank, seat availability, and document verification.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>CLAT 2025 Admit Card and Scorecard.</li>
                <li>10th/12th mark sheets and certificates (for UG).</li>
                <li>LLB degree certificate and mark sheets (for PG).</li>
                <li>Caste Certificate (SC/ST/OBC/EWS, in Central Govt. format).</li>
                <li>PWD Certificate (if applicable).</li>
                <li>Photo ID (Aadhaar, PAN, Voter ID, or Passport).</li>
                <li>Recent passport-size photographs (6 copies).</li>
                <li>Domicile Certificate (if claiming state quota).</li>
                <li><b>Note:</b> Ensure documents match application details to avoid disqualification.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits of CLAT">
              <ul className={style.zxs}>
                <li><b>Top Law Schools:</b> Admission to premier NLUs like NLSIU Bangalore, NALSAR Hyderabad.</li>
                <li><b>Career Options:</b> Corporate law, litigation, judiciary, academia, or public policy.</li>
                <li><b>High Salaries:</b> Average starting packages of ₹10-20 LPA for top NLU graduates.</li>
                <li><b>Global Opportunities:</b> Work with international law firms, NGOs, or pursue higher studies abroad.</li>
                <li><b>Prestige:</b> Join a network of elite legal professionals shaping India’s legal landscape.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li><b>Check Eligibility:</b> Verify educational qualifications (10+2 for UG, LLB for PG).</li>
                <li><b>Visit Official Website:</b> <a href="https://consortiumofnlus.ac.in" target="_blank" className="link">consortiumofnlus.ac.in</a>.</li>
                <li><b>Register:</b> Click “Apply Online,” enter name, email, mobile, and upload photo (50-100 KB) and signature (20-50 KB).</li>
                <li><b>Fill Form:</b> Provide personal, educational, and category details; select exam city.</li>
                <li><b>Pay Fee:</b> ₹4,000 (General/OBC), ₹3,500 (SC/ST); pay online.</li>
                <li><b>Submit:</b> Review, submit, and download the application form. Keep two printed copies.</li>
                <li><b>Track Application:</b> Use login credentials to check status and download admit cards.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Check Result">
              <ol className={style.zxs}>
                <li>Visit the official website: <a href="https://consortiumofnlus.ac.in" target="_blank" className="link">consortiumofnlus.ac.in</a>.</li>
                <li>Navigate to the “CLAT 2025 Results” section.</li>
                <li>Enter application ID and password.</li>
                <li>View result PDF, checking name, roll number, marks, and rank.</li>
                <li>Download and save the PDF for counseling.</li>
                <li><b>Note:</b> Check counseling schedule and NLU cut-offs on the portal.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li><b>Understand the Syllabus:</b> Focus on Legal Reasoning, Current Affairs, and English comprehension.</li>
                <li><b>Previous Papers:</b> Solve CLAT 2020-2024 papers for question patterns.</li>
                <li><b>Time Management:</b> Practice 120 MCQs in 2 hours; aim for 80% accuracy.</li>
                <li><b>Current Affairs:</b> Read The Hindu, Indian Express, and PIB for 2023-2024 updates.</li>
                <li><b>Legal Reasoning:</b> Study basic laws (contracts, torts) from “Legal Awareness and Legal Reasoning” by AP Bhardwaj.</li>
                <li><b>Mock Tests:</b> Use CLAT Possible, Career Launcher for UG/PG-specific mocks; target 100-110 marks (UG).</li>
                <li><b>Reading Skills:</b> Read editorials and novels to improve comprehension speed.</li>
                <li><b>Stay Updated:</b> Follow Consortium website for exam and counseling notifications.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li><b>How many NLUs accept CLAT?</b> 22 NLUs for UG and PG programs.</li>
                <li><b>Can final-year students apply?</b> Yes, 12th students (UG) and LLB final-year students (PG) are eligible.</li>
                <li><b>Is there negative marking?</b> Yes, -0.25 marks per wrong answer.</li>
                <li><b>What documents are needed for counseling?</b> Admit card, scorecard, 10th/12th/LLB certificates, caste certificate.</li>
                <li><b>Where are the exam centers?</b> Major cities like Delhi, Mumbai, Bengaluru, Patna, etc.</li>
                <li><b>What is the exam duration?</b> 2 hours for both UG and PG.</li>
                <li><b>Can non-law graduates apply for CLAT PG?</b> No, an LLB degree is mandatory.</li>
                <li><b>How to prepare for Legal Reasoning?</b> Read basic law books and practice passage-based questions.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li><a href="https://consortiumofnlus.ac.in" target="_blank" className="link">Consortium of NLUs</a>: Check results, counseling, and admit cards.</li>
                <li><a href="https://clatpossible.com" target="_blank" className="link">CLAT Possible</a>: Mock tests and study material for UG/PG.</li>
                <li><a href="https://www.careerlauncher.com/clat" target="_blank" className="link">Career Launcher</a>: Free notes and online coaching.</li>
                <li><a href="https://pib.gov.in" target="_blank" className="link">PIB India</a>: Current affairs updates for CLAT.</li>
                <li><a href="https://www.lawctopus.com/clat-previous-year-papers" target="_blank" className="link">Previous Year Papers</a>: Download PDFs for 2020-2024 exams.</li>
                <li><b>Books:</b>
                  <ul>
                    <li>“Legal Awareness and Legal Reasoning” by AP Bhardwaj.</li>
                    <li>“Objective General English” by RS Aggarwal.</li>
                    <li>“Manorama Yearbook” for Current Affairs.</li>
                    <li>“Analytical Reasoning” by MK Pandey.</li>
                  </ul>
                </li>
                <li><b>YouTube Channels:</b> Follow “CLAT Possible” or “LegalEdge” for exam tips and live classes.</li>
              </ul>
            </CollapsibleSection>
            <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
               <div className={style.zxv}>
                <div >{Object.entries(link).map(([key, value]) => ( <li> <a href={value} target="_blank" className="link"> {key}</a></li> ))}</div>
              </div>
            </div>
            <Ad type="NativeBanner" />
            <img src={a1} alt="CLAT 2025 Entrance Exam" className={style.imga} />
            <div id={style.ins}>
              <h1>Www.JobForSarkari.Com</h1>
              <h2>Welcome to Our Website</h2>
              <p>Our website provides official links for entrance exam information, ensuring you stay informed about opportunities like CLAT.</p>
              <p>We do not charge for any services, offering free access to exam details and updates.</p>
              <p>Please read all instructions carefully before applying to avoid errors and ensure a smooth process.</p>
            </div>
            <div id={style.ins}>
              <h1>Find the Latest Entrance Exam Updates</h1>
              <h2>Latest CLAT & Other Exam Updates & Free Alerts</h2>
              <p>Looking for law entrance exams? Our portal delivers the latest updates on CLAT and other competitive exams tailored to your needs.</p>
              <p>Explore comprehensive details on eligibility, syllabus, and exam updates for UG and PG programs.</p>
              <p>Subscribe to our free alert service to receive real-time notifications about exam dates, admit cards, and results.</p>
              <p>Start your law admission journey today and secure your future with the best legal education opportunities!</p>
            </div>
            <div id={style.ins}>
              <h1>Latest Entrance Exam Updates</h1>
              <h2>Apply for Exams like CLAT, AILET, LSAT & More</h2>
              <p>Seeking law entrance exams like CLAT, AILET, or LSAT?</p>
              <p>Stay updated with free alerts and never miss an opportunity to apply for top law school admissions.</p>
              <p>Our portal provides the latest updates on exam notifications, application processes, and results.</p>
              <p>Explore opportunities in law, management, engineering, and medical entrance exams.</p>
              <p>Whether you’re aiming for UG or PG programs, we bring you the most recent exam openings.</p>
              <p>Stay ahead with real-time alerts and apply easily through our portal to secure your dream law school admission.</p>
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

export default CLAT_UG_PG_Entrance_2;