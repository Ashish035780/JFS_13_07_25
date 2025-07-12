import style from "./000_Content.module.css";
import a1 from "./Pic/UPPSC_Staff_Nurse_2.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";

const UPPSC_Staff_Nurse_2 = () => {
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
    fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/UPPSC_STAFF_NURSE.json")
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((item) => item.id === "uppscstaffnurse2");
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
            <h2 className={style.zxg}>Uttar Pradesh Public Service Commission (UPPSC)</h2>
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
                  <b>General/OBC:</b> ₹125 (Exam Fee: ₹100 + Online Processing Fee: ₹25)
                </li>
                <li>
                  <b>SC/ST:</b> ₹65 (Exam Fee: ₹40 + Online Processing Fee: ₹25)
                </li>
                <li>
                  <b>PwD:</b> ₹25 (Online Processing Fee only)
                </li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Credit/Debit Card, Net Banking, or UPI. Fee is non-refundable.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Uttar Pradesh (Government hospitals and health centers)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/07/2025)</h2>
              <ul className={style.zxk}>
                <li>
                  <b>Minimum Age:</b> 21 Years
                </li>
                <li>
                  <b>Maximum Age:</b> 40 Years
                </li>
                <li>
                  <b>Age Relaxation:</b> SC/ST/OBC: 5 years, PwD: 15 years, as per UPPSC rules.
                </li>
                <li>Additional age relaxation as per recruitment guidelines, please read the official UPPSC notification.</li>
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
                <div className={style.tablecell}>Staff Nurse (Male/Female)</div>
                <div className={style.tablecell}>
                  Diploma in General Nursing and Midwifery (GNM) or B.Sc. Nursing from a recognized institute; registration with UP Nursing Council or Indian Nursing Council.
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>
                  <li>Read the official UPPSC notification for detailed eligibility criteria.</li>
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
                  <b>Preliminary Exam:</b> Objective-type test covering General Knowledge, Hindi, and Nursing subjects.
                </li>
                <li>
                  <b>Main Exam (Written):</b> Descriptive/subjective test on Nursing and related subjects.
                </li>
                <li>
                  <b>Document Verification:</b> Verify eligibility, educational, and category documents.
                </li>
                <li>
                  <b>Final Merit:</b> Based on Main Exam marks, subject to clearing Preliminary Exam.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Exam Pattern">
              <h2 className={style.sectiontitle}>Preliminary Exam</h2>
              <div
                style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }}
                className={style.tablerow}
              >
                <div className={style.tablecell}>Section</div>
                <div className={style.tablecell}>Subjects</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 1</div>
                <div className={style.tablecell}>General Knowledge</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>120 Minutes</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 2</div>
                <div className={style.tablecell}>General Hindi</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 3</div>
                <div className={style.tablecell}>Main Subject (Nursing)</div>
                <div className={style.tablecell}>120</div>
                <div className={style.tablecell}>120</div>
                <div className={style.tablecell}></div>
              </div>
              <h3 className={style.zxt}>Key Points (Preliminary):</h3>
              <ul className={style.zxs}>
                <li>Objective-type, 180 questions, 180 marks, 120 minutes.</li>
                <li>Negative marking: 0.33 marks per wrong answer.</li>
                <li>Qualifying in nature for Main Exam.</li>
              </ul>
              <h2 className={style.sectiontitle}>Main Exam</h2>
              <div
                style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }}
                className={style.tablerow}
              >
                <div className={style.tablecell}>Section</div>
                <div className={style.tablecell}>Subjects</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 1</div>
                <div className={style.tablecell}>Nursing (Descriptive)</div>
                <div className={style.tablecell}>360</div>
                <div className={style.tablecell}>180 Minutes</div>
              </div>
              <h3 className={style.zxt}>Key Points (Main):</h3>
              <ul className={style.zxs}>
                <li>Descriptive/subjective, 360 marks, 180 minutes.</li>
                <li>No negative marking.</li>
                <li>Marks used for final merit.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <ul className={style.zxs}>
                <li>
                  <b>General Knowledge:</b> Current Affairs (2024-2025), Indian History, Geography, Polity, Economy, Science.
                </li>
                <li>
                  <b>General Hindi:</b> Grammar, Vocabulary, Comprehension, Sentence Formation, Synonyms/Antonyms.
                </li>
                <li>
                  <b>Nursing (Preliminary & Main):</b> Anatomy & Physiology, Microbiology, Fundamentals of Nursing, Medical-Surgical Nursing, Midwifery, Community Health Nursing, Psychiatric Nursing, Pediatric Nursing, Nursing Management.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <ul className={style.zxs}>
                <li>
                  <b>Staff Nurse (Male/Female):</b> Provide patient care, administer medications, assist in medical procedures, maintain patient records, and support hospital operations in UP government health facilities.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>10th/12th mark sheet and certificate.</li>
                <li>GNM or B.Sc. Nursing degree/diploma certificate.</li>
                <li>UP Nursing Council or Indian Nursing Council registration certificate.</li>
                <li>Caste Certificate (SC/ST/OBC-NCL).</li>
                <li>EWS Certificate (valid for 2025-26).</li>
                <li>PwD Certificate (if applicable).</li>
                <li>Photo ID (Aadhaar, PAN, Voter ID, or Passport).</li>
                <li>Recent passport-size photographs (6 copies, 20–50 KB, 200x230 pixels).</li>
                <li>Printed application form and fee payment receipt.</li>
                <li>
                  <b>Note:</b> OBC-NCL certificate must mention non-creamy layer; discrepancies lead to disqualification.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits at UPPSC Staff Nurse">
              <ul className={style.zxs}>
                <li>
                  <b>Salary:</b> ₹44,900–₹1,42,400 (Level 7) + DA, HRA, other allowances.
                </li>
                <li>
                  <b>Job Security:</b> Permanent government job with pension under NPS.
                </li>
                <li>
                  <b>Allowances:</b> Medical benefits, House Rent Allowance, Dearness Allowance, Transport Allowance.
                </li>
                <li>
                  <b>Career Growth:</b> Promotions to Senior Staff Nurse, Nursing Officer, or higher roles via departmental exams or seniority.
                </li>
                <li>
                  <b>Work Environment:</b> Stable roles in government hospitals and health centers with opportunities for professional development.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li>
                  <b>Check Eligibility:</b> Verify age (21–40 years) and education (GNM/B.Sc. Nursing + registration).
                </li>
                <li>
                  <b>Visit Official Website:</b>{" "}
                  <a href="https://uppsc.up.nic.in" target="_blank" className="link">
                    uppsc.up.nic.in
                  </a>
                  .
                </li>
                <li>
                  <b>Register:</b> Click “Apply Online,” complete OTR (One Time Registration), enter email, mobile, and upload photo (20–50 KB) and signature (10–20 KB).
                </li>
                <li>
                  <b>Fill Form:</b> Provide personal, educational, and nursing registration details; select exam center.
                </li>
                <li>
                  <b>Pay Fee:</b> ₹125 (General/OBC), ₹65 (SC/ST), ₹25 (PwD) via online mode.
                </li>
                <li>
                  <b>Submit:</b> Review, submit, and download application form. Keep Application ID.
                </li>
                <li>
                  <b>Track Application:</b> Check status and admit cards on uppsc.up.nic.in.
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Download Admit Card">
              <ol className={style.zxs}>
                <li>
                  Visit the official website:{" "}
                  <a href="https://uppsc.up.nic.in" target="_blank" className="link">
                    uppsc.up.nic.in
                  </a>
                  .
                </li>
                <li>Navigate to “Download Admit Card” section.</li>
                <li>Select “UPPSC Staff Nurse Admit Card.”</li>
                <li>Enter OTR ID, Application ID, Date of Birth, and captcha.</li>
                <li>Download and print admit card.</li>
                <li>
                  <b>Note:</b> Carry admit card and photo ID to exam; check UPPSC website for updates.
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li>
                  <b>Understand Syllabus:</b> Focus on General Knowledge, Hindi, and Nursing subjects (Preliminary and Main).
                </li>
                <li>
                  <b>Previous Papers:</b> Solve UPPSC Staff Nurse 2021–2024 papers for question patterns.
                </li>
                <li>
                  <b>Time Management:</b> Practice 180 questions in 120 minutes (Prelims); prepare for descriptive answers (Mains).
                </li>
                <li>
                  <b>General Knowledge:</b> Read The Hindu, PIB for current affairs (2024-2025), focus on UP-specific news.
                </li>
                <li>
                  <b>Hindi:</b> Practice grammar, comprehension from Lucent’s Hindi or UP Board books.
                </li>
                <li>
                  <b>Nursing:</b> Study GNM/B.Sc. Nursing textbooks (Anatomy, Microbiology, Medical-Surgical Nursing); refer to P.D. Meena’s Nursing Guide.
                </li>
                <li>
                  <b>Mock Tests:</b> Use Testbook, Adda247 for UPPSC Staff Nurse-specific mocks; target 130+ marks in Prelims.
                </li>
                <li>
                  <b>Stay Updated:</b> Follow uppsc.up.nic.in for notifications and results.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li>
                  <b>How many vacancies in UPPSC Staff Nurse?</b> {totalpost} vacancies (updated as per notification).
                </li>
                <li>
                  <b>Is there negative marking?</b> Yes, 0.33 marks per wrong answer in Preliminary Exam; no negative marking in Main Exam.
                </li>
                <li>
                  <b>Can candidates from other states apply?</b> Yes, but preference may be given to UP residents; check notification.
                </li>
                <li>
                  <b>What documents are needed?</b> GNM/B.Sc. Nursing certificate, nursing registration, caste/EWS/PwD certificates, photo ID.
                </li>
                <li>
                  <b>Where are exam centers?</b> Major cities in Uttar Pradesh (specified in admit card).
                </li>
                <li>
                  <b>What is the role of a Staff Nurse?</b> Patient care, medical assistance, and hospital administration in UP health facilities.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li>
                  <a href="https://uppsc.up.nic.in" target="_blank" className="link">
                    UPPSC Official Website
                  </a>
                  : Check Staff Nurse Notification, admit cards, results.
                </li>
                <li>
                  <a href="https://testbook.com/uppsc-staff-nurse" target="_blank" className="link">
                    Testbook Mock Tests
                  </a>
                  : UPPSC Staff Nurse-specific mocks with analytics.
                </li>
                <li>
                  <a href="https://adda247.com" target="_blank" className="link">
                    Adda247 Study Material
                  </a>
                  : Free notes on General Knowledge, Hindi, Nursing.
                </li>
                <li>
                  <a href="https://pib.gov.in" target="_blank" className="link">
                    PIB India
                  </a>
                  : Current affairs for General Knowledge.
                </li>
                <li>
                  <b>Books:</b>
                  <ul>
                    <li>“UPPSC Staff Nurse Guide” by Arihant for overall prep.</li>
                    <li>“Lucent’s General Knowledge” for General Awareness.</li>
                    <li>“General Hindi” by Lucent for Hindi preparation.</li>
                    <li>“Nursing Guide” by P.D. Meena for Nursing subjects.</li>
                  </ul>
                </li>
                <li>
                  <b>YouTube Channels:</b> “Adda247,” “StudyIQ,” “Nursing Exams” for UPPSC Staff Nurse tips and live classes.
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
              alt="UPPSC Staff Nurse Recruitment 2025"
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

export default UPPSC_Staff_Nurse_2;