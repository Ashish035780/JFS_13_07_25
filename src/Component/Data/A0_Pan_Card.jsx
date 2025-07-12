import style from "./000_Content.module.css"
import a1 from "./Pic/PanCard1.jpg"
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";

const A0_Pan_Card = () => {
  document.title = "Apply New PAN Card, Download PAN Card, Modify PAN Card, Link PAN to Aadhaar Online | Job For Sarkari";

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
          <h1 className={style.zxb}>Apply New PAN Card, Download PAN Card, Modify PAN Card, Link PAN to Aadhaar Online</h1>
          <h2 className={style.sectiontitle}>Post Name: Apply New PAN Card, Download PAN Card, Modify PAN Card, Link PAN to Aadhaar Online</h2>
          <h2 className={style.sectiontitle} style={{ color: "red" }}>
            Application Start Date: NA
          </h2>
          <h2 className={style.sectiontitle} style={{ color: "red" }}>
            Application Last Date: NA
          </h2>
          <p className={style.zxc}>
            <b>Brief Summary :- </b> The Permanent Account Number (PAN) card is a crucial identity document for taxpayers in India, issued by the Income Tax Department. It is a 10-digit alphanumeric number used for tax-related purposes and as proof of identity for various financial transactions. The PAN card can be applied for, downloaded, modified, or linked with Aadhaar online through official portals like NSDL, UTIITSL, or the Income Tax e-Filing website. This guide provides a step-by-step process for applying for a new PAN card, downloading an e-PAN, updating PAN details, and linking PAN with Aadhaar to ensure compliance with tax regulations. Linking PAN with Aadhaar is mandatory for filing Income Tax Returns (ITR) and conducting transactions above ₹50,000.[](https://cleartax.in/s/how-to-link-aadhaar-to-pan)[](https://www.bankbazaar.com/pan-card/link-aadhar-pan-card.html)
          </p>
          <div className={style.zxd}>
            <h1 className={style.zxe}>Www.JobForSarkari.Com</h1>
          </div>
          <Ad type="320x50" />
          <div className={style.zxf}>
            <h2 className={style.zxg}>Income Tax Department, Government of India</h2>
            <h3 className={style.zxh}><span className={style.highlight}>Your PAN, Your Identity</span></h3>
          </div>
          <div className={style.zxi}>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Important Dates</h2>
              <ul className={style.zxk}>
                <li><b>Scheme Started Date :-</b> 1972</li>
                <li><b>Application Start Date:</b> NA</li>
                <li><b>Application Last Date:</b> NA</li>
                <li><b>PAN-Aadhaar Linking Deadline:</b> 31/12/2025 (for PANs issued before 01/10/2024 using Aadhaar enrolment ID)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Application Fee</h2>
              <ul className={style.zxk}>
                <li><b>New Physical PAN Card:</b> ₹107/- (₹1017/- for dispatch outside India)</li>
                <li><b>e-PAN Card Only:</b> ₹72/-</li>
                <li><b>PAN Correction/Update:</b> ₹107/- (₹1017/- for foreign addresses)</li>
                <li><b>PAN-Aadhaar Linking Penalty (if not linked by 30/06/2023):</b> ₹1,000/-</li>
                <li><b>e-PAN Download (within 30 days of allotment):</b> Free (₹8.26/- after 30 days)</li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Fees can be paid via Credit Card, Debit Card, Net Banking, or Demand Draft.[](https://www.pan.utiitsl.com/)[](https://www.onlineservices.nsdl.com/paam/requestAndDownloadEPAN.html)
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Location</h2>
              <ul className={style.zxk}>
                <li>Apply from anywhere in India or abroad (for NRIs)</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit</h2>
              <ul className={style.zxk}>
                <li><b>Minimum Age:</b> NA</li>
                <li><b>Maximum Age:</b> NA</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Eligibility</h2>
              <ul className={style.zxk}>
                <li><b>Indian Citizens:</b> Individuals, HUFs, companies, firms, trusts, etc.</li>
                <li><b>Foreign Citizens:</b> Eligible if they have a taxable income in India.</li>
                <li><b>NRIs:</b> Eligible with valid documents (e.g., passport).</li>
                <li><b>Note:</b> Aadhaar is mandatory for new PAN applications from 01/07/2025.[](https://cleartax.in/s/how-to-link-aadhaar-to-pan)</li>
              </ul>
            </div>
            <CollapsibleSection title="How to Apply for a New PAN Card">
              <ul className={style.zxs}>
                <li>Visit <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" target="_blank" className="link">NSDL Portal</a> or <a href="https://www.pan.utiitsl.com/" target="_blank" className="link">UTIITSL Portal</a>.</li>
                <li>Select "New PAN" and choose the category (Individual, Firm, Company, etc.).</li>
                <li>Fill Form 49A (Indian citizens) or Form 49AA (foreign citizens) with details like name, DOB, and address.</li>
                <li>Submit Aadhaar number for authentication (mandatory from 01/07/2025).</li>
                <li>Upload required documents (identity proof, address proof, DOB proof).</li>
                <li>Pay ₹107/- (or ₹1017/- for foreign dispatch) via Credit Card, Debit Card, or Net Banking.</li>
                <li>Receive a 15-digit acknowledgement number to track application status.</li>
                <li><b>Note:</b> e-PAN is issued in PDF format within 10 minutes for Aadhaar-based e-KYC applications.[](https://www.pan.utiitsl.com/)[](https://cleartax.in/s/instant-pan-through-aadhaar)</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Download PAN Card">
              <ul className={style.zxs}>
                <li>Visit <a href="https://www.onlineservices.nsdl.com/paam/ReprintEPan.html" target="_blank" className="link">NSDL e-PAN Download</a> or <a href="https://www.utiitsl.com/UTIITSL_SITE/mainform.html" target="_blank" className="link">UTIITSL Portal</a>.</li>
                <li>Enter your PAN number, Aadhaar number (if linked), and DOB.</li>
                <li>Input the captcha code and request an OTP sent to your registered mobile number.</li>
                <li>Enter OTP and download the e-PAN PDF (free within 30 days of allotment, ₹8.26 thereafter).</li>
                <li>For Instant e-PAN, visit <a href="https://www.incometax.gov.in/iec/foservices/#/e-pan-login" target="_blank" className="link">Income Tax e-Filing Portal</a>, enter Aadhaar number, and download e-PAN for free.[](https://www.onlineservices.nsdl.com/paam/requestAndDownloadEPAN.html)[](https://cleartax.in/s/pan-card-download)</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Modify PAN Card">
              <ul className={style.zxs}>
                <li>Visit <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" target="_blank" className="link">NSDL Portal</a> or <a href="https://www.pan.utiitsl.com/" target="_blank" className="link">UTIITSL Portal</a>.</li>
                <li>Select "Change/Correction in PAN Data" and fill the online form.</li>
                <li>Enter details to update (e.g., name, address, DOB, mobile number).</li>
                <li>Upload supporting documents (e.g., passport, voter ID, utility bill).</li>
                <li>Pay ₹107/- (or ₹1017/- for foreign addresses) and submit the request.</li>
                <li>Receive a 15-digit acknowledgement number to track status.</li>
                <li><b>Note:</b> Updates can also be done offline at PAN Service Centers.[](https://cleartax.in/s/how-to-update-or-correct-pan-card-details)[](https://www.paisabazaar.com/pan-card/pan-card-correction-and-update/)</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Link PAN with Aadhaar">
              <ul className={style.zxs}>
                <li>Visit <a href="https://www.incometax.gov.in/iec/foservices/#/pre-login/link-aadhaar" target="_blank" className="link">Income Tax e-Filing Portal</a>.</li>
                <li>Click "Link Aadhaar" under Quick Links (pre-login) or Profile (post-login).</li>
                <li>Enter PAN, Aadhaar number, and name as per Aadhaar.</li>
                <li>Pay ₹1,000/- penalty (if linking after 30/06/2023) via e-Pay Tax option.</li>
                <li>Enter OTP sent to Aadhaar-registered mobile number and submit.</li>
                <li>Check status at <a href="https://www.incometax.gov.in/iec/foservices/#/pre-login/link-aadhaar-status" target="_blank" className="link">Link Aadhaar Status</a>.</li>
                <li><b>Note:</b> Linking is mandatory for ITR filing and transactions above ₹50,000.[](https://www.incometax.gov.in/iec/foportal/help/how-to-link-aadhaar)[](https://www.paisabazaar.com/aadhar-card/link-aadhar-to-pan-card/)</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Required Documents for PAN Applications/Updates">
              <ul className={style.zxs}>
                <li><b>Identity Proof:</b> Aadhaar, Voter ID, Passport, Driving License.</li>
                <li><b>Address Proof:</b> Utility bill, bank passbook, ration card, rental agreement.</li>
                <li><b>Date of Birth Proof:</b> Birth certificate, SSLC certificate, passport.</li>
                <li><b>Photograph:</b> Recent passport-size photo (for physical PAN card).</li>
                <li><b>Aadhaar Number:</b> Mandatory for new applications from 01/07/2025.</li>
                <li><b>Registered Mobile Number:</b> For OTP verification.</li>
                <li><b>Note:</b> Ensure documents are valid and match the details being updated.[](https://cleartax.in/s/how-to-update-or-correct-pan-card-details)</li>
              </ul>
            </CollapsibleSection>
            <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
              <div className={style.zxv}>
                <div>
                  <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" target="_blank" className="link">Apply New PAN Card (NSDL)</a>
                </div>
                <div>
                  <a href="https://www.pan.utiitsl.com/" target="_blank" className="link">Apply New PAN Card (UTIITSL)</a>
                </div>
                <div>
                  <a href="https://www.incometax.gov.in/iec/foservices/#/e-pan-login" target="_blank" className="link">Instant e-PAN (Income Tax)</a>
                </div>
                <div>
                  <a href="https://www.onlineservices.nsdl.com/paam/ReprintEPan.html" target="_blank" className="link">Download e-PAN (NSDL)</a>
                </div>
                <div>
                  <a href="https://www.utiitsl.com/UTIITSL_SITE/mainform.html" target="_blank" className="link">Download e-PAN (UTIITSL)</a>
                </div>
                <div>
                  <a href="https://www.incometax.gov.in/iec/foservices/#/pre-login/link-aadhaar" target="_blank" className="link">Link PAN with Aadhaar</a>
                </div>
                <div>
                  <a href="https://www.incometax.gov.in/iec/foservices/#/pre-login/link-aadhaar-status" target="_blank" className="link">Check PAN-Aadhaar Link Status</a>
                </div>
                <div>
                  <a href="https://eportal.incometax.gov.in/iec/foservices/#/pre-login/knowYourAO" target="_blank" className="link">Know Your AO</a>
                </div>
                <div>
                  <a href="https://www.incometax.gov.in/" target="_blank" className="link">Official Website</a>
                </div>
              </div>
            </div>
            <Ad type="NativeBanner" />
            <img src={a1} alt="PAN Card Sample Image" id={style.pic} loading="lazy" style={{ maxWidth: '100%', height: 'auto' }}></img>
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
              <p>Our job portal provides the latest updates on SSC Jobs Online, UPSC Exam Notifications, and c Jobs.</p>
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

export default A0_Pan_Card;