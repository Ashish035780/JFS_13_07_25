import style from "./000_Content.module.css";
import a1 from "./Pic/UPSC_IES_ISS_2.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";

const UPSC_IES_ISS_2 = () => {
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
    fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/UPSC_IES_ISS.json")
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((item) => item.id === "upsciesiss2");
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
                  <b>SC/ST/PwD/Female:</b> Nil
                </li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Credit/Debit Card, Net Banking, or UPI. Fee is non-refundable.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Across India (Central Government Ministries/Departments)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/08/2025)</h2>
              <ul className={style.zxk}>
                <li>
                  <b>Minimum Age:</b> 21 Years
                </li>
                <li>
                  <b>Maximum Age:</b> 30 Years
                </li>
                <li>
                  <b>Age Relaxation:</b> SC/ST: 5 years, OBC: 3 years, PwD: 10 years, as per UPSC rules.
                </li>
                <li>Additional age relaxation as per recruitment guidelines, please read the official UPSC notification.</li>
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
                <div className={style.tablecell}>Indian Economic Service (IES)</div>
                <div className={style.tablecell}>
                  Post-Graduate Degree in Economics/Applied Economics/Business Economics/Econometrics from a recognized university.
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Indian Statistical Service (ISS)</div>
                <div className={style.tablecell}>
                  Bachelor’s Degree with Statistics/Mathematical Statistics/Applied Statistics as one subject OR Master’s Degree in Statistics/Mathematical Statistics/Applied Statistics from a recognized university.
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>
                  <li>Read the official UPSC IES/ISS notification for detailed eligibility criteria.</li>
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
                  <b>Written Examination:</b> Six papers (IES: Economics-focused; ISS: Statistics-focused) with objective and descriptive questions.
                </li>
                <li>
                  <b>Interview/Personality Test:</b> Assesses personality, leadership, and suitability for service (200 marks).
                </li>
                <li>
                  <b>Document Verification:</b> Verify eligibility, educational, and category documents.
                </li>
                <li>
                  <b>Final Merit:</b> Based on Written Exam (1000 marks) + Interview (200 marks).
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Exam Pattern">
              <h2 className={style.sectiontitle}>Written Examination (IES)</h2>
              <div
                style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }}
                className={style.tablerow}
              >
                <div className={style.tablecell}>Paper</div>
                <div className={style.tablecell}>Subject</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 1</div>
                <div className={style.tablecell}>General English</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 2</div>
                <div className={style.tablecell}>General Studies</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 3</div>
                <div className={style.tablecell}>General Economics-I</div>
                <div className={style.tablecell}>200</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 4</div>
                <div className={style.tablecell}>General Economics-II</div>
                <div className={style.tablecell}>200</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 5</div>
                <div className={style.tablecell}>General Economics-III</div>
                <div className={style.tablecell}>200</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 6</div>
                <div className={style.tablecell}>Indian Economics</div>
                <div className={style.tablecell}>200</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <h2 className={style.sectiontitle}>Written Examination (ISS)</h2>
              <div
                style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }}
                className={style.tablerow}
              >
                <div className={style.tablecell}>Paper</div>
                <div className={style.tablecell}>Subject</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 1</div>
                <div className={style.tablecell}>General English</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 2</div>
                <div className={style.tablecell}>General Studies</div>
                <div className={style.tablecell}>100</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 3</div>
                <div className={style.tablecell}>Statistics-I (Objective)</div>
                <div className={style.tablecell}>200</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 4</div>
                <div className={style.tablecell}>Statistics-II (Objective)</div>
                <div className={style.tablecell}>200</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 5</div>
                <div className={style.tablecell}>Statistics-III (Descriptive)</div>
                <div className={style.tablecell}>200</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 6</div>
                <div className={style.tablecell}>Statistics-IV (Descriptive)</div>
                <div className={style.tablecell}>200</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Total Marks: 1000 (Written) + 200 (Interview).</li>
                <li>Paper 1 & 2: Common for IES/ISS, descriptive.</li>
                <li>IES Papers 3–6: Descriptive, economics-focused.</li>
                <li>ISS Papers 3–4: Objective, Papers 5–6: Descriptive, statistics-focused.</li>
                <li>Negative marking: 0.33 marks per wrong answer in objective papers (ISS Paper 3 & 4).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <ul className={style.zxs}>
                <li>
                  <b>General English:</b> Essay writing, comprehension, précis, grammar, vocabulary.
                </li>
                <li>
                  <b>General Studies:</b> Current affairs (2024-2025), Indian Polity, History, Geography, Economy, General Science.
                </li>
                <li>
                  <b>General Economics-I (IES):</b> Theory of Consumer’s Demand, Production, Market Structures, Welfare Economics.
                </li>
                <li>
                  <b>General Economics-II (IES):</b> Economic Thought, Monetary Theory, International Economics, Financial Institutions.
                </li>
                <li>
                  <b>General Economics-III (IES):</b> Public Finance, Environmental Economics, Industrial Economics, Growth and Development.
                </li>
                <li>
                  <b>Indian Economics (IES):</b> Indian Economy post-independence, Agriculture, Industry, Trade, Poverty, Unemployment.
                </li>
                <li>
                  <b>Statistics-I (ISS):</b> Probability, Statistical Methods, Numerical Analysis.
                </li>
                <li>
                  <b>Statistics-II (ISS):</b> Linear Models, Sampling Techniques, Design of Experiments.
                </li>
                <li>
                  <b>Statistics-III (ISS):</b> Time Series, Index Numbers, Multivariate Analysis.
                </li>
                <li>
                  <b>Statistics-IV (ISS):</b> Operations Research, Demography, Applied Statistics, Quality Control.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <ul className={style.zxs}>
                <li>
                  <b>Indian Economic Service (IES):</b> Economic analysis, policy formulation, research, and advisory roles in ministries like Finance, Commerce, and Planning.
                </li>
                <li>
                  <b>Indian Statistical Service (ISS):</b> Statistical data collection, analysis, survey design, and research for government departments like NSO, MoSPI.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>10th/12th mark sheet and certificate.</li>
                <li>Bachelor’s/Master’s degree certificate (as per post).</li>
                <li>Caste Certificate (SC/ST/OBC-NCL).</li>
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
            <CollapsibleSection title="Career Benefits at UPSC IES/ISS">
              <ul className={style.zxs}>
                <li>
                  <b>Salary:</b> ₹56,100–₹1,77,500 (Level 10) + DA, HRA, other allowances.
                </li>
                <li>
                  <b>Job Security:</b> Permanent Group A posts with pension under NPS.
                </li>
                <li>
                  <b>Allowances:</b> Medical benefits (CGHS), Transport Allowance, Leave Travel Concession, Housing.
                </li>
                <li>
                  <b>Career Growth:</b> Promotions to Senior Administrative Grade (Director, Joint Secretary) via seniority or exams.
                </li>
                <li>
                  <b>Work Environment:</b> Prestigious roles in policy-making and statistical research in central government.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li>
                  <b>Check Eligibility:</b> Verify age (21–30 years) and education (Post-Graduate for IES; Bachelor’s/Master’s in Statistics for ISS).
                </li>
                <li>
                  <b>Visit Official Website:</b>{" "}
                  <a href="https://upsconline.nic.in" target="_blank" className="link">
                    upsconline.nic.in
                  </a>
                  .
                </li>
                <li>
                  <b>Register:</b> Complete OTR (One Time Registration), enter email, mobile, and upload photo (20–300 KB) and signature (20–300 KB).
                </li>
                <li>
                  <b>Fill Form:</b> Select IES/ISS, provide personal, educational details, and choose exam center.
                </li>
                <li>
                  <b>Pay Fee:</b> ₹200 (General/OBC/EWS) via online mode; exempt for SC/ST/PwD/Female.
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
                <li>Select “UPSC IES/ISS Admit Card.”</li>
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
                  <b>Understand Syllabus:</b> Focus on Economics (IES) or Statistics (ISS), General English, and General Studies.
                </li>
                <li>
                  <b>Previous Papers:</b> Solve UPSC IES/ISS 2021–2024 papers for question patterns.
                </li>
                <li>
                  <b>Time Management:</b> Practice descriptive answers within 3 hours; objective papers (ISS) in 2 hours.
                </li>
                <li>
                  <b>General Studies:</b> Read The Hindu, Yojana, PIB for current affairs (2024-2025).
                </li>
                <li>
                  <b>Economics (IES):</b> Study standard texts like Varian (Microeconomics), Blanchard (Macroeconomics), Uma Kapila (Indian Economy).
                </li>
                <li>
                  <b>Statistics (ISS):</b> Refer to Freund (Mathematical Statistics), Gupta & Kapoor (Applied Statistics), Cochran (Sampling).
                </li>
                <li>
                  <b>Mock Tests:</b> Use Vision IAS, ForumIAS for IES/ISS-specific mocks; target 600+ marks in written exam.
                </li>
                <li>
                  <b>Interview Prep:</b> Practice communication, current economic/statistical issues, and DAF-based questions.
                </li>
                <li>
                  <b>Stay Updated:</b> Follow upsc.gov.in for notifications and results.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li>
                  <b>How many vacancies in UPSC IES/ISS?</b> {totalpost} vacancies (updated as per notification).
                </li>
                <li>
                  <b>Is there negative marking?</b> Yes, 0.33 marks per wrong answer in ISS objective papers (Paper 3 & 4); no negative marking in descriptive papers.
                </li>
                <li>
                  <b>Can final year students apply?</b> No, degree completion required by application deadline.
                </li>
                <li>
                  <b>What documents are needed?</b> Degree certificates, caste/EWS/PwD certificates, photo ID.
                </li>
                <li>
                  <b>Where are exam centers?</b> Major cities across India (specified in admit card).
                </li>
                <li>
                  <b>What is the role of IES/ISS officers?</b> Economic policy analysis (IES) or statistical research (ISS) in government ministries.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li>
                  <a href="https://upsc.gov.in" target="_blank" className="link">
                    UPSC Official Website
                  </a>
                  : Check IES/ISS Notification, admit cards, results.
                </li>
                <li>
                  <a href="https://visionias.in" target="_blank" className="link">
                    Vision IAS
                  </a>
                  : IES/ISS-specific study material and mocks.
                </li>
                <li>
                  <a href="https://forumias.com" target="_blank" className="link">
                    ForumIAS
                  </a>
                  : Free notes on General Studies, Economics, Statistics.
                </li>
                <li>
                  <a href="https://pib.gov.in" target="_blank" className="link">
                    PIB India
                  </a>
                  : Current affairs for General Studies.
                </li>
                <li>
                  <a href="https://www.jagranjosh.com/upsc-ies-iss-previous-papers" target="_blank" className="link">
                    Previous Year Papers
                  </a>
                  : Download 2021–2024 IES/ISS papers.
                </li>
                <li>
                  <b>Books:</b>
                  <ul>
                    <li>“Microeconomics” by Hal Varian for IES.</li>
                    <li>“Macroeconomics” by Olivier Blanchard for IES.</li>
                    <li>“Indian Economy” by Uma Kapila for IES.</li>
                    <li>“Mathematical Statistics” by Freund for ISS.</li>
                    <li>“Fundamentals of Applied Statistics” by Gupta & Kapoor for ISS.</li>
                    <li>“General Studies” by McGraw Hill for Paper 1 & 2.</li>
                  </ul>
                </li>
                <li>
                  <b>YouTube Channels:</b> “VisionIAS,” “ForumIAS,” “Unacademy UPSC” for IES/ISS exam tips and live classes.
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
              alt="UPSC IES/ISS Recruitment 2025"
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

export default UPSC_IES_ISS_2;