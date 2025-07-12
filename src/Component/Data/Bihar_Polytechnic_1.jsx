import style from "./000_Content.module.css";
import a1 from "./Pic/Bihar_Polytechnic_1.jpg"; // Update with relevant image
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";
const Bihar_Polytechnic_1 = () => {
    
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
      fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/BIHAR_POLYTECHNIC.json")
        .then((res) => res.json())
        .then((data) => {
          const job = data.find((item) => item.id === "biharpolytechnic1");
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
            <h2 className={style.zxg}>Bihar Combined Entrance Competitive Examination Board (BCECEB)</h2>
            <h3 className={style.zxh}>Total Posts: <span className={style.highlight}>{totalpost}</span></h3>
            <h3 className={style.zxh}>Pay Scale: <span className={style.highlight}>{payscale}</span></h3>
          </div>
          <div className={style.zxi}>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Important Dates for Bihar Polytechnic 2025</h2>
               <ul className={style.zxk}>{Object.entries(date).map(([key, value]) => (<li key={key}><b>{key} :-</b> {value}</li>))}</ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Application Fee</h2>
              <ul className={style.zxk}>
                <li><b>General/OBC (Single Course):</b> ₹750</li>
                <li><b>SC/ST/PWD (Single Course):</b> ₹480</li>
                <li><b>Two Courses:</b> ₹850 (General/OBC), ₹530 (SC/ST/PWD)</li>
                <li><b>All Courses (PE/PM/PMM):</b> ₹950 (General/OBC), ₹630 (SC/ST/PWD)</li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Debit/Credit Card, Net Banking, or UPI. Fee is non-refundable.[](https://www.shiksha.com/engineering/dcece-exam-application-form)
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
                <li><b>Nationality:</b> Indian citizen, preferably Bihar resident.</li>
                <li><b>Polytechnic Engineering (PE):</b> 10th pass with minimum 35% marks.</li>
                <li><b>Paramedical-Matric (PMM):</b> 10th pass with Science and English.</li>
                <li><b>Paramedical (PM):</b> 10+2 pass with Physics, Chemistry, Biology/English (specific courses like Ophthalmic Assistant require Biology).</li>
                <li><b>Age Limit:</b> No upper age limit for PE/PMM; PM may have course-specific restrictions.</li>
                <li><b>Appearing Candidates:</b> 10th/10+2 appearing candidates eligible, but must pass before merit list publication.[](https://biharhelp.in/bihar-polytechnic-entrance-exam-2025/)[](https://www.shiksha.com/engineering/dcece-exam-application-form) </li>
              </ul>
            </div>
           
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Course-Wise Details</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Course Name</div>
                <div className={style.tablecell}>Description</div>
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
              <h2 className={style.sectiontitle}>DCECE 2025 Written Exam</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Course</div>
                <div className={style.tablecell}>Subjects</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>PE</div>
                <div className={style.tablecell}>Physics, Chemistry, Mathematics</div>
                <div className={style.tablecell}>90 (30 each)</div>
                <div className={style.tablecell}>450</div>
                <div className={style.tablecell}>2 Hours 15 Min</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>PM</div>
                <div className={style.tablecell}>General Science, Hindi, English, GK</div>
                <div className={style.tablecell}>90</div>
                <div className={style.tablecell}>450</div>
                <div className={style.tablecell}>2 Hours 15 Min</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>PMM</div>
                <div className={style.tablecell}>Physics, Chemistry, Mathematics, Hindi, English, GK</div>
                <div className={style.tablecell}>90</div>
                <div className={style.tablecell}>450</div>
                <div className={style.tablecell}>2 Hours 15 Min</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Offline pen-and-paper exam; 5 marks per question, no negative marking.</li>
                <li>Separate question papers for PE, PM, and PMM courses.</li>
                <li>Qualifying marks determine counseling eligibility.[](https://www.shiksha.com/engineering/dcece-exam)</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <h2 className={style.sectiontitle}></h2>
              <h3 style={{ fontWeight: "700" }}>1. Polytechnic Engineering (PE):</h3>
              <ul className={style.zxs}>
                <li><b>Physics:</b> Mechanics, Heat, Optics, Electricity.</li>
                <li><b>Chemistry:</b> Atomic Structure, Chemical Bonding, Organic Chemistry.</li>
                <li><b>Mathematics:</b> Algebra, Trigonometry, Coordinate Geometry, Calculus.</li>
              </ul>
              <h3 className={style.zxu}>2. Paramedical (PM):</h3>
              <ul className={style.zxs}>
                <li><b>General Science:</b> Basics of Physics, Chemistry, Biology.</li>
                <li><b>Hindi:</b> Grammar, Comprehension, Vocabulary.</li>
                <li><b>English:</b> Grammar, Synonyms, Antonyms, Comprehension.</li>
                <li><b>General Knowledge:</b> Current Affairs, History, Geography.</li>
              </ul>
              <h3 className={style.zxu}>3. Paramedical-Matric (PMM):</h3>
              <ul className={style.zxs}>
                <li><b>Physics/Chemistry:</b> 10th-level concepts.</li>
                <li><b>Mathematics:</b> Arithmetic, Algebra, Geometry.</li>
                <li><b>Hindi/English:</b> Basic grammar and comprehension.</li>
                <li><b>General Knowledge:</b> National/International events, Bihar-specific updates.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Course Objectives and Career Prospects">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Polytechnic Engineering (PE):</b> Equips students with technical skills for careers in engineering sectors like manufacturing, construction, and IT.</li>
                <li><b>Paramedical (PM/PMM):</b> Trains candidates for healthcare roles such as pharmacists, lab technicians, and dental hygienists, with opportunities in hospitals and clinics.</li>
              </ul>
            </CollapsibleSection>
            
            <CollapsibleSection title="Physical Standards">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Note:</b> No specific physical standards required for DCECE 2025; however, certain paramedical courses may require medical fitness certificates during counseling.</li>
              </ul>
            </CollapsibleSection>
           
            <CollapsibleSection title="Exam Analysis and Insights">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Difficulty Level (DCECE 2024):</b> Moderate; Physics and Mathematics were challenging for PE, General Knowledge dominated PM/PMM.</li>
                <li><b>Current Affairs:</b> Focused on 2024–2025 events (e.g., Bihar schemes, national policies).</li>
                <li><b>Expected Cut-Offs:</b> PE: ~250–300 (General); PM/PMM: ~200–250 (General).</li>
                <li><b>Preparation Focus:</b> Practice 10th-level science for PE, current affairs for PM/PMM.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Selection Process">
              <ul className={style.zxs}>
                <li><b>Written Exam (DCECE):</b> 90 MCQs, 450 marks, 2 hours 15 minutes.</li>
                <li><b>Counseling:</b> Online seat allotment based on DCECE rank and preferences.</li>
                <li><b>Document Verification:</b> Verify educational and identity documents during counseling.</li>
                <li><b>Medical Fitness (if applicable):</b> Required for paramedical courses.</li>
                <li><b>Final Admission:</b> Based on DCECE marks, counseling, and document verification.[](https://www.shiksha.com/engineering/dcece-exam) </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>10th/12th mark sheets and certificates (original and photocopy).</li>
                <li>DCECE 2025 Admit Card and Rank Card.</li>
                <li>Caste Certificate (SC/ST/OBC/EWS, in Bihar Govt. format).</li>
                <li>PWD Certificate (if applicable).</li>
                <li>Photo ID (Aadhaar, PAN, Voter ID, or Passport).</li>
                <li>Recent passport-size photographs (6 copies).</li>
                <li>Printed application form (Parts A and B).</li>
                <li>Domicile Certificate (for Bihar residents).</li>
                <li><b>Note:</b> Ensure documents match application details to avoid rejection.[](https://www.sarvgyan.com/articles/bihar-polytechnic-2025) </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Medical Examination Details">
              <ul className={style.zxs}>
                <li><b>Purpose:</b> Ensure fitness for paramedical courses (if required).</li>
                <li><b>Standards:</b> Normal vision, hearing, and general health; no chronic diseases.</li>
                <li><b>Tests:</b> Vision test, physical examination, as specified by institutes.</li>
                <li><b>Location:</b> Designated medical facilities during counseling.</li>
                <li><b>Preparation:</b> Maintain general health; carry medical certificates if needed.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits of Bihar Polytechnic">
              <ul className={style.zxs}>
                <li><b>Technical Skills:</b> Gain expertise in engineering or healthcare for high-demand jobs.</li>
                <li><b>Job Opportunities:</b> Roles in IT, manufacturing, hospitals, and clinics.</li>
                <li><b>Higher Education:</b> Pursue B.Tech via lateral entry or advanced paramedical courses.</li>
                <li><b>Affordable Education:</b> Government polytechnics offer low-cost diplomas.</li>
                <li><b>Career Growth:</b> Opportunities for promotions and entrepreneurship.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply for Bihar Polytechnic 2025">
              <ol className={style.zxs}>
                <li><b>Check Eligibility:</b> Verify education (10th/10+2) and course-specific requirements.</li>
                <li><b>Visit Official Website:</b> <a href="https://bceceboard.bihar.gov.in" target="_blank" className="link">bceceboard.bihar.gov.in</a>.</li>
                <li><b>Register:</b> Click “Apply Online for DCECE 2025,” enter name, email, mobile, and select course group (PE/PM/PMM).</li>
                <li><b>Fill Form:</b> Provide personal, educational, and category details; upload photo (less than 100 KB) and signature (less than 100 KB).</li>
                <li><b>Pay Fee:</b> ₹750–₹950 (based on category/courses); pay online.</li>
                <li><b>Submit:</b> Review, submit, and download Parts A and B of the application form.</li>
                <li><b>Track Application:</b> Use login credentials to check status and download admit card.[](https://www.shiksha.com/engineering/dcece-exam-application-form) </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Check Result">
              <ol className={style.zxs}>
                <li>Visit the official website: <a href="https://bceceboard.bihar.gov.in" target="_blank" className="link">bceceboard.bihar.gov.in</a>.</li>
                <li>Navigate to the “Results” section.</li>
                <li>Click on “DCECE 2025 Result” link.</li>
                <li>Enter application number and password.</li>
                <li>View result PDF, checking name, roll number, marks, and rank.</li>
                <li>Download and save the PDF for counseling.</li>
                <li><b>Note:</b> Check counseling schedule and cut-off ranks on the portal.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips for DCECE 2025">
              <ul className={style.zxs}>
                <li><b>Understand the Syllabus:</b> Focus on 10th-level Physics, Chemistry, and Mathematics for PE; General Knowledge for PM/PMM.</li>
                <li><b>Previous Papers:</b> Solve DCECE 2022–2024 papers for question patterns.</li>
                <li><b>Time Management:</b> Practice 90 MCQs in 2 hours 15 minutes; aim for 80% accuracy.</li>
                <li><b>Current Affairs:</b> Read The Hindu, Dainik Jagran (Bihar), and PIB for 2024–2025 updates.</li>
                <li><b>Science & Mathematics:</b> Revise NCERT 10th books; use R.S. Aggarwal for Mathematics.</li>
                <li><b>Mock Tests:</b> Use Testbook, Adda247 for DCECE-specific mocks; target 300–350 marks.</li>
                <li><b>Stay Updated:</b> Follow BCECEB website for exam and counseling notifications.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li><b>What is DCECE 2025?</b> A state-level entrance exam for admission to polytechnic and paramedical diploma courses in Bihar.</li>
                <li><b>Who can apply for Bihar Polytechnic 2025?</b> 10th-pass candidates for PE/PMM; 10+2-pass for PM.</li>
                <li><b>Is there negative marking?</b> No negative marking in DCECE 2025.</li>
                <li><b>What documents are needed for application?</b> 10th/12th certificates, photo, signature, Aadhaar.</li>
                <li><b>Where are the exam centers?</b> Major Bihar cities (Patna, Gaya, Muzaffarpur, etc.).</li>
                <li><b>Can non-Bihar residents apply?</b> Yes, but Bihar residents may get reservation benefits.</li>
                <li><b>How to prepare for DCECE?</b> Study NCERT books, solve previous papers, and take mock tests.</li>
                <li><b>What is the application fee?</b> ₹750–₹950 for General, ₹480–₹630 for SC/ST, based on course selection.</li>
                <li><b>When is the exam date?</b> 31/05/2025 for PE, 01/06/2025 for PM/PMM.</li>
                <li><b>How is counseling conducted?</b> Online based on DCECE rank and institute preferences.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li><a href="https://bceceboard.bihar.gov.in" target="_blank" className="link">BCECEB Official Website</a>: Check results, counseling schedules, and admit cards.</li>
                <li><a href="https://testbook.com/bihar-polytechnic" target="_blank" className="link">Testbook DCECE Mock Tests</a>: Practice exams with analytics.</li>
                <li><a href="https://adda247.com/bihar-polytechnic" target="_blank" className="link">Adda247 Study Material</a>: Free notes on Science, Mathematics, and General Knowledge.</li>
                <li><a href="https://pib.gov.in" target="_blank" className="link">PIB India</a>: Current affairs updates for DCECE preparation.</li>
                <li><a href="https://www.jagranjosh.com/bihar-polytechnic-previous-papers" target="_blank" className="link">Previous Year Papers</a>: Download PDFs for 2022–2024 exams.</li>
                <li><b>Books:</b>
                  <ul>
                    <li>“NCERT Science and Mathematics” for 10th-level preparation.</li>
                    <li>“Lucent’s General Knowledge” for Current Affairs.</li>
                    <li>“Objective General English” by S.P. Bakshi for English.</li>
                    <li>“Quantitative Aptitude” by R.S. Aggarwal for Mathematics.</li>
                  </ul>
                </li>
                <li><b>YouTube Channels:</b> Follow “Adda247” or “Study IQ” for DCECE exam tips and live classes.</li>
              </ul>
            </CollapsibleSection>
            <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
               <div className={style.zxv}>
                <div >{Object.entries(link).map(([key, value]) => ( <li> <a href={value} target="_blank" className="link"> {key}</a></li> ))}</div>
              </div>
            </div>
            <Ad type="NativeBanner" />
            <img src={a1} alt="Bihar Polytechnic Apply Online Form 2025" className={style.imga} />
            <div id={style.ins}>
              <h1>Www.JobForSarkari.Com</h1>
              <h2>Welcome to Our Website</h2>
              <p>Our website provides official links for exam-related information, ensuring you stay informed about Bihar Polytechnic and other Sarkari Exam opportunities.</p>
              <p>We offer free access to application details, exam updates, and preparation resources.</p>
              <p>Read all instructions carefully before applying to ensure a smooth Bihar Polytechnic application process.</p>
            </div>
            <div id={style.ins}>
              <h1>Explore Bihar Polytechnic Admission 2025</h1>
              <h2>Latest DCECE Updates & Free Exam Alerts</h2>
              <p>Looking for <b>Bihar Polytechnic Apply Online Form 2025</b>? Our portal delivers the latest DCECE 2025 updates tailored to your needs.</p>
              <p>Explore comprehensive details on eligibility, application process, and exam preparation for Bihar Polytechnic Entrance Exam.</p>
              <p>Subscribe to our free exam alert service for real-time notifications about DCECE application forms, admit cards, and results.</p>
              <p>Discover opportunities in engineering, paramedical, and technical education across Bihar’s top polytechnic institutes.</p>
              <p>Start your <b>Bihar Diploma Admission</b> journey today and secure your future with a rewarding career!</p>
            </div>
            <div id={style.ins}>
              <h1>Latest Exam Updates for DCECE 2025</h1>
              <h2>Apply for Bihar Polytechnic and Other Competitive Exams</h2>
              <p>Seeking updates on <b>Bihar Polytechnic Admission Form</b> or other entrance exams?</p>
              <p>Stay informed with free alerts for DCECE 2025, engineering exams, and paramedical admissions.</p>
              <p>Our portal provides the latest updates on Bihar Polytechnic Exam Dates, application corrections, and counseling schedules.</p>
              <p>Explore opportunities in technical and healthcare education with detailed guides and resources.</p>
              <p>Whether you’re aiming for PE, PM, or PMM courses, we bring you the most recent exam openings.</p>
              <p>Apply easily through our portal and secure your spot in <b>Bihar Polytechnic 2025</b> today.</p>
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

export default Bihar_Polytechnic_1;