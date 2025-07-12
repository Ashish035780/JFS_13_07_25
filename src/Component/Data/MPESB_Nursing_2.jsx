import style from "./000_Content.module.css";
import a1 from "./Pic/MPESB_Nursing_2.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";
const MPESB_Nursing_2 = () => {
    
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
      fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/MPESB_NURSING.json")
        .then((res) => res.json())
        .then((data) => {
          const job = data.find((item) => item.id === "mpesbnursing2");
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
            <h2 className={style.zxg}>Madhya Pradesh Employees Selection Board (MPESB)</h2>
             <h3 className={style.zxh}>Total Posts: <span className={style.highlight}>{totalpost}</span></h3>
            <h3 className={style.zxh}>Application Fee: <span className={style.highlight}>{payscale}</span></h3>
          </div>
          <div className={style.zxi}>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Important Dates</h2>
              <ul className={style.zxk}>{Object.entries(date).map(([key, value]) => (<li key={key}><b>{key} :-</b> {value}</li>))}</ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Application Fee</h2>
              <ul className={style.zxk}>
                <li><b>General:</b> ₹400</li>
                <li><b>SC/ST/OBC/PwD (MP Domicile):</b> ₹200</li>
                <li><b>Correction Fee:</b> ₹50</li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via MP Online KIOSK, Debit/Credit Card, Net Banking, or UPI. Fee is non-refundable.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Admission Location</h2>
              <ul className={style.zxk}>
                <li>Government, autonomous, and private nursing institutes across Madhya Pradesh</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 31/12/2025)</h2>
              <ul className={style.zxk}>
                <li><b>BSc Nursing:</b> 17–30 Years</li>
                <li><b>PBBSc Nursing:</b> 17–35 Years</li>
                <li><b>MSc Nursing:</b> No upper age limit (minimum 17 years)</li>
                <li><b>Age Relaxation:</b> SC/ST/OBC/PwD as per MPESB rules</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Eligibility Qualification Details</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Course</div>
                <div className={style.tablecell}>Eligibility Criteria</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>BSc Nursing</div>
                <div className={style.tablecell}>10+2 with Physics, Chemistry, Biology, English; 50% marks (45% for reserved categories); MP domicile</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>PBBSc Nursing</div>
                <div className={style.tablecell}>3-year GNM course with 45% marks; registered nurse</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>MSc Nursing</div>
                <div className={style.tablecell}>BSc Nursing/PBBSc Nursing with 55% marks (50% for SC/ST); 1-year experience for PBBSc candidates; registered nurse</div>
              </div>
            </div>
              <div className={style.zxj}>
               <h2 className={style.sectiontitle}>Vacancy Details</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}> <b>Post Name </b></div>
                <div className={style.tablecell}> <b>Total Posts </b></div>
                <div className={style.tablecell}> <b>Category-Wise Breakdown </b></div>
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
              <h2 className={style.sectiontitle}>Nursing Selection Test</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Course</div>
                <div className={style.tablecell}>Subjects</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>BSc Nursing</div>
                <div className={style.tablecell}>Physics, Chemistry, Biology, English, GK</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>PBBSc Nursing</div>
                <div className={style.tablecell}>GNM Syllabus, Nursing Foundations</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>MSc Nursing</div>
                <div className={style.tablecell}>BSc Nursing Topics, Research, Administration</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Objective-type MCQs in Hindi and English.</li>
                <li>No negative marking (tentative, based on previous exams).</li>
                <li>Two shifts: 10:30 AM–12:30 PM, 3:00 PM–5:00 PM.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>BSc Nursing:</b> Class 11–12 Physics, Chemistry, Biology, English, General Knowledge (current affairs, MP-specific).</li>
                <li><b>PBBSc Nursing:</b> GNM syllabus, Anatomy, Physiology, Nursing Foundations, Community Health.</li>
                <li><b>MSc Nursing:</b> BSc Nursing topics, Nursing Research, Administration, Medical-Surgical Nursing.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Course Descriptions">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>BSc Nursing:</b> 4-year undergraduate program focusing on nursing, anatomy, physiology, and patient care.</li>
                <li><b>PBBSc Nursing:</b> 2-year program for GNM nurses, enhancing skills in advanced nursing practices.</li>
                <li><b>MSc Nursing:</b> 2-year postgraduate program for specialized roles like nursing educator or clinical specialist.</li>
              </ul>
            </CollapsibleSection>
           
            <CollapsibleSection title="Selection Process">
              <ul className={style.zxs}>
                <li><b>Entrance Exam:</b> MPESB Nursing Selection Test on July 1, 2025.</li>
                <li><b>Merit List:</b> Based on exam scores.</li>
                <li><b>Counseling:</b> Document verification and seat allocation in August/September 2025.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>Class 10 and 12 mark sheets/certificates.</li>
                <li>GNM certificate (for PBBSc).</li>
                <li>BSc Nursing/PBBSc certificate (for MSc).</li>
                <li>MP Domicile Certificate.</li>
                <li>Caste/EWS/PwD certificate (if applicable).</li>
                <li>Aadhaar card or other photo ID.</li>
                <li>Passport-size photographs (6 copies).</li>
                <li>Application fee receipt.</li>
                <li><b>Note:</b> Ensure documents match application details to avoid disqualification.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits">
              <ul className={style.zxs}>
                <li><b>BSc Nursing:</b> Staff Nurse roles in hospitals; salary ₹25,000–₹50,000/month.</li>
                <li><b>PBBSc Nursing:</b> Senior Nurse, Supervisor; salary ₹30,000–₹60,000/month.</li>
                <li><b>MSc Nursing:</b> Nursing Educator, Clinical Specialist; salary ₹40,000–₹80,000/month.</li>
                <li><b>Other Benefits:</b> Job security, medical benefits, career growth via further studies or promotions.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li><b>Check Eligibility:</b> Verify age and educational qualifications.</li>
                <li><b>Visit Official Website:</b> <a href="https://esb.mp.gov.in" target="_blank" className="link">esb.mp.gov.in</a>.</li>
                <li><b>Register:</b> Create User ID and Password; upload photo (4-12 KB) and signature (1-12 KB).</li>
                <li><b>Fill Form:</b> Enter personal, educational, and domicile details.</li>
                <li><b>Pay Fee:</b> ₹400 (General), ₹200 (SC/ST/OBC/PwD) via online mode.</li>
                <li><b>Submit:</b> Review, submit, and download confirmation page.</li>
                <li><b>Track Application:</b> Check status and admit cards on esb.mp.gov.in.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Download Admit Card">
              <ol className={style.zxs}>
                <li>Visit <a href="https://esb.mp.gov.in" target="_blank" className="link">esb.mp.gov.in</a>.</li>
                <li>Click “Admit Card” section.</li>
                <li>Select “MPESB Nursing Selection Test 2025.”</li>
                <li>Enter Registration ID, Date of Birth, and captcha.</li>
                <li>Download and print admit card.</li>
                <li><b>Note:</b> Carry admit card, Aadhaar card, and black ballpoint pen to the exam center.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li><b>Understand Syllabus:</b> Focus on PCB, English, and Nursing topics (per course).</li>
                <li><b>Previous Papers:</b> Solve MPESB Nursing 2023-2024 papers for pattern familiarity.</li>
                <li><b>Time Management:</b> Practice 100 MCQs in 2 hours; aim for 80% accuracy.</li>
                <li><b>Resources:</b> Use NCERT for PCB, Lucent’s GK for General Knowledge, Arihant’s Nursing Guide.</li>
                <li><b>Mock Tests:</b> Practice via Testbook, Adda247 for MPESB Nursing-specific tests.</li>
                <li><b>Stay Updated:</b> Follow esb.mp.gov.in for notifications and answer keys.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li><b>What is the exam date for MPESB Nursing 2025?</b> July 1, 2025.</li>
                <li><b>Is there negative marking?</b> No (tentative, based on previous exams).</li>
                <li><b>Can non-MP residents apply?</b> No, MP domicile required for BSc Nursing.</li>
                <li><b>What documents are needed?</b> 10+2 certificates, GNM/BSc Nursing certificates, domicile, ID proof.</li>
                <li><b>Where are exam centers?</b> Major MP districts (e.g., Bhopal, Indore).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li><a href="https://esb.mp.gov.in" target="_blank" className="link">MPESB Official Website</a>: Notifications, admit cards, results.</li>
                <li><a href="https://testbook.com/mpesb-nursing" target="_blank" className="link">Testbook</a>: Mock tests and analytics.</li>
                <li><a href="https://adda247.com/mpesb-nursing" target="_blank" className="link">Adda247</a>: Free study notes for PCB, Nursing.</li>
                <li><a href="https://pib.gov.in" target="_blank" className="link">PIB India</a>: Current affairs updates.</li>
                <li><b>Books:</b>
                  <ul>
                    <li>“NCERT Physics, Chemistry, Biology” (Class 11–12) for BSc Nursing.</li>
                    <li>“Textbook of Nursing Foundations” by Jogindra Vati for PBBSc.</li>
                    <li>“Nursing Research” by Polit & Beck for MSc Nursing.</li>
                  </ul>
                </li>
                <li><b>YouTube Channels:</b> “Adda247,” “Unacademy Nursing” for exam tips.</li>
              </ul>
            </CollapsibleSection>
            <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
              <div className={style.zxv}>
                <div >{Object.entries(link).map(([key, value]) => ( <li> <a href={value} target="_blank" className="link"> {key}</a></li> ))}</div>
              </div>
            </div>
            <Ad type="NativeBanner" />
            <img src={a1} alt="MPESB Nursing Admission 2025" className={style.imga} />
            <div id={style.ins}>
              <h1>Www.JobForSarkari.Com</h1>
              <h2>Welcome to Our Website</h2>
              <p>Our website provides official links for admission-related information, ensuring you stay informed about nursing and other educational opportunities.</p>
              <p>We do not charge for any services, offering free access to admission details and updates.</p>
              <p>Please read all instructions carefully before applying to avoid errors and ensure a smooth process.</p>
            </div>
            <div id={style.ins}>
              <h1>Find the Latest Educational Opportunities</h1>
              <h2>Latest Admission Updates & Free Alerts</h2>
              <p>Looking for nursing or other educational programs? Our portal delivers the latest updates tailored to your needs.</p>
              <p>Explore comprehensive details on eligibility, application processes, and admission updates for various courses.</p>
              <p>Subscribe to our free alert service to receive real-time notifications about entrance exams and admissions.</p>
            </div>
            <div id={style.ins}>
            <h1> Latest Government Jobs Updates</h1>
            <h2> Apply for All type Jobs like Railway, Bank, SSC, UPSC & More</h2>
            <p>Looking for Railway Jobs 2024, Bank Jobs Recruitment, or Police Vacancy Notifications?</p>
            <p>Stay updated with free alert job notifications and never miss an opportunity to apply for civil service jobs that match your skills and aspirations</p>
            <p> Our job portal provides the latest updates on SSC Jobs Online, UPSC Exam Notifications, and Teaching Government Jobs.</p>
            <p> Explore opportunities in Defense Job Recruitment, Engineering Govt Jobs, and Medical Govt Vacancies.</p>
            <p>Whether you’re searching for 10th/12th Pass Government Jobs or specialized roles, we bring you the most recent government job openings. </p>
            <p>Stay ahead with real-time alerts and apply easily through our portal to secure your dream Sarkari Naukri today</p>
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

export default MPESB_Nursing_2;