import style from "./000_Content.module.css";
import a1 from "./Pic/MPPSC_1.jpg";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";

const MPPSC_1 = () => {
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
      fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/MPPSC.json")
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((item) => item.id === "mppsc1");
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
            <h2 className={style.zxg}>Madhya Pradesh Public Service Commission (MPPSC)</h2>
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
                <li><b>General/Other State:</b> ₹500</li>
                <li><b>SC/ST/OBC/EWS/PwD (MP Domicile):</b> ₹250</li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Credit/Debit Card, Net Banking, or Kiosk. Correction fee: ₹50 per correction.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Madhya Pradesh (various state government departments)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/01/2026)</h2>
              <ul className={style.zxk}>
                <li><b>Minimum Age:</b> 21 Years</li>
                <li><b>Maximum Age:</b> 40 Years (33 years for uniformed posts like DSP)</li>
                <li><b>Age Relaxation:</b> SC/ST/OBC: 5 years, PwD: 5 years, Ex-Servicemen: 3 years, Women: 5 years (MP domicile), as per MPPSC rules.</li>
                <li>Additional age relaxation as per recruitment guidelines, please read the MP SSE official notification.</li>
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
                <div className={style.tablecell}>State Service Posts</div>
                <div className={style.tablecell}>
                  Bachelor’s Degree from a recognized university
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>
                  <li>
                    Read the MP SSE official notification for post-wise eligibility details.
                  </li>
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
            <CollapsibleSection title="Exam Pattern">
              <h2 className={style.sectiontitle}>Preliminary Exam</h2>
              <div
                style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }}
                className={style.tablerow}
              >
                <div className={style.tablecell}>Paper</div>
                <div className={style.tablecell}>Subjects</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 1</div>
                <div className={style.tablecell}>General Studies</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>200</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 2</div>
                <div className={style.tablecell}>General Aptitude Test</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>200</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <h2 className={style.sectiontitle}>Main Exam</h2>
              <div
                style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }}
                className={style.tablerow}
              >
                <div className={style.tablecell}>Paper</div>
                <div className={style.tablecell}>Subjects</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 1</div>
                <div className={style.tablecell}>General Studies-I</div>
                <div className={style.tablecell}>300</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 2</div>
                <div className={style.tablecell}>General Studies-II</div>
                <div className={style.tablecell}>300</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 3</div>
                <div className={style.tablecell}>General Studies-III</div>
                <div className={style.tablecell}>300</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 4</div>
                <div className={style.tablecell}>General Studies-IV</div>
                <div className={style.tablecell}>200</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 5</div>
                <div className={style.tablecell}>General Hindi</div>
                <div className={style.tablecell}>200</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 6</div>
                <div className={style.tablecell}>Hindi Essay</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Preliminary Exam: Objective-type, 2 marks per question, no negative marking.</li>
                <li>Main Exam: Descriptive, total 1400 marks.</li>
                <li>Interview: 175 marks, added to Main Exam score for final merit.</li>
                <li>Total: Prelims (400 marks, qualifying), Mains (1400 marks) + Interview (175 marks).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <ul className={style.zxs}>
                <li><b>Prelims - General Studies:</b> History, Geography, Polity, Economy, Environment, Science, Current Affairs, MP-specific GK.</li>
                <li><b>Prelims - General Aptitude:</b> Comprehension, Logical Reasoning, Quantitative Aptitude, Data Interpretation.</li>
                <li><b>Mains - General Studies-I:</b> History, Culture, Disaster Management, MP-specific history.</li>
                <li><b>Mains - General Studies-II:</b> Constitution, Governance, Social Issues, International Relations.</li>
                <li><b>Mains - General Studies-III:</b> Science & Technology, Economy, Environment, Security Issues.</li>
                <li><b>Mains - General Studies-IV:</b> Ethics, Integrity, Aptitude, Case Studies.</li>
                <li><b>Mains - General Hindi:</b> Grammar, Comprehension, Translation, Precis Writing.</li>
                <li><b>Mains - Hindi Essay:</b> Essay writing on contemporary or MP-specific topics.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <ul className={style.zxs}>
                <li><b>Deputy Collector:</b> Administrative roles, revenue collection, law and order maintenance.</li>
                <li><b>Deputy Superintendent of Police (DSP):</b> Policing, crime investigation, public safety.</li>
                <li><b>Other Posts:</b> Include Commercial Tax Officer, District Registrar, Assistant Director, etc., with administrative and managerial duties.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Physical Standards (DSP)">
              <ul className={style.zxs}>
                <li><b>Physical Standard Test (PST):</b>
                  <ul>
                    <li><b>Male:</b> Height: 168 cm, Chest: 84/5 cm.</li>
                    <li><b>Female:</b> Height: 155 cm.</li>
                  </ul>
                </li>
                <li><b>Physical Efficiency Test (PET):</b>
                  <ul>
                    <li><b>Male:</b> 800m run in 2:45 min, Long Jump: 13 feet, Shot Put: 24 feet.</li>
                    <li><b>Female:</b> 800m run in 3:45 min, Long Jump: 10 feet, Shot Put: 16 feet.</li>
                  </ul>
                </li>
                <li><b>Vision:</b> 6/6 or 6/9 without glasses; no color blindness.</li>
                <li><b>Medical Tests:</b> Blood tests, vision/hearing tests, general health check.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Selection Process">
              <ul className={style.zxs}>
                <li><b>Preliminary Exam:</b> Qualifying, objective-type, no negative marking.</li>
                <li><b>Main Exam:</b> Descriptive, 1400 marks, six papers.</li>
                <li><b>Interview:</b> 175 marks, assesses personality, leadership, and communication skills.</li>
                <li><b>PET/PST (DSP):</b> Required for Deputy Superintendent of Police posts.</li>
                <li><b>Final Merit:</b> Based on Main Exam and Interview marks, subject to clearing Prelims and PET/PST (if applicable).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>Bachelor’s degree certificate and mark sheets.</li>
                <li>10th and 12th mark sheets and certificates.</li>
                <li>Caste Certificate (SC/ST/OBC-NCL, MP domicile).</li>
                <li>EWS Certificate (valid for 2025-26).</li>
                <li>PwD Certificate (if applicable).</li>
                <li>MP Domicile Certificate (if claiming reservation).</li>
                <li>Photo ID (Aadhaar, PAN, Voter ID, or Passport).</li>
                <li>Recent passport-size photographs (6 copies, 20–50 KB).</li>
                <li>Printed application form and fee payment receipt.</li>
                <li><b>Note:</b> Ensure all documents are valid; discrepancies lead to disqualification.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Medical Examination Details (DSP)">
              <ul className={style.zxs}>
                <li><b>Purpose:</b> Ensure fitness for DSP duties.</li>
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
            <CollapsibleSection title="Career Benefits at MP SSE">
              <ul className={style.zxs}>
                <li><b>Salary:</b> ₹15,600–₹39,100 (Level 7) for most posts, ₹56,100–₹1,77,500 (Level 10) for DSP + allowances (DA, HRA).</li>
                <li><b>Job Security:</b> Permanent state government posts with pension benefits.</li>
                <li><b>Allowances:</b> Medical benefits, Travel Allowance, House Rent Allowance.</li>
                <li><b>Career Growth:</b> Promotions to senior roles like Collector, SP, or higher administrative posts.</li>
                <li><b>Work Environment:</b> Prestigious roles in state administration, police, or revenue services.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li><b>Check Eligibility:</b> Verify age (21–40 years) and education (Bachelor’s Degree).</li>
                <li>
                  <b>Visit Official Website:</b>{" "}
                  <a href="https://mppsc.mp.gov.in" target="_blank" className="link">
                    mppsc.mp.gov.in
                  </a>
                  .
                </li>
                <li><b>Register:</b> Click “Apply Online,” enter email, mobile, and Aadhaar (optional).</li>
                <li><b>Fill Form:</b> Provide personal, educational details, and select post preferences.</li>
                <li><b>Pay Fee:</b> ₹500 (General/Other State) or ₹250 (SC/ST/OBC/EWS/PwD, MP domicile) via online mode or kiosk.</li>
                <li><b>Submit:</b> Review, submit, and download application form. Keep Application ID.</li>
                <li><b>Track Application:</b> Check status and admit cards on mppsc.mp.gov.in.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Download Admit Card">
              <ol className={style.zxs}>
                <li>
                  Visit the official website:{" "}
                  <a href="https://mppsc.mp.gov.in" target="_blank" className="link">
                    mppsc.mp.gov.in
                  </a>
                  .
                </li>
                <li>Navigate to “Admit Card” section.</li>
                <li>Select “MP SSE Prelims/Main Admit Card.”</li>
                <li>Enter Application ID, Date of Birth, and captcha.</li>
                <li>Download and print admit card.</li>
                <li><b>Note:</b> Carry admit card and photo ID to exam; check MPPSC website for updates.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li><b>Understand Syllabus:</b> Focus on MPPSC syllabus (General Studies, Aptitude, Hindi, MP-specific GK).</li>
                <li><b>Previous Papers:</b> Solve MP SSE 2023-2024 papers for question patterns.</li>
                <li><b>Time Management:</b> Practice 100 questions in 2 hours (Prelims); focus on essay writing for Mains.</li>
                <li><b>Current Affairs:</b> Read The Hindu, MP-specific news (e.g., Dainik Bhaskar, Patrika).</li>
                <li><b>MP GK:</b> Study MP history, culture, geography from “MP Samanya Gyan” by Arihant.</li>
                <li><b>Hindi:</b> Practice grammar, essay writing (use “Samanya Hindi” by Lucent).</li>
                <li><b>Physical Prep (DSP):</b> Train for PET (running, long jump, shot put).</li>
                <li><b>Mock Tests:</b> Use Adda247, Testbook for MPPSC-specific mocks; target 70%+ in Prelims.</li>
                <li><b>Stay Updated:</b> Follow mppsc.mp.gov.in for notifications and results.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li><b>How many vacancies in MP SSE?</b> {totalpost} vacancies (updated as per notification).</li>
                <li><b>Is there negative marking?</b> No in Prelims or Mains.</li>
                <li><b>Can final year students apply?</b> Yes, if degree is completed by document verification.</li>
                <li><b>What documents are needed?</b> Degree certificate, caste/EWS/PwD certificates, MP domicile, photo ID.</li>
                <li><b>Where are exam centers?</b> Major cities in Madhya Pradesh (Indore, Bhopal, Gwalior, etc.).</li>
                <li><b>What is the role of SSE posts?</b> Administrative, policing, or revenue duties in MP state services.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li>
                  <a href="https://mppsc.mp.gov.in" target="_blank" className="link">
                    MPPSC Official Website
                  </a>
                  : Check MP SSE notification, admit cards, results.
                </li>
                <li>
                  <a href="https://testbook.com/mppsc" target="_blank" className="link">
                    Testbook Mock Tests
                  </a>
                  : MPPSC-specific mocks with analytics.
                </li>
                <li>
                  <a href="https://adda247.com/mppsc" target="_blank" className="link">
                    Adda247 Study Material
                  </a>
                  : Free notes on General Studies, Hindi, MP GK.
                </li>
                <li>
                  <a href="https://pib.gov.in" target="_blank" className="link">
                    PIB India
                  </a>
                  : Current affairs for General Studies.
                </li>
                <li>
                  <a href="https://www.jagranjosh.com/mppsc-previous-papers" target="_blank" className="link">
                    Previous Year Papers
                  </a>
                  : Download 2023-2024 papers.
                </li>
                <li><b>Books:</b>
                  <ul>
                    <li>“MPPSC General Studies” by Arihant for Prelims and Mains.</li>
                    <li>“MP Samanya Gyan” by Arihant for MP-specific GK.</li>
                    <li>“Samanya Hindi” by Lucent for Hindi prep.</li>
                    <li>“Quantitative Aptitude” by R.S. Aggarwal for Prelims aptitude.</li>
                  </ul>
                </li>
                <li><b>YouTube Channels:</b> “Adda247,” “StudyIQ” for MPPSC exam tips and live classes.</li>
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
              alt="MP SSE 2025 Recruitment"
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
                <a href={item.link} target="_blank" className={style.link}>
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

export default MPPSC_1;