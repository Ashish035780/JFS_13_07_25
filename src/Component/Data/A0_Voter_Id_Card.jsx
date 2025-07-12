import style from "./000_Content.module.css";
import a1 from "./Pic/Voter_1.jpg";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";

const A0_Voter_Id_Card = () => {
  document.title = "Apply New Voter ID Registration, Check Application Status, Modify Voter ID Card Online | Job For Sarkari";

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
        const match = data.find(item => item.id === "sociallink");
        if (match) { setSociallink(match.data); }
        if (newQuicklink) { const shuffledJobs = shuffleArray(newQuicklink.data).slice(0, 12); setQuicklink(shuffledJobs); }
      });
  }, []);

  return (
    <div className={style.aaa}>
      <div className={style.aaa1}>
        <Ad type="728x90" />
        <section className={style.zxa}>
          <h1 className={style.zxb}>Apply New Voter ID Registration, Check Application Status, Modify Voter ID Card Online</h1>
          <h2 className={style.sectiontitle}>Post Name: Apply New Voter ID Registration, Check Application Status, Modify Voter ID Card Online</h2>
          <h2 className={style.sectiontitle} style={{ color: "red" }}>
            Application Start Date: NA
          </h2>
          <h2 className={style.sectiontitle} style={{ color: "red" }}>
            Application Last Date: NA
          </h2>
          <p className={style.zxc}>
            <b>Brief Summary :- </b> A Voter ID card, also known as the Electoral Photo Identity Card (EPIC), is an essential document issued by the Election Commission of India (ECI) for Indian citizens eligible to vote. It serves as proof of identity and address, enabling participation in democratic elections. The National Voters' Services Portal (NVSP) and Voters' Services Portal (voters.eci.gov.in) offer convenient online services to apply for a new Voter ID, check application status, and modify details such as name, address, or other personal information. This guide provides a step-by-step process to help you navigate these services efficiently. The e-EPIC is a downloadable digital version of the Voter ID, accepted across India for voting and identity verification purposes.[](https://cleartax.in/s/voter-id)[](https://voters.eci.gov.in)
          </p>
          <div className={style.zxd}>
            <h1 className={style.zxe}>Www.JobForSarkari.Com</h1>
          </div>
          <Ad type="320x50" />
          <div className={style.zxf}>
            <h2 className={style.zxg}>Election Commission of India (ECI)</h2>
            <h3 className={style.zxh}><span className={style.highlight}>Your Vote, Your Voice</span></h3>
          </div>
          <div className={style.zxi}>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Important Dates</h2>
              <ul className={style.zxk}>
                <li><b>Scheme Started Date :-</b> Not Specified</li>
                <li><b>Application Start Date:</b> NA</li>
                <li><b>Application Last Date:</b> NA</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Application Fee</h2>
              <ul className={style.zxk}>
                <li><b>New Voter ID Registration:</b> Free</li>
                <li><b>Modifications/Corrections:</b> Free</li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> No fees are charged for online applications or corrections via the NVSP portal.
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Location</h2>
              <ul className={style.zxk}>
                <li>Apply from anywhere in India</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit</h2>
              <ul className={style.zxk}>
                <li><b>Minimum Age :</b> 18 years (as of January 1st of the year of electoral roll revision)</li>
                <li><b>Maximum Age :</b> NA</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Eligibility</h2>
              <ul className={style.zxk}>
                <li><b>Indian Citizens:</b> Must be 18 years or older on the qualifying date (January 1st of the year of electoral roll revision).</li>
                <li><b>Non-Resident Indians (NRIs):</b> Must be Indian citizens, not holding citizenship of another country, and present in their constituency to vote.</li>
                <li><b>Additional Requirements:</b> Must be of sound mind, free of criminal charges, and not financially bankrupt. Must provide a permanent address in India.[](https://cleartax.in/s/voter-id)[](https://paytm.com/blog/voter-id/register-voter-id-online/)</li>
              </ul>
            </div>
            <CollapsibleSection title="How to Apply for New Voter ID Registration">
              <ul className={style.zxs}>
                <li>Visit <a href="https://voters.eci.gov.in/" target="_blank" className="link">voters.eci.gov.in</a>.</li>
                <li>Click on ‘Sign-Up’ and register using your mobile number, email (optional), and captcha code.</li>
                <li>Log in with your credentials and OTP sent to your registered mobile number.</li>
                <li>Click ‘Fill Form 6’ under the ‘New registration for general electors’ tab.</li>
                <li>Enter personal details, address, and upload required documents (e.g., Aadhaar card, passport-size photo).</li>
                <li>Submit the form and note the reference number for tracking.</li>
                <li><b>Note:</b> A Booth Level Officer may verify details at your address. The Voter ID is typically issued within 30 days.[](https://cleartax.in/s/voter-id)[](https://cleartax.in/s/check-voter-id-card-status)</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Check Voter ID Application Status">
              <ul className={style.zxs}>
                <li>Go to <a href="https://voters.eci.gov.in/" target="_blank" className="link">voters.eci.gov.in</a>.</li>
                <li>Click on the ‘Track Application Status’ tab.</li>
                <li>Log in using your mobile number, password, and OTP.</li>
                <li>Enter the reference number from the acknowledgment slip and select your state.</li>
                <li>Submit to view the application status.</li>
                <li><b>Alternative:</b> Send an SMS in the format VOTE {`<Voter ID number>`} to 1950 or contact your state’s Electoral Officer.[](https://www.bankbazaar.com/voter-id/status.html)[](https://cleartax.in/s/check-voter-id-card-status)</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Modify Voter ID Card">
              <ul className={style.zxs}>
                <li>Visit <a href="https://voters.eci.gov.in/" target="_blank" className="link">voters.eci.gov.in</a>.</li>
                <li>Log in using your mobile number and OTP.</li>
                <li>Click on ‘Form 8’ under ‘Shifting of Residence/Correction of Entries in Existing Electoral Roll’.</li>
                <li>Select the fields to update (e.g., name, address, mobile number).</li>
                <li>Upload supporting documents (e.g., Aadhaar card, utility bill for address proof).</li>
                <li>Submit the request and note the reference number for tracking.</li>
                <li>Track the status using the reference number at <a href="https://voters.eci.gov.in/" target="_blank" className="link">voters.eci.gov.in</a>.</li>
                <li><b>Note:</b> Modifications typically take 2-3 weeks to process.[](https://cleartax.in/s/voter-id-name-change)[](https://cleartax.in/s/voter-id-address-change)</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Required Documents for Voter ID Updates">
              <ul className={style.zxs}>
                <li><b>Identity Proof:</b> Aadhaar card, PAN card, passport, or driving license.</li>
                <li><b>Address Proof:</b> Utility bill (water, electricity, gas not older than one year), bank passbook, registered rental agreement, or land ownership records.</li>
                <li><b>Date of Birth Proof:</b> Birth certificate, SSLC certificate, Aadhaar card, or passport.</li>
                <li><b>Photograph:</b> Two recent passport-size photos (taken within six months).</li>
                <li><b>Registered Mobile Number:</b> For OTP verification.</li>
                <li><b>Note:</b> Ensure documents are valid and match the details being updated.[](https://paytm.com/blog/voter-id/register-voter-id-online/)</li>
              </ul>
            </CollapsibleSection>
            <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
              <div className={style.zxv}>
                <div>
                  <a href="https://voters.eci.gov.in/" target="_blank" className="link">Apply New Voter ID Online</a>
                </div>
                <div>
                  <a href="https://voters.eci.gov.in/" target="_blank" className="link">Update Voter ID Online</a>
                </div>
                <div>
                  <a href="https://voters.eci.gov.in/" target="_blank" className="link">Check Voter ID Status</a>
                </div>
                <div>
                  <a href="https://voters.eci.gov.in/" target="_blank" className="link">Download e-EPIC</a>
                </div>
                <div>
                  <a href="https://www.eci.gov.in/" target="_blank" className="link">Official Website</a>
                </div>
                <div>
                  <a href="https://www.youtube.com/watch?v=example" target="_blank" className="link">How to Apply for Voter ID</a>
                </div>
                <div>
                  <a href="https://www.iloveimg.com/resize-image" target="_blank" className="link">Resize Images</a>
                </div>
              </div>
            </div>
            <Ad type="NativeBanner" />
            <img src={a1} alt="Voter ID Card" id={style.pic} loading="lazy" style={{ maxWidth: '100%', height: 'auto' }}></img>
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
                <Link to={job.link} className={style.link}>
                  <React.Fragment key={index}>
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

export default A0_Voter_Id_Card;