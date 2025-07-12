import style from "./000_Content.module.css";
import a1 from "./Pic/Army_TGC_1.jpg";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";

const Army_TGC_1 = () => {
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
    fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/ARMY_TGC.json")
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((item) => item.id === "armytgc1");
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
            <h2 className={style.zxg}>Indian Army</h2>
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
                  <b>All Categories:</b> Nil
                </li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> No application fee is
                  required for TGC recruitment.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Job Location</h2>
              <ul className={style.zxk}>
                <li>Across India (Indian Army postings)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit (As on 01/01/2026)</h2>
              <ul className={style.zxk}>
                <li>
                  <b>Minimum Age:</b> 20 Years
                </li>
                <li>
                  <b>Maximum Age:</b> 27 Years
                </li>
                <li>
                  <b>Age Relaxation:</b> As per Indian Army rules (if applicable).
                  Please read the official TGC notification for details.
                </li>
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
                <div className={style.tablecell}>Technical Graduate Course (TGC)</div>
                <div className={style.tablecell}>
                  B.E./B.Tech in relevant engineering discipline from a recognized
                  university. Final year appearing students may also apply.
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>
                  <li>
                    Read the official TGC notification for branch-wise eligibility
                    details.
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
                  <b>Engineering Stream</b>
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
                  <b>Shortlisting:</b> Based on academic performance in B.E./B.Tech
                  (cut-off percentage varies by engineering stream).
                </li>
                <li>
                  <b>SSB Interview:</b> 5-day Service Selection Board process (Stage
                  1: Screening; Stage 2: Psychological Tests, Group Testing, Interview).
                </li>
                <li>
                  <b>Medical Examination:</b> Comprehensive health check at military
                  hospitals.
                </li>
                <li>
                  <b>Final Merit List:</b> Based on SSB performance, subject to medical
                  fitness.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Training Details">
              <ul className={style.zxs}>
                <li>
                  <b>Duration:</b> 49 weeks at Indian Military Academy (IMA), Dehradun.
                </li>
                <li>
                  <b>Training Type:</b> Pre-commission training for technical officer
                  roles.
                </li>
                <li>
                  <b>Stipend:</b> ₹56,100/month during training (Level 10).
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Eligibility Criteria">
              <ul className={style.zxs}>
                <li>
                  <b>Educational Qualification:</b> B.E./B.Tech in specified
                  engineering streams (e.g., Civil, Mechanical, Electrical,
                  Electronics, Computer Science, etc.).
                </li>
                <li>
                  <b>Nationality:</b> Indian (unmarried male candidates only).
                </li>
                <li>
                  <b>Physical Standards:</b> Height: 157.5 cm (minimum), vision: 6/6
                  or 6/9 without glasses, no color blindness, general fitness as per
                  Army standards.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="SSB Interview Details">
              <ul className={style.zxs}>
                <li>
                  <b>Stage 1 (Screening):</b> Officer Intelligence Rating (OIR) test,
                  Picture Perception and Description Test (PPDT).
                </li>
                <li>
                  <b>Stage 2:</b> Psychological Tests (Thematic Apperception Test,
                  Word Association Test, Situation Reaction Test), Group Testing (Group
                  Discussion, Group Planning, Progressive Group Tasks), Personal
                  Interview.
                </li>
                <li>
                  <b>Duration:</b> 5 days at SSB centers (Allahabad, Bhopal, Bangalore,
                  Kapurthala, etc.).
                </li>
                <li>
                  <b>Preparation:</b> Focus on leadership qualities, communication
                  skills, and physical fitness.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Medical Examination">
              <ul className={style.zxs}>
                <li>
                  <b>Purpose:</b> Ensure fitness for commissioned officer duties.
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
                      <b>General Health:</b> No chronic diseases or deformities
                      affecting duties.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Tests:</b> Blood tests, vision/hearing tests, dental check,
                  physical examination.
                </li>
                <li>
                  <b>Disqualification:</b> Failure to meet standards leads to rejection.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits">
              <ul className={style.zxs}>
                <li>
                  <b>Salary:</b> Starting at ₹56,100–₹1,77,500 (Level 10) + Military
                  Service Pay (₹15,500), DA, HRA, other allowances.
                </li>
                <li>
                  <b>Job Security:</b> Permanent commission in the Indian Army.
                </li>
                <li>
                  <b>Allowances:</b> Field Area Allowance, High Altitude Allowance,
                  Uniform Allowance, Canteen Facilities, Medical Benefits.
                </li>
                <li>
                  <b>Career Growth:</b> Promotions to Major, Lt. Colonel, Colonel, and
                  higher ranks based on service and performance.
                </li>
                <li>
                  <b>Lifestyle:</b> Prestigious role with adventure, leadership
                  opportunities, and disciplined work environment.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li>
                  <b>Check Eligibility:</b> Verify age (20–27 years), education
                  (B.E./B.Tech), and physical standards.
                </li>
                <li>
                  <b>Visit Official Website:</b>{" "}
                  <a
                    href="https://joinindianarmy.nic.in"
                    target="_blank"
                    className="link"
                  >
                    joinindianarmy.nic.in
                  </a>
                  .
                </li>
                <li>
                  <b>Register:</b> Click “Officer Entry Apply/Login,” enter email,
                  mobile, and Aadhaar (optional).
                </li>
                <li>
                  <b>Fill Form:</b> Provide personal, educational, and engineering
                  stream details.
                </li>
                <li>
                  <b>Submit:</b> Review, submit, and download application form. Keep
                  Application Number.
                </li>
                <li>
                  <b>Track Application:</b> Check SSB call letters and updates on
                  joinindianarmy.nic.in.
                </li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li>
                  <b>Academic Prep:</b> Revise engineering fundamentals for technical
                  interview questions.
                </li>
                <li>
                  <b>SSB Prep:</b> Practice OIR tests, PPDT, and psychological tests
                  (use books like “SSB Interview” by Arihant).
                </li>
                <li>
                  <b>Physical Fitness:</b> Train for running (1.6 km in 5.5 minutes),
                  push-ups, and sit-ups.
                </li>
                <li>
                  <b>Current Affairs:</b> Read The Hindu, PIB for defense and national
                  news (2024-2025).
                </li>
                <li>
                  <b>Mock Interviews:</b> Join SSB coaching (e.g., Minerva Academy,
                  Baalnoi Academy) or practice with peers.
                </li>
                <li>
                  <b>Resources:</b> “Let’s Crack SSB Interview” by SSB Crack, YouTube
                  channels like “SSB Prep,” “Defence Direct Education.”
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li>
                  <b>How many vacancies in TGC?</b> {totalpost} vacancies (updated as
                  per notification).
                </li>
                <li>
                  <b>Is there an application fee?</b> No, TGC applications are free.
                </li>
                <li>
                  <b>Can final year students apply?</b> Yes, if appearing for B.E./B.Tech
                  final exams.
                </li>
                <li>
                  <b>What is the SSB process?</b> 5-day interview with screening,
                  psychological tests, group tasks, and personal interview.
                </li>
                <li>
                  <b>Where are SSB centers?</b> Allahabad, Bhopal, Bangalore,
                  Kapurthala, etc.
                </li>
                <li>
                  <b>What is the role of a TGC officer?</b> Technical duties in
                  engineering branches (e.g., Corps of Engineers, Signals, EME).
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li>
                  <a
                    href="https://joinindianarmy.nic.in"
                    target="_blank"
                    className="link"
                  >
                    Indian Army Official Website
                  </a>
                  : Check TGC notification, SSB call letters, results.
                </li>
                <li>
                  <a
                    href="https://ssbcrack.com"
                    target="_blank"
                    className="link"
                  >
                    SSB Crack
                  </a>
                  : SSB interview tips, OIR tests, PPDT practice.
                </li>
                <li>
                  <a
                    href="https://pib.gov.in"
                    target="_blank"
                    className="link"
                  >
                    PIB India
                  </a>
                  : Current affairs for SSB interviews.
                </li>
                <li>
                  <b>Books:</b>
                  <ul>
                    <li>“SSB Interview: The Complete Guide” by Arihant.</li>
                    <li>“Let’s Crack SSB Interview” by SSB Crack.</li>
                    <li>“Quantitative Aptitude” by R.S. Aggarwal for OIR prep.</li>
                  </ul>
                </li>
                <li>
                  <b>YouTube Channels:</b> “SSB Prep,” “Defence Direct Education” for
                  SSB tips and live classes.
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
              alt="Army TGC Recruitment 2025"
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
                <a href={item.link} target="_blank" className={style.link}>
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

export default Army_TGC_1;