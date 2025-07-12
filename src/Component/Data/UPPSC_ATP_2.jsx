import style from "./000_Content.module.css";
import a1 from "./Pic/UPPSC_ATP_2.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";

const UPPSC_ATP_2 = () => {
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
    fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/UPPSC_ATP.json")
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((item) => item.id === "uppscatp2");
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
                  <b>General/OBC/EWS:</b> ₹125 (Exam Fee: ₹100 + Online Processing Fee: ₹25)
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
                <li>Uttar Pradesh (Town Planning Department)</li>
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
                  <b>Age Relaxation:</b> SC/ST/OBC: 5 years, PwD: 15 years, Ex-Servicemen: 3 years (after service deduction), as per UPPSC rules.
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
                <div className={style.tablecell}>Assistant Town Planner</div>
                <div className={style.tablecell}>
                  Bachelor’s Degree in Town Planning/Architecture/Civil Engineering OR Master’s Degree in Town/Urban/Regional Planning from a recognized university.
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
                  <b>Preliminary Exam:</b> Objective-type test (General Studies I & II).
                </li>
                <li>
                  <b>Main Exam:</b> Written exam with subject-specific papers (Town Planning).
                </li>
                <li>
                  <b>Interview:</b> Personality test to assess suitability for the role.
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
                <div className={style.tablecell}>General Studies I</div>
                <div className={style.tablecell}>150</div>
                <div className={style.tablecell}>200</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper II</div>
                <div className={style.tablecell}>General Studies II (CSAT)</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>200</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <h3 className={style.zxt}>Key Points (Preliminary):</h3>
              <ul className={style.zxs}>
                <li>Objective-type, multiple-choice questions.</li>
                <li>Negative marking: 0.33 marks per wrong answer.</li>
                <li>Paper II (CSAT) is qualifying (33% marks required).</li>
                <li>Total: 250 questions, 400 marks, 4 hours.</li>
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
                <div className={style.tablecell}>Paper I</div>
                <div className={style.tablecell}>Town Planning</div>
                <div className={style.tablecell}>200</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper II</div>
                <div className={style.tablecell}>General Studies</div>
                <div className={style.tablecell}>200</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <h3 className={style.zxt}>Key Points (Main):</h3>
              <ul className={style.zxs}>
                <li>Descriptive-type, written exam.</li>
                <li>Total: 400 marks, 6 hours.</li>
                <li>Interview: 100 marks.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <ul className={style.zxs}>
                <li>
                  <b>General Studies I (Prelims):</b> Current Affairs, History, Geography, Polity, Economy, Environment, Science & Technology.
                </li>
                <li>
                  <b>General Studies II - CSAT (Prelims):</b> Comprehension, Logical Reasoning, Quantitative Aptitude, Data Interpretation, Decision Making.
                </li>
                <li>
                  <b>Town Planning (Mains):</b> Urban & Regional Planning, Land Use, Transportation Planning, Housing, Environmental Planning, GIS, Master Plans.
                </li>
                <li>
                  <b>General Studies (Mains):</b> Indian Heritage, Governance, Social Issues, Uttar Pradesh-specific issues.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <ul className={style.zxs}>
                <li>
                  <b>Assistant Town Planner:</b> Prepare urban/rural development plans, land use policies, master plans, and assist in implementing town planning schemes in Uttar Pradesh.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>10th/12th mark sheet and certificate.</li>
                <li>Bachelor’s/Master’s Degree certificate in Town Planning/Architecture/Civil Engineering.</li>
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
            <CollapsibleSection title="Career Benefits at UPPSC">
              <ul className={style.zxs}>
                <li>
                  <b>Salary:</b> ₹15,600–₹39,100 (Level 10, Grade Pay ₹5400) + DA, HRA, other allowances.
                </li>
                <li>
                  <b>Job Security:</b> Permanent government post with pension under NPS.
                </li>
                <li>
                  <b>Allowances:</b> Medical benefits, Transport Allowance, Leave Benefits.
                </li>
                <li>
                  <b>Career Growth:</b> Promotions to Town Planner or higher roles via seniority or departmental exams.
                </li>
                <li>
                  <b>Work Environment:</b> Strategic roles in urban/rural planning with impact on state development.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li>
                  <b>Check Eligibility:</b> Verify age (21–40 years) and education (Bachelor’s/Master’s in relevant fields).
                </li>
                <li>
                  <b>Visit Official Website:</b>{" "}
                  <a href="https://uppsc.up.nic.in" target="_blank" className="link">
                    uppsc.up.nic.in
                  </a>
                  .
                </li>
                <li>
                  <b>Register:</b> Click “Apply Online,” register with email, mobile, and upload photo (20–50 KB) and signature (10–20 KB).
                </li>
                <li>
                  <b>Fill Form:</b> Provide personal, educational details, and select exam center preferences.
                </li>
                <li>
                  <b>Pay Fee:</b> ₹125 (General/OBC/EWS), ₹65 (SC/ST), ₹25 (PwD) via online mode.
                </li>
                <li>
                  <b>Submit:</b> Review, submit, and download application form. Keep Application Number.
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
                <li>Select “UPPSC ATP Preliminary Exam Admit Card.”</li>
                <li>Enter Application Number, Date of Birth, and captcha.</li>
                <li>Download and print admit card.</li>
                <li>
                  <b>Note:</b> Carry admit card and photo ID to exam; check UPPSC website for updates.
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li>
                  <b>Understand Syllabus:</b> Focus on General Studies, CSAT, and Town Planning subjects.
                </li>
                <li>
                  <b>Previous Papers:</b> Solve UPPSC PCS/ATP 2023-2024 papers for Prelims and Mains patterns.
                </li>
                <li>
                  <b>Time Management:</b> Practice 150 questions in 2 hours (Prelims Paper I) and descriptive answers for Mains.
                </li>
                <li>
                  <b>Current Affairs:</b> Read The Hindu, Yojana, PIB for national and UP-specific updates (2024-2025).
                </li>
                <li>
                  <b>Town Planning:</b> Study Urban Planning books (e.g., “Town Planning” by Rangwala, “Urban and Regional Planning” by Peter Hall).
                </li>
                <li>
                  <b>General Studies:</b> Revise History, Geography, Polity (Lucent’s GK, M. Laxmikanth).
                </li>
                <li>
                  <b>CSAT:</b> Practice Quantitative Aptitude, Reasoning (R.S. Aggarwal, Arihant CSAT).
                </li>
                <li>
                  <b>Mock Tests:</b> Use Drishti IAS, Vision IAS for UPPSC-specific mocks; target 250+ (Prelims) and 300+ (Mains).
                </li>
                <li>
                  <b>Stay Updated:</b> Follow uppsc.up.nic.in for notifications and results.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li>
                  <b>How many vacancies in UPPSC ATP?</b> {totalpost} vacancies (updated as per notification).
                </li>
                <li>
                  <b>Is there negative marking?</b> Yes, 0.33 marks per wrong answer in Prelims.
                </li>
                <li>
                  <b>Can final year students apply?</b> No, degree completion required by application deadline.
                </li>
                <li>
                  <b>What documents are needed?</b> Degree certificate, caste/EWS/PwD certificates, photo ID.
                </li>
                <li>
                  <b>Where are exam centers?</b> Major cities in Uttar Pradesh (specified in admit card).
                </li>
                <li>
                  <b>What is the role of Assistant Town Planner?</b> Urban/rural planning, land use policies, master plan development.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li>
                  <a href="https://uppsc.up.nic.in" target="_blank" className="link">
                    UPPSC Official Website
                  </a>
                  : Check ATP Notification, admit cards, results.
                </li>
                <li>
                  <a href="https://drishtiias.com" target="_blank" className="link">
                    Drishti IAS
                  </a>
                  : UPPSC-specific study material and mocks.
                </li>
                <li>
                  <a href="https://visionias.in" target="_blank" className="link">
                    Vision IAS
                  </a>
                  : Free notes on General Studies, Current Affairs.
                </li>
                <li>
                  <a href="https://pib.gov.in" target="_blank" className="link">
                    PIB India
                  </a>
                  : Current affairs for General Studies.
                </li>
                <li>
                  <a href="https://www.jagranjosh.com/uppsc-previous-papers" target="_blank" className="link">
                    Previous Year Papers
                  </a>
                  : Download UPPSC PCS/ATP 2023-2024 papers.
                </li>
                <li>
                  <b>Books:</b>
                  <ul>
                    <li>“Town Planning” by Rangwala for technical prep.</li>
                    <li>“Indian Polity” by M. Laxmikanth for General Studies.</li>
                    <li>“Lucent’s General Knowledge” for Prelims prep.</li>
                    <li>“CSAT Manual” by Arihant for Paper II.</li>
                  </ul>
                </li>
                <li>
                  <b>YouTube Channels:</b> “Drishti IAS,” “Unacademy UPPSC” for exam tips and live classes.
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
              alt="UPPSC Assistant Town Planner Recruitment 2025"
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

export default UPPSC_ATP_2;