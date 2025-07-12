import style from "./000_Content.module.css";
import a1 from "./Pic/UPSC_Engineering_Services_2.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";

const UPSC_Engineering_Services_2 = () => {
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
    fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/UPSC_ENGINEERING_SERVICES.json")
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((item) => item.id === "upscengineeringservices2");
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
                <li>Across India (Central Government departments like Railways, CPWD, MES, etc.)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/01/2026)</h2>
              <ul className={style.zxk}>
                <li>
                  <b>Minimum Age:</b> 21 Years
                </li>
                <li>
                  <b>Maximum Age:</b> 30 Years
                </li>
                <li>
                  <b>Age Relaxation:</b> SC/ST: 5 years, OBC: 3 years, PwD: 10 years, Ex-Servicemen: 5 years, as per UPSC rules.
                </li>
                <li>Additional age relaxation as per recruitment guidelines, please read the official UPSC ESE notification.</li>
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
                <div className={style.tablecell}>Engineering Services (Civil, Mechanical, Electrical, Electronics & Telecommunication)</div>
                <div className={style.tablecell}>
                  B.E./B.Tech degree in Civil, Mechanical, Electrical, or Electronics & Telecommunication Engineering from a recognized university or equivalent.
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>
                  <li>Read the official UPSC ESE notification for detailed eligibility criteria.</li>
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
                  <b>Preliminary Exam:</b> Objective-type test (General Studies & Engineering Aptitude, Engineering Discipline-specific).
                </li>
                <li>
                  <b>Main Exam:</b> Descriptive test (two papers, both discipline-specific).
                </li>
                <li>
                  <b>Personality Test (Interview):</b> Assess technical knowledge, personality, and suitability for service.
                </li>
                <li>
                  <b>Document Verification:</b> Verify eligibility and category documents.
                </li>
                <li>
                  <b>Final Merit:</b> Based on Prelims, Mains, and Interview marks.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Exam Pattern">
              <h2 className={style.sectiontitle}>Preliminary Exam</h2>
              <div
                style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }}
                className={style.tablerow}
              >
                <div className={style.tablecell}>Paper</div>
                <div className={style.tablecell}>Subjects</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 1</div>
                <div className={style.tablecell}>General Studies & Engineering Aptitude</div>
                <div className={style.tablecell}>200</div>
                <div className={style.tablecell}>2 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 2</div>
                <div className={style.tablecell}>Engineering Discipline (Civil/Mechanical/Electrical/Electronics)</div>
                <div className={style.tablecell}>300</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <h3 className={style.zxt}>Key Points (Preliminary):</h3>
              <ul className={style.zxs}>
                <li>Objective-type, 500 marks total, 5 hours.</li>
                <li>Negative marking: 0.33 marks per wrong answer.</li>
                <li>Qualifying in nature for Main Exam.</li>
              </ul>
              <h2 className={style.sectiontitle}>Main Exam</h2>
              <div
                style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }}
                className={style.tablerow}
              >
                <div className={style.tablecell}>Paper</div>
                <div className={style.tablecell}>Subjects</div>
                <div className={style.tablecell}>Marks</div>
                <div className={style.tablecell}>Time</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 1</div>
                <div className={style.tablecell}>Engineering Discipline (Civil/Mechanical/Electrical/Electronics)</div>
                <div className={style.tablecell}>300</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper 2</div>
                <div className={style.tablecell}>Engineering Discipline (Civil/Mechanical/Electrical/Electronics)</div>
                <div className={style.tablecell}>300</div>
                <div className={style.tablecell}>3 Hours</div>
              </div>
              <h3 className={style.zxt}>Key Points (Main):</h3>
              <ul className={style.zxs}>
                <li>Descriptive-type, 600 marks total, 6 hours.</li>
                <li>No negative marking.</li>
                <li>Marks used for final merit along with Interview.</li>
              </ul>
              <h2 className={style.sectiontitle}>Personality Test</h2>
              <ul className={style.zxs}>
                <li>200 marks, no minimum qualifying marks.</li>
                <li>Assesses technical knowledge, leadership, and communication skills.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <ul className={style.zxs}>
                <li>
                  <b>General Studies & Engineering Aptitude (Prelims Paper 1):</b> Current Affairs, Engineering Mathematics, Reasoning, Ethics, Project Management, Standards & Quality, Environment, ICT.
                </li>
                <li>
                  <b>Civil Engineering:</b> Structural Analysis, Construction Materials, Hydraulics, Transportation Engineering, Geotechnical Engineering.
                </li>
                <li>
                  <b>Mechanical Engineering:</b> Thermodynamics, Fluid Mechanics, Machine Design, Manufacturing, Power Plant Engineering.
                </li>
                <li>
                  <b>Electrical Engineering:</b> Circuit Theory, Power Systems, Electrical Machines, Control Systems, Power Electronics.
                </li>
                <li>
                  <b>Electronics & Telecommunication:</b> Analog & Digital Circuits, Communication Systems, Microprocessors, VLSI, Signal Processing.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Post Descriptions and Responsibilities">
              <ul className={style.zxs}>
                <li>
                  <b>Engineering Services:</b> Roles in Group A/B services like Indian Railway Service, Central Engineering Service, Military Engineering Services; involve project management, infrastructure development, and technical operations in respective engineering disciplines.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>10th/12th mark sheet and certificate.</li>
                <li>B.E./B.Tech degree certificate or provisional certificate.</li>
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
            <CollapsibleSection title="Career Benefits at UPSC ESE">
              <ul className={style.zxs}>
                <li>
                  <b>Salary:</b> ₹56,100–₹1,77,500 (Level 10) + DA, HRA, other allowances.
                </li>
                <li>
                  <b>Job Security:</b> Prestigious Group A/B government posts with pension under NPS.
                </li>
                <li>
                  <b>Allowances:</b> Medical benefits (CGHS), House Rent Allowance, Dearness Allowance, Transport Allowance.
                </li>
                <li>
                  <b>Career Growth:</b> Promotions to Senior Engineer, Director, and higher roles via seniority or departmental exams.
                </li>
                <li>
                  <b>Work Environment:</b> Technical and managerial roles in premier government departments like Railways, CPWD, and MES.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li>
                  <b>Check Eligibility:</b> Verify age (21–30 years) and education (B.E./B.Tech in relevant discipline).
                </li>
                <li>
                  <b>Visit Official Website:</b>{" "}
                  <a href="https://upsc.gov.in" target="_blank" className="link">
                    upsc.gov.in
                  </a>
                  .
                </li>
                <li>
                  <b>Register:</b> Click “Apply Online,” complete OTR (One Time Registration), enter email, mobile, and upload photo (20–50 KB) and signature (10–20 KB).
                </li>
                <li>
                  <b>Fill Form:</b> Provide personal, educational, and discipline details; select exam center and engineering discipline.
                </li>
                <li>
                  <b>Pay Fee:</b> ₹200 (General/OBC/EWS) via online mode; exempt for SC/ST/Female/PwD.
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
                <li>Navigate to “E-Admit Card” section.</li>
                <li>Select “UPSC ESE Admit Card.”</li>
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
                  <b>Understand Syllabus:</b> Focus on General Studies & Engineering Aptitude and discipline-specific topics.
                </li>
                <li>
                  <b>Previous Papers:</b> Solve ESE 2023–2024 papers for question patterns.
                </li>
                <li>
                  <b>Time Management:</b> Practice 500 marks in 5 hours (Prelims) and descriptive answers for Mains (600 marks, 6 hours).
                </li>
                <li>
                  <b>General Studies:</b> Read The Hindu, PIB for current affairs (2024-2025); focus on engineering ethics and project management.
                </li>
                <li>
                  <b>Engineering Discipline:</b> Study standard textbooks (e.g., Strength of Materials by R.K. Bansal for Civil, Thermodynamics by P.K. Nag for Mechanical).
                </li>
                <li>
                  <b>Mock Tests:</b> Use Made Easy, ACE Academy, or Testbook for ESE-specific mocks; target 300+ in Prelims, 400+ in Mains.
                </li>
                <li>
                  <b>Interview Prep:</b> Practice technical questions and communication skills; review projects from B.Tech.
                </li>
                <li>
                  <b>Stay Updated:</b> Follow upsc.gov.in for notifications and results.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li>
                  <b>How many vacancies in UPSC ESE?</b> {totalpost} vacancies (updated as per notification).
                </li>
                <li>
                  <b>Is there negative marking?</b> Yes, 0.33 marks per wrong answer in Prelims; no negative marking in Mains.
                </li>
                <li>
                  <b>Can final year B.Tech students apply?</b> Yes, provisionally, subject to degree completion by joining.
                </li>
                <li>
                  <b>What documents are needed?</b> B.E./B.Tech certificate, caste/EWS/PwD certificates, photo ID.
                </li>
                <li>
                  <b>Where are exam centers?</b> Major cities across India (specified in admit card).
                </li>
                <li>
                  <b>What are ESE roles?</b> Technical and managerial roles in government departments like Railways, CPWD, MES.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li>
                  <a href="https://upsc.gov.in" target="_blank" className="link">
                    UPSC Official Website
                  </a>
                  : Check ESE Notification, admit cards, results.
                </li>
                <li>
                  <a href="https://madeeasy.in" target="_blank" className="link">
                    Made Easy
                  </a>
                  : ESE-specific study material and mock tests.
                </li>
                <li>
                  <a href="https://aceenggacademy.com" target="_blank" className="link">
                    ACE Academy
                  </a>
                  : Free notes and test series for ESE.
                </li>
                <li>
                  <a href="https://pib.gov.in" target="_blank" className="link">
                    PIB India
                  </a>
                  : Current affairs for General Studies.
                </li>
                <li>
                  <a href="https://www.jagranjosh.com/upsc-ese-previous-papers" target="_blank" className="link">
                    Previous Year Papers
                  </a>
                  : Download 2023-2024 ESE papers.
                </li>
                <li>
                  <b>Books:</b>
                  <ul>
                    <li>“ESE General Studies & Engineering Aptitude” by Made Easy.</li>
                    <li>“Civil Engineering” by R.S. Khurmi for Civil.</li>
                    <li>“Thermodynamics” by P.K. Nag for Mechanical.</li>
                    <li>“Electrical Engineering” by J.B. Gupta for Electrical.</li>
                    <li>“Electronic Devices” by Boylestad for Electronics.</li>
                  </ul>
                </li>
                <li>
                  <b>YouTube Channels:</b> “Made Easy,” “Engineers Adda,” “Unacademy UPSC” for ESE tips and live classes.
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
              alt="UPSC ESE 2025 Recruitment"
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

export default UPSC_Engineering_Services_2;