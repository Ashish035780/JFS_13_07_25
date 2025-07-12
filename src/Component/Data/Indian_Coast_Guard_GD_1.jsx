import style from "./000_Content.module.css";
import a1 from "./Pic/Indian_Coast_Guard_1.jpg"; // Update with relevant image
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";
const Indian_Coast_Guard_GD_1 = () => {
    
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
      fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/INDIAN_COAST_GUARD_GD.json")
        .then((res) => res.json())
        .then((data) => {
          const job = data.find((item) => item.id === "indiancoastguardgd1");
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
            <h2 className={style.zxg}>Indian Coast Guard (ICG)</h2>
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
                <li><b>General/OBC/EWS:</b> ₹300</li>
                <li><b>SC/ST:</b> Nil</li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Net Banking, Visa/Master/Maestro/Rupay Credit/Debit Card, or UPI. Fee is non-refundable.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Across India (Coastal and Offshore Areas)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/03/2025)</h2>
              <ul className={style.zxk}>
                <li><b>Minimum Age:</b> 18 Years</li>
                <li><b>Maximum Age:</b> 22 Years (Born between 01/03/2003 and 28/02/2007)</li>
                <li><b>Age Relaxation:</b> SC/ST: 5 years, OBC (Non-Creamy): 3 years, as per ICG rules.</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Eligibility Qualification Details</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Post Name</div>
                <div className={style.tablecell}>Eligibility Criteria</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Navik (General Duty)</div>
                <div className={style.tablecell}>
                  Class 12th passed with Maths and Physics from an education board recognized by Council of Boards for School Education (COBSE) with minimum 50% aggregate marks (45% for SC/ST).
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Yantrik</div>
                <div className={style.tablecell}>
                  Class 10th passed and Diploma (3/4 years or 2/3 years) in Electrical/Mechanical/Electronics/Telecommunication (Radio/Power) Engineering approved by AICTE, or Class 10th & 12th passed with Diploma in above fields, with minimum 60% aggregate marks (55% for SC/ST).
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
              <h2 className={style.sectiontitle}>Stage I: Computer-Based Test</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Post</div>
                <div className={style.tablecell}>Section</div>
                <div className={style.tablecell}>Subjects</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Navik (GD)</div>
                <div className={style.tablecell}>Section I</div>
                <div className={style.tablecell}>Maths, Science, English, Reasoning, GK</div>
                <div className={style.tablecell}>60</div>
                <div className={style.tablecell}>60</div>
                <div className={style.tablecell}>45 Minutes</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Navik (GD)</div>
                <div className={style.tablecell}>Section II</div>
                <div className={style.tablecell}>Maths, Physics (Class 12 level)</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}>30 Minutes</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Yantrik</div>
                <div className={style.tablecell}>Section I</div>
                <div className={style.tablecell}>Maths, Science, English, Reasoning, GK</div>
                <div className={style.tablecell}>60</div>
                <div className={style.tablecell}>60</div>
                <div className={style.tablecell}>45 Minutes</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Yantrik</div>
                <div className={style.tablecell}>Section III</div>
                <div className={style.tablecell}>Diploma-level Electrical/Mechanical/Electronics</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}>30 Minutes</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Objective-type questions with four options; no negative marking.</li>
                <li>Bilingual (English/Hindi) except for English section.</li>
                <li>Passing marks: Section I (30% General, 25% SC/ST); Section II/III (30% General, 25% SC/ST).</li>
                <li>Candidates must pass both sections (if applicable) to qualify for Stage II.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <h2 className={style.sectiontitle}></h2>
              <h3 style={{ fontWeight: "700" }}>Section I (Common for Navik GD and Yantrik):</h3>
              <ul className={style.zxs}>
                <li><b>Maths (Class 10 level):</b> Algebra, Geometry, Mensuration, Simplification, Percentage.</li>
                <li><b>Science (Class 10 level):</b> Physics (Motion, Energy), Chemistry (Elements, Reactions), Biology.</li>
                <li><b>English (Class 10 level):</b> Comprehension, Grammar, Vocabulary, Sentence Correction.</li>
                <li><b>Reasoning:</b> Analogy, Series, Coding-Decoding, Blood Relations, Puzzles.</li>
                <li><b>General Knowledge:</b> Current Affairs (6 months), Geography, History, Polity, Sports.</li>
              </ul>
              <h3 style={{ fontWeight: "700" }}>Section II (Navik GD):</h3>
              <ul className={style.zxs}>
                <li><b>Maths (Class 12 level):</b> Calculus, Probability, Trigonometry, Matrices.</li>
                <li><b>Physics (Class 12 level):</b> Mechanics, Electricity, Magnetism, Optics.</li>
              </ul>
              <h3 style={{ fontWeight: "700" }}>Section III (Yantrik):</h3>
              <ul className={style.zxs}>
                <li><b>Diploma Level (Electrical/Mechanical/Electronics):</b> Circuit Theory, Machines, Thermodynamics, Digital Electronics, Communication Systems.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Navik (General Duty):</b> Engage in maritime security, search and rescue operations, and coastal patrolling. Responsibilities include operating small boats, assisting in navigation, and ensuring maritime law enforcement.</li>
                <li><b>Yantrik:</b> Handle technical operations, including maintenance and repair of mechanical, electrical, or electronics systems on Coast Guard vessels and aircraft.</li>
              </ul>
            </CollapsibleSection>
             
            <CollapsibleSection title="Physical Standards">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Height:</b> Minimum 157 cm (relaxable for certain regions).</li>
                <li><b>Chest:</b> Well-proportioned, minimum expansion 5 cm.</li>
                <li><b>Weight:</b> Proportionate to height and age, ±10% acceptable.</li>
                <li><b>Vision:</b> 6/6 (better eye), 6/9 (worse eye) without glasses; no color blindness.</li>
                <li><b>Hearing:</b> Normal, without aids.</li>
                <li><b>Physical Fitness Test (PFT):</b> 1.6 km run in 7 minutes, 20 squats, 10 push-ups, performed continuously without break.</li>
              </ul>
            </CollapsibleSection>
           
            <CollapsibleSection title="Exam Analysis and Insights">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Difficulty Level (Stage I 2024):</b> Moderate; Maths and Physics (Section II) were challenging for Navik GD.</li>
                <li><b>General Knowledge:</b> Focused on 2024 current affairs, maritime policies, and defense news.</li>
                <li><b>Physical Fitness Test:</b> 1.6 km run is critical; practice continuous running to avoid disqualification.</li>
                <li><b>Cut-Off Trends:</b> Section I: ~40-45 (General), ~35-40 (OBC/SC/ST); Section II/III: ~35-40 (General).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Selection Process">
              <ul className={style.zxs}>
                <li><b>Stage I (Computer-Based Test):</b> Objective test; qualifies candidates for Stage II.</li>
                <li><b>Stage II (Physical Fitness Test & Document Verification):</b> 1.6 km run, squats, push-ups, and document check.</li>
                <li><b>Stage III (Final Medicals):</b> Conducted at INS Chilka; includes vision, hearing, and general health checks.</li>
                <li><b>Stage IV (Training):</b> Candidates submit original documents for verification; training at INS Chilka followed by professional training.</li>
                <li><b>Final Merit List:</b> Based on Stage I marks, region-wise for Navik GD, all-India for Yantrik.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>Original and photocopy of 10th/12th mark sheets and certificates.</li>
                <li>Diploma certificate and mark sheets (for Yantrik).</li>
                <li>Caste Certificate (SC/ST/OBC/EWS, in prescribed format).</li>
                <li>Photo ID (Aadhaar, PAN, Voter ID, or Passport).</li>
                <li>Two recent passport-size photographs (same as uploaded).</li>
                <li>Police Verification Form (obtained after application last date).</li>
                <li>Printed application form and fee payment receipt.</li>
                <li><b>Note:</b> Discrepancies or unverified police reports lead to disqualification.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Medical Examination Details">
              <ul className={style.zxs}>
                <li><b>Purpose:</b> Ensure fitness for maritime duties.</li>
                <li><b>Standards:</b>
                  <ul>
                    <li><b>Vision:</b> 6/6 (better eye), 6/9 (worse eye), no color blindness.</li>
                    <li><b>Hearing:</b> Normal, without aids.</li>
                    <li><b>General Health:</b> No chronic diseases or physical deformities.</li>
                  </ul>
                </li>
                <li><b>Tests:</b> Blood tests, urine tests, vision/hearing tests, physical examination.</li>
                <li><b>COVID-19 Protocols:</b> Negative RT-PCR report, Aarogya Setu app, 14-day quarantine.</li>
                <li><b>Disqualification:</b> Failure to meet standards leads to rejection.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits at Indian Coast Guard">
              <ul className={style.zxs}>
                <li><b>Salary:</b> Navik GD: ₹21,700 (Pay Level-3); Yantrik: ₹29,200 (Pay Level-5) + ₹6,200 Yantrik Pay, plus Dearness Allowance.</li>
                <li><b>Allowances:</b> Free ration, clothing, medical treatment, and government accommodation.</li>
                <li><b>Leave:</b> 45 days earned leave, 8 days casual leave, LTC for self and family.</li>
                <li><b>Pension:</b> Contributory Pension Scheme and gratuity on retirement.</li>
                <li><b>Insurance:</b> ₹50 lakh coverage (on contribution).</li>
                <li><b>Career Growth:</b> Opportunities for promotion to higher ranks with training.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li><b>Check Eligibility:</b> Verify age (18–22 years) and education (Class 12 for Navik GD, Diploma for Yantrik).</li>
                <li><b>Visit Official Website:</b> Access the recruitment portal at joinindiancoastguard.cdac.in.</li>
                <li><b>Register:</b> Enter email ID, mobile number, and upload photo (20-50 KB) and signature (10-20 KB).</li>
                <li><b>Fill Form:</b> Provide personal, educational, and category details; select five exam cities (first choice within 30 km of residence).</li>
                <li><b>Pay Fee:</b> ₹300 (General/OBC/EWS), Nil (SC/ST); pay online.</li>
                <li><b>Submit:</b> Review, submit, and download the application form. Keep two printed copies.</li>
                <li><b>Track Application:</b> Use login credentials to check status and download admit cards.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Download Admit Card">
              <ol className={style.zxs}>
                <li>Visit the official website: joinindiancoastguard.cdac.in.</li>
                <li>Navigate to “CGEPT 01/2025 Candidate Login.”</li>
                <li>Enter registered email ID and password.</li>
                <li>Click on “Download E-Admit Card” for Stage I (released 20/11/2024).</li>
                <li>Verify exam date, time, and center; download and print the admit card.</li>
                <li><b>Note:</b> Carry admit card with photo ID and two passport-size photographs to the exam. No email/SMS notifications are sent.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li><b>Understand Syllabus:</b> Focus on Class 10/12 Maths, Physics, and GK for Navik GD; Diploma-level topics for Yantrik.</li>
                <li><b>Previous Papers:</b> Solve ICG 2022-2023 papers for question patterns.</li>
                <li><b>Time Management:</b> Practice 60 questions in 45 minutes (Section I); aim for 80% accuracy.</li>
                <li><b>Current Affairs:</b> Read The Hindu, PIB, and maritime news for 2024 updates.</li>
                <li><b>Physical Fitness:</b> Train for 1.6 km run, squats, and push-ups to pass PFT.</li>
                <li><b>Maths & Physics:</b> Use NCERT Class 12 books for Navik GD; R.S. Aggarwal for reasoning.</li>
                <li><b>English:</b> Practice comprehension and grammar using Wren & Martin.</li>
                <li><b>Mock Tests:</b> Use Adda247, Testbook for ICG-specific mocks; target 50+ marks in Section I.</li>
                <li><b>Stay Updated:</b> Check ICG website for admit card and result notifications.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li><b>How many vacancies are there?</b> 320 posts (260 Navik GD, 60 Yantrik).</li>
                <li><b>Can female candidates apply?</b> No, only male Indian citizens are eligible.</li>
                <li><b>Is there negative marking?</b> No, the CBT has no negative marking.</li>
                <li><b>What documents are needed for verification?</b> 10th/12th certificates, diploma (Yantrik), caste certificate, photo ID, police verification.</li>
                <li><b>Where are the exam centers?</b> Major cities across India, based on candidate’s choice within 30 km of residence.</li>
                <li><b>What is the role of Navik GD?</b> Maritime security, rescue operations, and coastal patrolling.</li>
                <li><b>What is the role of Yantrik?</b> Technical maintenance of Coast Guard vessels and aircraft.</li>
                <li><b>How to prepare for PFT?</b> Practice running 1.6 km in 7 minutes, 20 squats, and 10 push-ups.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li><a href="https://joinindiancoastguard.cdac.in" target="_blank" className="link">ICG Official Website</a>: Check results, admit cards, and notifications.</li>
                <li><a href="https://www.testbook.com/indian-coast-guard-navik" target="_blank" className="link">Testbook Mock Tests</a>: Practice ICG-specific mocks with analytics.</li>
                <li><a href="https://www.adda247.com/indian-coast-guard" target="_blank" className="link">Adda247 Study Material</a>: Free notes on Maths, Physics, and GK.</li>
                <li><a href="https://www.pib.gov.in" target="_blank" className="link">PIB Website</a>: Current affairs and defense updates.</li>
                <li><b>Books:</b>
                  <ul>
                    <li>“NCERT Maths and Physics” (Class 12) for Navik GD.</li>
                    <li>“Quantitative Aptitude” by R.S. Aggarwal for reasoning.</li>
                    <li>“High School English Grammar” by Wren & Martin for English.</li>
                    <li>“General Knowledge 2024” by Arihant for current affairs.</li>
                  </ul>
                </li>
                <li><b>YouTube Channels:</b> Follow “Adda247” or “Defence Adda” for ICG exam tips and live classes.</li>
              </ul>
            </CollapsibleSection>
            <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
              <div className={style.zxv}>
                <div >{Object.entries(link).map(([key, value]) => ( <li> <a href={value} target="_blank" className="link"> {key}</a></li> ))}</div>
              </div>
            </div>
            <Ad type="NativeBanner" />
            <img src={a1} alt="ICG Yantrik / Navik GD Recruitment 2024" className={style.imga} />
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

export default Indian_Coast_Guard_GD_1;