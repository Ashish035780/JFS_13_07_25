import style from "./000_Content.module.css";
import a1 from "./Pic/Barc_1.jpg"; // Update with relevant image
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";
const BARC_1 = () => {
    
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
      fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/BARC.json")
        .then((res) => res.json())
        .then((data) => {
          const job = data.find((item) => item.id === "barc1");
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
            <h2 className={style.zxg}>Bhabha Atomic Research Centre (BARC)</h2>
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
                <li><b>Technical Officer/C:</b> ₹500</li>
                <li><b>Scientific Assistant/B & Stipendiary Trainee Cat I:</b> ₹150</li>
                <li><b>Technician/B & Stipendiary Trainee Cat II:</b> ₹100</li>
                <li><b>SC/ST/PWD/Female/Ex-Servicemen:</b> No Fee</li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Credit/Debit Card, Net Banking, or UPI. Fee is non-refundable.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Across DAE units, including Mumbai (Maharashtra), Kalpakkam (Tamil Nadu), Hyderabad (Telangana), Tarapur (Maharashtra), and Visakhapatnam (Andhra Pradesh).</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 22/05/2023)</h2>
              <ul className={style.zxk}>
                <li><b>Minimum Age:</b> 18 Years</li>
                <li><b>Technical Officer/C:</b> Max 35 Years (Born not earlier than 23/05/1988)</li>
                <li><b>Scientific Assistant/B:</b> Max 30 Years (Born not earlier than 23/05/1993)</li>
                <li><b>Technician/B & Stipendiary Trainee:</b> Max 25 Years (Born not earlier than 23/05/1998)</li>
                <li><b>Age Relaxation:</b> OBC: 3 years, SC/ST: 5 years, PWD: 10 years, Ex-Servicemen: Service period + 3 years, Widows/Divorced Women: Up to 45 years (post-wise).</li>
              </ul>
            </div>
             <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Eligibility Qualification Details</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Post Name</div>
                <div className={style.tablecell}>Eligibility Criteria</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Technical Officer/C</div>
                <div className={style.tablecell}>
                  M.Sc./B.E./B.Tech in Physics, Chemistry, Mechanical, Electrical, Electronics, Civil, Computer Science, Metallurgy, or Chemical Engineering with minimum 60% marks. Ph.D. preferred for some disciplines. Final-year students must submit proof of marks by 31/07/2023.
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Scientific Assistant/B</div>
                <div className={style.tablecell}>
                  B.Sc. in Food Technology, Home Science, or Nutrition with minimum 60% marks from a recognized university.
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Technician/B (Boiler Attendant)</div>
                <div className={style.tablecell}>
                  10th Pass with First Class Boiler Attendant Certificate issued by a competent authority. Minimum 1 year of relevant experience preferred.
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Stipendiary Trainee Cat I</div>
                <div className={style.tablecell}>
                  B.Sc. in Physics, Chemistry, or Mathematics, or 3-year Diploma in Mechanical, Electrical, Electronics, Chemical, or Instrumentation Engineering with minimum 60% marks. Final-year students eligible with proof of marks.
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Stipendiary Trainee Cat II</div>
                <div className={style.tablecell}>
                  10th Pass with ITI Certificate in trades like Fitter, Electrician, Welder, Turner, Machinist, or Plumber with minimum 60% marks, or 12th Pass with Physics, Chemistry, and Mathematics.
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
              <h2 className={style.sectiontitle}>1. Computer-Based Screening Test (Scientific Assistant/B & Stipendiary Trainee Cat I)</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Subject</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Mathematics</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>60</div>
                <div className={style.tablecell}></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Science</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>60</div>
                <div className={style.tablecell}></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>General Awareness</div>
                <div className={style.tablecell}>10</div>
                <div className={style.tablecell}>30</div>
                <div className={style.tablecell}></div>
              </div>
              <div style={{ color: "#dc2626" }} className={style.tablerow}>
                <div className={style.tablecell}>Total</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}>150</div>
                <div className={style.tablecell}>1 Hour</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>50 multiple-choice questions at Diploma/B.Sc. level.</li>
                <li>3 marks for correct answers; 1 mark deducted for wrong answers.</li>
                <li>Shortlisted candidates proceed to interview.</li>
              </ul>
              <h2 className={style.sectiontitle}>2. Preliminary Test (Technician/B & Stipendiary Trainee Cat II)</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Subject</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Mathematics</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>60</div>
                <div className={style.tablecell}></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Science</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>60</div>
                <div className={style.tablecell}></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>General Awareness</div>
                <div className={style.tablecell}>10</div>
                <div className={style.tablecell}>30</div>
                <div className={style.tablecell}></div>
              </div>
              <div style={{ color: "#dc2626" }} className={style.tablerow}>
                <div className={style.tablecell}>Total</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}>150</div>
                <div className={style.tablecell}>1 Hour</div>
              </div>
              <h2 className={style.sectiontitle}>3. Advanced Test (Technician/B & Stipendiary Trainee Cat II)</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Subject</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Trade-Specific Knowledge</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}>150</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Preliminary Test qualifies candidates for Advanced Test (trade-specific MCQs).</li>
                <li>3 marks for correct answers; 1 mark deducted for wrong answers.</li>
                <li>Skill Test (practical) follows for qualifiers.</li>
              </ul>
              <h2 className={style.sectiontitle}>4. Technical Officer/C</h2>
              <ul className={style.zxs}>
                <li>Selection via interview (50-60 minutes, assessing technical expertise and research aptitude).</li>
                <li>CBT conducted if application volume is high (similar to Cat I CBT structure).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <h2 className={style.sectiontitle}></h2>
              <h3 style={{ fontWeight: "700" }}>1. Mathematics (All Posts):</h3>
              <ul className={style.zxs}>
                <li>Algebra: Linear and quadratic equations, polynomials, sequences.</li>
                <li>Trigonometry: Identities, angles, heights and distances.</li>
                <li>Geometry: Triangles, circles, coordinate geometry, mensuration.</li>
                <li>Statistics: Mean, median, mode, probability, data interpretation.</li>
                <li>Arithmetic: Percentages, profit and loss, time and work, speed and distance.</li>
              </ul>
              <h3 className={style.zxu}>2. Science (All Posts):</h3>
              <ul className={style.zxs}>
                <li>Physics: Mechanics, thermodynamics, optics, electricity, magnetism, nuclear physics basics.</li>
                <li>Chemistry: Atomic structure, chemical bonding, periodic table, organic and inorganic chemistry.</li>
                <li>Biology (Scientific Assistant/B): Nutrition, food preservation, dietetics.</li>
              </ul>
              <h3 className={style.zxu}>3. General Awareness (All Posts):</h3>
              <ul className={style.zxs}>
                <li>Current Affairs: National/international events (2022-2023), scientific developments.</li>
                <li>Indian History: Freedom struggle, ancient and medieval India.</li>
                <li>Geography: Physical geography, Indian climate, resources.</li>
                <li>Indian Polity: Constitution, governance, judiciary.</li>
                <li>General Science: Everyday science, nuclear energy basics.</li>
                <li>Economy: Budget, economic policies, major schemes.</li>
              </ul>
              <h3 className={style.zxu}>4. Subject-Specific Knowledge:</h3>
              <ul className={style.zxs}>
                <li><b>Technical Officer/C:</b> Reactor physics, nuclear engineering, thermodynamics, fluid mechanics, circuit theory, programming (for Computer Science).</li>
                <li><b>Scientific Assistant/B:</b> Food technology, nutritional analysis, safety standards.</li>
                <li><b>Technician/B:</b> Boiler operation, maintenance, safety protocols.</li>
                <li><b>Stipendiary Trainee Cat I:</b> Engineering/science topics like heat transfer, instrumentation, chemical processes.</li>
                <li><b>Stipendiary Trainee Cat II:</b> ITI trade skills (e.g., welding techniques, electrical circuits, machining).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Technical Officer/C:</b> Conduct advanced research in nuclear science, reactor design, and radiation technology. Responsibilities include project management, data analysis, and collaboration with interdisciplinary teams.</li>
                <li><b>Scientific Assistant/B:</b> Support research in food technology and nutrition, ensuring compliance with safety standards in nuclear facilities. Involves lab work and documentation.</li>
                <li><b>Technician/B (Boiler Attendant):</b> Operate and maintain boiler systems in nuclear plants, ensuring operational safety and efficiency.</li>
                <li><b>Stipendiary Trainee Cat I:</b> Undergo training in engineering/science disciplines, assisting in research and operational tasks under senior scientists.</li>
                <li><b>Stipendiary Trainee Cat II:</b> Train in technical trades (e.g., fitter, electrician), performing hands-on maintenance and support tasks in nuclear facilities.</li>
              </ul>
            </CollapsibleSection>
           
            <CollapsibleSection title="Exam Analysis and Insights">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Difficulty Level (CBT 2023):</b> Moderate to difficult, with Mathematics and Science sections requiring strong conceptual clarity. General Awareness was relatively easier, focusing on 2022-2023 events.</li>
                <li><b>Mathematics:</b> Questions on algebra and trigonometry were time-consuming; practice with numerical problems is key.</li>
                <li><b>Science:</b> Physics and Chemistry dominated, with 10-12 questions each; nuclear science basics were included.</li>
                <li><b>General Awareness:</b> 60% current affairs (e.g., ISRO missions, G20 Summit), 40% static GK (history, polity).</li>
                <li><b>Advanced Test (Cat II):</b> Trade-specific questions were practical, testing hands-on knowledge (e.g., wiring diagrams for electricians).</li>
                <li><b>Interview (Technical Officer/C):</b> Focused on research experience, with questions on reactor design, safety protocols, and recent advancements in nuclear technology.</li>
                <li><b>Cut-Off Trends:</b> Expected cut-offs for CBT: Technical Officer/C (~70%), Scientific Assistant/B (~65%), Stipendiary Trainee Cat I (~60%), Cat II (~55%) (varies by category).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Selection Process">
              <ul className={style.zxs}>
                <li><b>Technical Officer/C:</b> Interview (50-60 minutes, technical and research-focused) or CBT if high applicant volume. Final selection based on interview performance.</li>
                <li><b>Scientific Assistant/B & Stipendiary Trainee Cat I:</b> CBT (50 MCQs, 1 hour) + Interview (20-30 minutes, discipline-specific).</li>
                <li><b>Technician/B & Stipendiary Trainee Cat II:</b>
                  <ol>
                    <li><b>Stage 1: Preliminary Test</b> (50 MCQs, 1 hour, Mathematics/Science/General Awareness).</li>
                    <li><b>Stage 2: Advanced Test</b> (50 MCQs, 2 hours, trade-specific).</li>
                    <li><b>Stage 3: Skill Test</b> (Practical, e.g., assembling circuits for electricians).</li>
                  </ol>
                </li>
                <li><b>Document Verification:</b> Verification of educational, identity, and category documents.</li>
                <li><b>Medical Examination:</b> Ensures fitness for nuclear facility work (vision, hearing, no radiation-related health issues).</li>
                <li><b>Final Merit List:</b> Based on CBT marks (Cat I), Advanced Test + Skill Test (Cat II), or interview performance (Technical Officer/C).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>Original and photocopy of 10th/12th mark sheets and certificates.</li>
                <li>Degree/Diploma/ITI certificates and mark sheets.</li>
                <li>Boiler Attendant Certificate (for Technician/B).</li>
                <li>Caste Certificate (SC/ST/OBC/EWS, in prescribed format).</li>
                <li>PWD Certificate (if applicable, issued by competent authority).</li>
                <li>Ex-Servicemen Discharge Book/Service Certificate.</li>
                <li>Photo ID (Aadhaar, PAN, Voter ID, or Passport).</li>
                <li>Recent passport-size photographs (4-6 copies).</li>
                <li>Printed application form and fee payment receipt.</li>
                <li>No Objection Certificate (NOC) for government employees.</li>
                <li><b>Note:</b> Ensure all documents are valid and match application details to avoid disqualification.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Medical Examination Details">
              <ul className={style.zxs}>
                <li><b>Purpose:</b> Ensure candidates are physically and mentally fit for nuclear facility work.</li>
                <li><b>Standards:</b>
                  <ul>
                    <li><b>Vision:</b> 6/6 or 6/9 without glasses; no color blindness.</li>
                    <li><b>Hearing:</b> Normal hearing without aids.</li>
                    <li><b>General Health:</b> No chronic diseases (e.g., diabetes, heart conditions).</li>
                    <li><b>Radiation Safety:</b> No conditions that increase radiation sensitivity.</li>
                  </ul>
                </li>
                <li><b>Tests:</b> Blood tests, urine tests, chest X-ray, ECG, and physical examination.</li>
                <li><b>Location:</b> Conducted at BARC Hospital, Mumbai, or designated DAE medical facilities.</li>
                <li><b>Preparation:</b> Avoid heavy meals before tests; carry medical history records.</li>
                <li><b>Disqualification:</b> Failure to meet standards may lead to rejection, even if selected in earlier stages.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits at BARC">
              <ul className={style.zxs}>
                <li><b>Competitive Salary:</b> ₹56,100 (Level 10) for Technical Officer/C, ₹35,400 (Level 6) for Scientific Assistant/B, ₹21,700 (Level 3) for Technician/B, plus Dearness Allowance (DA), House Rent Allowance (HRA), and Transport Allowance.</li>
                <li><b>Stipend for Trainees:</b> ₹26,000/month (Cat I), ₹20,000-₹22,000/month (Cat II) during training, with absorption into regular posts post-training.</li>
                <li><b>Job Security:</b> Permanent government positions with pension benefits under NPS.</li>
                <li><b>Healthcare:</b> Access to BARC Hospital and CGHS facilities for employees and families.</li>
                <li><b>Housing:</b> Subsidized accommodation in DAE townships (e.g., Anushakti Nagar, Mumbai).</li>
                <li><b>Education Support:</b> Scholarships for children and access to DAE schools.</li>
                <li><b>Career Growth:</b> Promotions to higher grades (e.g., Scientific Officer for Technical Officer/C) and opportunities for sponsored higher studies.</li>
                <li><b>Work Environment:</b> State-of-the-art facilities, collaboration with global research institutions, and contributions to national projects like nuclear reactors and space missions.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li><b>Check Eligibility:</b> Verify age (18-35 years, post-wise) and educational qualifications (10th/ITI to M.Sc./B.Tech).</li>
                <li><b>Visit Official Website:</b> <a href="https://barconlineexam.com" target="_blank" className="link">barconlineexam.com</a>.</li>
                <li><b>Register:</b> Click “One-Time Registration,” enter name, email, mobile, and upload photo (165x125 pixels, 50KB) and signature (80x125 pixels, 20KB).</li>
                <li><b>Fill Form:</b> Provide personal, educational, and post-specific details; select preferred exam city (e.g., Mumbai, Delhi).</li>
                <li><b>Pay Fee:</b> ₹500/₹150/₹100 based on post; no fee for SC/ST/PWD/Female/Ex-Servicemen.</li>
                <li><b>Submit:</b> Review, submit, and download the application form. Keep two printed copies for document verification.</li>
                <li><b>Track Application:</b> Use login credentials to check application status and download admit cards.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Check Result">
              <ol className={style.zxs}>
                <li>Visit the official website: <a href="https://barconlineexam.com" target="_blank" className="link">barconlineexam.com</a>.</li>
                <li>Navigate to the “Result” section on the homepage.</li>
                <li>Click on the “BARC Recruitment 2023 Result” link for your post.</li>
                <li>Enter roll number, login ID, and password (generated during registration).</li>
                <li>View result PDF, checking name, roll number, marks, and category.</li>
                <li>Download and save the PDF for document verification and future reference.</li>
                <li><b>Note:</b> Check for cut-off marks and merit list updates on the same portal.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li><b>Understand the Syllabus:</b> Prioritize Mathematics (algebra, trigonometry), Science (physics, chemistry), and General Awareness (current affairs 2022-2023).</li>
                <li><b>Previous Papers:</b> Solve BARC 2020-2022 papers to grasp question patterns (e.g., nuclear physics questions for Technical Officer/C).</li>
                <li><b>Time Management:</b> Practice 50 MCQs in 1 hour for CBT; aim for 80% accuracy to counter negative marking.</li>
                <li><b>Technical Preparation:</b> For Technical Officer/C, study reactor physics, thermodynamics; for Cat I, revise diploma-level concepts; for Cat II, practice ITI trade skills.</li>
                <li><b>Skill Test Practice:</b> For Technician/B and Cat II, practice trade-specific tasks (e.g., welding joints, circuit assembly) in a workshop setting.</li>
                <li><b>Current Affairs:</b> Read The Hindu, PIB, and science magazines (e.g., Down To Earth) for nuclear and space-related updates.</li>
                <li><b>Mock Tests:</b> Use platforms like Testbook or Gradeup for BARC-specific CBT mocks; aim for 100-120 marks in practice.</li>
                <li><b>Interview Preparation:</b> For Technical Officer/C and Scientific Assistant/B, prepare a 2-minute self-introduction, revise core discipline concepts, and research BARC’s ongoing projects (e.g., BARC’s role in Chandrayaan).</li>
                <li><b>Physical Fitness:</b> Maintain health for medical exams; practice yoga or light exercise for mental clarity.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li><b>How many vacancies are there in BARC Recruitment 2023?</b> 4374 vacancies: 212 Technical Officer/C, 7 Scientific Assistant/B, 24 Technician/B, 981 Stipendiary Trainee Cat I, 3150 Stipendiary Trainee Cat II.</li>
                <li><b>Can final-year students apply?</b> Yes, for Technical Officer/C and Stipendiary Trainee Cat I, with proof of 60% marks by 31/07/2023.</li>
                <li><b>Is there negative marking in CBT?</b> Yes, 1 mark deducted per wrong answer; 3 marks awarded per correct answer.</li>
                <li><b>What documents are needed for verification?</b> 10th/12th certificates, degree/diploma/ITI certificates, caste/PWD certificate, photo ID, and application form.</li>
                <li><b>Where are the exam centers?</b> Over 40 cities, including Mumbai, Delhi, Kolkata, Chennai, Bangalore, Hyderabad, and Lucknow.</li>
                <li><b>What is the training duration for Stipendiary Trainees?</b> Cat I: 1 year; Cat II: 2 years, followed by absorption into regular posts.</li>
                <li><b>Can I apply for multiple posts?</b> Yes, but separate applications and fees are required for each post.</li>
                <li><b>What is the role of BARC in nuclear research?</b> BARC develops nuclear reactors, radiation technologies, and supports ISRO’s space missions.</li>
                <li><b>Are there reservations for women?</b> No specific women’s quota, but female candidates are exempt from application fees.</li>
                <li><b>How to prepare for the skill test?</b> Practice trade-specific tasks (e.g., machining, electrical wiring) under timed conditions.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li><a href="https://www.barc.gov.in/careers/recruit.html" target="_blank" className="link">BARC Official Career Page</a>: Check for updates on results, merit lists, and joining instructions.</li>
                <li><a href="https://testbook.com/barc-exam" target="_blank" className="link">Testbook BARC Mock Tests</a>: Practice CBTs with real-time analytics.</li>
                <li><a href="https://gradeup.co/barc-exam" target="_blank" className="link">Gradeup Study Material</a>: Free notes on Mathematics, Science, and General Awareness.</li>
                <li><a href="https://pib.gov.in" target="_blank" className="link">PIB India</a>: Stay updated on DAE and BARC-related current affairs.</li>
                <li><a href="https://www.careerpower.in/barc-previous-year-papers.html" target="_blank" className="link">Previous Year Papers</a>: Download PDFs for 2020-2022 BARC exams.</li>
                <li><b>Books:</b>
                  <ul>
                    <li>“Quantitative Aptitude” by R.S. Aggarwal for Mathematics.</li>
                    <li>“Objective General Science” by Lucent for Science.</li>
                    <li>“General Knowledge 2023” by Arihant for General Awareness.</li>
                    <li>Trade-specific ITI books (e.g., “Electrician Trade Theory” by NIMI) for Cat II.</li>
                  </ul>
                </li>
                <li><b>YouTube Channels:</b> Follow “Adda247” or “Unacademy” for BARC exam tips and live classes.</li>
              </ul>
            </CollapsibleSection>
            <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
               <div className={style.zxv}>
                <div >{Object.entries(link).map(([key, value]) => ( <li> <a href={value} target="_blank" className="link"> {key}</a></li> ))}</div>
               </div>
            </div>
            <Ad type="NativeBanner" />
            <img src={a1} alt="BARC Various Post Recruitment 2023" className={style.imga} />
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
              <p>Discover opportunities across sectors, including scientific research, banking, railways, defense, and education.</p>
              <p>Stay ahead with details on upcoming govt exams and find state-wise government jobs tailored to your location.</p>
              <p>Start your Sarkari job search today and secure your future with the best government career opportunities!</p>
            </div>
            <div id={style.ins}>
              <h1>Latest Government Jobs Updates</h1>
              <h2>Apply for All Types of Jobs like Scientific Research, Railway, Bank, SSC, UPSC & More</h2>
              <p>Seeking Scientific Research Jobs, Railway Jobs 2024, Bank Jobs Recruitment, or Defense Vacancies?</p>
              <p>Stay updated with free job alert notifications and never miss an opportunity to apply for civil service jobs that match your skills and aspirations.</p>
              <p>Our job portal provides the latest updates on SSC Jobs Online, UPSC Exam Notifications, and Scientific Government Jobs.</p>
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

export default BARC_1;