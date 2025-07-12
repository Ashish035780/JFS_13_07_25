import style from "./000_Content.module.css";
import a1 from "./Pic/Rajasthan_TGT_Teacher_1.jpg";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";

const Rajasthan_TGT_Teacher_1 = () => {
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
    fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/RAJASTHAN_TGT_TEACHER.json")
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((item) => item.id === "rajasthantgtteacher1");
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
            <h2 className={style.zxg}>Rajasthan Public Service Commission (RPSC)</h2>
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
                  <b>General/EWS/OBC (Creamy Layer):</b> ₹600
                </li>
                <li>
                  <b>OBC (Non-Creamy Layer)/MBC/SC/ST/PwD:</b> ₹400
                </li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Credit/Debit Card, Net Banking, or UPI. Additional correction fee may apply as per RPSC rules.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Rajasthan (Government schools under Rajasthan Education Department)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/01/2026)</h2>
              <ul className={style.zxk}>
                <li>
                  <b>Minimum Age:</b> 18 Years
                </li>
                <li>
                  <b>Maximum Age:</b> 40 Years
                </li>
                <li>
                  <b>Age Relaxation:</b> SC/ST/OBC (Male): 5 years, SC/ST/OBC (Female): 10 years, General (Female): 5 years, PwD: 10–15 years, as per RPSC rules.
                </li>
                <li>Additional age relaxation as per recruitment guidelines, please read the official RPSC notification.</li>
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
                <div className={style.tablecell}>Senior Teacher Grade II (TGT)</div>
                <div className={style.tablecell}>
                  Bachelor’s Degree in relevant subject with B.Ed. or equivalent from a recognized university, and must have passed REET/RTET.
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>
                  <li>Read the official RPSC notification for subject-wise eligibility details.</li>
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
                  <b>Subject</b>
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
                  <b>Written Exam:</b> Competitive exam with two papers (Paper I: General Knowledge; Paper II: Subject-specific).
                </li>
                <li>
                  <b>Document Verification:</b> Verify eligibility, educational certificates, and REET/RTET qualification.
                </li>
                <li>
                  <b>Final Merit:</b> Based on written exam marks and REET/RTET scores (as per RPSC weightage).
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Exam Pattern">
              <h2 className={style.sectiontitle}>Written Examination</h2>
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
                <div className={style.tablecell}>
                  General Knowledge, Rajasthan History, Culture, Geography
                </div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>200</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper II</div>
                <div className={style.tablecell}>
                  Subject-specific (e.g., Hindi, English, Maths, Science)
                </div>
                <div className={style.tablecell}>150</div>
                <div className={style.tablecell}>300</div>
                <div className={style.tablecell}>2.5 Hours</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Objective-type questions with multiple-choice answers.</li>
                <li>Negative marking: 1/3 mark deducted per wrong answer.</li>
                <li>Total: 250 questions, 500 marks, 4.5 hours.</li>
                <li>Paper I is qualifying; Paper II marks contribute significantly to merit.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <ul className={style.zxs}>
                <li>
                  <b>Paper I (General Knowledge):</b> Rajasthan History, Art, Culture, Geography, Polity, Economy, Current Affairs, General Science.
                </li>
                <li>
                  <b>Paper II (Subject-specific):</b> Subject-related topics at Bachelor’s Degree level (e.g., Hindi Literature, Mathematics, Science concepts), Pedagogical skills, Teaching Methods.
                </li>
                <li>
                  <b>REET/RTET:</b> Candidates must have a valid REET/RTET certificate for eligibility.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <ul className={style.zxs}>
                <li>
                  <b>Senior Teacher Grade II (TGT):</b> Teach subjects like Hindi, English, Mathematics, Science, Social Science, or Sanskrit in government secondary schools in Rajasthan.
                </li>
                <li>
                  <b>Responsibilities:</b> Lesson planning, student evaluation, curriculum implementation, and co-curricular activities.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>Bachelor’s Degree mark sheet and certificate.</li>
                <li>B.Ed. certificate.</li>
                <li>REET/RTET certificate.</li>
                <li>Caste Certificate (SC/ST/OBC-NCL/MBC).</li>
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
            <CollapsibleSection title="Career Benefits at RPSC TGT">
              <ul className={style.zxs}>
                <li>
                  <b>Salary:</b> ₹47,600–₹1,51,100 (Level 10) + DA, HRA, other allowances.
                </li>
                <li>
                  <b>Job Security:</b> Permanent government teaching posts with pension under NPS.
                </li>
                <li>
                  <b>Allowances:</b> Medical benefits, House Rent Allowance, Dearness Allowance, Leave Benefits.
                </li>
                <li>
                  <b>Career Growth:</b> Promotions to Headmaster, Principal, or other administrative roles via seniority or exams.
                </li>
                <li>
                  <b>Work Environment:</b> Stable teaching roles in Rajasthan government schools with academic responsibilities.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li>
                  <b>Check Eligibility:</b> Verify age (18–40 years), education (Bachelor’s Degree + B.Ed.), and REET/RTET qualification.
                </li>
                <li>
                  <b>Visit Official Website:</b>{" "}
                  <a href="https://rpsc.rajasthan.gov.in" target="_blank" className="link">
                    rpsc.rajasthan.gov.in
                  </a>
                  .
                </li>
                <li>
                  <b>Register on SSO Portal:</b> Create an account on Rajasthan SSO (sso.rajasthan.gov.in) using email, mobile, and Aadhaar (optional).
                </li>
                <li>
                  <b>Fill Form:</b> Log in to SSO, select RPSC TGT recruitment, provide personal, educational, and subject details, upload photo (20–50 KB) and signature (10–20 KB).
                </li>
                <li>
                  <b>Pay Fee:</b> ₹600 (General/EWS/OBC-CL) or ₹400 (OBC-NCL/SC/ST/PwD) via online mode.
                </li>
                <li>
                  <b>Submit:</b> Review, submit, and download application form. Keep Application ID.
                </li>
                <li>
                  <b>Track Application:</b> Check status and admit cards on rpsc.rajasthan.gov.in or SSO portal.
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Download Admit Card">
              <ol className={style.zxs}>
                <li>
                  Visit the official website:{" "}
                  <a href="https://rpsc.rajasthan.gov.in" target="_blank" className="link">
                    rpsc.rajasthan.gov.in
                  </a>{" "}
                  or SSO portal (sso.rajasthan.gov.in).
                </li>
                <li>Navigate to “Admit Card” section.</li>
                <li>Select “RPSC Senior Teacher Grade II Admit Card.”</li>
                <li>Enter SSO ID, Application ID, Date of Birth, and captcha.</li>
                <li>Download and print admit card.</li>
                <li>
                  <b>Note:</b> Carry admit card and photo ID to exam; check RPSC website for updates.
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li>
                  <b>Understand Syllabus:</b> Focus on Paper I (Rajasthan GK, History, Culture) and Paper II (subject-specific syllabus, pedagogy).
                </li>
                <li>
                  <b>Previous Papers:</b> Solve RPSC TGT 2022-2024 papers for question patterns.
                </li>
                <li>
                  <b>Time Management:</b> Practice 250 questions in 4.5 hours; aim for 80% accuracy.
                </li>
                <li>
                  <b>Rajasthan GK:</b> Study Rajasthan history, geography, and culture from books like Laxminath Sharma, RajRAS.
                </li>
                <li>
                  <b>Subject Prep:</b> Revise Bachelor’s-level concepts for your subject (e.g., NCERT books for Hindi, Maths, Science).
                </li>
                <li>
                  <b>Pedagogy:</b> Study teaching methods, child psychology (B.Ed. notes, “Pedagogy” by Arihant).
                </li>
                <li>
                  <b>Current Affairs:</b> Read Rajasthan-specific news (Rajasthan Patrika, PIB) for 2024-2025.
                </li>
                <li>
                  <b>Mock Tests:</b> Use RPSC-specific mocks from Adda247, Testbook; target 350+ marks.
                </li>
                <li>
                  <b>Stay Updated:</b> Follow rpsc.rajasthan.gov.in for notifications and results.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li>
                  <b>How many vacancies in RPSC TGT?</b> {totalpost} vacancies (updated as per notification).
                </li>
                <li>
                  <b>Is there negative marking?</b> Yes, 1/3 mark deducted per wrong answer.
                </li>
                <li>
                  <b>Is REET/RTET mandatory?</b> Yes, a valid REET/RTET certificate is required.
                </li>
                <li>
                  <b>What documents are needed?</b> Bachelor’s Degree, B.Ed., REET/RTET certificate, caste/EWS/PwD certificates, photo ID.
                </li>
                <li>
                  <b>Where are exam centers?</b> Major cities in Rajasthan (specified in admit card).
                </li>
                <li>
                  <b>What is the role of a TGT?</b> Teach secondary school students in subjects like Hindi, English, Maths, etc.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li>
                  <a href="https://rpsc.rajasthan.gov.in" target="_blank" className="link">
                    RPSC Official Website
                  </a>
                  : Check RPSC TGT Notification, admit cards, results.
                </li>
                <li>
                  <a href="https://rajras.in" target="_blank" className="link">
                    RajRAS
                  </a>
                  : Rajasthan-specific GK and current affairs.
                </li>
                <li>
                  <a href="https://testbook.com/rpsc" target="_blank" className="link">
                    Testbook Mock Tests
                  </a>
                  : RPSC TGT-specific mocks with analytics.
                </li>
                <li>
                  <a href="https://adda247.com/rpsc" target="_blank" className="link">
                    Adda247 Study Material
                  </a>
                  : Free notes on Rajasthan GK, subject-specific content.
                </li>
                <li>
                  <b>Books:</b>
                  <ul>
                    <li>“RPSC Senior Teacher Guide” by Arihant for overall prep.</li>
                    <li>“Rajasthan General Knowledge” by Laxminath Sharma.</li>
                    <li>“NCERT Books” for subject-specific prep (Class 6–12).</li>
                    <li>“Teaching Aptitude & Pedagogy” by Arihant.</li>
                  </ul>
                </li>
                <li>
                  <b>YouTube Channels:</b> “Adda247,” “Rajasthan Adda,” “StudyIQ” for RPSC TGT exam tips and live classes.
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
              alt="RPSC TGT Recruitment 2025"
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

export default Rajasthan_TGT_Teacher_1;