import style from "./000_Content.module.css";
import a1 from "./Pic/Railway_Group_D_2.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";

const Railway_Group_D_2 = () => {
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
    fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/RAILWAY_GROUP_D.json")
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((item) => item.id === "railwaygroupd2");
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
            <h2 className={style.zxg}>Indian Railways (RRC)</h2>
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
                  <b>General/OBC/EWS:</b> ₹500 (₹400 refunded on appearing for CBT)
                </li>
                <li>
                  <b>SC/ST/Ex-Servicemen/Female/PwD/Transgender/Minorities/Economically Backward Class:</b> ₹250 (fully refunded on appearing for CBT)
                </li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Credit/Debit Card, Net Banking, or UPI. Refund processed after CBT appearance.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Across India (various Railway Zones as per RRC allocation)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/01/2026)</h2>
              <ul className={style.zxk}>
                <li>
                  <b>Minimum Age:</b> 18 Years
                </li>
                <li>
                  <b>Maximum Age:</b> 33 Years
                </li>
                <li>
                  <b>Age Relaxation:</b> SC/ST: 5 years, OBC: 3 years, PwD: 10–15 years, Ex-Servicemen: 3 years (after service deduction), as per Railway rules.
                </li>
                <li>Additional age relaxation as per RRC guidelines, please read the official Group D notification.</li>
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
                <div className={style.tablecell}>Group D (Track Maintainer, Helper, Porter, etc.)</div>
                <div className={style.tablecell}>
                  10th Pass (Matriculation) or ITI from a recognized board/institution
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>
                  <li>Read the official RRC Group D notification for post-wise eligibility details.</li>
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
                  <b>Computer-Based Test (CBT):</b> Objective-type test covering General Science, Mathematics, General Intelligence, and General Awareness.
                </li>
                <li>
                  <b>Physical Efficiency Test (PET):</b> Qualifying physical tasks (e.g., running, lifting weights).
                </li>
                <li>
                  <b>Document Verification:</b> Verify eligibility and category documents.
                </li>
                <li>
                  <b>Medical Examination:</b> Ensure fitness for Group D duties.
                </li>
                <li>
                  <b>Final Merit:</b> Based on CBT marks, subject to clearing PET and medical examination.
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
                <div className={style.tablecell}>Mathematics</div>
                <div className={style.tablecell}>25</div>
                <div className={style.tablecell}>25</div>
                <div className={style.tablecell}>90 Minutes (120 for PwD)</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 2</div>
                <div className={style.tablecell}>General Intelligence & Reasoning</div>
                <div className={style.tablecell}>30</div>
                <div className={style.tablecell}>30</div>
                <div className={style.tablecell}></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 3</div>
                <div className={style.tablecell}>General Science</div>
                <div className={style.tablecell}>25</div>
                <div className={style.tablecell}>25</div>
                <div className={style.tablecell}></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 4</div>
                <div className={style.tablecell}>General Awareness & Current Affairs</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}></div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Objective-type questions with multiple-choice answers.</li>
                <li>Negative marking: 1/3 mark deducted per wrong answer.</li>
                <li>Total: 100 questions, 100 marks, 90 minutes (120 for PwD).</li>
                <li>PET is qualifying; medical examination mandatory.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <ul className={style.zxs}>
                <li>
                  <b>Mathematics:</b> Number System, Decimals, Fractions, LCM/HCF, Ratio, Percentage, Time & Work, Algebra, Geometry.
                </li>
                <li>
                  <b>General Intelligence & Reasoning:</b> Analogies, Coding-Decoding, Series, Puzzles, Blood Relations, Non-Verbal Reasoning.
                </li>
                <li>
                  <b>General Science:</b> Physics, Chemistry, Biology (Class 10 level).
                </li>
                <li>
                  <b>General Awareness & Current Affairs:</b> History, Geography, Polity, Economy, Railways, Current Events (2024-2025).
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <ul className={style.zxs}>
                <li>
                  <b>Track Maintainer:</b> Maintain railway tracks, ensure safety and functionality.
                </li>
                <li>
                  <b>Helper:</b> Assist in technical and operational tasks in various railway departments.
                </li>
                <li>
                  <b>Porter:</b> Handle passenger services, luggage, and station operations.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Physical Efficiency Test (PET)">
              <ul className={style.zxs}>
                <li>
                  <b>Male:</b>
                  <ul>
                    <li>Run 1000 meters in 4 minutes 15 seconds (one chance).</li>
                    <li>Lift and carry 35 kg for 100 meters in 2 minutes (one chance).</li>
                  </ul>
                </li>
                <li>
                  <b>Female:</b>
                  <ul>
                    <li>Run 1000 meters in 5 minutes 40 seconds (one chance).</li>
                    <li>Lift and carry 20 kg for 100 meters in 2 minutes (one chance).</li>
                  </ul>
                </li>
                <li>
                  <b>Note:</b> PET is qualifying; PwD candidates are exempt.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Medical Examination Details">
              <ul className={style.zxs}>
                <li>
                  <b>Purpose:</b> Ensure fitness for Group D duties in Indian Railways.
                </li>
                <li>
                  <b>Standards:</b>
                  <ul>
                    <li>
                      <b>Vision:</b> A2 medical standard (6/9 or 6/12 with/without glasses; no color blindness).
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
                  <b>Disqualification:</b> Failure to meet A2 medical standards leads to rejection.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>10th mark sheet and certificate.</li>
                <li>ITI certificate (if applicable).</li>
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
            <CollapsibleSection title="Career Benefits at Indian Railways">
              <ul className={style.zxs}>
                <li>
                  <b>Salary:</b> ₹18,000–₹56,900 (Level 1) + DA, HRA, Transport Allowance, other allowances.
                </li>
                <li>
                  <b>Job Security:</b> Permanent government posts with pension under NPS.
                </li>
                <li>
                  <b>Allowances:</b> Medical benefits, Railway Pass for travel, Housing (if available).
                </li>
                <li>
                  <b>Career Growth:</b> Promotions to Group C posts (e.g., Ticket Collector) via departmental exams or seniority.
                </li>
                <li>
                  <b>Work Environment:</b> Operational and technical roles across railway zones with stable employment.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li>
                  <b>Check Eligibility:</b> Verify age (18–33 years) and education (10th Pass or ITI).
                </li>
                <li>
                  <b>Visit Official Website:</b>{" "}
                  <a href="https://www.rrcb.gov.in" target="_blank" className="link">
                    rrcb.gov.in
                  </a>{" "}
                  or respective RRC websites.
                </li>
                <li>
                  <b>Register:</b> Click “Online Application,” enter email, mobile, Aadhaar (optional), and upload photo (20–50 KB) and signature (10–20 KB).
                </li>
                <li>
                  <b>Fill Form:</b> Provide personal, educational details, and select preferred railway zone.
                </li>
                <li>
                  <b>Pay Fee:</b> ₹500 (General/OBC/EWS) or ₹250 (SC/ST/PwD/Female/others) via online mode; refund after CBT.
                </li>
                <li>
                  <b>Submit:</b> Review, submit, and download application form. Keep Application ID.
                </li>
                <li>
                  <b>Track Application:</b> Check status and admit cards on RRC websites.
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Download Admit Card">
              <ol className={style.zxs}>
                <li>
                  Visit the official RRC website or{" "}
                  <a href="https://www.rrcb.gov.in" target="_blank" className="link">
                    rrcb.gov.in
                  </a>
                  .
                </li>
                <li>Navigate to “Admit Card” section.</li>
                <li>Select “Railway Group D CBT Admit Card.”</li>
                <li>Enter Application ID, Date of Birth, and captcha.</li>
                <li>Download and print admit card.</li>
                <li>
                  <b>Note:</b> Carry admit card and photo ID to exam; check respective RRC website for updates.
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li>
                  <b>Understand Syllabus:</b> Focus on Mathematics, General Intelligence, General Science, and General Awareness.
                </li>
                <li>
                  <b>Previous Papers:</b> Solve RRC Group D 2019-2022 papers for question patterns.
                </li>
                <li>
                  <b>Time Management:</b> Practice 100 questions in 90 minutes; aim for 80% accuracy.
                </li>
                <li>
                  <b>Current Affairs:</b> Read The Hindu, PIB for updates (e.g., Railways, Budget 2024-2025).
                </li>
                <li>
                  <b>Mathematics:</b> Practice arithmetic from R.S. Aggarwal (Class 10 level).
                </li>
                <li>
                  <b>General Science:</b> Revise NCERT Class 9-10 Physics, Chemistry, Biology.
                </li>
                <li>
                  <b>Physical Prep:</b> Train for PET (running, weight lifting); maintain fitness.
                </li>
                <li>
                  <b>Mock Tests:</b> Use Testbook, Adda247 for Group D-specific mocks; target 70+ marks.
                </li>
                <li>
                  <b>Stay Updated:</b> Follow rrcb.gov.in and RRC websites for notifications and results.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li>
                  <b>How many vacancies in Railway Group D?</b> {totalpost} vacancies (updated as per notification).
                </li>
                <li>
                  <b>Is there negative marking?</b> Yes, 1/3 mark deducted per wrong answer in CBT.
                </li>
                <li>
                  <b>Can 10th appearing students apply?</b> No, 10th Pass certificate required.
                </li>
                <li>
                  <b>What documents are needed?</b> 10th/ITI certificates, caste/EWS/PwD certificates, photo ID.
                </li>
                <li>
                  <b>Where are exam centers?</b> Major cities across India (specified in admit card).
                </li>
                <li>
                  <b>What is the role of Group D posts?</b> Track maintenance, operational support, and station duties.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li>
                  <a href="https://www.rrcb.gov.in" target="_blank" className="link">
                    RRC Official Website
                  </a>
                  : Check Group D Notification, admit cards, results.
                </li>
                <li>
                  <a href="https://testbook.com/railway-group-d" target="_blank" className="link">
                    Testbook Mock Tests
                  </a>
                  : Group D-specific mocks with analytics.
                </li>
                <li>
                  <a href="https://adda247.com/railway-group-d" target="_blank" className="link">
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
                  <b>Books:</b>
                  <ul>
                    <li>“RRC Group D Guide” by Arihant for overall prep.</li>
                    <li>“Lucent’s General Knowledge” for General Awareness.</li>
                    <li>“NCERT Science” (Class 9-10) for General Science.</li>
                    <li>“Quantitative Aptitude” by R.S. Aggarwal for Mathematics.</li>
                  </ul>
                </li>
                <li>
                  <b>YouTube Channels:</b> “Adda247,” “StudyIQ,” “RBE Revolution” for Group D exam tips and live classes.
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
              alt="Railway Group D Recruitment 2025"
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

export default Railway_Group_D_2;