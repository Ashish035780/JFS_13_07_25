import style from "./000_Content.module.css";
import a1 from "./Pic/Railway_RPF_1.jpg";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";

const Railway_RPF_1 = () => {
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
    fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/RAILWAY_RPF.json")
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((item) => item.id === "railwayrpf1");
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
            <h2 className={style.zxg}>Railway Protection Force (RPF)</h2>
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
                  <b>General/OBC:</b> ₹500
                </li>
                <li>
                  <b>SC/ST/Ex-Servicemen/Female/EWS/Minorities:</b> ₹250 (refundable on appearing for CBT)
                </li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Credit/Debit Card, Net Banking, or UPI. Fee refund for eligible candidates after CBT attendance.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Across India (Indian Railways zones)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/01/2026)</h2>
              <ul className={style.zxk}>
                <li>
                  <b>Constable (Minimum Age):</b> 18 Years
                </li>
                <li>
                  <b>Constable (Maximum Age):</b> 25 Years
                </li>
                <li>
                  <b>Sub-Inspector (Minimum Age):</b> 20 Years
                </li>
                <li>
                  <b>Sub-Inspector (Maximum Age):</b> 25 Years
                </li>
                <li>
                  <b>Age Relaxation:</b> SC/ST: 5 years, OBC: 3 years, PwD: 10–15 years, Ex-Servicemen: 3 years (after service deduction), as per RRB rules.
                </li>
                <li>Additional age relaxation as per RPF recruitment guidelines, please read the official notification.</li>
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
                <div className={style.tablecell}>Constable</div>
                <div className={style.tablecell}>
                  10th Pass (Matriculation) from a recognized board
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Sub-Inspector</div>
                <div className={style.tablecell}>
                  Bachelor’s Degree from a recognized university
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>
                  <li>Read the official RPF notification for post-wise eligibility details.</li>
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
                  <b>Computer-Based Test (CBT):</b> Objective-type test covering General Awareness, Arithmetic, General Intelligence & Reasoning.
                </li>
                <li>
                  <b>Physical Efficiency Test (PET):</b> Running, long jump, high jump (specific standards for Constable/SI).
                </li>
                <li>
                  <b>Physical Measurement Test (PMT):</b> Height, chest (for males), and weight measurements.
                </li>
                <li>
                  <b>Document Verification:</b> Verify eligibility and category documents.
                </li>
                <li>
                  <b>Medical Examination:</b> Conducted at Railway hospitals to ensure fitness for duty.
                </li>
                <li>
                  <b>Final Merit:</b> Based on CBT marks, subject to clearing PET/PMT and medical examination.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Exam Pattern">
              <h2 className={style.sectiontitle}>Computer-Based Test (CBT)</h2>
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
                <div className={style.tablecell}>General Awareness</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}>90 Minutes (120 for PwD)</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 2</div>
                <div className={style.tablecell}>Arithmetic</div>
                <div className={style.tablecell}>35</div>
                <div className={style.tablecell}>35</div>
                <div className={style.tablecell}></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 3</div>
                <div className={style.tablecell}>General Intelligence & Reasoning</div>
                <div className={style.tablecell}>35</div>
                <div className={style.tablecell}>35</div>
                <div className={style.tablecell}></div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Objective-type questions with multiple-choice answers.</li>
                <li>Negative marking: 1/3 mark deducted per wrong answer.</li>
                <li>Total: 120 questions, 120 marks, 90 minutes (120 for PwD).</li>
                <li>Available in English, Hindi, and 13 regional languages.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Physical Efficiency Test (PET) Standards">
              <ul className={style.zxs}>
                <li>
                  <b>Constable (Male):</b>
                  <ul>
                    <li>1600m run: 5 min 45 sec</li>
                    <li>Long Jump: 14 feet</li>
                    <li>High Jump: 4 feet</li>
                  </ul>
                </li>
                <li>
                  <b>Constable (Female):</b>
                  <ul>
                    <li>800m run: 3 min 40 sec</li>
                    <li>Long Jump: 9 feet</li>
                    <li>High Jump: 3 feet</li>
                  </ul>
                </li>
                <li>
                  <b>Sub-Inspector (Male):</b>
                  <ul>
                    <li>1600m run: 6 min 30 sec</li>
                    <li>Long Jump: 12 feet</li>
                    <li>High Jump: 3 feet 9 inches</li>
                  </ul>
                </li>
                <li>
                  <b>Sub-Inspector (Female):</b>
                  <ul>
                    <li>800m run: 4 min</li>
                    <li>Long Jump: 9 feet</li>
                    <li>High Jump: 3 feet</li>
                  </ul>
                </li>
                <li>
                  <b>Note:</b> PET is qualifying in nature; no marks awarded.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Physical Measurement Test (PMT) Standards">
              <ul className={style.zxs}>
                <li>
                  <b>Male (Constable/SI):</b>
                  <ul>
                    <li>Height: 165 cm (160 cm for ST)</li>
                    <li>Chest (Unexpanded/Expanded): 80/85 cm (76.2/81.2 cm for ST)</li>
                  </ul>
                </li>
                <li>
                  <b>Female (Constable/SI):</b>
                  <ul>
                    <li>Height: 157 cm (152 cm for ST)</li>
                  </ul>
                </li>
                <li>
                  <b>Note:</b> Relaxations for specific categories (e.g., Garhwalis, Gorkhas) as per notification.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <ul className={style.zxs}>
                <li>
                  <b>General Awareness:</b> Indian Railways, History, Geography, Polity, Economy, Current Affairs (2024-2025), Science.
                </li>
                <li>
                  <b>Arithmetic:</b> Number System, Percentage, Ratio, Time & Work, Averages, Simple & Compound Interest, Profit & Loss.
                </li>
                <li>
                  <b>General Intelligence & Reasoning:</b> Analogies, Coding-Decoding, Series, Puzzles, Non-Verbal Reasoning, Syllogism.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <ul className={style.zxs}>
                <li>
                  <b>Constable:</b> Ensure passenger safety, protect railway property, prevent crimes, and assist in law enforcement on trains and stations.
                </li>
                <li>
                  <b>Sub-Inspector:</b> Supervise RPF teams, investigate crimes, coordinate security operations, and enforce railway regulations.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>10th mark sheet and certificate (for Constable).</li>
                <li>Bachelor’s Degree certificate (for Sub-Inspector).</li>
                <li>Caste Certificate (SC/ST/OBC-NCL).</li>
                <li>EWS Certificate (valid for 2025-26).</li>
                <li>PwD Certificate (if applicable).</li>
                <li>Ex-Servicemen Discharge Book/Service Certificate.</li>
                <li>Photo ID (Aadhaar, PAN, Voter ID, or Passport).</li>
                <li>Recent passport-size photographs (6 copies, 35x45 mm).</li>
                <li>Printed application form and fee payment receipt.</li>
                <li>
                  <b>Note:</b> OBC-NCL certificate must mention non-creamy layer; discrepancies lead to disqualification.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Medical Examination Details">
              <ul className={style.zxs}>
                <li>
                  <b>Purpose:</b> Ensure fitness for RPF duties.
                </li>
                <li>
                  <b>Standards:</b>
                  <ul>
                    <li>
                      <b>Vision:</b> 6/6 without glasses; no color blindness or night blindness.
                    </li>
                    <li>
                      <b>Hearing:</b> Normal, without aids.
                    </li>
                    <li>
                      <b>General Health:</b> No chronic diseases or deformities affecting duties.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Tests:</b> Vision/hearing tests, blood tests, physical examination.
                </li>
                <li>
                  <b>Disqualification:</b> Failure to meet standards leads to rejection.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits at RPF">
              <ul className={style.zxs}>
                <li>
                  <b>Salary:</b> Constable: ₹21,700–₹69,100 (Level 3); Sub-Inspector: ₹35,400–₹1,12,400 (Level 6) + DA, HRA, other allowances.
                </li>
                <li>
                  <b>Job Security:</b> Permanent government posts with pension under NPS.
                </li>
                <li>
                  <b>Allowances:</b> Ration Allowance, Night Duty Allowance, Medical Benefits (CGHS), Transport Allowance.
                </li>
                <li>
                  <b>Career Growth:</b> Promotions to Head Constable, Inspector, and higher ranks via exams or seniority.
                </li>
                <li>
                  <b>Work Environment:</b> Dynamic roles in railway security, patrolling, and law enforcement.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li>
                  <b>Check Eligibility:</b> Verify age (18–25 for Constable, 20–25 for SI) and education (10th Pass for Constable, Bachelor’s for SI).
                </li>
                <li>
                  <b>Visit Official Website:</b>{" "}
                  <a href="https://rpf.indianrailways.gov.in" target="_blank" className="link">
                    rpf.indianrailways.gov.in
                  </a>
                  .
                </li>
                <li>
                  <b>Register:</b> Click “Online Application,” enter email, mobile, Aadhaar (optional), and upload photo (30–50 KB) and signature (20–30 KB).
                </li>
                <li>
                  <b>Fill Form:</b> Provide personal, educational details, and select post preferences.
                </li>
                <li>
                  <b>Pay Fee:</b> ₹500 (General/OBC) or ₹250 (SC/ST/EWS/Female/Minorities) via online mode.
                </li>
                <li>
                  <b>Submit:</b> Review, submit, and download application form. Keep Application ID.
                </li>
                <li>
                  <b>Track Application:</b> Check status and admit cards on rpf.indianrailways.gov.in.
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Download Admit Card">
              <ol className={style.zxs}>
                <li>
                  Visit the official website:{" "}
                  <a href="https://rpf.indianrailways.gov.in" target="_blank" className="link">
                    rpf.indianrailways.gov.in
                  </a>
                  .
                </li>
                <li>Navigate to “Admit Card” section.</li>
                <li>Select “RPF Constable/SI CBT Admit Card.”</li>
                <li>Enter Application ID, Date of Birth, and captcha.</li>
                <li>Download and print admit card.</li>
                <li>
                  <b>Note:</b> Carry admit card and photo ID to exam; check RRB websites for updates.
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li>
                  <b>Understand Syllabus:</b> Focus on General Awareness (Railways, Current Affairs), Arithmetic, Reasoning.
                </li>
                <li>
                  <b>Previous Papers:</b> Solve RPF Constable/SI 2018-2024 papers for question patterns.
                </li>
                <li>
                  <b>Time Management:</b> Practice 120 questions in 90 minutes; aim for 80% accuracy.
                </li>
                <li>
                  <b>Current Affairs:</b> Read The Hindu, PIB for updates (e.g., Railway Budget, 2024-2025 events).
                </li>
                <li>
                  <b>Arithmetic:</b> Practice from R.S. Aggarwal (Class 10–12 level).
                </li>
                <li>
                  <b>Reasoning:</b> Revise puzzles, coding-decoding (Arihant Reasoning).
                </li>
                <li>
                  <b>Physical Prep:</b> Train for PET (running, jumps); maintain fitness for PMT.
                </li>
                <li>
                  <b>Mock Tests:</b> Use Testbook, Adda247 for RPF-specific mocks; target 90+ marks.
                </li>
                <li>
                  <b>Stay Updated:</b> Follow rpf.indianrailways.gov.in for notifications and results.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li>
                  <b>How many vacancies in RPF?</b> {totalpost} vacancies (updated as per notification).
                </li>
                <li>
                  <b>Is there negative marking?</b> Yes, 1/3 mark deducted per wrong answer in CBT.
                </li>
                <li>
                  <b>Can 10th appearing students apply for Constable?</b> No, 10th Pass certificate required.
                </li>
                <li>
                  <b>What documents are needed?</b> 10th/Bachelor’s certificates, caste/EWS/PwD certificates, photo ID.
                </li>
                <li>
                  <b>Where are exam centers?</b> Major cities across India (specified in admit card).
                </li>
                <li>
                  <b>What is the role of RPF Constable/SI?</b> Security, patrolling, and law enforcement on railways.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li>
                  <a href="https://rpf.indianrailways.gov.in" target="_blank" className="link">
                    RPF Official Website
                  </a>
                  : Check RPF Notification, admit cards, results.
                </li>
                <li>
                  <a href="https://testbook.com/rpf-constable" target="_blank" className="link">
                    Testbook Mock Tests
                  </a>
                  : RPF-specific mocks with analytics.
                </li>
                <li>
                  <a href="https://adda247.com/rpf-constable" target="_blank" className="link">
                    Adda247 Study Material
                  </a>
                  : Free notes on Arithmetic, Reasoning, General Awareness.
                </li>
                <li>
                  <a href="https://pib.gov.in" target="_blank" className="link">
                    PIB India
                  </a>
                  : Current affairs for General Awareness.
                </li>
                <li>
                  <b>Books:</b>
                  <ul>
                    <li>“RPF Constable/SI Guide” by Arihant for overall prep.</li>
                    <li>“Lucent’s General Knowledge” for General Awareness.</li>
                    <li>“Quantitative Aptitude” by R.S. Aggarwal for Arithmetic.</li>
                    <li>“A Modern Approach to Verbal & Non-Verbal Reasoning” by R.S. Aggarwal.</li>
                  </ul>
                </li>
                <li>
                  <b>YouTube Channels:</b> “Adda247,” “StudyIQ,” “RPF Prep” for exam tips and live classes.
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
              alt="RPF Recruitment 2025"
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

export default Railway_RPF_1;