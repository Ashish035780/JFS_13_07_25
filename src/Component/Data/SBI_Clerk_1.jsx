import style from "./000_Content.module.css";
import a1 from "./Pic/SBI_Clerk_1.jpg";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";

const SBI_Clerk_1 = () => {
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
    fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/SBI_CLERK.json")
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((item) => item.id === "sbiclerk1");
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
            <h2 className={style.zxg}>State Bank of India (SBI)</h2>
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
                  <b>General/OBC/EWS:</b> ₹750
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
                <li>Across India (SBI branches and offices)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/04/2025)</h2>
              <ul className={style.zxk}>
                <li>
                  <b>Minimum Age:</b> 20 Years
                </li>
                <li>
                  <b>Maximum Age:</b> 28 Years
                </li>
                <li>
                  <b>Age Relaxation:</b> SC/ST: 5 years, OBC: 3 years, PwD: 10–15 years (Gen: 10, OBC: 13, SC/ST: 15), Ex-Servicemen: 5 years, as per SBI rules.
                </li>
                <li>Additional age relaxation as per recruitment guidelines, please read the official SBI notification.</li>
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
                <div className={style.tablecell}>Junior Associate (Customer Support & Sales)</div>
                <div className={style.tablecell}>
                  Bachelor’s Degree in any discipline from a recognized university. Final year students may apply provisionally.
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>
                  <li>Read the official SBI notification for detailed eligibility criteria.</li>
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
                  <b>Preliminary Exam:</b> Objective-type test (English, Numerical Ability, Reasoning).
                </li>
                <li>
                  <b>Main Exam:</b> Objective-type test (General/Financial Awareness, English, Quantitative Aptitude, Reasoning & Computer Aptitude).
                </li>
                <li>
                  <b>Language Proficiency Test (LPT):</b> Qualifying test for local language proficiency (if not studied in 10th/12th).
                </li>
                <li>
                  <b>Document Verification:</b> Verify eligibility and category documents.
                </li>
                <li>
                  <b>Final Merit:</b> Based on Main Exam marks, subject to clearing Preliminary Exam and LPT.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Exam Pattern">
              <h2 className={style.sectiontitle}>Preliminary Exam</h2>
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
                <div className={style.tablecell}>English Language</div>
                <div className={style.tablecell}>30</div>
                <div className={style.tablecell}>30</div>
                <div className={style.tablecell}>20 Minutes</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 2</div>
                <div className={style.tablecell}>Numerical Ability</div>
                <div className={style.tablecell}>35</div>
                <div className={style.tablecell}>35</div>
                <div className={style.tablecell}>20 Minutes</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 3</div>
                <div className={style.tablecell}>Reasoning Ability</div>
                <div className={style.tablecell}>35</div>
                <div className={style.tablecell}>35</div>
                <div className={style.tablecell}>20 Minutes</div>
              </div>
              <h3 className={style.zxt}>Key Points (Preliminary):</h3>
              <ul className={style.zxs}>
                <li>Objective-type, 100 questions, 100 marks, 60 minutes.</li>
                <li>Negative marking: 0.25 marks per wrong answer.</li>
                <li>Sectional time limits; qualifying in nature.</li>
              </ul>
              <h2 className={style.sectiontitle}>Main Exam</h2>
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
                <div className={style.tablecell}>General/Financial Awareness</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}>35 Minutes</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 2</div>
                <div className={style.tablecell}>English Language</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>40</div>
                <div className={style.tablecell}>35 Minutes</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 3</div>
                <div className={style.tablecell}>Quantitative Aptitude</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}>45 Minutes</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Section 4</div>
                <div className={style.tablecell}>Reasoning Ability & Computer Aptitude</div>
                <div className={style.tablecell}>50</div>
                <div className={style.tablecell}>60</div>
                <div className={style.tablecell}>45 Minutes</div>
              </div>
              <h3 className={style.zxt}>Key Points (Main):</h3>
              <ul className={style.zxs}>
                <li>Objective-type, 190 questions, 200 marks, 160 minutes.</li>
                <li>Negative marking: 0.25 marks per wrong answer.</li>
                <li>Marks used for final merit; sectional time limits.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <ul className={style.zxs}>
                <li>
                  <b>English Language:</b> Reading Comprehension, Grammar, Vocabulary, Sentence Correction, Cloze Test.
                </li>
                <li>
                  <b>Numerical Ability/Quantitative Aptitude:</b> Simplification, Data Interpretation, Percentage, Ratio, Profit & Loss, Time & Work, Averages.
                </li>
                <li>
                  <b>Reasoning Ability:</b> Puzzles, Seating Arrangement, Syllogism, Coding-Decoding, Blood Relations, Inequalities.
                </li>
                <li>
                  <b>General/Financial Awareness:</b> Current Affairs (2024-2025), Banking Awareness, Financial Markets, Static GK (Economy, Polity).
                </li>
                <li>
                  <b>Computer Aptitude:</b> Basics of MS Office, Internet, Operating Systems, Computer Hardware, Networking.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <ul className={style.zxs}>
                <li>
                  <b>Junior Associate (Customer Support & Sales):</b> Handle customer interactions, account operations, cash transactions, sales of banking products, and clerical duties in SBI branches.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>10th/12th mark sheet and certificate.</li>
                <li>Bachelor’s Degree certificate/provisional certificate.</li>
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
            <CollapsibleSection title="Career Benefits at SBI">
              <ul className={style.zxs}>
                <li>
                  <b>Salary:</b> ₹17,900–₹47,920 (Pay Scale: ₹19,900 basic + DA, HRA, other allowances).
                </li>
                <li>
                  <b>Job Security:</b> Permanent banking job with pension benefits.
                </li>
                <li>
                  <b>Allowances:</b> Medical benefits, House Rent Allowance, Dearness Allowance, Travel Allowance, Leave Benefits.
                </li>
                <li>
                  <b>Career Growth:</b> Promotions to Officer cadre (e.g., Probationary Officer) via internal exams or seniority.
                </li>
                <li>
                  <b>Work Environment:</b> Professional banking environment with opportunities for customer engagement and sales.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li>
                  <b>Check Eligibility:</b> Verify age (20–28 years) and education (Bachelor’s Degree).
                </li>
                <li>
                  <b>Visit Official Website:</b>{" "}
                  <a href="https://sbi.co.in" target="_blank" className="link">
                    sbi.co.in
                  </a>
                  .
                </li>
                <li>
                  <b>Register:</b> Click “Careers,” select “Junior Associates Recruitment,” enter email, mobile, and upload photo (20–50 KB) and signature (10–20 KB).
                </li>
                <li>
                  <b>Fill Form:</b> Provide personal, educational details, and select exam center preferences.
                </li>
                <li>
                  <b>Pay Fee:</b> ₹750 (General/OBC/EWS) via online mode; exempt for SC/ST/PwD.
                </li>
                <li>
                  <b>Submit:</b> Review, submit, and download application form. Keep Registration ID.
                </li>
                <li>
                  <b>Track Application:</b> Check status and admit cards on sbi.co.in.
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Download Admit Card">
              <ol className={style.zxs}>
                <li>
                  Visit the official website:{" "}
                  <a href="https://sbi.co.in" target="_blank" className="link">
                    sbi.co.in
                  </a>
                  .
                </li>
                <li>Navigate to “Careers” section.</li>
                <li>Select “SBI Junior Associates Admit Card.”</li>
                <li>Enter Registration ID, Date of Birth, and captcha.</li>
                <li>Download and print admit card.</li>
                <li>
                  <b>Note:</b> Carry admit card and photo ID to exam; check SBI website for updates.
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li>
                  <b>Understand Syllabus:</b> Focus on English, Numerical Ability, Reasoning, General/Financial Awareness, and Computer Aptitude.
                </li>
                <li>
                  <b>Previous Papers:</b> Solve SBI Clerk 2023-2024 papers for question patterns.
                </li>
                <li>
                  <b>Time Management:</b> Practice 100 questions in 60 minutes (Prelims) and 190 questions in 160 minutes (Mains).
                </li>
                <li>
                  <b>Current Affairs:</b> Read The Hindu, Economic Times, PIB for banking and financial updates (2024-2025).
                </li>
                <li>
                  <b>Numerical Ability:</b> Practice Data Interpretation, Simplification from R.S. Aggarwal or Arun Sharma.
                </li>
                <li>
                  <b>English:</b> Revise Reading Comprehension, Grammar (Wren & Martin, SP Bakshi).
                </li>
                <li>
                  <b>Reasoning:</b> Practice Puzzles, Seating Arrangement (Arihant’s Reasoning book).
                </li>
                <li>
                  <b>Banking Awareness:</b> Study banking terms, RBI policies, financial news (Banking Awareness by Arihant).
                </li>
                <li>
                  <b>Mock Tests:</b> Use Oliveboard, Testbook, or Adda247 for SBI Clerk-specific mocks; target 70+ (Prelims) and 140+ (Mains).
                </li>
                <li>
                  <b>Stay Updated:</b> Follow sbi.co.in for notifications and results.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li>
                  <b>How many vacancies in SBI Junior Associates?</b> {totalpost} vacancies (updated as per notification).
                </li>
                <li>
                  <b>Is there negative marking?</b> Yes, 0.25 marks per wrong answer in both Prelims and Mains.
                </li>
                <li>
                  <b>Can final year students apply?</b> Yes, provisionally, subject to degree completion by joining.
                </li>
                <li>
                  <b>What documents are needed?</b> Degree certificate, caste/EWS/PwD certificates, photo ID.
                </li>
                <li>
                  <b>Where are exam centers?</b> Major cities across India (specified in admit card).
                </li>
                <li>
                  <b>What is the role of a Junior Associate?</b> Customer support, sales, and clerical tasks in SBI branches.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li>
                  <a href="https://sbi.co.in" target="_blank" className="link">
                    SBI Official Website
                  </a>
                  : Check SBI Junior Associates Notification, admit cards, results.
                </li>
                <li>
                  <a href="https://oliveboard.in" target="_blank" className="link">
                    Oliveboard Mock Tests
                  </a>
                  : SBI Clerk-specific mocks with analytics.
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
                  : Current affairs for General/Financial Awareness.
                </li>
                <li>
                  <a href="https://www.jagranjosh.com/sbi-clerk-previous-papers" target="_blank" className="link">
                    Previous Year Papers
                  </a>
                  : Download 2023-2024 SBI Clerk papers.
                </li>
                <li>
                  <b>Books:</b>
                  <ul>
                    <li>“SBI Clerk Guide” by Arihant for overall prep.</li>
                    <li>“Banking Awareness” by Arihant for financial knowledge.</li>
                    <li>“Objective English” by SP Bakshi for language prep.</li>
                    <li>“Quantitative Aptitude” by R.S. Aggarwal for numerical ability.</li>
                  </ul>
                </li>
                <li>
                  <b>YouTube Channels:</b> “Adda247,” “Bankers Point,” “StudyIQ” for SBI Clerk exam tips and live classes.
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
              alt="SBI Junior Associates Recruitment 2025"
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

export default SBI_Clerk_1;