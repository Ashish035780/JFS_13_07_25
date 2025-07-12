import style from "./000_Content.module.css";
import a1 from "./Pic/SSC_GD_1.jpg"; // Ensure image is relevant to SSC GD Constable 2024
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";
const SSC_GD_1 = () => {
   
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
      fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/SSCGD.json")
        .then((res) => res.json())
        .then((data) => {
          const job = data.find((item) => item.id === "sscgd1");
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
            <h2 className={style.zxg}>Staff Selection Commission (SSC)</h2>
           <h3 className={style.zxh}>
              Total Posts: <span className={style.highlight}></span>
            </h3>
            <h3 className={style.zxh}>
              Pay Scale: <span className={style.highlight}></span>
            </h3>
          </div>
          <div className={style.zxi}>
             <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Important Dates</h2>
              <ul className={style.zxk}>{Object.entries(date).map(([key, value]) => (<li key={key}><b>{key} :-</b> {value}</li>))}</ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Application Fee</h2>
              <ul className={style.zxk}>
                <li><b>General/OBC:</b> ₹100</li>
                <li><b>SC/ST/Ex-Servicemen/Female:</b> Nil</li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Credit/Debit Card, Net Banking, UPI, or BHIM. Fee is non-refundable. Correction fee: ₹200 (first time), ₹500 (second time).
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Across India (postings in BSF, CISF, CRPF, SSB, ITBP, AR, NIA, SSF)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/01/2024)</h2>
              <ul className={style.zxk}>
                <li><b>Minimum Age:</b> 18 Years</li>
                <li><b>Maximum Age:</b> 23 Years</li>
                <li><b>Age Relaxation:</b> SC/ST: 5 years, OBC: 3 years, Ex-Servicemen: 3 years (after service deduction), PwBD: 10–15 years, as per SSC rules.</li>
              </ul>
            </div>
             <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Eligibility Qualification Details</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}> <b>Post Name </b></div>
                <div className={style.tablecell}> <b>Eligibility Criteria </b></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>GD Constable</div>
                <div className={style.tablecell}>10th Pass (Matriculation) from a recognized board by 01/01/2024.</div>
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
              <h2 className={style.sectiontitle}>Computer-Based Exam (CBE)</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Section</div>
                <div className={style.tablecell}>Subjects</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>A</div>
                <div className={style.tablecell}>General Intelligence & Reasoning</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>60 Minutes</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>B</div>
                <div className={style.tablecell}>General Knowledge & General Awareness</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>C</div>
                <div className={style.tablecell}>Elementary Mathematics</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>D</div>
                <div className={style.tablecell}>English/Hindi</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}></div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Objective-type; 0.5 marks deducted per wrong answer.</li>
                <li>Qualifying in nature; shortlists for PET/PST.</li>
                <li>Total: 80 questions, 160 marks, 60 minutes.</li>
                <li>Language: English or Hindi (candidate’s choice).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <h2 className={style.sectiontitle}></h2>
              <h3 style={{ fontWeight: "700" }}>Computer-Based Exam:</h3>
              <ul className={style.zxs}>
                <li><b>General Intelligence & Reasoning:</b> Analogies, Coding-Decoding, Series, Puzzles, Spatial Orientation.</li>
                <li><b>General Knowledge & General Awareness:</b> Current Affairs (2023-2024), History, Geography, Polity, Economy, Science.</li>
                <li><b>Elementary Mathematics:</b> Number Systems, Percentage, Ratio, Time & Distance, Profit/Loss, Simple Interest.</li>
                <li><b>English/Hindi:</b> Basic Grammar, Vocabulary, Comprehension, Sentence Correction.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>GD Constable (BSF):</b> Border security, patrolling, and anti-smuggling operations.</li>
                <li><b>GD Constable (CISF):</b> Security of industrial units, airports, and government installations.</li>
                <li><b>GD Constable (CRPF):</b> Internal security, counter-insurgency, and law enforcement.</li>
                <li><b>GD Constable (SSB):</b> Border guarding along Indo-Nepal and Indo-Bhutan borders.</li>
                <li><b>GD Constable (ITBP):</b> High-altitude border patrolling along Indo-China border.</li>
                <li><b>GD Constable (AR):</b> Counter-insurgency operations in Northeast India.</li>
                <li><b>GD Constable (NIA):</b> Support investigations into terrorism and national security cases.</li>
                <li><b>GD Constable (SSF):</b> Security for government offices and VIPs.</li>
              </ul>
            </CollapsibleSection>
            
            <CollapsibleSection title="Physical Standards">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Physical Standard Test (PST):</b>
                  <ul>
                    <li><b>Male:</b> Height: 170 cm (162.5 cm for ST), Chest: 80/5 cm (76/5 cm for ST).</li>
                    <li><b>Female:</b> Height: 157 cm (152 cm for ST).</li>
                    <li><b>Vision:</b> 6/6 or 6/9 without glasses; no color blindness.</li>
                  </ul>
                </li>
                <li><b>Physical Efficiency Test (PET):</b>
                  <ul>
                    <li><b>Male:</b> 5 km run in 24 minutes; 1.6 km run in 6.5 minutes (Ladakh region).</li>
                    <li><b>Female:</b> 1.6 km run in 8.5 minutes.</li>
                  </ul>
                </li>
                <li><b>Medical Tests:</b> Blood tests, vision/hearing tests, general health check to ensure fitness for fieldwork.</li>
              </ul>
            </CollapsibleSection>
           
            <CollapsibleSection title="Exam Analysis and Insights">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>CBE Difficulty (2024):</b> Easy to Moderate; Mathematics and Reasoning were straightforward; General Awareness focused on 2023 events (e.g., Budget, Elections).</li>
                <li><b>Cut-Offs (CBE):</b> General: 135–145, OBC: 130–140, SC/ST: 110–120 (out of 160).</li>
                <li><b>Preparation Focus:</b> Practice basic arithmetic, current affairs (2023-2024), and physical fitness for PET.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Selection Process">
              <ul className={style.zxs}>
                <li><b>Computer-Based Exam (CBE):</b> Objective, qualifying; shortlists for PET/PST.</li>
                <li><b>Physical Efficiency Test (PET):</b> Running tasks to test endurance.</li>
                <li><b>Physical Standard Test (PST):</b> Height, chest, and vision measurements.</li>
                <li><b>Medical Examination:</b> Ensure fitness for fieldwork duties.</li>
                <li><b>Document Verification:</b> Verify eligibility and category documents.</li>
                <li><b>Final Merit:</b> Based on CBE marks, subject to clearing PET/PST and Medical.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>10th mark sheet and certificate (by 01/01/2024).</li>
                <li>Caste Certificate (SC/ST/OBC-NCL, valid as on 01/01/2024).</li>
                <li>EWS Certificate (valid for 2023-24).</li>
                <li>PwBD Certificate (if applicable).</li>
                <li>Ex-Servicemen Discharge Book/Service Certificate.</li>
                <li>Photo ID (Aadhaar, PAN, Voter ID, or Passport).</li>
                <li>Recent passport-size photographs (6 copies).</li>
                <li>Printed application form and fee payment receipt.</li>
                <li><b>Note:</b> OBC-NCL certificate must mention non-creamy layer; discrepancies lead to disqualification.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Medical Examination Details">
              <ul className={style.zxs}>
                <li><b>Purpose:</b> Ensure fitness for constable duties in paramilitary forces.</li>
                <li><b>Standards:</b>
                  <ul>
                    <li><b>Vision:</b> 6/6 or 6/9 without glasses; no color blindness.</li>
                    <li><b>Hearing:</b> Normal, without aids.</li>
                    <li><b>General Health:</b> No chronic diseases or deformities affecting duties.</li>
                  </ul>
                </li>
                <li><b>Tests:</b> Blood tests, vision/hearing tests, physical examination.</li>
                <li><b>Disqualification:</b> Failure to meet standards leads to rejection.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits at SSC GD Constable">
              <ul className={style.zxs}>
                <li><b>Salary:</b> ₹21,700–₹69,100 (Level 3) + DA, HRA, Uniform Allowance.</li>
                <li><b>Job Security:</b> Permanent government posts with pension under NPS.</li>
                <li><b>Allowances:</b> Medical benefits (CGHS), Ration Allowance, Risk Allowance.</li>
                <li><b>Career Growth:</b> Promotions to Head Constable, Assistant Sub-Inspector, and higher ranks via exams.</li>
                <li><b>Work Environment:</b> Serve in prestigious paramilitary forces across India.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li><b>Check Eligibility:</b> Verify age (18–23 years) and education (10th Pass by 01/01/2024).</li>
                <li><b>Visit Official Website:</b> <a href="https://ssc.gov.in" target="_blank" className="link">ssc.gov.in</a>.</li>
                <li><b>Register:</b> Click “Apply,” enter email, mobile, Aadhaar (optional), and upload photo (4-12 KB) and signature (1-12 KB).</li>
                <li><b>Fill Form:</b> Provide personal, educational details, and select force preferences.</li>
                <li><b>Pay Fee:</b> ₹100 (General/OBC) via online mode; exempt for SC/ST/Ex-Servicemen/Female.</li>
                <li><b>Submit:</b> Review, submit, and download application form. Keep Registration ID.</li>
                <li><b>Track Application:</b> Check status and admit cards on ssc.gov.in.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Download Admit Card">
              <ol className={style.zxs}>
                <li>Visit the official website: <a href="https://ssc.gov.in" target="_blank" className="link">ssc.gov.in</a>.</li>
                <li>Navigate to “Admit Card” section.</li>
                <li>Select “SSC GD Constable 2024 CBE Admit Card.”</li>
                <li>Enter Registration ID, Date of Birth, and captcha.</li>
                <li>Download and print admit card.</li>
                <li><b>Note:</b> Carry admit card and photo ID to exam; check regional SSC website for updates.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li><b>Understand Syllabus:</b> Focus on SSC GD Syllabus 2024 for CBE (Reasoning, GK, Maths, English/Hindi).</li>
                <li><b>Previous Papers:</b> Solve SSC GD 2022-2023 papers for question patterns.</li>
                <li><b>Time Management:</b> Practice 80 questions in 60 minutes; aim for 80% accuracy.</li>
                <li><b>Current Affairs:</b> Read The Hindu, PIB for 2023-2024 updates (e.g., Budget, Elections).</li>
                <li><b>Mathematics:</b> Practice basic arithmetic from R.S. Aggarwal (Class 10 level).</li>
                <li><b>English/Hindi:</b> Revise grammar, vocabulary (Lucent’s GK, Kiran’s English).</li>
                <li><b>Physical Prep:</b> Train for PET (running, endurance); maintain fitness for PST.</li>
                <li><b>Mock Tests:</b> Use Testbook, Adda247 for SSC GD-specific mocks; target 130+ marks.</li>
                <li><b>Stay Updated:</b> Follow ssc.gov.in for notifications and results.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li><b>How many vacancies in SSC GD 2024?</b> 26,146 posts.</li>
                <li><b>Is there negative marking?</b> Yes, 0.5 marks per wrong answer in CBE.</li>
                <li><b>Can 10th appearing students apply?</b> No, 10th Pass certificate required by 01/01/2024.</li>
                <li><b>What documents are needed?</b> 10th certificate, caste/EWS/PwBD certificates, photo ID.</li>
                <li><b>Where are exam centers?</b> Major cities across India.</li>
                <li><b>What is the role of a GD Constable?</b> Security, patrolling, and law enforcement in paramilitary forces.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li><a href="https://ssc.gov.in" target="_blank" className="link">SSC Official Website</a>: Check SSC GD Notification, admit cards, results.</li>
                <li><a href="https://testbook.com/ssc-gd" target="_blank" className="link">Testbook Mock Tests</a>: SSC GD-specific mocks with analytics.</li>
                <li><a href="https://adda247.com/ssc-gd" target="_blank" className="link">Adda247 Study Material</a>: Free notes on Maths, English/Hindi, Reasoning.</li>
                <li><a href="https://pib.gov.in" target="_blank" className="link">PIB India</a>: Current affairs for General Awareness.</li>
                <li><a href="https://www.jagranjosh.com/ssc-gd-previous-papers" target="_blank" className="link">Previous Year Papers</a>: Download 2022-2023 papers.</li>
                <li><b>Books:</b>
                  <ul>
                    <li>“SSC GD Constable Guide” by Arihant for overall prep.</li>
                    <li>“Lucent’s General Knowledge” for General Awareness.</li>
                    <li>“Kiran’s SSC GD English/Hindi” for language prep.</li>
                    <li>“Quantitative Aptitude” by R.S. Aggarwal for Maths.</li>
                  </ul>
                </li>
                <li><b>YouTube Channels:</b> “Adda247,” “StudyIQ” for SSC GD exam tips and live classes.</li>
              </ul>
            </CollapsibleSection>
            <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
              <div className={style.zxv}>
                 <div >{Object.entries(link).map(([key, value]) => ( <li> <a href={value} target="_blank" className="link"> {key}</a></li> ))}</div>
              </div>
            </div>
            <Ad type="NativeBanner" />
            <img src={a1} alt="SSC GD Constable Recruitment 2024" className={style.imga} />
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

export default SSC_GD_1;
