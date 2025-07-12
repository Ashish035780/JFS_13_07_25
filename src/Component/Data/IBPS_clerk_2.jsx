import style from "./000_Content.module.css";
import a1 from "./Pic/IBPS_Clerk_2.png"; // Update with relevant image
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";
const IBPS_clerk_2 = () => {
    
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
      fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/IBPS_CLERK.json")
        .then((res) => res.json())
        .then((data) => {
          const job = data.find((item) => item.id === "ibpsclerk2");
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
            <h2 className={style.zxg}>Institute of Banking Personnel Selection (IBPS)</h2>
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
                <li><b>General/OBC/EWS:</b> ₹850</li>
                <li><b>SC/ST/PWD:</b> ₹175</li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Debit/Credit Card, Net Banking, IMPS, Cash Cards, or Mobile Wallets. Fee is non-refundable.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Exam Location</h2>
              <ul className={style.zxk}>
                <li>Across India (Delhi, Mumbai, Bengaluru, Kolkata, Patna, etc.) in 13 regional languages, English, and Hindi.</li>
                <li><b>Note:</b> Candidates must select exam centers during application; Manipur candidates could change centers from 18-22/08/2023.</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/07/2023)</h2>
              <ul className={style.zxk}>
                <li><b>General/EWS:</b> 20-28 years (Born 02/07/1995 to 01/07/2003)</li>
                <li><b>OBC:</b> 20-31 years (Born 02/07/1992 to 01/07/2003)</li>
                <li><b>SC/ST:</b> 20-33 years (Born 02/07/1990 to 01/07/2003)</li>
                <li><b>PWD:</b> 10 years relaxation</li>
                <li><b>Note:</b> Age relaxation applies as per government norms.</li>
              </ul>
            </div>
             <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Eligibility Qualification Details</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Post</div>
                <div className={style.tablecell}>Eligibility Criteria</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Clerk (Customer Service Associate)</div>
                <div className={style.tablecell}>
                  Bachelor’s degree in any discipline from a recognized university or equivalent qualification recognized by the Central Government. Candidates must possess a valid mark sheet/degree certificate at the time of registration, indicating the percentage of marks. Operating and working knowledge of computer systems (Certificate/Diploma/Degree in computer operations/language or studied Computer/IT in high school/college). Proficiency in the official language of the state/UT (read, write, speak) is preferable.
                </div>
              </div>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Vacancy Details</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>State</div>
                <div className={style.tablecell}>Total Vacancies</div>
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
              <h2 className={style.sectiontitle}>Prelims Exam</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Section</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>English Language</div>
                <div className={style.tablecell}>30</div>
                <div className={style.tablecell}>30</div>
                <div className={style.tablecell}>20 min</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Numerical Ability</div>
                <div className={style.tablecell}>35</div>
                <div className={style.tablecell}>35</div>
                <div className={style.tablecell}>20 min</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Reasoning Ability</div>
                <div className={style.tablecell}>35</div>
                <div className={style.tablecell}>35</div>
                <div className={style.tablecell}>20 min</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Total: 100 MCQs, 100 marks, 60 minutes.</li>
                <li>Penalty: -0.25 marks per wrong answer.</li>
                <li>Candidates must clear sectional and overall cut-offs to qualify for Mains.</li>
              </ul>
              <h2 className={style.sectiontitle}>Mains Exam</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Section</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>General/Financial Awareness</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}>35 min</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>General English</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>35 min</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Reasoning Ability & Computer Aptitude</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}>60</div>
                <div className={style.tablecell}>45 min</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Quantitative Aptitude</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}>45 min</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Total: 190 MCQs, 200 marks, 160 minutes.</li>
                <li>Penalty: -0.25 marks per wrong answer.</li>
                <li>Final selection based on Mains scores; no interview.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <h2 className={style.sectiontitle}></h2>
              <h3 style={{ fontWeight: "700" }}>Prelims Syllabus</h3>
              <ul className={style.zxs}>
                <li><b>English Language:</b> Reading comprehension, cloze test, error detection, fill in the blanks, para jumbles.</li>
                <li><b>Numerical Ability:</b> Simplification, number series, data interpretation, quadratic equations, arithmetic (profit/loss, percentages).</li>
                <li><b>Reasoning Ability:</b> Puzzles, seating arrangement, syllogism, blood relations, coding-decoding.</li>
              </ul>
              <h3 className={style.zxu}>Mains Syllabus</h3>
              <ul className={style.zxs}>
                <li><b>General/Financial Awareness:</b> Current affairs (6 months prior), banking awareness, static GK (currency, capitals).</li>
                <li><b>General English:</b> Reading comprehension, sentence rearrangement, vocabulary, grammar.</li>
                <li><b>Reasoning & Computer Aptitude:</b> Advanced puzzles, data sufficiency, computer basics (MS Office, hardware, internet).</li>
                <li><b>Quantitative Aptitude:</b> Data interpretation, number series, arithmetic, probability.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Participating Banks">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li>Bank of Baroda, Canara Bank, Indian Overseas Bank, UCO Bank, Bank of India, Central Bank of India, Punjab National Bank, Union Bank of India, Indian Bank, Punjab & Sind Bank, Bank of Maharashtra.</li>
                <li><b>Note:</b> Candidates must select bank preferences during application; preferences cannot be changed post-submission.</li>
              </ul>
            </CollapsibleSection>
           
            <CollapsibleSection title="Exam Analysis and Insights">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Difficulty Level (Prelims 2023):</b> Easy to moderate; Reasoning and Numerical Ability were time-consuming.</li>
                <li><b>Difficulty Level (Mains 2023):</b> Moderate; General/Financial Awareness focused on 2023 events (RBI policies, budget).</li>
                <li><b>Cut-Off Trends (Prelims):</b> General: 79-86 (Bihar, Haryana, Uttarakhand); SC/ST/OBC: 65-78.</li>
                <li><b>Cut-Off Trends (Mains):</b> General: 70-80; SC/ST/OBC: 60-70.</li>
                <li><b>Good Attempts:</b> Prelims: 70-80 questions; Mains: 120-130 questions.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Selection Process">
              <ul className={style.zxs}>
                <li><b>Prelims Exam:</b> 100 MCQs, 60 minutes, qualifying stage.</li>
                <li><b>Mains Exam:</b> 190 MCQs, 160 minutes, final selection based on scores.</li>
                <li><b>Provisional Allotment:</b> Based on Mains scores, bank preferences, and category-wise vacancies.</li>
                <li><b>Document Verification:</b> Conducted by participating banks post-allotment.</li>
                <li><b>Language Proficiency Test:</b> Candidates must demonstrate proficiency in the state’s official language (read, write, speak).</li>
                <li><b>Note:</b> No interview; final selection based on Mains performance.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>IBPS Clerk 2023 Admit Card and Scorecard.</li>
                <li>10th/12th mark sheets and certificates.</li>
                <li>Bachelor’s degree certificate and mark sheets.</li>
                <li>Caste Certificate (SC/ST/OBC/EWS, in Central Govt. format, if applicable).</li>
                <li>PWD Certificate (if applicable).</li>
                <li>Photo ID (Aadhaar, PAN, Voter ID, or Passport).</li>
                <li>Recent passport-size photographs (6 copies).</li>
                <li>Handwritten Declaration: “I, [Name], hereby declare that all the information submitted by me in the application form is correct, true, and valid. I will present the supporting documents as and when required.”</li>
                <li>Computer proficiency certificate (if applicable).</li>
                <li><b>Note:</b> Documents must match application details; banks verify language proficiency.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits of IBPS Clerk">
              <ul className={style.zxs}>
                <li><b>Salary:</b> ₹29,453/month (basic pay ₹19,900 + allowances: HRA, DA, medical, transport).</li>
                <li><b>Job Security:</b> Stable career in public sector banks.</li>
                <li><b>Career Growth:</b> Promotions to Trainee Officer (TO) or JMGS-1 after internal exams.</li>
                <li><b>Perks:</b> Medical insurance, pension, leave benefits.</li>
                <li><b>Work Environment:</b> Opportunity to work in 11 reputed banks like Bank of Baroda, Canara Bank, etc.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li><b>Check Eligibility:</b> Verify age (20-28 years), educational qualifications (Bachelor’s degree), and computer proficiency.</li>
                <li><b>Visit Official Website:</b> Access the IBPS official portal.</li>
                <li><b>Register:</b> Navigate to “CRP Clerks” “Apply Online for CRP Clerks-XIII,” then select “New Registration.” Enter name, email, mobile; receive provisional registration number and password.</li>
                <li><b>Fill Form:</b> Provide personal, educational, and bank preference details; select exam center and language.</li>
                <li><b>Upload Documents:</b> Photograph (20-50 KB), signature (10-20 KB), left thumb impression (20-50 KB), handwritten declaration (50-100 KB).</li>
                <li><b>Pay Fee:</b> ₹850 (General/OBC/EWS) or ₹175 (SC/ST/PWD) via online payment or bank challan.</li>
                <li><b>Submit:</b> Review, submit, and download the application form. Keep two printed copies.</li>
                <li><b>Track Application:</b> Use login credentials to check status and download admit cards.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Check Result">
              <ol className={style.zxs}>
                <li>Visit the official IBPS website.</li>
                <li>Navigate to “CRP Clerical” “Common Recruitment Process for Clerical Cadre XIII.”</li>
                <li>Click “Result Status of Online Prelims/Mains Examination for CRP-Clerks XIII.”</li>
                <li>Enter registration number/roll number and password/DOB.</li>
                <li>Verify captcha, login, and view result with marks and qualifying status.</li>
                <li>Download and save the result PDF for future reference.</li>
                <li><b>Note:</b> Check bank allotment details on the IBPS portal post-Mains result.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li><b>Understand Syllabus:</b> Focus on Reasoning, Quantitative Aptitude, and English for Prelims; add General/Financial Awareness for Mains.</li>
                <li><b>Previous Papers:</b> Solve IBPS Clerk 2020-2022 papers for question patterns.</li>
                <li><b>Time Management:</b> Practice 100 MCQs in 60 minutes (Prelims) and 190 MCQs in 160 minutes (Mains); aim for 80% accuracy.</li>
                <li><b>General Awareness:</b> Read The Hindu, Economic Times, and RBI updates for 2023 events.</li>
                <li><b>Mock Tests:</b> Use online platforms for Prelims/Mains-specific mocks; target 80-90 (Prelims), 130-140 (Mains).</li>
                <li><b>Computer Aptitude:</b> Study basics (MS Office, internet, hardware) from “Objective Computer Awareness” by Arihant.</li>
                <li><b>Stay Updated:</b> Monitor IBPS notifications for admit card and result updates.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li><b>What is IBPS Clerk XIII?</b> A recruitment process for 4,545 clerical cadre posts in 11 public sector banks for 2024-25.</li>
                <li><b>Is there an interview?</b> No, selection is based on Mains scores only.</li>
                <li><b>What is the application fee?</b> ₹850 (General/OBC/EWS), ₹175 (SC/ST/PWD).</li>
                <li><b>What is the salary?</b> ₹29,453/month (basic ₹19,900 + allowances).</li>
                <li><b>Is computer knowledge mandatory?</b> Yes, basic computer proficiency is required; no specific certificate needed.</li>
                <li><b>Can I change bank preferences?</b> No, preferences are final post-submission.</li>
                <li><b>What is the age limit?</b> 20-28 years for General, with relaxations for OBC (3 years), SC/ST (5 years), PWD (10 years).</li>
                <li><b>How to download results?</b> Use registration number and password on the IBPS portal.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li><b>Official Website:</b> Access the IBPS portal for notifications, application, admit cards, and results.</li>
                <li><b>Study Platforms:</b> Use online platforms for mock tests and study material for IBPS Clerk.</li>
                <li><b>Books:</b>
                  <ul>
                    <li>“Quantitative Aptitude” by RS Aggarwal.</li>
                    <li>“Objective General English” by SP Bakshi.</li>
                    <li>“Reasoning Ability” by Arihant.</li>
                    <li>“Banking Awareness” by Arihant.</li>
                    <li>“Objective Computer Awareness” by Arihant.</li>
                  </ul>
                </li>
                <li><b>YouTube Channels:</b> Follow banking preparation channels for exam tips and live classes.</li>
              </ul>
            </CollapsibleSection>
             <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
               <div className={style.zxv}>
                <div >{Object.entries(link).map(([key, value]) => ( <li> <a href={value} target="_blank" className="link"> {key}</a></li> ))}</div>
              </div>
            </div>
            <Ad type="NativeBanner" />
            <img src={a1} alt="IBPS Clerk 2023 Recruitment" className={style.imga} />
            <div id={style.ins}>
              <h1>Www.JobForSarkari.Com</h1>
              <h2>Welcome to Our Website</h2>
              <p>Our website provides official information for recruitment, ensuring you stay informed about opportunities like IBPS Clerk.</p>
              <p>We do not charge for any services, offering free access to exam details and updates.</p>
              <p>Please read all instructions carefully before applying to avoid errors and ensure a smooth process.</p>
            </div>
            <div id={style.ins}>
              <h1>Latest Banking Job Updates</h1>
              <h2>Latest IBPS Clerk & Other Banking Recruitment Updates & Free Alerts</h2>
              <p>Looking for banking jobs? Our portal delivers the latest updates on IBPS Clerk and other competitive exams tailored to your needs.</p>
              <p>Explore comprehensive details on eligibility, syllabus, and exam updates for banking aspirants.</p>
              <p>Subscribe to our free alert service to receive real-time notifications about exam dates, admit cards, and results.</p>
              <p>Start your banking career journey today and secure your future with the best opportunities!</p>
            </div>
            <div id={style.ins}>
              <h1>Latest Banking Recruitment Updates</h1>
              <h2>Apply for Banking Exams and Jobs</h2>
              <p>Seeking banking jobs like IBPS Clerk or other roles?</p>
              <p>Stay updated with free alerts and never miss an opportunity to apply for top banking positions.</p>
              <p>Our portal provides the latest updates on exam notifications, application processes, and results.</p>
              <p>Explore opportunities in public sector banks and other financial institutions.</p>
              <p>Whether you’re aiming for clerical or officer roles, we bring you the most recent job openings.</p>
              <p>Stay ahead with real-time alerts and apply easily to secure your dream banking career.</p>
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

export default IBPS_clerk_2;