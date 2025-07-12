import style from "./000_Content.module.css";
import a1 from "./Pic/UPSC_NDA_1.jpg";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";

const UPSC_NDA_1 = () => {
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
    fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/UPSC_NDA.json")
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((item) => item.id === "upscnda1");
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
                  <b>SC/ST/Female/PwD:</b> Nil
                </li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Credit/Debit Card, Net Banking, or UPI. Fee is non-refundable.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Training Location</h2>
              <ul className={style.zxk}>
                <li>National Defence Academy (Pune, Maharashtra); Naval Academy (Ezhimala, Kerala)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/01/2026)</h2>
              <ul className={style.zxk}>
                <li>
                  <b>Eligibility:</b> Born between 02/01/2007 and 01/01/2010
                </li>
                <li>
                  <b>Age Relaxation:</b> No age relaxation for any category as per UPSC rules.
                </li>
                <li>Read the official UPSC NDA & NA notification for detailed eligibility criteria.</li>
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
                <div className={style.tablecell}>NDA (Army)</div>
                <div className={style.tablecell}>
                  12th Pass (10+2) from a recognized board.
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>NDA (Navy/Air Force), Naval Academy</div>
                <div className={style.tablecell}>
                  12th Pass (10+2) with Physics, Chemistry, and Mathematics from a recognized board.
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>
                  <li>
                    <b>Note:</b> Only unmarried male/female candidates; appearing candidates in 12th can apply provisionally.
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
            <CollapsibleSection title="Selection Process">
              <ul className={style.zxs}>
                <li>
                  <b>Written Exam:</b> Objective-type test (Mathematics, General Ability Test).
                </li>
                <li>
                  <b>SSB Interview:</b> Two-stage process (Screening: Picture Perception & Description Test, Psychological Tests; Interview: Group Testing, Personal Interview).
                </li>
                <li>
                  <b>Medical Examination:</b> Physical and medical fitness as per UPSC standards.
                </li>
                <li>
                  <b>Final Merit:</b> Based on Written Exam (900 marks) + SSB Interview (900 marks).
                </li>
                <li>
                  <b>Training:</b> 3 years at NDA (Pune) for Army, Navy, Air Force; 4 years at Naval Academy (Ezhimala) for NA.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Exam Pattern">
              <h2 className={style.sectiontitle}>Written Exam</h2>
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
                <div className={style.tablecell}>Paper 1</div>
                <div className={style.tablecell}>Mathematics</div>
                <div className={style.tablecell}>120</div>
                <div className={style.tablecell}>300</div>
                <div className={style.tablecell}>150 Minutes</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 2</div>
                <div className={style.tablecell}>General Ability Test (English + General Knowledge)</div>
                <div className={style.tablecell}>150 (50 + 100)</div>
                <div className={style.tablecell}>600 (200 + 400)</div>
                <div className={style.tablecell}>150 Minutes</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Total: 270 questions, 900 marks, 300 minutes.</li>
                <li>Negative marking: 0.33 marks per wrong answer.</li>
                <li>Mathematics: 10+2 level; GAT includes English (200 marks) and GK (Physics, Chemistry, History, Geography, Current Affairs, 400 marks).</li>
                <li>Qualifying marks required for SSB Interview.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <ul className={style.zxs}>
                <li>
                  <b>Mathematics:</b> Algebra, Trigonometry, Geometry, Calculus, Statistics, Probability (10+2 level).
                </li>
                <li>
                  <b>General Ability Test (GAT):</b>
                  <ul>
                    <li><b>English:</b> Grammar, Vocabulary, Comprehension, Sentence Formation.</li>
                    <li><b>General Knowledge:</b> Physics, Chemistry, Biology, History, Geography, Polity, Economics, Current Affairs (2024-2025).</li>
                  </ul>
                </li>
                <li>
                  <b>SSB Interview:</b> Psychological Tests (Thematic Apperception Test, Word Association Test), Group Testing (Group Discussion, Obstacle Race), Personal Interview.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <ul className={style.zxs}>
                <li>
                  <b>NDA (Army, Navy, Air Force):</b> Officer training for leadership roles in Indian Army, Navy, or Air Force after 3-year training at NDA, Pune.
                </li>
                <li>
                  <b>Naval Academy:</b> Officer training for Naval roles under 10+2 Cadet Entry Scheme, 4-year training at NA, Ezhimala.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Physical and Medical Standards">
              <ul className={style.zxs}>
                <li>
                  <b>Physical Standards:</b>
                  <ul>
                    <li><b>Height (Male):</b> Minimum 157 cm (162 cm for Air Force).</li>
                    <li><b>Height (Female):</b> Minimum 152 cm.</li>
                    <li><b>Weight:</b> Proportionate to height and age.</li>
                    <li><b>Vision:</b> 6/6 or 6/9 without glasses; no color blindness.</li>
                    <li><b>Other:</b> No deformities, flat feet, or chronic diseases.</li>
                  </ul>
                </li>
                <li>
                  <b>Medical Examination:</b> General health check, dental, vision, hearing tests; conducted by Military Hospital post-SSB.
                </li>
                <li>
                  <b>Note:</b> Air Force candidates require stricter standards (e.g., no history of asthma, LASIK surgery restrictions).
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>10th/12th mark sheet and certificate.</li>
                <li>Photo ID (Aadhaar, PAN, Voter ID, or Passport).</li>
                <li>Recent passport-size photographs (6 copies, 20–50 KB, 200x230 pixels).</li>
                <li>Printed application form and fee payment receipt.</li>
                <li>Caste Certificate (SC/ST) if applicable.</li>
                <li>
                  <b>Note:</b> Original documents required at SSB; discrepancies lead to disqualification.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits at NDA & NA">
              <ul className={style.zxs}>
                <li>
                  <b>Stipend:</b> ₹56,100 during training (Level 10); post-commission, officer pay scale (₹56,100–₹1,77,500) + allowances.
                </li>
                <li>
                  <b>Job Security:</b> Permanent commissioned officer roles in Indian Armed Forces.
                </li>
                <li>
                  <b>Allowances:</b> Dearness Allowance, Kit Maintenance, Transport Allowance, Field Area Allowance, High Altitude Allowance.
                </li>
                <li>
                  <b>Career Growth:</b> Promotions to higher ranks (e.g., Captain, Major, Admiral) based on service and merit.
                </li>
                <li>
                  <b>Work Environment:</b> Prestigious roles with leadership, discipline, and national service opportunities.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li>
                  <b>Check Eligibility:</b> Verify age (born between 02/01/2007–01/01/2010) and education (12th Pass).
                </li>
                <li>
                  <b>Visit Official Website:</b>{" "}
                  <a href="https://upsc.gov.in" target="_blank" className="link">
                    upsc.gov.in
                  </a>
                  .
                </li>
                <li>
                  <b>Register:</b> Click “Apply Online,” complete One Time Registration (OTR), enter email, mobile, and upload photo (20–50 KB) and signature (10–20 KB).
                </li>
                <li>
                  <b>Fill Form:</b> Select NDA & NA Exam, provide personal, educational details, and choose exam center.
                </li>
                <li>
                  <b>Pay Fee:</b> ₹100 (General/OBC/EWS) via online mode; exempt for SC/ST/Female/PwD.
                </li>
                <li>
                  <b>Submit:</b> Review, submit, and download application form. Keep Application ID.
                </li>
                <li>
                  <b>Track Application:</b> Check status and admit cards on upsc.gov.in.
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Download Admit Card">
              <ol className={style.zxs}>
                <li>
                  Visit the official website:{" "}
                  <a href="https://upsc.gov.in" target="_blank" className="link">
                    upsc.gov.in
                  </a>
                  .
                </li>
                <li>Navigate to “e-Admit Card” section.</li>
                <li>Select “NDA & NA Examination Admit Card.”</li>
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
                  <b>Understand Syllabus:</b> Focus on Mathematics (10+2 level), English, and General Knowledge (Physics, Chemistry, History, Current Affairs).
                </li>
                <li>
                  <b>Previous Papers:</b> Solve NDA 2023–2024 papers for question patterns.
                </li>
                <li>
                  <b>Time Management:</b> Practice 270 questions in 300 minutes; aim for 60%+ accuracy.
                </li>
                <li>
                  <b>Mathematics:</b> Study NCERT 11th/12th books, practice Algebra, Trigonometry (R.S. Aggarwal, Arihant).
                </li>
                <li>
                  <b>English:</b> Revise grammar, vocabulary (Wren & Martin, Word Power Made Easy).
                </li>
                <li>
                  <b>General Knowledge:</b> Read NCERT (History, Geography, Science), The Hindu for current affairs (2024-2025).
                </li>
                <li>
                  <b>SSB Prep:</b> Practice group discussions, psychological tests; join coaching for SSB (e.g., Minerva, Baalnoi Academy).
                </li>
                <li>
                  <b>Physical Fitness:</b> Maintain fitness for SSB tasks (running, obstacle course); ensure medical standards compliance.
                </li>
                <li>
                  <b>Mock Tests:</b> Use Arihant, Disha Publications for NDA-specific mocks; target 500+ marks in written exam.
                </li>
                <li>
                  <b>Stay Updated:</b> Follow upsc.gov.in for notifications and results.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li>
                  <b>How many vacancies in NDA & NA?</b> {totalpost} vacancies (updated as per notification).
                </li>
                <li>
                  <b>Is there negative marking?</b> Yes, 0.33 marks per wrong answer in Written Exam.
                </li>
                <li>
                  <b>Can female candidates apply?</b> Yes, eligible for NDA & NA since 2021.
                </li>
                <li>
                  <b>What documents are needed?</b> 10th/12th certificates, photo ID, application form.
                </li>
                <li>
                  <b>Where are exam centers?</b> Major cities across India (specified in admit card).
                </li>
                <li>
                  <b>What is the role after NDA/NA?</b> Officer training leading to commissioned roles in Army, Navy, or Air Force.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li>
                  <a href="https://upsc.gov.in" target="_blank" className="link">
                    UPSC Official Website
                  </a>
                  : Check NDA & NA Notification, admit cards, results.
                </li>
                <li>
                  <a href="https://joinindianarmy.nic.in" target="_blank" className="link">
                    Join Indian Army
                  </a>
                  : SSB interview tips and guidelines.
                </li>
                <li>
                  <a href="https://www.arihantbooks.com" target="_blank" className="link">
                    Arihant Books
                  </a>
                  : NDA Pathfinder for exam prep.
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
                    <li>“Pathfinder NDA/NA” by Arihant for overall prep.</li>
                    <li>“NCERT Mathematics” (Class 11/12) for Mathematics.</li>
                    <li>“Objective General English” by S.P. Bakshi for English.</li>
                    <li>“Manorama Yearbook” for General Knowledge and Current Affairs.</li>
                  </ul>
                </li>
                <li>
                  <b>YouTube Channels:</b> “SSB Crack,” “StudyIQ,” “Major Kalshi Classes” for NDA exam and SSB tips.
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
              alt="UPSC NDA & NA Recruitment 2025"
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

export default UPSC_NDA_1;