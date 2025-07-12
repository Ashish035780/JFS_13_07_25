import style from "./000_Content.module.css";
import a1 from "./Pic/RRB_Assistant_Loco_Pilot_ALP_2.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";

const Railway_Assistant_Loco_Pilot_2= () => {
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
    fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/RAILWAY_ASSISTANT_LOCO_PILOT.json")
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((item) => item.id === "railwayassistantlocopilot2");
        if (job) {
          setTitle(job.title);
          document.title = job.title;
          setPostname(job.postname);
          setDescription(job.description);
          setTotalpost(job.totalpost);
          setPayscale(job.payscale);
          setStartdate(job.startdate);
          setLastdate(job.lastdate);
          setDate(job.date);
          setLink(job.link);
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
        const match = data.find((item) => item.id === "sociallink");
        if (match) {
          setSociallink(match.data);
        }
        if (newQuicklink) {
          const shuffledJobs = shuffleArray(newQuicklink.data).slice(0, 12);
          setQuicklink(shuffledJobs);
        }
      });
  }, []);

  return (
    <div className={style.aaa}>
      <div className={style.aaa1}>
        <Ad type="728x90" />
        <section className={style.zxa}>
          <h1 className={style.zxb}>{title}</h1>
          <h2 className={style.sectiontitle}>Post Name: {postname}</h2>
          <h2 className={style.sectiontitle} style={{ color: "red" }}>
            Application Start Date: {startdate}
          </h2>
          <h2 className={style.sectiontitle} style={{ color: "red" }}>
            Application Last Date: {lastdate}
          </h2>
          <p className={style.zxc}>
            <b>Brief Summary: </b>
            {description}
          </p>
          <div className={style.zxd}>
            <h1 className={style.zxe}>Www.JobForSarkari.Com</h1>
          </div>
          <Ad type="320x50" />
          <div className={style.zxf}>
            <h2 className={style.zxg}>Railway Recruitment Board (RRB)</h2>
            <h3 className={style.zxh}>
              Total Posts: <span className={style.highlight}>{totalpost}</span>
            </h3>
            <h3 className={style.zxh}>
              Pay Scale: <span className={style.highlight}>{payscale}</span>
            </h3>
          </div>
          <div className={style.zxi}>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Important Dates</h2>
              <ul className={style.zxk}>
                {Object.entries(date).map(([key, value]) => (
                  <li key={key}>
                    <b>{key}: </b>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Application Fee</h2>
              <ul className={style.zxk}>
                <li>
                  <b>General/OBC:</b> ₹500 (₹400 refunded on appearing for CBT-1)
                </li>
                <li>
                  <b>SC/ST/EWS/Ex-Servicemen/PwD/Female/Transgender/Minorities:</b> ₹250 (fully refunded on appearing for CBT-1)
                </li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Credit/Debit Card, Net Banking, or UPI. Fee refund processed after CBT-1.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Across India (various Railway Zones as per RRB allocation)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/07/2025)</h2>
              <ul className={style.zxk}>
                <li>
                  <b>Minimum Age:</b> 18 Years
                </li>
                <li>
                  <b>Maximum Age:</b> 33 Years
                </li>
                <li>
                  <b>Age Relaxation:</b> SC/ST: 5 years, OBC: 3 years, PwD: 10–15 years, Ex-Servicemen: 3 years (after service deduction), as per RRB rules.
                </li>
                <li>Additional age relaxation as per recruitment guidelines, please read the official RRB ALP notification.</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Eligibility Qualification Details</h2>
              <div
                style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }}
                className={style.tablerow}
              >
                <div className={style.tablecell}>
                  <b>Post Name</b>
                </div>
                <div className={style.tablecell}>
                  <b>Eligibility Criteria</b>
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Assistant Loco Pilot (ALP)</div>
                <div className={style.tablecell}>
                  10th Pass + ITI in specified trades (e.g., Fitter, Electrician, Mechanic) from NCVT/SCVT OR Diploma in Mechanical/Electrical/Electronics/Automobile Engineering
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>
                  <li>Read the official RRB ALP notification for detailed eligibility and trade-specific requirements.</li>
                </div>
              </div>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Vacancy Details</h2>
              <div
                style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }}
                className={style.tablerow}
              >
                <div className={style.tablecell}>
                  <b>Post Name</b>
                </div>
                <div className={style.tablecell}>
                  <b>Total Posts</b>
                </div>
                <div className={style.tablecell}>
                  <b>Category-Wise Breakdown</b>
                </div>
              </div>
              {vacancyDetails.map((item, index) => (
                <div className={style.tablerow} key={index}>
                  <div className={style.tablecell}>{item.postname}</div>
                  <div className={style.tablecell}>{item.totalpost}</div>
                  <div className={style.tablecell}>{item.vacancydetails}</div>
                </div>
              ))}
            </div>
            <CollapsibleSection title="Selection Process">
              <ul className={style.zxs}>
                <li>
                  <b>CBT-1:</b> Objective-type screening test (Maths, Reasoning, General Science, General Awareness).
                </li>
                <li>
                  <b>CBT-2:</b> Two parts: Part A (Maths, Reasoning, Basic Science & Engineering, General Awareness); Part B (trade-specific, qualifying).
                </li>
                <li>
                  <b>Computer-Based Aptitude Test (CBAT):</b> Tests for psychomotor and cognitive skills (mandatory for ALP).
                </li>
                <li>
                  <b>Document Verification:</b> Verify eligibility and category documents.
                </li>
                <li>
                  <b>Medical Examination:</b> Ensure fitness for ALP duties (A-1 medical category).
                </li>
                <li>
                  <b>Final Merit:</b> Based on CBT-2 (Part A) and CBAT marks, subject to clearing CBT-1, Part B, and medical fitness.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Exam Pattern">
              <h2 className={style.sectiontitle}>Computer-Based Test (CBT-1)</h2>
              <div
                style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }}
                className={style.tablerow}
              >
                <div className={style.tablecell}>Subjects</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Mathematics</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>60 Minutes (80 for PwD)</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>General Intelligence & Reasoning</div>
                <div className={style.tablecell}>25</div>
                <div className={style.tablecell}>25</div>
                <div className={style.tablecell}></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>General Science</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>General Awareness</div>
                <div className={style.tablecell}>10</div>
                <div className={style.tablecell}>10</div>
                <div className={style.tablecell}></div>
              </div>
              <h3 className={style.zxt}>Key Points (CBT-1):</h3>
              <ul className={style.zxs}>
                <li>Objective-type, 0.33 marks deducted per wrong answer.</li>
                <li>Total: 75 questions, 75 marks, 60 minutes (80 for PwD).</li>
              </ul>
              <h2 className={style.sectiontitle}>Computer-Based Test (CBT-2)</h2>
              <div
                style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }}
                className={style.tablerow}
              >
                <div className={style.tablecell}>Part</div>
                <div className={style.tablecell}>Subjects</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Part A</div>
                <div className={style.tablecell}>Mathematics</div>
                <div className={style.tablecell}>25</div>
                <div className={style.tablecell}>25</div>
                <div className={style.tablecell}>90 Minutes (120 for PwD)</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Part A</div>
                <div className={style.tablecell}>General Intelligence & Reasoning</div>
                <div className={style.tablecell}>25</div>
                <div className={style.tablecell}>25</div>
                <div className={style.tablecell}></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Part A</div>
                <div className={style.tablecell}>Basic Science & Engineering</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Part A</div>
                <div className={style.tablecell}>General Awareness</div>
                <div className={style.tablecell}>10</div>
                <div className={style.tablecell}>10</div>
                <div className={style.tablecell}></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Part B</div>
                <div className={style.tablecell}>Relevant Trade (ITI/Diploma)</div>
                <div className={style.tablecell}>75</div>
                <div className={style.tablecell}>75</div>
                <div className={style.tablecell}>60 Minutes (80 for PwD)</div>
              </div>
              <h3 className={style.zxt}>Key Points (CBT-2):</h3>
              <ul className={style.zxs}>
                <li>Part A: 0.33 marks deducted per wrong answer; used for merit.</li>
                <li>Part B: Qualifying (35% for General, 30% for SC/ST/OBC); no negative marking.</li>
                <li>Total: 175 questions, 175 marks, 150 minutes (200 for PwD).</li>
              </ul>
              <h2 className={style.sectiontitle}>Computer-Based Aptitude Test (CBAT):</h2>
              <ul className={style.zxs}>
                <li>Tests memory, observation, reaction speed, and logical reasoning.</li>
                <li>Minimum 42 marks in each test battery to qualify.</li>
                <li>No negative marking.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <ul className={style.zxs}>
                <li>
                  <b>Mathematics:</b> Number System, Percentage, Time & Work, Distance & Speed, Algebra, Geometry, Trigonometry.
                </li>
                <li>
                  <b>General Intelligence & Reasoning:</b> Analogies, Coding-Decoding, Series, Puzzles, Blood Relations, Non-Verbal Reasoning.
                </li>
                <li>
                  <b>General Science:</b> Physics, Chemistry, Biology (Class 10 level).
                </li>
                <li>
                  <b>General Awareness:</b> Current Affairs, Indian Railways, Economy, Polity, History, Geography.
                </li>
                <li>
                  <b>Basic Science & Engineering (CBT-2):</b> Engineering Drawing, Measurements, Mechanics, Electricity, Heat Engines.
                </li>
                <li>
                  <b>Relevant Trade (Part B):</b> Trade-specific questions (e.g., Fitter, Electrician, Mechanic) based on ITI/Diploma syllabus.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <ul className={style.zxs}>
                <li>
                  <b>Assistant Loco Pilot (ALP):</b> Assist Loco Pilot in train operations, monitor signals, ensure train safety, perform minor repairs, and report technical issues.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Medical Examination Details">
              <ul className={style.zxs}>
                <li>
                  <b>Purpose:</b> Ensure fitness for ALP duties (A-1 medical category).
                </li>
                <li>
                  <b>Standards:</b>
                  <ul>
                    <li>
                      <b>Vision:</b> 6/6 without glasses, no color blindness, binocular vision required.
                    </li>
                    <li>
                      <b>Hearing:</b> Normal, without aids.
                    </li>
                    <li>
                      <b>General Health:</b> No chronic diseases or deformities affecting train operations.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Tests:</b> Vision tests (distance, color, night vision), hearing tests, physical examination, psychological fitness.
                </li>
                <li>
                  <b>Disqualification:</b> Failure to meet A-1 medical standards leads to rejection.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>10th mark sheet and certificate.</li>
                <li>ITI/Diploma certificate and mark sheets.</li>
                <li>Caste Certificate (SC/ST/OBC-NCL).</li>
                <li>EWS Certificate (valid for 2025-26).</li>
                <li>PwD Certificate (if applicable).</li>
                <li>Ex-Servicemen Discharge Book/Service Certificate.</li>
                <li>Photo ID (Aadhaar, PAN, Voter ID, or Passport).</li>
                <li>Recent passport-size photographs (6 copies, 20–50 KB, 200x230 pixels).</li>
                <li>Printed application form.</li>
                <li>
                  <b>Note:</b> OBC-NCL certificate must mention non-creamy layer; discrepancies lead to disqualification.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits at RRB ALP">
              <ul className={style.zxs}>
                <li>
                  <b>Salary:</b> ₹19,900–₹63,200 (Level 2) + DA, HRA, Running Allowance, other allowances.
                </li>
                <li>
                  <b>Job Security:</b> Permanent government posts with pension under NPS.
                </li>
                <li>
                  <b>Allowances:</b> Running Allowance (based on kilometers), Medical Benefits (CGHS), Transport Allowance, Night Duty Allowance.
                </li>
                <li>
                  <b>Career Growth:</b> Promotions to Loco Pilot, Senior Loco Pilot, Loco Inspector via departmental exams or seniority.
                </li>
                <li>
                  <b>Work Environment:</b> Dynamic role in train operations across Indian Railways.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li>
                  <b>Check Eligibility:</b> Verify age (18–33 years) and education (10th + ITI/Diploma).
                </li>
                <li>
                  <b>Visit Official Website:</b>{" "}
                  <a href="https://indianrailways.gov.in" target="_blank" className="link">
                    indianrailways.gov.in
                  </a>{" "}
                  or respective RRB regional website.
                </li>
                <li>
                  <b>Register:</b> Click “Apply Online,” enter email, mobile, Aadhaar (optional), and upload photo (20–50 KB) and signature (10–20 KB).
                </li>
                <li>
                  <b>Fill Form:</b> Provide personal, educational, and trade details; select RRB zone preferences.
                </li>
                <li>
                  <b>Pay Fee:</b> ₹500 (General/OBC) or ₹250 (SC/ST/EWS/PwD/Female) via online mode.
                </li>
                <li>
                  <b>Submit:</b> Review, submit, and download application form. Keep Application ID.
                </li>
                <li>
                  <b>Track Application:</b> Check status and admit cards on respective RRB website.
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Download Admit Card">
              <ol className={style.zxs}>
                <li>
                  Visit the official RRB website:{" "}
                  <a href="https://indianrailways.gov.in" target="_blank" className="link">
                    indianrailways.gov.in
                  </a>{" "}
                  or regional RRB site.
                </li>
                <li>Navigate to “Admit Card” section.</li>
                <li>Select “RRB ALP CBT-1 Admit Card.”</li>
                <li>Enter Application ID, Date of Birth, and captcha.</li>
                <li>Download and print admit card.</li>
                <li>
                  <b>Note:</b> Carry admit card and photo ID to exam; check RRB website for updates.
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li>
                  <b>Understand Syllabus:</b> Focus on Mathematics, Reasoning, General Science, and trade-specific topics.
                </li>
                <li>
                  <b>Previous Papers:</b> Solve RRB ALP 2018-2024 papers for question patterns.
                </li>
                <li>
                  <b>Time Management:</b> Practice 75 questions in 60 minutes (CBT-1) and 175 in 150 minutes (CBT-2); aim for 85% accuracy.
                </li>
                <li>
                  <b>Current Affairs:</b> Read The Hindu, PIB for railway-related news (2024-2025).
                </li>
                <li>
                  <b>Mathematics & Science:</b> Revise Class 10-level concepts (NCERT books, R.S. Aggarwal).
                </li>
                <li>
                  <b>Trade Knowledge:</b> Study ITI/Diploma syllabus for Part B (e.g., Fitter, Electrician).
                </li>
                <li>
                  <b>CBAT Prep:</b> Practice memory, observation, and reaction speed tests (online simulators).
                </li>
                <li>
                  <b>Mock Tests:</b> Use Testbook, Adda247 for RRB ALP-specific mocks; target 60+ marks in CBT-1, 80+ in CBT-2 Part A.
                </li>
                <li>
                  <b>Stay Updated:</b> Follow RRB websites for notifications and results.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li>
                  <b>How many vacancies in RRB ALP?</b> {totalpost} vacancies (updated as per notification).
                </li>
                <li>
                  <b>Is there negative marking?</b> Yes, 0.33 marks deducted per wrong answer in CBT-1 and CBT-2 Part A.
                </li>
                <li>
                  <b>Can 10th appearing students apply?</b> No, 10th Pass certificate and ITI/Diploma required.
                </li>
                <li>
                  <b>What documents are needed?</b> 10th certificate, ITI/Diploma certificates, caste/EWS/PwD certificates, photo ID.
                </li>
                <li>
                  <b>Where are exam centers?</b> Major cities across India (specified by RRB).
                </li>
                <li>
                  <b>What is the role of an ALP?</b> Assist in train operations, monitor signals, ensure safety, and perform minor technical tasks.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li>
                  <a href="https://indianrailways.gov.in" target="_blank" className="link">
                    Indian Railways Official Website
                  </a>
                  : Check RRB ALP Notification, admit cards, results.
                </li>
                <li>
                  <a href="https://testbook.com/rrb-alp" target="_blank" className="link">
                    Testbook Mock Tests
                  </a>
                  : RRB ALP-specific mocks with analytics.
                </li>
                <li>
                  <a href="https://adda247.com/rrb-alp" target="_blank" className="link">
                    Adda247 Study Material
                  </a>
                  : Free notes on Mathematics, Reasoning, General Science.
                </li>
                <li>
                  <a href="https://pib.gov.in" target="_blank" className="link">
                    PIB India
                  </a>
                  : Current affairs for General Awareness.
                </li>
                <li>
                  <a href="https://www.rrbexamportal.com/alp/previous-papers" target="_blank" className="link">
                    Previous Year Papers
                  </a>
                  : Download 2018-2024 RRB ALP papers.
                </li>
                <li>
                  <b>Books:</b>
                  <ul>
                    <li>“RRB ALP Guide” by Arihant for overall prep.</li>
                    <li>“Lucent’s General Knowledge” for General Awareness.</li>
                    <li>“Quantitative Aptitude” by R.S. Aggarwal for Mathematics.</li>
                    <li>“Basic Science & Engineering” by Disha for CBT-2 Part A.</li>
                  </ul>
                </li>
                <li>
                  <b>YouTube Channels:</b> “Adda247,” “StudyIQ,” “Railway Exam Prep” for RRB ALP tips and live classes.
                </li>
              </ul>
            </CollapsibleSection>
            <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
              <div className={style.zxv}>
                <div>
                  {Object.entries(link).map(([key, value]) => (
                    <li key={key}>
                      <a href={value} target="_blank" className="link">
                        {key}
                      </a>
                    </li>
                  ))}
                </div>
              </div>
            </div>
            <Ad type="NativeBanner" />
            <img
              src={a1}
              alt="RRB ALP Recruitment 2025"
              className={style.imga}
            />
            <div id={style.ins}>
              <h1>Www.JobForSarkari.Com</h1>
              <h2>Welcome to Our Website</h2>
              <p>
                Our website provides official links for job-related information,
                ensuring you stay informed about government job opportunities.
              </p>
              <p>
                We do not charge for any services, offering free access to recruitment
                details and updates.
              </p>
              <p>
                Please read all instructions carefully before applying to avoid errors
                and ensure a smooth process.
              </p>
            </div>
            <div id={style.ins}>
              <h1>Find the Latest Government Jobs</h1>
              <h2>Latest Sarkari Naukri Updates & Free Job Alerts</h2>
              <p>
                Looking for Government Jobs? Our portal delivers the latest govt jobs
                and Sarkari Naukri updates tailored to your needs.
              </p>
              <p>
                Explore comprehensive details on age relaxation, eligibility criteria,
                and recruitment updates for government jobs and vacancies.
              </p>
              <p>
                Subscribe to our free job alert service to receive real-time
                notifications about Sarkari jobs, govt job vacancies, and online
                applications.
              </p>
              <p>
                Discover opportunities across sectors, including police, banking,
                railways, defense, and education.
              </p>
              <p>
                Stay ahead with details on upcoming govt exams and find state-wise
                government jobs tailored to your location.
              </p>
              <p>
                Start your Sarkari job search today and secure your future with the
                best government career opportunities!
              </p>
            </div>
            <div id={style.ins}>
              <h1>Latest Government Jobs Updates</h1>
              <h2>
                Apply for All Types of Jobs like Police, Railway, Bank, SSC, UPSC &
                More
              </h2>
              <p>
                Seeking Police Jobs, Railway Jobs, Bank Jobs Recruitment, or Defense
                Vacancies?
              </p>
              <p>
                Stay updated with free job alert notifications and never miss an
                opportunity to apply for civil service jobs that match your skills and
                aspirations.
              </p>
              <p>
                Our job portal provides the latest updates on SSC Jobs Online, UPSC
                Exam Notifications, and Police Government Jobs.
              </p>
              <p>
                Explore opportunities in Defense Job Recruitment, Engineering Govt
                Jobs, Medical Govt Vacancies, and more.
              </p>
              <p>
                Whether you’re searching for 10th/12th Pass Government Jobs or
                specialized roles, we bring you the most recent government job
                openings.
              </p>
              <p>
                Stay ahead with real-time alerts and apply easily through our portal to
                secure your dream Sarkari Naukri today.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className={style.aaa2}>
        <aside className={style.zxw}>
          <h2 className={style.sectiontitle}>Quick Links</h2>
          <ul className={style.zxs}>
            <li>
              {quicklink.map((job, index) => (
                <Link to={job.link} className={style.link} key={index}>
                  <React.Fragment>
                    <li>{job.title}</li>
                    {index === 1 && <Ad type="300x250" />}
                    {index === 6 && <Ad type="300x250" />}
                  </React.Fragment>
                </Link>
              ))}
            </li>
          </ul>
        </aside>
        <Ad type="320x50" />
        <aside className={style.zxw}>
          <h2 className={style.sectiontitle}>Follow Us</h2>
          <ul className={style.zxs}>
            {sociallink.map((item, index) => (
              <li key={index}>
                <a href={item.link} target="_blank" className="link">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
        <Ad type="160x300" />
        <Ad type="160x600" />
      </div>
    </div>
  );
};

export default Railway_Assistant_Loco_Pilot_2;