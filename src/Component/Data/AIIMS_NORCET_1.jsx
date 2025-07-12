import style from "./000_Content.module.css";
import a1 from "./Pic/Aiims_norcet_1.jpg";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";

const AIIMS_NORCET_1 = () => {
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
    fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/AIIMS_NORCET.json")
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((item) => item.id === "aiimsnorcet1");
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
          <h2 className={style.sectiontitle} style={{ color: "red" }}>Application Start Date: {startdate}</h2>
          <h2 className={style.sectiontitle} style={{ color: "red" }}>Application Last Date: {lastdate}</h2>
          
          <p className={style.zxc}>
            <b>Brief Summary: </b>
            {description}
          </p>
          <div className={style.zxd}>
            <h1 className={style.zxe}>Www.JobForSarkari.Com</h1>
          </div>
          <Ad type="320x50" />
          <div className={style.zxf}>
            <h2 className={style.zxg}>All India Institute of Medical Sciences (AIIMS)</h2>
            <h3 className={style.zxh}>Total Posts: <span className={style.highlight}>{totalpost}</span></h3>
            <h3 className={style.zxh}>Pay Scale: <span className={style.highlight}>{payscale}</span></h3>
          </div>
          <div className={style.zxi}>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Important Dates</h2>
              <ul className={style.zxk}>
                {Object.entries(date).map(([key, value]) => (
                  <li key={key}><b>{key}: </b> {value}</li>
                ))}
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Application Fee</h2>
              <ul className={style.zxk}>
                <li><b>General/OBC:</b> ₹1500</li>
                <li><b>SC/ST/EWS:</b> ₹1200</li>
                <li><b>PwD:</b> Exempt</li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Credit/Debit Card, Net Banking, or UPI. Fee is non-refundable.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Across various AIIMS institutes in India</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/08/2025)</h2>
              <ul className={style.zxk}>
                <li><b>Minimum Age:</b> 18 Years</li>
                <li><b>Maximum Age:</b> 30 Years</li>
                <li><b>Age Relaxation:</b> SC/ST: 5 years, OBC: 3 years, PwD: 10 years, as per AIIMS rules.</li>
                <li>Additional age relaxation as per recruitment guidelines, please read the AIIMS Nursing Officer official notification.</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Eligibility Qualification Details</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}><b>Post Name</b></div>
                <div className={style.tablecell}><b>Eligibility Criteria</b></div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Nursing Officer</div>
                <div className={style.tablecell}>B.Sc. (Hons.) Nursing / B.Sc. Nursing from a recognized institute OR Diploma in General Nursing Midwifery with 2 years of experience; Registered with Indian Nursing Council/State Nursing Council</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}><li>Read the AIIMS Nursing Officer official notification for detailed eligibility criteria.</li></div>
              </div>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Vacancy Details</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}><b>Post Name</b></div>
                <div className={style.tablecell}><b>Total Posts</b></div>
                <div className={style.tablecell}><b>Category-Wise Breakdown</b></div>
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
              <h2 className={style.sectiontitle}>Computer-Based Test (CBT)</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Subjects</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Nursing Subjects</div>
                <div className={style.tablecell}>80</div>
                <div className={style.tablecell}>80</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>General Knowledge & Aptitude</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}>20</div>
                <div className={style.tablecell}></div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Objective-type questions; 0.25 negative marking per wrong answer.</li>
                <li>Total: 100 questions, 100 marks, 180 minutes.</li>
                <li>Qualifying marks: General/EWS: 40%, OBC: 35%, SC/ST: 30%.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <ul className={style.zxs}>
                <li><b>Nursing Subjects:</b> Anatomy, Physiology, Microbiology, Nursing Foundations, Medical-Surgical Nursing, Child Health Nursing, Midwifery, Community Health Nursing.</li>
                <li><b>General Knowledge:</b> Current Affairs, Indian Polity, Geography, History, Science & Technology.</li>
                <li><b>Aptitude:</b> Basic Arithmetic, Reasoning, Data Interpretation.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <ul className={style.zxs}>
                <li><b>Nursing Officer:</b> Provide patient care, administer medications, assist in surgeries, maintain medical records, and support healthcare delivery in AIIMS hospitals.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Selection Process">
              <ul className={style.zxs}>
                <li><b>CBT:</b> Computer-Based Test with negative marking.</li>
                <li><b>Document Verification:</b> Verify educational, registration, and category certificates.</li>
                <li><b>Final Merit:</b> Based on CBT marks, subject to document verification.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>B.Sc. Nursing/Diploma in GNM certificate and mark sheets.</li>
                <li>Indian Nursing Council/State Nursing Council Registration Certificate.</li>
                <li>Caste Certificate (SC/ST/OBC-NCL).</li>
                <li>EWS Certificate (valid for 2025-26).</li>
                <li>PwD Certificate (if applicable).</li>
                <li>Photo ID (Aadhaar, PAN, Voter ID, or Passport).</li>
                <li>Recent passport-size photographs (6 copies, 20–50 KB, 200x230 pixels).</li>
                <li>Printed application form and fee payment receipt.</li>
                <li><b>Note:</b> OBC-NCL certificate must mention non-creamy layer; discrepancies lead to disqualification.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits at AIIMS Nursing Officer">
              <ul className={style.zxs}>
                <li><b>Salary:</b> ₹9300–₹34800 (Level 7) + Grade Pay ₹4600 + allowances.</li>
                <li><b>Job Security:</b> Permanent government posts with pension under NPS.</li>
                <li><b>Allowances:</b> Medical benefits (CGHS), HRA, Transport Allowance, Leave Benefits.</li>
                <li><b>Career Growth:</b> Promotions to Senior Nursing Officer and higher roles via experience and exams.</li>
                <li><b>Work Environment:</b> Prestigious roles in premier AIIMS hospitals with advanced facilities.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li><b>Check Eligibility:</b> Verify age (18–30 years) and education (B.Sc. Nursing/GNM).</li>
                <li><b>Visit Official Website:</b> <a href="https://www.aiimsexams.ac.in" target="_blank" className="link">www.aiimsexams.ac.in</a>.</li>
                <li><b>Register:</b> Click “Apply,” enter email, mobile, and upload photo (20–50 KB) and signature (10–20 KB).</li>
                <li><b>Fill Form:</b> Provide personal, educational details, and select AIIMS preferences.</li>
                <li><b>Pay Fee:</b> ₹1500 (General/OBC), ₹1200 (SC/ST/EWS) via online mode; PwD exempt.</li>
                <li><b>Submit:</b> Review, submit, and download application form. Keep Application ID.</li>
                <li><b>Track Application:</b> Check status and admit cards on www.aiimsexams.ac.in.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Download Admit Card">
              <ol className={style.zxs}>
                <li>Visit the official website: <a href="https://www.aiimsexams.ac.in" target="_blank" className="link">www.aiimsexams.ac.in</a>.</li>
                <li>Navigate to “Admit Card” section.</li>
                <li>Select “AIIMS Nursing Officer CBT Admit Card.”</li>
                <li>Enter Application ID, Date of Birth, and captcha.</li>
                <li>Download and print admit card.</li>
                <li><b>Note:</b> Carry admit card and photo ID to exam; check website for updates.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li><b>Understand Syllabus:</b> Focus on Nursing subjects, General Knowledge, and Aptitude.</li>
                <li><b>Previous Papers:</b> Solve AIIMS Nursing Officer 2023-2024 papers for question patterns.</li>
                <li><b>Time Management:</b> Practice 100 questions in 180 minutes; aim for 80% accuracy.</li>
                <li><b>Current Affairs:</b> Read The Hindu, PIB for updates (e.g., Health Policies, Budget).</li>
                <li><b>Nursing Subjects:</b> Revise from “B.Sc. Nursing Guide” by Arihant or Pearson.</li>
                <li><b>Mock Tests:</b> Use Testbook, Adda247 for AIIMS-specific mocks; target 70+ marks.</li>
                <li><b>Stay Updated:</b> Follow www.aiimsexams.ac.in for notifications and results.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li><b>How many vacancies in AIIMS Nursing Officer?</b> {totalpost} vacancies to be updated.</li>
                <li><b>Is there negative marking?</b> Yes, 0.25 marks deducted per wrong answer.</li>
                <li><b>Can final-year B.Sc. Nursing students apply?</b> No, degree/diploma certificate required.</li>
                <li><b>What documents are needed?</b> Nursing certificate, registration, caste/EWS/PwD certificates, photo ID.</li>
                <li><b>Where are exam centers?</b> Major cities across India.</li>
                <li><b>What is the role of a Nursing Officer?</b> Patient care, medical support in AIIMS hospitals.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li><a href="https://www.aiimsexams.ac.in" target="_blank" className="link">AIIMS Official Website</a>: Check notifications, admit cards, results.</li>
                <li><a href="https://testbook.com/aiims-nursing-officer" target="_blank" className="link">Testbook Mock Tests</a>: AIIMS-specific mocks with analytics.</li>
                <li><a href="https://adda247.com/aiims-nursing" target="_blank" className="link">Adda247 Study Material</a>: Free notes on Nursing, GK, Aptitude.</li>
                <li><a href="https://pib.gov.in" target="_blank" className="link">PIB India</a>: Current affairs for General Knowledge.</li>
                <li><a href="https://www.jagranjosh.com/aiims-nursing-papers" target="_blank" className="link">Previous Year Papers</a>: Download 2023-2024 papers.</li>
                <li><b>Books:</b>
                  <ul>
                    <li>“AIIMS Nursing Officer Guide” by Arihant for overall prep.</li>
                    <li>“Lucent’s General Knowledge” for General Knowledge.</li>
                    <li>“Nursing Competitive Exam” by Pearson for nursing subjects.</li>
                    <li>“Quantitative Aptitude” by R.S. Aggarwal for Aptitude.</li>
                  </ul>
                </li>
                <li><b>YouTube Channels:</b> “Adda247,” “StudyIQ” for AIIMS Nursing Officer exam tips.</li>
              </ul>
            </CollapsibleSection>
            <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
              <div className={style.zxv}>
                <div>
                  {Object.entries(link).map(([key, value]) => (
                    <li key={key}>
                      <a href={value} target="_blank" className="link">{key}</a>
                    </li>
                  ))}
                </div>
              </div>
            </div>
            <Ad type="NativeBanner" />
            <img src={a1} alt="AIIMS Nursing Officer 2025 Recruitment" className={style.imga} />
            <div id={style.ins}>
              <h1>Www.JobForSarkari.Com</h1>
              <h2>Welcome to Our Website</h2>
              <p>Our website provides official links for job-related information, ensuring you stay informed about government job opportunities.</p>
              <p>We do not charge for any services, offering free access to recruitment details and updates.</p>
              <p>Please read all instructions carefully before applying to avoid errors and ensure a smooth process.</p>
            </div>
            <div id={style.ins}>
              <h1>Find the Latest Government Jobs</h1>
              <h2>Latest Sarkari Naukri Updates & Free Job Alerts</h2>
              <p>Looking for Government Jobs? Our portal delivers the latest govt jobs and Sarkari Naukri updates tailored to your needs.</p>
              <p>Explore comprehensive details on age relaxation, eligibility criteria, and recruitment updates for government jobs and vacancies.</p>
              <p>Subscribe to our free job alert service to receive real-time notifications about Sarkari jobs, govt job vacancies, and online applications.</p>
              <p>Discover opportunities across sectors, including police, banking, railways, defense, and medical.</p>
              <p>Stay ahead with details on upcoming govt exams and find state-wise government jobs tailored to your location.</p>
              <p>Start your Sarkari job search today and secure your future with the best government career opportunities!</p>
            </div>
            <div id={style.ins}>
              <h1>Latest Government Jobs Updates</h1>
              <h2>Apply for All Types of Jobs like Police, Railway, Bank, SSC, UPSC & More</h2>
              <p>Seeking Police Jobs, Railway Jobs, Bank Jobs Recruitment, or Medical Vacancies?</p>
              <p>Stay updated with free job alert notifications and never miss an opportunity to apply for civil service jobs that match your skills and aspirations.</p>
              <p>Our job portal provides the latest updates on SSC Jobs Online, UPSC Exam Notifications, and Medical Government Jobs.</p>
              <p>Explore opportunities in Defense Job Recruitment, Engineering Govt Jobs, Medical Govt Vacancies, and more.</p>
              <p>Whether you’re searching for 10th/12th Pass Government Jobs or specialized roles, we bring you the most recent government job openings.</p>
              <p>Stay ahead with real-time alerts and apply easily through our portal to secure your dream Sarkari Naukri today.</p>
            </div>
          </div>
        </section>
      </div>
      <div className={style.aaa2}>
        <aside className={style.zxw}>
          <h2 className={style.sectiontitle}>Quick Links</h2>
          <ul className={style.zxs}>
            {quicklink.map((job, index) => (
              <React.Fragment key={index}>
                <li>
                  <Link to={job.link} className={style.link}>{job.title}</Link>
                </li>
                {index === 1 && <Ad type="300x250" />}
                {index === 6 && <Ad type="300x250" />}
              </React.Fragment>
            ))}
          </ul>
        </aside>
        <Ad type="320x50" />
        <aside className={style.zxw}>
          <h2 className={style.sectiontitle}>Follow Us</h2>
          <ul className={style.zxs}>
            {sociallink.map((item, index) => (
              <li key={index}>
                <a href={item.link} target="_blank" className={style.link}>{item.title}</a>
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

export default AIIMS_NORCET_1;