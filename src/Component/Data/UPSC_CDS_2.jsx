import style from "./000_Content.module.css";
import a1 from "./Pic/UPSC_CDS_2.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";

const UPSC_CDS_2 = () => {
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
    fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/UPSC_CDS.json")
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((item) => item.id === "upsccds2");
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
                  <b>General/OBC/EWS:</b> ₹200
                </li>
                <li>
                  <b>SC/ST/Female/PwD:</b> Nil
                </li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Credit/Debit Card, Net Banking, or UPI. Fee is non-refundable.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Across India (IMA: Dehradun, INA: Goa, AFA: Hyderabad, OTA: Chennai)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/07/2025)</h2>
              <ul className={style.zxk}>
                <li>
                  <b>IMA/INA:</b> Born between 02/07/1997 and 01/07/2002 (19–24 years)
                </li>
                <li>
                  <b>AFA:</b> Born between 02/07/1997 and 01/07/2001 (19–24 years); 20–24 years for commercial pilot license holders
                </li>
                <li>
                  <b>OTA:</b> Born between 02/07/1996 and 01/07/2002 (19–25 years)
                </li>
                <li>
                  <b>Age Relaxation:</b> No relaxation for SC/ST/OBC/PwD as per UPSC rules.
                </li>
                <li>Read the official UPSC CDS notification for detailed age criteria.</li>
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
                <div className={style.tablecell}>Indian Military Academy (IMA)</div>
                <div className={style.tablecell}>
                  Bachelor’s Degree from a recognized university
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Indian Naval Academy (INA)</div>
                <div className={style.tablecell}>
                  B.E./B.Tech in any discipline from a recognized institute
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Air Force Academy (AFA)</div>
                <div className={style.tablecell}>
                  Bachelor’s Degree with Physics and Mathematics at 10+2 level or B.E./B.Tech
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Officers’ Training Academy (OTA)</div>
                <div className={style.tablecell}>
                  Bachelor’s Degree from a recognized university
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>
                  <li>Read the official UPSC CDS notification for detailed eligibility criteria.</li>
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
                  <b>Details</b>
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
                  <b>Written Exam:</b> Objective-type test (English, General Knowledge, Elementary Mathematics for IMA/INA/AFA; English, General Knowledge for OTA).
                </li>
                <li>
                  <b>SSB Interview:</b> Two-stage process (Stage I: Officer Intelligence Rating, Picture Perception; Stage II: Interview, Group Testing, Psychology Tests).
                </li>
                <li>
                  <b>Medical Examination:</b> Physical and medical fitness tests as per military standards.
                </li>
                <li>
                  <b>Document Verification:</b> Verify eligibility and educational documents.
                </li>
                <li>
                  <b>Final Merit:</b> Based on Written Exam and SSB Interview marks.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Exam Pattern">
              <h2 className={style.sectiontitle}>Written Exam (IMA/INA/AFA)</h2>
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
                <div className={style.tablecell}>English</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 2</div>
                <div className={style.tablecell}>General Knowledge</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 3</div>
                <div className={style.tablecell}>Elementary Mathematics</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <h3 className={style.zxt}>Key Points (IMA/INA/AFA):</h3>
              <ul className={style.zxs}>
                <li>Objective-type, 300 marks, 6 hours total.</li>
                <li>Negative marking: 0.33 marks per wrong answer.</li>
                <li>Qualifying for SSB Interview.</li>
              </ul>
              <h2 className={style.sectiontitle}>Written Exam (OTA)</h2>
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
                <div className={style.tablecell}>English</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 2</div>
                <div className={style.tablecell}>General Knowledge</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <h3 className={style.zxt}>Key Points (OTA):</h3>
              <ul className={style.zxs}>
                <li>Objective-type, 200 marks, 4 hours total.</li>
                <li>Negative marking: 0.33 marks per wrong answer.</li>
                <li>Qualifying for SSB Interview.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <ul className={style.zxs}>
                <li>
                  <b>English:</b> Grammar, Vocabulary, Comprehension, Sentence Correction, Synonyms/Antonyms.
                </li>
                <li>
                  <b>General Knowledge:</b> Current Affairs (2024-2025), History, Geography, Polity, Economy, Science, Defense-related news.
                </li>
                <li>
                  <b>Elementary Mathematics:</b> Arithmetic, Algebra, Trigonometry, Geometry, Mensuration, Statistics (10+2 level).
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <ul className={style.zxs}>
                <li>
                  <b>IMA:</b> Train for leadership roles as Commissioned Officers in the Indian Army.
                </li>
                <li>
                  <b>INA:</b> Train for officer roles in the Indian Navy, including operations and technical duties.
                </li>
                <li>
                  <b>AFA:</b> Train as pilots or officers in the Indian Air Force for flying or ground duties.
                </li>
                <li>
                  <b>OTA:</b> Train for Short Service Commission roles in the Indian Army (Men/Women, non-technical).
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Physical and Medical Standards">
              <ul className={style.zxs}>
                <li>
                  <b>Height (Male):</b> Army/OTA: 157 cm, Navy: 157 cm, Air Force: 162.5 cm.
                </li>
                <li>
                  <b>Height (Female, OTA):</b> 152 cm.
                </li>
                <li>
                  <b>Vision:</b> 6/6 or 6/9 (corrected); no color blindness for AFA/INA.
                </li>
                <li>
                  <b>Medical Tests:</b> General health, hearing, dental, no chronic diseases or deformities.
                </li>
                <li>
                  <b>Physical Fitness:</b> Running (2.4 km in 15 min for males, 5 km in 40 min for females), push-ups, sit-ups.
                </li>
                <li>Check UPSC CDS notification for detailed standards.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="SSB Interview Process">
              <ul className={style.zxs}>
                <li>
                  <b>Stage I:</b> Officer Intelligence Rating (OIR) tests, Picture Perception and Description Test (PPDT).
                </li>
                <li>
                  <b>Stage II:</b> Interview, Group Testing (Group Discussion, Group Planning, Outdoor Tasks), Psychology Tests (TAT, WAT, SRT, Self-Description).
                </li>
                <li>
                  <b>Duration:</b> 4–5 days at SSB centers (Allahabad, Bhopal, Bangalore, Kapurthala, etc.).
                </li>
                <li>
                  <b>Focus:</b> Assess leadership, teamwork, and psychological suitability.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>10th/12th mark sheet and certificate.</li>
                <li>Bachelor’s Degree certificate/provisional certificate.</li>
                <li>Photo ID (Aadhaar, PAN, Voter ID, or Passport).</li>
                <li>Recent passport-size photographs (10 copies, 20–50 KB, 200x230 pixels).</li>
                <li>Printed application form and fee payment receipt.</li>
                <li>SSB call letter and admit card.</li>
                <li>
                  <b>Note:</b> Original documents required at SSB; discrepancies lead to disqualification.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits at CDS">
              <ul className={style.zxs}>
                <li>
                  <b>Salary:</b> ₹56,100–₹1,77,500 (Level 10) + MSP (₹15,500), DA, HRA, other allowances.
                </li>
                <li>
                  <b>Job Security:</b> Permanent (IMA/INA/AFA) or Short Service Commission (OTA) with pension benefits.
                </li>
                <li>
                  <b>Allowances:</b> Field Area Allowance, High Altitude Allowance, Uniform Allowance, Free Ration, Medical benefits.
                </li>
                <li>
                  <b>Career Growth:</b> Promotions to Major, Colonel, General ranks based on service and performance.
                </li>
                <li>
                  <b>Work Environment:</b> Prestigious officer roles with leadership opportunities in Army, Navy, or Air Force.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li>
                  <b>Check Eligibility:</b> Verify age (19–24/25 years) and education (Bachelor’s Degree/B.E./B.Tech).
                </li>
                <li>
                  <b>Visit Official Website:</b>{" "}
                  <a href="https://upsconline.nic.in" target="_blank" className="link">
                    upsconline.nic.in
                  </a>
                  .
                </li>
                <li>
                  <b>Register:</b> Complete Part-I registration (personal, educational details); upload photo (20–50 KB) and signature (10–20 KB).
                </li>
                <li>
                  <b>Fill Form:</b> Complete Part-II (exam center, academy preferences, fee payment).
                </li>
                <li>
                  <b>Pay Fee:</b> ₹200 (General/OBC/EWS) via online mode; exempt for SC/ST/Female/PwD.
                </li>
                <li>
                  <b>Submit:</b> Review, submit, and download application form. Keep Application ID.
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
                <li>Select “UPSC CDS Admit Card.”</li>
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
                  <b>Understand Syllabus:</b> Focus on English, General Knowledge, and Elementary Mathematics (IMA/INA/AFA); English, General Knowledge (OTA).
                </li>
                <li>
                  <b>Previous Papers:</b> Solve CDS 2023-2024 papers for question patterns.
                </li>
                <li>
                  <b>Time Management:</b> Practice 100 questions per section in 2 hours; aim for 60%+ accuracy.
                </li>
                <li>
                  <b>General Knowledge:</b> Read The Hindu, PIB, Manorama Yearbook for current affairs (2024-2025), defense news.
                </li>
                <li>
                  <b>English:</b> Revise grammar, vocabulary (Wren & Martin, Word Power by Norman Lewis).
                </li>
                <li>
                  <b>Mathematics:</b> Practice 10+2 level topics from R.S. Aggarwal or NCERT books.
                </li>
                <li>
                  <b>SSB Prep:</b> Practice group discussions, story writing (TAT), situation reaction tests; improve physical fitness.
                </li>
                <li>
                  <b>Mock Tests:</b> Use Testbook, Adda247, or Major Kalshi Classes for CDS-specific mocks; target 180+ (IMA/INA/AFA), 120+ (OTA).
                </li>
                <li>
                  <b>Stay Updated:</b> Follow upsc.gov.in for notifications and results.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li>
                  <b>How many vacancies in UPSC CDS?</b> {totalpost} vacancies (updated as per notification).
                </li>
                <li>
                  <b>Is there negative marking?</b> Yes, 0.33 marks per wrong answer in Written Exam.
                </li>
                <li>
                  <b>Can final year students apply?</b> Yes, subject to degree completion before training.
                </li>
                <li>
                  <b>What documents are needed?</b> Degree certificate, 10th/12th certificates, photo ID, SSB call letter.
                </li>
                <li>
                  <b>Where are exam centers?</b> Major cities across India (specified in admit card).
                </li>
                <li>
                  <b>What is the role after CDS?</b> Commissioned Officer in Army, Navy, or Air Force (IMA/INA/AFA) or Short Service Commission (OTA).
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li>
                  <a href="https://upsc.gov.in" target="_blank" className="link">
                    UPSC Official Website
                  </a>
                  : Check CDS Notification, admit cards, results.
                </li>
                <li>
                  <a href="https://testbook.com/cds" target="_blank" className="link">
                    Testbook Mock Tests
                  </a>
                  : CDS-specific mocks with analytics.
                </li>
                <li>
                  <a href="https://adda247.com/cds" target="_blank" className="link">
                    Adda247 Study Material
                  </a>
                  : Free notes on English, General Knowledge, Mathematics.
                </li>
                <li>
                  <a href="https://pib.gov.in" target="_blank" className="link">
                    PIB India
                  </a>
                  : Current affairs for General Knowledge.
                </li>
                <li>
                  <a href="https://www.jagranjosh.com/cds-previous-papers" target="_blank" className="link">
                    Previous Year Papers
                  </a>
                  : Download 2023-2024 CDS papers.
                </li>
                <li>
                  <b>Books:</b>
                  <ul>
                    <li>“Pathfinder CDS” by Arihant for overall prep.</li>
                    <li>“Manorama Yearbook” for General Knowledge.</li>
                    <li>“Objective English” by SP Bakshi for language prep.</li>
                    <li>“Quantitative Aptitude” by R.S. Aggarwal for Mathematics.</li>
                  </ul>
                </li>
                <li>
                  <b>YouTube Channels:</b> “Adda247,” “StudyIQ,” “Major Kalshi Classes” for CDS exam tips and SSB guidance.
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
              alt="UPSC CDS Recruitment 2025"
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

export default UPSC_CDS_2;