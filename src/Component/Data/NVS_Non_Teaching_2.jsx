import style from "./000_Content.module.css";
import a1 from "./Pic/NVS_Non_Teaching_2.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";

const NVS_Non_Teaching_2 = () => {
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
    fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/NVS_NON_TEACHING.json")
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((item) => item.id === "nvsnonteaching2");
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
            <h2 className={style.zxg}>Navodaya Vidyalaya Samiti (NVS)</h2>
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
                  <b>General/OBC/EWS:</b> ₹1000 (for Group B posts), ₹500 (for Group C posts)
                </li>
                <li>
                  <b>SC/ST/PwD:</b> Nil
                </li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Credit/Debit Card, Net Banking, or UPI. Fee is non-refundable.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Across India (Jawahar Navodaya Vidyalayas and NVS regional offices)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/08/2025)</h2>
              <ul className={style.zxk}>
                <li>
                  <b>Minimum Age:</b> 18 Years
                </li>
                <li>
                  <b>Maximum Age:</b> 30 Years (MTS, LDC, Catering Assistant), 35 Years (Staff Nurse, Stenographer)
                </li>
                <li>
                  <b>Age Relaxation:</b> SC/ST: 5 years, OBC: 3 years, PwD: 10–15 years, Ex-Servicemen: 3 years (after service deduction), as per NVS rules.
                </li>
                <li>Additional age relaxation as per recruitment guidelines, please read the official NVS notification.</li>
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
                <div className={style.tablecell}>Multi-Tasking Staff (MTS)</div>
                <div className={style.tablecell}>
                  10th Pass (Matriculation) from a recognized board
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Lower Division Clerk (LDC)</div>
                <div className={style.tablecell}>
                  12th Pass with typing speed of 30 wpm (English) or 25 wpm (Hindi)
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Stenographer</div>
                <div className={style.tablecell}>
                  12th Pass with shorthand speed of 80 wpm and typing speed of 40 wpm (English) or 35 wpm (Hindi)
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Staff Nurse</div>
                <div className={style.tablecell}>
                  B.Sc Nursing or Diploma in General Nursing & Midwifery with registration in Nursing Council
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Catering Assistant</div>
                <div className={style.tablecell}>
                  10th Pass with Diploma in Catering or 12th Pass with 3 years’ experience in catering
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>
                  <li>Read the official NVS notification for post-wise eligibility details.</li>
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
                  <b>Written Exam:</b> Objective-type test covering General Knowledge, Reasoning, Quantitative Aptitude, English, and post-specific subjects.
                </li>
                <li>
                  <b>Skill Test (for LDC/Stenographer):</b> Typing test (LDC) or shorthand and typing test (Stenographer).
                </li>
                <li>
                  <b>Trade Test (for Catering Assistant):</b> Practical test in catering skills.
                </li>
                <li>
                  <b>Document Verification:</b> Verify eligibility and category documents.
                </li>
                <li>
                  <b>Final Merit:</b> Based on written exam marks (and skill/trade test, if applicable).
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Exam Pattern">
              <h2 className={style.sectiontitle}>Written Examination</h2>
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
                <div className={style.tablecell}>General Knowledge & Current Affairs</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>120 Minutes (160 for PwD)</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 2</div>
                <div className={style.tablecell}>Reasoning Ability</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 3</div>
                <div className={style.tablecell}>Quantitative Aptitude</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 4</div>
                <div className={style.tablecell}>English Language</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 5</div>
                <div className={style.tablecell}>Post-Specific Subject</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}></div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Objective-type questions with multiple-choice answers.</li>
                <li>Negative marking: 0.25 marks deducted per wrong answer.</li>
                <li>Total: 100 questions, 100 marks, 120 minutes (160 for PwD).</li>
                <li>Skill test (typing/shorthand) or trade test (catering) is qualifying in nature.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <ul className={style.zxs}>
                <li>
                  <b>General Knowledge & Current Affairs:</b> History, Geography, Polity, Economy, Science, Current Events (2024-2025), Education Policies.
                </li>
                <li>
                  <b>Reasoning Ability:</b> Analogies, Coding-Decoding, Series, Puzzles, Non-Verbal Reasoning.
                </li>
                <li>
                  <b>Quantitative Aptitude:</b> Arithmetic, Percentage, Ratio, Time & Work, Averages, Simple Interest.
                </li>
                <li>
                  <b>English Language:</b> Grammar, Vocabulary, Comprehension, Sentence Correction.
                </li>
                <li>
                  <b>Post-Specific Subject:</b> Nursing (for Staff Nurse), Catering (for Catering Assistant), Office Procedures (for LDC/Stenographer).
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <ul className={style.zxs}>
                <li>
                  <b>Multi-Tasking Staff (MTS):</b> Non-technical tasks like cleaning, file handling, and support duties in NVS offices and schools.
                </li>
                <li>
                  <b>Lower Division Clerk (LDC):</b> Clerical tasks, data entry, file management, and typing duties.
                </li>
                <li>
                  <b>Stenographer:</b> Shorthand transcription, typing, and administrative support.
                </li>
                <li>
                  <b>Staff Nurse:</b> Provide medical care, maintain health records, and manage health emergencies in JNVs.
                </li>
                <li>
                  <b>Catering Assistant:</b> Manage kitchen operations, meal preparation, and inventory in JNVs.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>10th/12th mark sheet and certificate.</li>
                <li>B.Sc Nursing/Diploma certificate (for Staff Nurse).</li>
                <li>Diploma in Catering (for Catering Assistant).</li>
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
            <CollapsibleSection title="Career Benefits at NVS">
              <ul className={style.zxs}>
                <li>
                  <b>Salary:</b> ₹18,000–₹1,12,400 (Level 1–7, depending on post) + DA, HRA, other allowances.
                </li>
                <li>
                  <b>Job Security:</b> Permanent government posts with pension under NPS.
                </li>
                <li>
                  <b>Allowances:</b> Medical benefits (CGHS), Transport Allowance, Leave Benefits, Residential Quarters (in JNVs).
                </li>
                <li>
                  <b>Career Growth:</b> Promotions to higher roles (e.g., UDC, Senior Stenographer) via departmental exams or seniority.
                </li>
                <li>
                  <b>Work Environment:</b> Stable roles in Jawahar Navodaya Vidyalayas with academic and administrative responsibilities.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li>
                  <b>Check Eligibility:</b> Verify age (18–30/35 years) and education (10th/12th Pass, Diploma, or Degree as per post).
                </li>
                <li>
                  <b>Visit Official Website:</b>{" "}
                  <a href="https://navodaya.gov.in" target="_blank" className="link">
                    navodaya.gov.in
                  </a>
                  .
                </li>
                <li>
                  <b>Register:</b> Click “Recruitment,” enter email, mobile, Aadhaar (optional), and upload photo (20–50 KB) and signature (10–20 KB).
                </li>
                <li>
                  <b>Fill Form:</b> Provide personal, educational details, and select post preferences.
                </li>
                <li>
                  <b>Pay Fee:</b> ₹1000 (Group B) or ₹500 (Group C) via online mode; exempt for SC/ST/PwD.
                </li>
                <li>
                  <b>Submit:</b> Review, submit, and download application form. Keep Application ID.
                </li>
                <li>
                  <b>Track Application:</b> Check status and admit cards on navodaya.gov.in.
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Download Admit Card">
              <ol className={style.zxs}>
                <li>
                  Visit the official website:{" "}
                  <a href="https://navodaya.gov.in" target="_blank" className="link">
                    navodaya.gov.in
                  </a>
                  .
                </li>
                <li>Navigate to “Recruitment” section.</li>
                <li>Select “NVS Non-Teaching Admit Card.”</li>
                <li>Enter Application ID, Date of Birth, and captcha.</li>
                <li>Download and print admit card.</li>
                <li>
                  <b>Note:</b> Carry admit card and photo ID to exam; check NVS website for updates.
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li>
                  <b>Understand Syllabus:</b> Focus on General Knowledge, Reasoning, Quantitative Aptitude, English, and post-specific subjects.
                </li>
                <li>
                  <b>Previous Papers:</b> Solve NVS non-teaching or similar exams (e.g., SSC MTS, CGL) for question patterns.
                </li>
                <li>
                  <b>Time Management:</b> Practice 100 questions in 120 minutes; aim for 85% accuracy.
                </li>
                <li>
                  <b>Current Affairs:</b> Read The Hindu, PIB for updates (e.g., Education policies, Budget 2024-2025).
                </li>
                <li>
                  <b>Quantitative Aptitude:</b> Practice arithmetic from R.S. Aggarwal (Class 10–12 level).
                </li>
                <li>
                  <b>English:</b> Revise grammar, vocabulary (Lucent’s GK, Wren & Martin).
                </li>
                <li>
                  <b>Skill Prep (LDC/Stenographer):</b> Achieve typing speed of 30/25 wpm (LDC) or shorthand 80 wpm (Stenographer) using typing software.
                </li>
                <li>
                  <b>Trade Prep (Catering Assistant):</b> Practice catering and kitchen management skills.
                </li>
                <li>
                  <b>Mock Tests:</b> Use Testbook, Adda247 for similar exams; target 80+ marks.
                </li>
                <li>
                  <b>Stay Updated:</b> Follow navodaya.gov.in for notifications and results.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li>
                  <b>How many vacancies in NVS Non-Teaching?</b> {totalpost} vacancies (updated as per notification).
                </li>
                <li>
                  <b>Is there negative marking?</b> Yes, 0.25 marks deducted per wrong answer.
                </li>
                <li>
                  <b>Can 10th appearing students apply for MTS?</b> No, 10th Pass certificate required.
                </li>
                <li>
                  <b>What documents are needed?</b> 10th/12th/Diploma/Degree certificates, caste/EWS/PwD certificates, photo ID.
                </li>
                <li>
                  <b>Where are exam centers?</b> Major cities across India (specified in admit card).
                </li>
                <li>
                  <b>What is the role of MTS/LDC/Staff Nurse?</b> Support tasks (MTS), clerical work (LDC), medical care (Staff Nurse).
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li>
                  <a href="https://navodaya.gov.in" target="_blank" className="link">
                    NVS Official Website
                  </a>
                  : Check NVS Non-Teaching Notification, admit cards, results.
                </li>
                <li>
                  <a href="https://testbook.com" target="_blank" className="link">
                    Testbook Mock Tests
                  </a>
                  : Practice tests for clerical and non-teaching exams with analytics.
                </li>
                <li>
                  <a href="https://adda247.com" target="_blank" className="link">
                    Adda247 Study Material
                  </a>
                  : Free notes on Quantitative Aptitude, English, Reasoning.
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
                    <li>“NVS Non-Teaching Recruitment Guide” by Arihant for overall prep.</li>
                    <li>“Lucent’s General Knowledge” for General Awareness.</li>
                    <li>“High School English Grammar” by Wren & Martin for English.</li>
                    <li>“Quantitative Aptitude” by R.S. Aggarwal for numerical ability.</li>
                  </ul>
                </li>
                <li>
                  <b>YouTube Channels:</b> “Adda247,” “StudyIQ” for NVS exam tips and live classes.
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
              alt="NVS Non-Teaching Recruitment 2025"
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

export default NVS_Non_Teaching_2;