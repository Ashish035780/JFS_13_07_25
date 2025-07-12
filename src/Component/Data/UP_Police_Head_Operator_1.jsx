import style from "./000_Content.module.css";
import a1 from "./Pic/UP_Police_Head_Operator_1.jpg";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";

const UP_Police_Head_Operator_1 = () => {
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
    fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/UP_POLICE_HEAD_OPERATOR.json")
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((item) => item.id === "uppoliceheadoperator1");
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
            <h2 className={style.zxg}>Uttar Pradesh Police Recruitment and Promotion Board (UPPRPB)</h2>
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
                  <b>All Categories:</b> ₹400
                </li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Credit/Debit Card, Net Banking, or UPI. Fee is non-refundable.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Uttar Pradesh (UP Police Radio Cadre)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/07/2025)</h2>
              <ul className={style.zxk}>
                <li>
                  <b>Minimum Age:</b> 18 Years
                </li>
                <li>
                  <b>Maximum Age:</b> 28 Years
                </li>
                <li>
                  <b>Age Relaxation:</b> SC/ST/OBC: 5 years, Ex-Servicemen: 3 years, PwD: 10 years, as per UPPRPB rules.
                </li>
                <li>Additional age relaxation as per recruitment guidelines, please read the official UPPRPB notification.</li>
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
                <div className={style.tablecell}>Head Operator</div>
                <div className={style.tablecell}>
                  Three-year Diploma in Electronics/Telecommunication/Electrical/Computer Science/IT or equivalent from a recognized institute OR Bachelor’s Degree in Physics/Mathematics/Computer Science.
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>
                  <li>Read the official UPPRPB notification for detailed eligibility criteria.</li>
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
                  <b>Written Exam:</b> Objective-type test covering General Hindi, General Knowledge, Numerical & Mental Ability, and Technical Aptitude.
                </li>
                <li>
                  <b>Physical Standard Test (PST):</b> Measurement of height, chest (for males), and weight.
                </li>
                <li>
                  <b>Document Verification:</b> Verify eligibility and category documents.
                </li>
                <li>
                  <b>Medical Examination:</b> Ensure fitness for police duties.
                </li>
                <li>
                  <b>Final Merit:</b> Based on written exam marks, subject to clearing PST and medical examination.
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
                <div className={style.tablecell}>General Hindi</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>150 Minutes</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 2</div>
                <div className={style.tablecell}>General Knowledge</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 3</div>
                <div className={style.tablecell}>Numerical & Mental Ability</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 4</div>
                <div className={style.tablecell}>Technical Aptitude</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}></div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Objective-type questions with multiple-choice answers.</li>
                <li>Negative marking: 0.25 marks deducted per wrong answer.</li>
                <li>Total: 160 questions, 400 marks, 150 minutes.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Physical Standards (Head Operator)">
              <ul className={style.zxs}>
                <li>
                  <b>Physical Standard Test (PST):</b>
                  <ul>
                    <li>
                      <b>Male:</b> Height: 168 cm (163 cm for ST), Chest: 79/84 cm (74/79 cm for ST).
                    </li>
                    <li>
                      <b>Female:</b> Height: 152 cm (147 cm for ST), Weight: 40 kg minimum.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Note:</b> No Physical Efficiency Test (PET) for Head Operator, unlike other UP Police roles.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Medical Examination Details">
              <ul className={style.zxs}>
                <li>
                  <b>Purpose:</b> Ensure fitness for technical duties in UP Police Radio Cadre.
                </li>
                <li>
                  <b>Standards:</b>
                  <ul>
                    <li>
                      <b>Vision:</b> 6/6 or 6/9 without glasses; no color blindness.
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
                  <b>Tests:</b> Blood tests, vision/hearing tests, physical examination.
                </li>
                <li>
                  <b>Disqualification:</b> Failure to meet standards leads to rejection.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <ul className={style.zxs}>
                <li>
                  <b>General Hindi:</b> Grammar, Vocabulary, Comprehension, Sentence Structure, Synonyms/Antonyms.
                </li>
                <li>
                  <b>General Knowledge:</b> Current Affairs (2024-2025), Indian History, Geography, Polity, Economy, Science.
                </li>
                <li>
                  <b>Numerical & Mental Ability:</b> Arithmetic, Algebra, Percentage, Ratio, Time & Work, Puzzles, Logical Reasoning.
                </li>
                <li>
                  <b>Technical Aptitude:</b> Basics of Electronics, Telecommunication, Computer Hardware, Networking, Radio Communication Systems.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <ul className={style.zxs}>
                <li>
                  <b>Head Operator:</b> Operate and maintain radio communication equipment, manage wireless networks, troubleshoot technical issues, and support police communication operations.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>10th/12th mark sheet and certificate.</li>
                <li>Diploma/Degree certificate in relevant field.</li>
                <li>Caste Certificate (SC/ST/OBC).</li>
                <li>EWS Certificate (valid for 2025-26).</li>
                <li>PwD Certificate (if applicable).</li>
                <li>Ex-Servicemen Discharge Book/Service Certificate.</li>
                <li>Photo ID (Aadhaar, PAN, Voter ID, or Passport).</li>
                <li>Recent passport-size photographs (6 copies, 20–50 KB, 200x230 pixels).</li>
                <li>Printed application form and fee payment receipt.</li>
                <li>
                  <b>Note:</b> OBC certificate must mention non-creamy layer; discrepancies lead to disqualification.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits at UP Police">
              <ul className={style.zxs}>
                <li>
                  <b>Salary:</b> ₹35,400–₹1,12,400 (Level 6) + DA, HRA, other allowances.
                </li>
                <li>
                  <b>Job Security:</b> Permanent government job with pension under NPS.
                </li>
                <li>
                  <b>Allowances:</b> Medical benefits, Uniform Allowance, Transport Allowance, Leave Benefits.
                </li>
                <li>
                  <b>Career Growth:</b> Promotions to higher ranks in Radio Cadre (e.g., Assistant Operator, Radio Officer) via departmental exams or seniority.
                </li>
                <li>
                  <b>Work Environment:</b> Technical role in UP Police Radio Cadre with focus on communication systems.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li>
                  <b>Check Eligibility:</b> Verify age (18–28 years) and education (Diploma/Degree in relevant field).
                </li>
                <li>
                  <b>Visit Official Website:</b>{" "}
                  <a href="http://uppbpb.gov.in" target="_blank" className="link">
                    uppbpb.gov.in
                  </a>
                  .
                </li>
                <li>
                  <b>Register:</b> Click “Recruitment,” enter email, mobile, Aadhaar, and upload photo (20–50 KB) and signature (10–20 KB).
                </li>
                <li>
                  <b>Fill Form:</b> Provide personal, educational details, and select exam center preferences.
                </li>
                <li>
                  <b>Pay Fee:</b> ₹400 (all categories) via online mode.
                </li>
                <li>
                  <b>Submit:</b> Review, submit, and download application form. Keep Application ID.
                </li>
                <li>
                  <b>Track Application:</b> Check status and admit cards on uppbpb.gov.in.
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Download Admit Card">
              <ol className={style.zxs}>
                <li>
                  Visit the official website:{" "}
                  <a href="http://uppbpb.gov.in" target="_blank" className="link">
                    uppbpb.gov.in
                  </a>
                  .
                </li>
                <li>Navigate to “Recruitment” section.</li>
                <li>Select “UP Police Head Operator Admit Card.”</li>
                <li>Enter Application ID, Date of Birth, and captcha.</li>
                <li>Download and print admit card.</li>
                <li>
                  <b>Note:</b> Carry admit card and photo ID to exam; check UPPRPB website for updates.
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li>
                  <b>Understand Syllabus:</b> Focus on General Hindi, General Knowledge, Numerical & Mental Ability, and Technical Aptitude.
                </li>
                <li>
                  <b>Previous Papers:</b> Solve UP Police Operator or similar exams (e.g., UP Police Constable) for question patterns.
                </li>
                <li>
                  <b>Time Management:</b> Practice 160 questions in 150 minutes; aim for 80% accuracy.
                </li>
                <li>
                  <b>Current Affairs:</b> Read Dainik Jagran, PIB for UP-specific and national updates (2024-2025).
                </li>
                <li>
                  <b>Numerical Ability:</b> Practice arithmetic, algebra from R.S. Aggarwal (Class 10–12 level).
                </li>
                <li>
                  <b>General Hindi:</b> Revise grammar, vocabulary (Lucent’s Hindi, Arihant).
                </li>
                <li>
                  <b>Technical Aptitude:</b> Study electronics, telecommunication basics (Objective Electronics by VK Mehta).
                </li>
                <li>
                  <b>Mock Tests:</b> Use Testbook, Adda247 for UP Police Operator mocks; target 300+ marks.
                </li>
                <li>
                  <b>Physical Prep:</b> Ensure height/chest/weight compliance for PST.
                </li>
                <li>
                  <b>Stay Updated:</b> Follow uppbpb.gov.in for notifications and results.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li>
                  <b>How many vacancies in UP Police Head Operator?</b> {totalpost} vacancies (updated as per notification).
                </li>
                <li>
                  <b>Is there negative marking?</b> Yes, 0.25 marks per wrong answer.
                </li>
                <li>
                  <b>Can final year Diploma students apply?</b> No, Diploma/Degree must be completed.
                </li>
                <li>
                  <b>What documents are needed?</b> Diploma/Degree certificate, caste/EWS/PwD certificates, photo ID.
                </li>
                <li>
                  <b>Where are exam centers?</b> Major cities in Uttar Pradesh (specified in admit card).
                </li>
                <li>
                  <b>What is the role of Head Operator?</b> Manage and maintain police communication systems.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li>
                  <a href="http://uppbpb.gov.in" target="_blank" className="link">
                    UPPRPB Official Website
                  </a>
                  : Check UP Police Head Operator Notification, admit cards, results.
                </li>
                <li>
                  <a href="https://testbook.com" target="_blank" className="link">
                    Testbook Mock Tests
                  </a>
                  : UP Police-specific mocks with analytics.
                </li>
                <li>
                  <a href="https://adda247.com" target="_blank" className="link">
                    Adda247 Study Material
                  </a>
                  : Free notes on Hindi, Numerical Ability, Technical Aptitude.
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
                    <li>“UP Police Operator Guide” by Arihant for overall prep.</li>
                    <li>“Lucent’s General Knowledge” for General Awareness.</li>
                    <li>“Objective Hindi” by Arihant for Hindi prep.</li>
                    <li>“Objective Electronics” by VK Mehta for Technical Aptitude.</li>
                  </ul>
                </li>
                <li>
                  <b>YouTube Channels:</b> “Adda247,” “StudyIQ,” “UP Police Exams” for exam tips and live classes.
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
              alt="UP Police Head Operator Recruitment 2025"
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

export default UP_Police_Head_Operator_1;