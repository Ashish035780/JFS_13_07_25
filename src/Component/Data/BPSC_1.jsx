
import style from "./000_Content.module.css";
import a1 from "./Pic/BPSC_1.jpg"; // Updated with relevant image
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";
const BPSC_1 = () => {
    
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
      fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/BPSC.json")
        .then((res) => res.json())
        .then((data) => {
          const job = data.find((item) => item.id === "bpsc1");
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
                <li><b>General/OBC/EWS:</b> ₹600</li>
                <li><b>SC/ST/Female (Bihar Domicile):</b> ₹150</li>
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
              <h2 className={style.sectiontitle}>Age Limit (As on 01/08/2024)</h2>
              <ul className={style.zxk}>
                <li><b>Minimum Age:</b> 20 Years</li>
                <li><b>Maximum Age (General Male):</b> 37 Years (Born between 02/08/1987 and 01/08/2004)</li>
                <li><b>Maximum Age (General Female/OBC):</b> 40 Years (Born between 02/08/1984 and 01/08/2004)</li>
                <li><b>Maximum Age (SC/ST):</b> 42 Years (Born between 02/08/1982 and 01/08/2004)</li>
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
                <div className={style.tablecell}>Various Posts</div>
                <div className={style.tablecell}>
                  Bachelor’s degree in any discipline from a recognized university by 01/08/2024. Candidates awaiting final results are ineligible.
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
              <h2 className={style.sectiontitle}>1. Preliminary Exam</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Subject</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>General Studies</div>
                <div className={style.tablecell}>150</div>
                <div className={style.tablecell}>150</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>150 multiple-choice questions; qualifying in nature.</li>
                <li>0.25 marks deducted per wrong answer; minimum 40% to qualify.</li>
                <li>Top candidates qualify for Main Exam.</li>
              </ul>
              <h2 className={style.sectiontitle}>2. Main Exam</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Paper</div>
                <div className={style.tablecell}>Subject</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper I</div>
                <div className={style.tablecell}>General Hindi</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper II</div>
                <div className={style.tablecell}>General Studies Paper I</div>
                <div className={style.tablecell}>300</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper III</div>
                <div className={style.tablecell}>General Studies Paper II</div>
                <div className={style.tablecell}>300</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper IV</div>
                <div className={style.tablecell}>Optional Subject</div>
                <div className={style.tablecell}>300</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Paper I (General Hindi): Qualifying (30% minimum); marks not added to final merit.</li>
                <li>Papers II-IV: Descriptive; contribute to final merit.</li>
                <li>Top candidates qualify for Interview based on Main Exam marks.</li>
              </ul>
              <h2 className={style.sectiontitle}>3. Interview</h2>
              <ul className={style.zxs}>
                <li><b>Marks:</b> 120</li>
                <li><b>Purpose:</b> Assess personality, leadership, and decision-making skills.</li>
                <li><b>Final Merit:</b> Based on Main Exam (Papers II-IV) and Interview marks.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <h2 className={style.sectiontitle}></h2>
              <h3 style={{ fontWeight: "700" }}>1. Preliminary Exam (General Studies):</h3>
              <ul className={style.zxs}>
                <li>Current Events: National/international news, sports, awards (2023-2024).</li>
                <li>Indian Polity: Constitution, governance, Panchayati Raj.</li>
                <li>History: Indian freedom struggle, ancient and medieval India.</li>
                <li>Geography: Physical geography, Bihar’s geography, climate.</li>
                <li>Economy: Budget, economic policies, Bihar’s economy.</li>
                <li>General Science: Physics, chemistry, biology basics.</li>
                <li>Bihar-Specific: History, culture, and current affairs of Bihar.</li>
              </ul>
              <h3 className={style.zxu}>2. Main Exam (Paper I - General Hindi):</h3>
              <ul className={style.zxs}>
                <li>Grammar: Sandhi, Samas, Tenses, Voice, Narration.</li>
                <li>Comprehension: Passage-based questions.</li>
                <li>Essay Writing: Social, cultural, and Bihar-specific issues.</li>
                <li>Vocabulary: Synonyms, Antonyms, Idioms.</li>
              </ul>
              <h3 className={style.zxu}>3. Main Exam (Papers II-IV):</h3>
              <ul className={style.zxs}>
                <li><b>General Studies Paper I:</b> Indian history, culture, geography, and current affairs.</li>
                <li><b>General Studies Paper II:</b> Indian polity, economy, science, and technology.</li>
                <li><b>Optional Subject:</b> Choose from subjects like History, Geography, Sociology, Public Administration, etc.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Bihar Administrative Service:</b> Oversee district administration, implement policies, and manage public services.</li>
                <li><b>Bihar Police Service:</b> Maintain law and order, supervise police operations, and investigate crimes.</li>
                <li><b>Financial Services:</b> Manage revenue, taxation, and financial administration in Bihar.</li>
              </ul>
            </CollapsibleSection>
            
            <CollapsibleSection title="Physical Standards">
              <h2 className={style.sectiontitle}></h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Category</div>
                <div className={style.tablecell}>Height (Police Service Only)</div>
                <div className={style.tablecell}>Chest (Male, Police Service Only)</div>
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
                <li><b>Weight (Female, Police Service):</b> Minimum 48 kg, proportionate to height.</li>
                <li><b>Vision:</b> 6/12 without glasses; no color blindness.</li>
                <li><b>Note:</b> Physical standards apply only to Bihar Police Service posts.</li>
              </ul>
            </CollapsibleSection>
            
            <CollapsibleSection title="Exam Analysis and Insights">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Difficulty Level (Prelims 2023):</b> Moderate; Current Affairs (50%) and Bihar-specific questions (30%) dominated.</li>
                <li><b>Current Affairs:</b> Focused on Bihar policies, G20 Summit, and national schemes.</li>
                <li><b>Main Exam:</b> Descriptive questions require in-depth knowledge of Bihar’s history and economy.</li>
                <li><b>Cut-Off Trends:</b> Prelims: ~100-110 (General), ~90-100 (OBC/SC); Mains: ~450-500 (General), ~400-450 (OBC/SC).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Selection Process">
              <ul className={style.zxs}>
                <li><b>Preliminary Exam:</b> 150 MCQs, 2 hours, qualifying (40% minimum).</li>
                <li><b>Main Exam:</b> Four papers (General Hindi, General Studies I & II, Optional Subject); 11 hours total.</li>
                <li><b>Interview:</b> 120 marks; assesses personality and leadership skills.</li>
                <li><b>Final Merit List:</b> Based on Main Exam (Papers II-IV) and Interview marks.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>Original and photocopy of 10th/12th mark sheets and certificates.</li>
                <li>Bachelor’s degree certificate and mark sheets.</li>
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
            <CollapsibleSection title="Career Benefits at BPSC">
              <ul className={style.zxs}>
                <li><b>Competitive Salary:</b> ₹35,400–₹1,33,200 (Level 7-9), plus DA, HRA, and allowances.</li>
                <li><b>Job Security:</b> Permanent government position with pension benefits under NPS.</li>
                <li><b>Healthcare:</b> Access to CGHS and Bihar Govt. medical facilities.</li>
                <li><b>Housing:</b> Government quarters or HRA for urban postings.</li>
                <li><b>Career Growth:</b> Promotions to senior administrative roles like DM, SP, or Commissioner.</li>
                <li><b>Work Environment:</b> Serve Bihar’s communities, implement policies, and contribute to governance.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li><b>Check Eligibility:</b> Verify age (20–37 years), education (Bachelor’s degree).</li>
                <li><b>Visit Official Website:</b> <a href="https://bpsc.bih.nic.in" target="_blank" className="link">bpsc.bih.nic.in</a>.</li>
                <li><b>Register:</b> Click “Apply Online,” enter name, email, mobile, and upload photo (50-100 KB) and signature (20-50 KB).</li>
                <li><b>Fill Form:</b> Provide personal, educational, and category details; select exam city.</li>
                <li><b>Pay Fee:</b> ₹600 (General/OBC/EWS), ₹150 (SC/ST/Female); pay online.</li>
                <li><b>Submit:</b> Review, submit, and download the application form. Keep two printed copies.</li>
                <li><b>Track Application:</b> Use login credentials to check status and download admit cards.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Check Result">
              <ol className={style.zxs}>
                <li>Visit the official website: <a href="https://bpsc.bih.nic.in" target="_blank" className="link">bpsc.bih.nic.in</a>.</li>
                <li>Navigate to the “Results” section.</li>
                <li>Click on “BPSC 70th CCE Prelims Result 2024” link.</li>
                <li>Enter roll number, application ID, and password.</li>
                <li>View result PDF, checking name, roll number, marks, and category.</li>
                <li>Download and save the PDF for future reference.</li>
                <li><b>Note:</b> Check cut-off marks and Main Exam schedule on the portal.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li><b>Understand the Syllabus:</b> Focus on Current Affairs, Bihar-specific history, and General Studies.</li>
                <li><b>Previous Papers:</b> Solve BPSC 68th and 69th CCE papers for question patterns.</li>
                <li><b>Time Management:</b> Practice 150 MCQs in 2 hours for Prelims; aim for 70% accuracy.</li>
                <li><b>Current Affairs:</b> Read The Hindu, Dainik Jagran (Bihar), and PIB for 2023-2024 updates.</li>
                <li><b>Bihar-Specific:</b> Study Bihar’s history, culture, and economy from NCERTs and Lucent’s GK.</li>
                <li><b>Hindi:</b> Revise grammar (Samas, Sandhi) and practice essay writing on Bihar issues.</li>
                <li><b>Mock Tests:</b> Use Testbook, Adda247 for BPSC-specific mocks; target 110-130 marks in Prelims.</li>
                <li><b>Stay Updated:</b> Follow BPSC website for exam and result notifications.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li><b>How many vacancies are there?</b> 2027 posts across various administrative services.</li>
                <li><b>Can final-year students apply?</b> No, candidates must have a Bachelor’s degree by 01/08/2024.</li>
                <li><b>Is there negative marking?</b> Yes, 0.25 marks deducted per wrong answer in Prelims.</li>
                <li><b>What documents are needed for verification?</b> 10th/12th certificates, degree certificate, caste/domicile certificate, photo ID.</li>
                <li><b>Where are the exam centers?</b> Major Bihar cities (Patna, Gaya, Muzaffarpur, Bhagalpur, etc.).</li>
                <li><b>Can non-Bihar residents apply?</b> Yes, but only Bihar domicile females get fee relaxation.</li>
                <li><b>What is the role of BPSC officers?</b> Administer districts, manage police operations, or oversee financial services.</li>
                <li><b>Is Hindi paper qualifying?</b> Yes, 30% minimum required; marks not counted in final merit.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li><a href="https://bpsc.bih.nic.in" target="_blank" className="link">BPSC Official Website</a>: Check results, exam schedules, and notifications.</li>
                <li><a href="https://testbook.com/bpsc" target="_blank" className="link">Testbook BPSC Mock Tests</a>: Practice Prelims and Mains with analytics.</li>
                <li><a href="https://adda247.com/bpsc" target="_blank" className="link">Adda247 Study Material</a>: Free notes on Hindi, General Studies, and Bihar-specific topics.</li>
                <li><a href="https://pib.gov.in" target="_blank" className="link">PIB India</a>: Current affairs updates for Prelims and Mains.</li>
                <li><a href="https://www.jagranjosh.com/bpsc-previous-papers" target="_blank" className="link">Previous Year Papers</a>: Download PDFs for 68th-69th CCE.</li>
                <li><b>Books:</b>
                  <ul>
                    <li>“Bihar General Knowledge” by Crown Publications for Bihar-specific topics.</li>
                    <li>“Lucent’s General Knowledge” for General Studies.</li>
                    <li>“Samanya Hindi” by Arihant for General Hindi.</li>
                    <li>“Indian Polity” by M. Laxmikanth for Polity.</li>
                  </ul>
                </li>
                <li><b>YouTube Channels:</b> Follow “Adda247” or “Study IQ” for BPSC exam tips and live classes.</li>
              </ul>
            </CollapsibleSection>
            <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
               <div className={style.zxv}>
                <div >{Object.entries(link).map(([key, value]) => ( <li> <a href={value} target="_blank" className="link"> {key}</a></li> ))}</div>
              </div>
            </div>
            <Ad type="NativeBanner" />
            <img src={a1} alt="Bihar BPSC 70th CCE Prelims Recruitment 2024" className={style.imga} />
            <div id={style.ins}>
              <h1>Www.JobForSarkari.Com</h1>
              <h2>Welcome to Our Website</h2>
              <p>Our website provides official links for job-related information, ensuring you stay informed about <b>government jobs in Bihar</b>.</p>
              <p>We do not charge for any services, offering free access to <b>BPSC 70th CCE 2024</b> recruitment details and updates.</p>
              <p>Please read all instructions carefully before applying to avoid errors and ensure a smooth process.</p>
            </div>
            <div id={style.ins}>
              <h1>Find the Latest Government Jobs</h1>
              <h2>Latest Sarkari Naukri Updates & Free Job Alerts</h2>
              <p>Looking for <b>Bihar PSC Recruitment</b>? Our portal delivers the latest <b>Sarkari Naukri Bihar</b> updates tailored to your needs.</p>
              <p>Explore comprehensive details on age relaxation, eligibility criteria, and recruitment updates for <b>BPSC 70th CCE 2024</b>.</p>
              <p>Subscribe to our free job alert service to receive real-time notifications about <b>BPSC Prelims 2024</b> and other govt job vacancies.</p>
              <p>Discover opportunities across sectors, including administrative services, police, finance, and education.</p>
              <p>Stay ahead with details on upcoming <b>BPSC exams</b> and find state-wise government jobs tailored to your location.</p>
              <p>Start your <b>Sarkari job</b> search today and secure your future with the best government career opportunities!</p>
            </div>
            <div id={style.ins}>
              <h1>Latest Government Jobs Updates</h1>
              <h2>Apply for All Types of Jobs like Administrative, Police, Finance, SSC, UPSC & More</h2>
              <p>Seeking <b>Bihar Police Service Jobs</b>, <b>Bihar Administrative Service Jobs 2024</b>, or <b>Financial Services Vacancies</b>?</p>
              <p>Stay updated with free job alert notifications and never miss an opportunity to apply for <b>BPSC 70th CCE 2024</b> jobs that match your skills.</p>
              <p>Our job portal provides the latest updates on <b>BPSC exams</b>, UPSC notifications, and other <b>Sarkari Naukri in Bihar</b>.</p>
              <p>Explore opportunities in <b>Administrative Job Recruitment</b>, <b>Engineering Govt Jobs</b>, <b>Medical Govt Vacancies</b>, and more.</p>
              <p>Whether you are searching for <b>Graduate Government Jobs</b> or specialized roles, we bring you the most recent <b>BPSC job openings</b>.</p>
              <p>Stay ahead with real-time alerts and apply easily through our portal to secure your dream <b>Sarkari Naukri</b> today.</p>
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

export default BPSC_1;
