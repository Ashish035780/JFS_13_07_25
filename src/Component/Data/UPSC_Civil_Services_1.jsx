import style from "./000_Content.module.css";
import a1 from "./Pic/UPSC_Civil_Service_1.jpg";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";

  const UPSC_Civil_Services_1 = () => {
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
    fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/UPSC_CIVIL_SERVICES.json")
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((item) => item.id === "upsccivilservices1");
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
            <h2 className={style.zxg}>Union Public Service Commission (UPSC)</h2>
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
                  <b>General/OBC/EWS:</b> ₹100
                </li>
                <li>
                  <b>SC/ST/PwD/Female:</b> Nil
                </li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Credit/Debit Card, Net Banking, or UPI. Fee is non-refundable.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Across India (based on service allocation)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/08/2025)</h2>
              <ul className={style.zxk}>
                <li>
                  <b>Minimum Age:</b> 21 Years
                </li>
                <li>
                  <b>Maximum Age:</b> 32 Years
                </li>
                <li>
                  <b>Age Relaxation:</b> SC/ST: 5 years, OBC: 3 years, PwD: 10 years, Ex-Servicemen: 5 years, as per UPSC rules.
                </li>
                <li>Additional age relaxation as per recruitment guidelines, please read the official UPSC notification.</li>
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
                <div className={style.tablecell}>Civil Services (IAS, IPS, IFS, etc.)</div>
                <div className={style.tablecell}>
                  Bachelor’s Degree in any discipline from a recognized university. Final year students may apply provisionally.
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>
                  <li>Read the official UPSC notification for detailed eligibility criteria.</li>
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
                  <b>Preliminary Exam:</b> Objective-type test (General Studies Paper I and CSAT Paper II).
                </li>
                <li>
                  <b>Main Exam:</b> Written exam with 9 papers (Essay, General Studies I-IV, Optional Subject Papers I-II, Indian Language, English).
                </li>
                <li>
                  <b>Personality Test (Interview):</b> Assess personality, leadership, and suitability for civil services.
                </li>
                <li>
                  <b>Document Verification:</b> Verify eligibility and category documents.
                </li>
                <li>
                  <b>Final Merit:</b> Based on Main Exam and Interview marks, subject to clearing Preliminary Exam.
                </li>
              </ul>
            </CollapsibleSection>
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
                <div className={style.tablecell}>Paper I</div>
                <div className={style.tablecell}>General Studies</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>200</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper II</div>
                <div className={style.tablecell}>CSAT (Aptitude)</div>
                <div className={style.tablecell}>80</div>
                <div className={style.tablecell}>200</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <h3 className={style.zxt}>Key Points (Preliminary):</h3>
              <ul className={style.zxs}>
                <li>Objective-type, 400 marks total, 4 hours.</li>
                <li>Negative marking: 0.66 marks per wrong answer (Paper I), 0.83 marks per wrong answer (Paper II).</li>
                <li>Paper II (CSAT) is qualifying (33% marks required).</li>
                <li>Paper I marks used for Main Exam qualification.</li>
              </ul>
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
                <div className={style.tablecell}>Paper A</div>
                <div className={style.tablecell}>Indian Language (Qualifying)</div>
                <div className={style.tablecell}>300</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper B</div>
                <div className={style.tablecell}>English (Qualifying)</div>
                <div className={style.tablecell}>300</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper I</div>
                <div className={style.tablecell}>Essay</div>
                <div className={style.tablecell}>250</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper II</div>
                <div className={style.tablecell}>General Studies I</div>
                <div className={style.tablecell}>250</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper III</div>
                <div className={style.tablecell}>General Studies II</div>
                <div className={style.tablecell}>250</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper IV</div>
                <div className={style.tablecell}>General Studies III</div>
                <div className={style.tablecell}>250</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper V</div>
                <div className={style.tablecell}>General Studies IV</div>
                <div className={style.tablecell}>250</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper VI</div>
                <div className={style.tablecell}>Optional Subject Paper I</div>
                <div className={style.tablecell}>250</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper VII</div>
                <div className={style.tablecell}>Optional Subject Paper II</div>
                <div className={style.tablecell}>250</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <h3 className={style.zxt}>Key Points (Main):</h3>
              <ul className={style.zxs}>
                <li>Descriptive, 1750 marks for merit (Papers I-VII), 27 hours total.</li>
                <li>No negative marking.</li>
                <li>Indian Language and English papers are qualifying (25% marks required).</li>
                <li>Marks used for Interview shortlisting and final merit.</li>
              </ul>
              <h2 className={style.sectiontitle}>Personality Test</h2>
              <ul className={style.zxs}>
                <li>Interview: 275 marks, no minimum qualifying marks.</li>
                <li>Assesses personality, leadership, and suitability for civil services.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <ul className={style.zxs}>
                <li>
                  <b>General Studies Paper I (Prelims):</b> Current Affairs, History, Geography, Polity, Economy, Environment, Science.
                </li>
                <li>
                  <b>CSAT Paper II (Prelims):</b> Comprehension, Logical Reasoning, Analytical Ability, Decision Making, Basic Numeracy, Data Interpretation.
                </li>
                <li>
                  <b>Indian Language (Mains):</b> Comprehension, Precis Writing, Translation, Grammar (e.g., Hindi, Tamil, etc., per Schedule VIII).
                </li>
                <li>
                  <b>English (Mains):</b> Comprehension, Precis Writing, Grammar, Essay Writing.
                </li>
                <li>
                  <b>Essay (Mains):</b> Write essays on contemporary issues or philosophical topics.
                </li>
                <li>
                  <b>General Studies I (Mains):</b> Indian Heritage, Culture, History, Geography.
                </li>
                <li>
                  <b>General Studies II (Mains):</b> Governance, Constitution, Polity, International Relations.
                </li>
                <li>
                  <b>General Studies III (Mains):</b> Technology, Economic Development, Environment, Security, Disaster Management.
                </li>
                <li>
                  <b>General Studies IV (Mains):</b> Ethics, Integrity, Aptitude.
                </li>
                <li>
                  <b>Optional Subject (Mains):</b> Choose one (e.g., Public Administration, Sociology, History); covers advanced topics.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <ul className={style.zxs}>
                <li>
                  <b>Indian Administrative Service (IAS):</b> Policy implementation, administration, public service delivery.
                </li>
                <li>
                  <b>Indian Police Service (IPS):</b> Law enforcement, public safety, crime prevention.
                </li>
                <li>
                  <b>Indian Foreign Service (IFS):</b> Diplomacy, international relations, foreign policy.
                </li>
                <li>
                  <b>Other Services:</b> Revenue (IRS), Audit (IAAS), Railway (IRTS), etc., with specialized roles in government.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>10th/12th mark sheet and certificate.</li>
                <li>Bachelor’s Degree certificate/provisional certificate.</li>
                <li>Caste Certificate (SC/ST/OBC-NCL).</li>
                <li>EWS Certificate (valid for 2025-26).</li>
                <li>PwD Certificate (if applicable).</li>
                <li>Ex-Servicemen Discharge Book/Service Certificate.</li>
                <li>Photo ID (Aadhaar, PAN, Voter ID, or Passport).</li>
                <li>Recent passport-size photographs (6 copies, 20–50 KB, 200x230 pixels).</li>
                <li>Printed application form and fee payment receipt.</li>
                <li>
                  <b>Note:</b> OBC-NCL certificate must mention non-creamy layer; discrepancies lead to disqualification.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits at UPSC Civil Services">
              <ul className={style.zxs}>
                <li>
                  <b>Salary:</b> ₹56,100–₹2,50,000 (Level 10–18) + DA, HRA, other allowances.
                </li>
                <li>
                  <b>Job Security:</b> Permanent government posts with pension benefits.
                </li>
                <li>
                  <b>Allowances:</b> Medical benefits, Travel Allowance, Official Residence, Vehicle, Security (for IPS/IFS).
                </li>
                <li>
                  <b>Career Growth:</b> Promotions to senior roles (e.g., Cabinet Secretary, DGP, Ambassador) based on seniority and performance.
                </li>
                <li>
                  <b>Work Environment:</b> Prestigious roles with high responsibility and societal impact.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li>
                  <b>Check Eligibility:</b> Verify age (21–32 years), education (Bachelor’s Degree), and attempt limits (General: 6, OBC: 9, SC/ST: Unlimited).
                </li>
                <li>
                  <b>Visit Official Website:</b>{" "}
                  <a href="https://upsconline.nic.in" target="_blank" className="link">
                    upsconline.nic.in
                  </a>
                  .
                </li>
                <li>
                  <b>Register:</b> Complete Part-I registration (personal details, email, mobile); upload photo (20–300 KB) and signature (20–300 KB).
                </li>
                <li>
                  <b>Fill Form:</b> Complete Part-II (educational details, exam center, optional subject, service preferences).
                </li>
                <li>
                  <b>Pay Fee:</b> ₹100 (General/OBC/EWS) via online mode; exempt for SC/ST/PwD/Female.
                </li>
                <li>
                  <b>Submit:</b> Review, submit, and download application form. Keep Registration ID.
                </li>
                <li>
                  <b>Track Application:</b> Check status and admit cards on upsconline.nic.in.
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Download Admit Card">
              <ol className={style.zxs}>
                <li>
                  Visit the official website:{" "}
                  <a href="https://upsconline.nic.in" target="_blank" className="link">
                    upsconline.nic.in
                  </a>
                  .
                </li>
                <li>Navigate to “e-Admit Card” section.</li>
                <li>Select “Civil Services (Preliminary/Main) Admit Card.”</li>
                <li>Enter Registration ID, Date of Birth, and captcha.</li>
                <li>Download and print admit card.</li>
                <li>
                  <b>Note:</b> Carry admit card and photo ID to exam; check UPSC website for updates.
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li>
                  <b>Understand Syllabus:</b> Focus on Prelims (GS, CSAT) and Mains (GS I-IV, Optional, Essay).
                </li>
                <li>
                  <b>Previous Papers:</b> Solve UPSC CSE 2023–2024 papers for question patterns.
                </li>
                <li>
                  <b>Time Management:</b> Practice 100 questions in 2 hours (Prelims GS); prepare for 3-hour descriptive papers (Mains).
                </li>
                <li>
                  <b>Current Affairs:</b> Read The Hindu, Indian Express, PIB, Yojana for 2024–2025 updates.
                </li>
                <li>
                  <b>General Studies:</b> Study NCERTs (Class 6–12), Laxmikanth (Polity), Spectrum (History), Shankar IAS (Environment).
                </li>
                <li>
                  <b>CSAT:</b> Practice Reasoning, Comprehension, Numeracy (R.S. Aggarwal, Arihant CSAT).
                </li>
                <li>
                  <b>Optional Subject:</b> Choose based on interest; refer to standard books (e.g., Sociology by Haralambos, Pub Ad by Laxmikanth).
                </li>
                <li>
                  <b>Essay Writing:</b> Practice essays on social, economic, and philosophical topics.
                </li>
                <li>
                  <b>Mock Tests:</b> Use Vision IAS, Forum IAS, Insights for UPSC-specific mocks; target 100+ (Prelims GS), 900+ (Mains).
                </li>
                <li>
                  <b>Interview Prep:</b> Practice mock interviews, focus on DAF (Detailed Application Form), and current affairs.
                </li>
                <li>
                  <b>Stay Updated:</b> Follow upsc.gov.in for notifications and results.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li>
                  <b>How many vacancies in UPSC CSE?</b> {totalpost} vacancies (updated as per notification).
                </li>
                <li>
                  <b>Is there negative marking?</b> Yes, 0.66 (GS) and 0.83 (CSAT) marks per wrong answer in Prelims; no negative marking in Mains.
                </li>
                <li>
                  <b>Can final year students apply?</b> Yes, provisionally, subject to degree completion by Main Exam.
                </li>
                <li>
                  <b>What is the attempt limit?</b> General: 6, OBC: 9, SC/ST: Unlimited, PwD: 9 (General/OBC), Unlimited (SC/ST).
                </li>
                <li>
                  <b>Where are exam centers?</b> Major cities across India (specified in admit card).
                </li>
                <li>
                  <b>What are the roles in Civil Services?</b> IAS (administration), IPS (policing), IFS (diplomacy), and other services.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li>
                  <a href="https://upsc.gov.in" target="_blank" className="link">
                    UPSC Official Website
                  </a>
                  : Check CSE Notification, admit cards, results.
                </li>
                <li>
                  <a href="https://visionias.in" target="_blank" className="link">
                    Vision IAS
                  </a>
                  : UPSC-specific mocks and study material.
                </li>
                <li>
                  <a href="https://insightsonindia.com" target="_blank" className="link">
                    Insights on India
                  </a>
                  : Free notes, daily current affairs, and test series.
                </li>
                <li>
                  <a href="https://pib.gov.in" target="_blank" className="link">
                    PIB India
                  </a>
                  : Current affairs for GS preparation.
                </li>
                <li>
                  <a href="https://www.drishtiias.com" target="_blank" className="link">
                    Drishti IAS
                  </a>
                  : Study material and previous year papers.
                </li>
                <li>
                  <b>Books:</b>
                  <ul>
                    <li>“Indian Polity” by M. Laxmikanth for Polity.</li>
                    <li>“Modern India” by Spectrum for History.</li>
                    <li>“Environment” by Shankar IAS for Environment.</li>
                    <li>“CSAT Manual” by Arihant for Prelims Paper II.</li>
                  </ul>
                </li>
                <li>
                  <b>YouTube Channels:</b> “Vision IAS,” “Unacademy UPSC,” “StudyIQ” for CSE tips and live classes.
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
              alt="UPSC Civil Services Recruitment 2025"
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

export default UPSC_Civil_Services_1;