import style from "./000_Content.module.css";
import a1 from "./Pic/Nabard_Assistant_Manager_2.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";

const Nabard_Assistant_Manager_2 = () => {
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
    fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/NABARD_ASSISTANT_MANAGER.json")
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((item) => item.id === "nabardassistantmanager2");
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
            <h2 className={style.zxg}>National Bank for Agriculture and Rural Development (NABARD)</h2>
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
                  <b>General/OBC/EWS:</b> ₹850
                </li>
                <li>
                  <b>SC/ST/PwD:</b> ₹150
                </li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Credit/Debit Card,
                  Net Banking, UPI. Fee is non-refundable.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Across India (NABARD offices, primarily Mumbai and regional offices)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/07/2025)</h2>
              <ul className={style.zxk}>
                <li>
                  <b>Minimum Age:</b> 21 Years
                </li>
                <li>
                  <b>Maximum Age:</b> 30 Years
                </li>
                <li>
                  <b>Age Relaxation:</b> SC/ST: 5 years, OBC: 3 years, PwD: 10 years
                  (General), 13 years (OBC), 15 years (SC/ST), as per NABARD rules.
                </li>
                <li>
                  Additional age relaxation as per recruitment guidelines, please read
                  the official NABARD Grade A notification.
                </li>
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
                <div className={style.tablecell}>Assistant Manager (Grade A)</div>
                <div className={style.tablecell}>
                  Bachelor’s Degree in relevant discipline (e.g., Agriculture, Economics,
                  Finance, Management) with minimum 60% marks (55% for SC/ST/PwD) or
                  equivalent CGPA from a recognized university.
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>
                  <li>
                    Read the official NABARD Grade A notification for stream-wise
                    eligibility details.
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
              <h2 className={style.sectiontitle}>Preliminary Examination (Phase I)</h2>
              <div
                style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }}
                className={style.tablerow}
              >
                <div className={style.tablecell}>Section</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Reasoning</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell} rowSpan="8">
                  120 Minutes (Composite)
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>English Language</div>
                <div className={style.tablecell}>30</div>
                <div className={style.tablecell}>30</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Computer Knowledge</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>20</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>General Awareness</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>20</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Quantitative Aptitude</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>20</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>
                  Economic & Social Issues (with focus on Rural India)
                </div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>40</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>
                  Agriculture & Rural Development (with focus on Rural India)
                </div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>40</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Decision Making (Merit-based)</div>
                <div className={style.tablecell}>10</div>
                <div className={style.tablecell}>10</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>
                  Objective-type, online exam with 200 questions, 200 marks, 120
                  minutes.
                </li>
                <li>
                  Negative marking: 0.25 marks deducted per wrong answer in merit
                  sections.
                </li>
                <li>
                  Qualifying sections: Reasoning, English, Computer Knowledge,
                  Quantitative Aptitude, Decision Making.
                </li>
                <li>Merit sections: General Awareness, ESI, ARD.</li>
              </ul>
              <h2 className={style.sectiontitle}>Main Examination (Phase II)</h2>
              <div
                style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }}
                className={style.tablerow}
              >
                <div className={style.tablecell}>Paper</div>
                <div className={style.tablecell}>Type</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>
                  Paper I: General English
                </div>
                <div className={style.tablecell}>Descriptive</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>90 Minutes</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>
                  Paper II: ESI & ARD
                </div>
                <div className={style.tablecell}>Objective</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>90 Minutes</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Paper I: Essay, Precis, Letter Writing, Comprehension.</li>
                <li>Paper II: 30 questions, 0.25 marks negative marking.</li>
                <li>Total: 200 marks, 180 minutes.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <ul className={style.zxs}>
                <li>
                  <b>Reasoning:</b> Puzzles, Seating Arrangement, Syllogism,
                  Blood Relations, Coding-Decoding.
                </li>
                <li>
                  <b>English Language:</b> Reading Comprehension, Grammar,
                  Vocabulary, Essay Writing, Precis.
                </li>
                <li>
                  <b>Quantitative Aptitude:</b> Arithmetic, Data Interpretation,
                  Simplification, Number Series.
                </li>
                <li>
                  <b>General Awareness:</b> Current Affairs (2024-2025), Banking
                  Awareness, Economy, Rural Development Schemes.
                </li>
                <li>
                  <b>Economic & Social Issues (ESI):</b> Indian Economy, Rural
                  Credit, Poverty Alleviation, Government Schemes (e.g., MGNREGA,
                  PMKSY).
                </li>
                <li>
                  <b>Agriculture & Rural Development (ARD):</b> Agronomy, Soil
                  Science, Agricultural Economics, Rural Development Programs,
                  Irrigation Systems.
                </li>
                <li>
                  <b>Computer Knowledge:</b> Basics of Computers, MS Office,
                  Internet, Networking.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <ul className={style.zxs}>
                <li>
                  <b>Assistant Manager (Grade A):</b> Handle rural development
                  projects, credit planning, policy formulation, and coordination
                  with banks and government bodies for agricultural and rural
                  financing.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Selection Process">
              <ul className={style.zxs}>
                <li>
                  <b>Phase I (Preliminary Exam):</b> Online objective test,
                  qualifying in nature.
                </li>
                <li>
                  <b>Phase II (Main Exam):</b> Paper I (Descriptive English) and
                  Paper II (Objective ESI & ARD), merit-based.
                </li>
                <li>
                  <b>Phase III (Interview):</b> 50 marks, conducted by NABARD panel.
                </li>
                <li>
                  <b>Final Merit:</b> Based on Phase II marks and Interview
                  performance.
                </li>
                <li>
                  <b>Document Verification:</b> Verify eligibility and category
                  documents post-interview.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>Graduation mark sheets and degree certificate.</li>
                <li>Caste Certificate (SC/ST/OBC-NCL, if applicable).</li>
                <li>EWS Certificate (valid for 2025-26).</li>
                <li>PwD Certificate (if applicable).</li>
                <li>Photo ID (Aadhaar, PAN, Voter ID, or Passport).</li>
                <li>Recent passport-size photographs (6 copies, 20–50 KB, 200x230 pixels).</li>
                <li>Printed application form.</li>
                <li>Fee payment receipt (if applicable).</li>
                <li>
                  <b>Note:</b> OBC-NCL certificate must mention non-creamy layer;
                  discrepancies lead to disqualification.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits at NABARD Grade A">
              <ul className={style.zxs}>
                <li>
                  <b>Salary:</b> ₹44,500–₹89,150 (Pay Level 10) + DA, HRA, Medical
                  Allowance, other benefits.
                </li>
                <li>
                  <b>Job Security:</b> Permanent officer-level post with pension under
                  NPS.
                </li>
                <li>
                  <b>Allowances:</b> Dearness Allowance, House Rent Allowance, Medical
                  Benefits, Leave Fare Concession.
                </li>
                <li>
                  <b>Career Growth:</b> Promotions to Grade B, Grade C, and higher
                  roles through internal exams and service.
                </li>
                <li>
                  <b>Work Environment:</b> Prestigious role in rural and agricultural
                  development, with opportunities in policy-making.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li>
                  <b>Check Eligibility:</b> Verify age (21–30 years) and education
                  (Bachelor’s Degree).
                </li>
                <li>
                  <b>Visit Official Website:</b>{" "}
                  <a href="https://www.nabard.org" target="_blank" className="link">
                    nabard.org
                  </a>
                  .
                </li>
                <li>
                  <b>Register:</b> Click “Careers,” then “Apply Online,” enter email,
                  mobile, and Aadhaar (optional).
                </li>
                <li>
                  <b>Fill Form:</b> Provide personal, educational, and stream
                  preferences.
                </li>
                <li>
                  <b>Pay Fee:</b> ₹850 (General/OBC/EWS) or ₹150 (SC/ST/PwD) via
                  online mode.
                </li>
                <li>
                  <b>Submit:</b> Review, submit, and download application form. Keep
                  Application ID.
                </li>
                <li>
                  <b>Track Application:</b> Check status and admit cards on nabard.org.
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Download Admit Card">
              <ol className={style.zxs}>
                <li>
                  Visit the official website:{" "}
                  <a href="https://www.nabard.org" target="_blank" className="link">
                    nabard.org
                  </a>
                  .
                </li>
                <li>Navigate to “Careers” section.</li>
                <li>Select “NABARD Grade A Admit Card.”</li>
                <li>Enter Application ID, Date of Birth, and captcha.</li>
                <li>Download and print admit card.</li>
                <li>
                  <b>Note:</b> Carry admit card and photo ID to exam; check nabard.org
                  for updates.
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li>
                  <b>Understand Syllabus:</b> Focus on ESI, ARD, Reasoning, English,
                  and Quantitative Aptitude.
                </li>
                <li>
                  <b>Previous Papers:</b> Solve NABARD Grade A 2023-2024 papers for
                  question patterns.
                </li>
                <li>
                  <b>Time Management:</b> Practice 200 questions in 120 minutes for
                  Phase I; aim for 80% accuracy.
                </li>
                <li>
                  <b>Current Affairs:</b> Read The Hindu, PIB, Economic Survey, and
                  NABARD reports (2024-2025).
                </li>
                <li>
                  <b>ESI & ARD:</b> Study rural development schemes, agricultural
                  economics, and government policies (use “Agriculture at a Glance” by
                  R.K. Sharma).
                </li>
                <li>
                  <b>English:</b> Practice essay and precis writing; revise grammar
                  (Wren & Martin).
                </li>
                <li>
                  <b>Mock Tests:</b> Use Adda247, Oliveboard for NABARD-specific mocks;
                  target 130+ marks in Phase I.
                </li>
                <li>
                  <b>Interview Prep:</b> Prepare for questions on rural development,
                  banking, and personal background.
                </li>
                <li>
                  <b>Stay Updated:</b> Follow nabard.org for notifications and
                  results.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li>
                  <b>How many vacancies in NABARD Grade A?</b> {totalpost} vacancies
                  (updated as per notification).
                </li>
                <li>
                  <b>Is there negative marking?</b> Yes, 0.25 marks per wrong answer
                  in merit sections of Phase I and Phase II.
                </li>
                <li>
                  <b>Can final year students apply?</b> No, a completed Bachelor’s
                  Degree is required.
                </li>
                <li>
                  <b>What documents are needed?</b> Degree certificate, caste/EWS/PwD
                  certificates, photo ID.
                </li>
                <li>
                  <b>Where are exam centers?</b> Major cities across India.
                </li>
                <li>
                  <b>What is the role of Assistant Manager?</b> Manage rural
                  development, credit planning, and policy formulation.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li>
                  <a href="https://www.nabard.org" target="_blank" className="link">
                    NABARD Official Website
                  </a>
                  : Check Grade A notification, admit cards, results.
                </li>
                <li>
                  <a
                    href="https://www.oliveboard.in/nabard-grade-a"
                    target="_blank"
                    className="link"
                  >
                    Oliveboard Mock Tests
                  </a>
                  : NABARD-specific mocks with analytics.
                </li>
                <li>
                  <a
                    href="https://adda247.com/nabard-grade-a"
                    target="_blank"
                    className="link"
                  >
                    Adda247 Study Material
                  </a>
                  : Free notes on ESI, ARD, Reasoning, English.
                </li>
                <li>
                  <a href="https://pib.gov.in" target="_blank" className="link">
                    PIB India
                  </a>
                  : Current affairs for General Awareness.
                </li>
                <li>
                  <a
                    href="https://www.jagranjosh.com/nabard-grade-a-previous-papers"
                    target="_blank"
                    className="link"
                  >
                    Previous Year Papers
                  </a>
                  : Download 2023-2024 papers.
                </li>
                <li>
                  <b>Books:</b>
                  <ul>
                    <li>“NABARD Grade A Guide” by Arihant for overall prep.</li>
                    <li>
                      “Agriculture at a Glance” by R.K. Sharma for ARD.
                    </li>
                    <li>
                      “Indian Economy” by Ramesh Singh for ESI.
                    </li>
                    <li>
                      “High School English Grammar” by Wren & Martin for English.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>YouTube Channels:</b> “Adda247,” “StudyIQ” for NABARD Grade A
                  exam tips and live classes.
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
              alt="NABARD Grade A Recruitment 2025"
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

export default Nabard_Assistant_Manager_2;