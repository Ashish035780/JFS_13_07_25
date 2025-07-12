import style from "./000_Content.module.css";
import a1 from "./Pic/Bihar_RTPS_1.jpg";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";

const A0_Bihar_RTPS = () => {
   document.title="Bihar जाति,आय, निवास प्रमाण पत्र Online Apply| Job For Sarkari"

  const [quicklink, setQuicklink] = useState([]);
  const [sociallink, setSociallink] = useState([]);

  const shuffleArray = (array) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/linker.json")
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
          <h1 className={style.zxb}>
            Apply Online RTPS Bihar जाति,आय, निवास प्रमाण पत्र OR Check Status and Download Online
          </h1>
          <h2 className={style.sectiontitle}>
            Service: Apply Online RTPS Bihar जाति,आय, निवास प्रमाण पत्र 
          </h2>
          <h2 className={style.sectiontitle} style={{ color: "red" }}>
            Application Start Date: NA
          </h2>
          <h2 className={style.sectiontitle} style={{ color: "red" }}>
            Application Last Date: NA
          </h2>
          <p className={style.zxc}>
            <b>Brief Summary: </b>
            The Right to Public Service (RTPS) Bihar, under the e-District Mission Mode Project, provides an online platform for residents of Bihar to apply for essential certificates such as caste, income, and residence certificates. Managed by the General Administration Department, the RTPS portal (serviceonline.bihar.gov.in) offers a user-friendly interface for applying, tracking application status, and downloading certificates. Certificates are delivered via SMS, email, DigiLocker, or Public Service Centers (RTPS Counters). This service ensures transparency, reduces corruption, and delivers timely government services. Applicants can apply at Block, Sub-Division, or District levels, and certificates are typically issued within 7–15 days.[](https://serviceonline.bihar.gov.in/resources/homePage/10/loginEnglish.htm)[](https://rtpsonline.com/rtps-bihar/)[](https://digivill.in/govtscheme/rtpsbihar)
          </p>
          <div className={style.zxd}>
            <h1 className={style.zxe}>Www.JobForSarkari.Com</h1>
          </div>
          <Ad type="320x50" />
          <div className={style.zxf}>
            <h2 className={style.zxg}>General Administration Department, Government of Bihar</h2>
            <h3 className={style.zxh}>
              <span className={style.highlight}>Right to Public Service (RTPS) ACT</span>
            </h3>
          </div>
          <div className={style.zxi}>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Important Dates</h2>
              <ul className={style.zxk}>
                <li><b>Scheme Started Date: </b>2011</li>
                <li><b>Application Start Date: </b>NA</li>
                <li><b>Application Last Date: </b>NA</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Application Fee</h2>
              <ul className={style.zxk}>
                <li><b>Application Fee: </b>Free</li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note: </b>
                  No application fee is required for registration, applying, or verification of certificates.[](https://sarkariresult.com.cm/bihar-income-cast-residential-certificate-online-apply-verification-2025/)
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Location</h2>
              <ul className={style.zxk}>
                <li>Apply from anywhere in Bihar</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit</h2>
              <ul className={style.zxk}>
                <li><b>Minimum Age: </b>NA</li>
                <li><b>Maximum Age: </b>NA</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Eligibility</h2>
              <ul className={style.zxk}>
                <li><b>Residents of Bihar: </b>Any resident of Bihar can apply.</li>
                <li><b>Document Requirements: </b>Vary by certificate; check specific service page for details.[](https://thertpsbihar.in/)</li>
              </ul>
            </div>
            <CollapsibleSection title="How to Apply for Certificates">
              <ul className={style.zxs}>
                <li>
                  Visit{" "}
                  <a href="https://serviceonline.bihar.gov.in" target="_blank" className="link">
                    serviceonline.bihar.gov.in
                  </a>.
                </li>
                <li>Navigate to the "Citizen Section" and select "Apply for Services".</li>
                <li>Choose the desired certificate (Caste, Income, or Residence) at Block, Sub-Division, or District level.</li>
                <li>Fill out the application form and upload required documents.</li>
                <li>Submit the application and note the Application Reference Number.</li>
                <li><b>Note: </b>Certificates are issued within 7–15 days.[](https://digivill.in/govtscheme/rtpsbihar)[](https://www.99acres.com/articles/rtps-bihar.html)</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Check Application Status">
              <ul className={style.zxs}>
                <li>
                  Visit{" "}
                  <a href="https://serviceonline.bihar.gov.in" target="_blank" className="link">
                    serviceonline.bihar.gov.in
                  </a>.
                </li>
                <li>Go to the "Citizen Section" and click "Track Application Status".</li>
                <li>Enter your Application Reference Number or OTP/Application Details.</li>
                <li>Submit to view the status.</li>
                <li><b>Note: </b>Status can be tracked in real-time.[](https://digivill.in/govtscheme/rtpsbihar)[](https://rtpsbiharonline.in/rtps-bihar-application-status/)</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Download Certificates">
              <ul className={style.zxs}>
                <li>
                  Visit{" "}
                  <a href="https://serviceonline.bihar.gov.in" target="_blank" className="link">
                    serviceonline.bihar.gov.in
                  </a>.
                </li>
                <li>Go to the "Citizen Section" and click "Download Certificate".</li>
                <li>Select "RTPS/Others" from the dropdown menu.</li>
                <li>Enter your Application Reference Number and Applicant Name (in English).</li>
                <li>Click "Download Certificate" to download the PDF.</li>
                <li><b>Note: </b>Download certificates at least 24 hours after application processing.[](https://digivill.in/govtscheme/rtpsbihar)[](https://www.fastjobsearchers.com/br/rtps-bihar)
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Required Documents for Certificates">
              <ul className={style.zxs}>
                <li><b>Identity Proof: </b>Aadhaar card, Voter ID, or Ration card.</li>
                <li><b>Address Proof: </b>Utility bill, Ration card, or Rental agreement.</li>
                <li><b>Caste Certificate: </b>Proof of caste (e.g., family caste certificate).</li>
                <li><b>Income Certificate: </b>Income proof</li>
                
                    <div className={style.table_container}>
                      <table className={style.table}>
                        <thead>
                          <tr>
                            <th className={style.th}>Certificate Type</th>
                            <th className={style.th}>Validity</th>
                            <th className={style.th}>Issuing Authority</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className={style.td}>Caste Certificate</td>
                            <td className={style.td}>Permanent</td>[](https://www.fastjobsearchers.com/br/rtps-bihar)
                            <td className={style.td}>Block/Sub-Division/District</td>
                          </tr>
                          <tr>
                            <td className={style.td}>Income Certificate</td>
                            <td className={style.td}>1 Year</td>[](https://rtpsonline.com/rtps-bihar/)
                            <td className={style.td}>Block/Sub-Division/District</td>
                          </tr>
                          <tr>
                            <td className={style.td}>Residence Certificate</td>
                            <td className={style.td}>Permanent</td>
                            <td className={style.td}>Block/Sub-Division/District</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    </ul>
                
                <li><b>Photograph: </b>Recent passport-size photo (less than 300 KB).</li>
                <li><b>Note: </b>Check specific service page for detailed requirements.</li>
              
            </CollapsibleSection>
            <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
              <div className={style.zxv}>
                <div>
                  <a href="https://serviceonline.bihar.gov.in" target="_blank" className="link">
                    Apply Online for Certificates
                  </a>
                </div>
                <div>
                  <a href="https://serviceonline.bihar.gov.in/serviceLinkHome.html?serviceToken=CgzhRQI7r54630001&janparichayEnabled=Y" target="_blank" className="link">
                    Track Application Status
                  </a>
                </div>
                <div>
                  <a href="https://swcs.bihar.gov.in/RtpsReportView/certificate_download.jsp" target="_blank" className="link">
                    Download Certificate
                  </a>
                </div>
                <div>
                  <a href="https://serviceonline.bihar.gov.in/renderApplicationForm.do?serviceId=4650008&UUID=7a8cc254-dd5f-41c6-8e9c-153d9b15f923&directService=true&tempId=748&grievDefined=0&serviceLinkRequired=No&userLoggedIn=N&source=CTZN&OWASP_CSRFTOKEN=HD2X-TRRC-6X5G-T8PX-WP0M-YXA0-XI20-6TP2https://serviceonline.bihar.gov.in" target="_blank" className="link">
                    Official RTPS Bihar Website
                  </a>
                </div>
              </div>
            </div>
            <Ad type="NativeBanner" />
            <img
              src={a1}
              alt="RTPS Bihar Portal"
              id={style.pic}
              loading="lazy"
              style={{ maxWidth: "100%", height: "auto" }}
            />
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
              <p>Discover opportunities across sectors, including police, banking, railways, defense, and education.</p>
              <p>Stay ahead with details on upcoming govt exams and find state-wise government jobs tailored to your location.</p>
              <p>Start your Sarkari job search today and secure your future with the best government career opportunities!</p>
            </div>
            <div id={style.ins}>
              <h1>Latest Government Jobs Updates</h1>
              <h2>Apply for All Types of Jobs like Police, Railway, Bank, SSC, UPSC & More</h2>
              <p>Seeking Police Jobs, Railway Jobs 2024, Bank Jobs Recruitment, or Defense Vacancies?</p>
              <p>Stay updated with free job alert notifications and never miss an opportunity to apply for civil service jobs that match your skills and aspirations.</p>
              <p>Our job portal provides the latest updates on SSC Jobs Online, UPSC Exam Notifications, and Police Government Jobs.</p>
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

export default A0_Bihar_RTPS;