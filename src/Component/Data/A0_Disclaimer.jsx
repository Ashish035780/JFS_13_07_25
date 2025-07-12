
import style from "./000_Content.module.css";
import a1 from "./Pic/Disclaimer_1.jpg";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";

const A0_Disclaimer = () => {
  document.title = "Disclaimer | Job For Sarkari";

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
          <h1 className={style.zxb}>Disclaimer</h1>
          <h2 className={style.sectiontitle}>JobForSarkari Website Disclaimer</h2>
          <p className={style.zxc}>
            <b>Quick Overview: </b>
            Welcome to our website www.JobForSarkari.com. By using our job search portal, you agree to comply with our terms and conditions, including responsible usage, data accuracy, and adherence to privacy policies.
          </p>
          <div className={style.zxd}>
            <h1 className={style.zxe}>Www.JobForSarkari.Com</h1>
          </div>
          <Ad type="320x50" />
          <div className={style.zxf}>
            <h2 className={style.zxg}>Welcome to JobForSarkari!</h2>
            <h3 className={style.zxh}>
              <span className={style.highlight}>Your Trusted Job Search Portal</span>
            </h3>
            <p className={style.zxc}>
              If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at <a href="mailto:ab035780@gmail.com" className="link">ab035780@gmail.com</a>.
            </p>
          </div>
          <div className={style.zxi}>
            <CollapsibleSection title="Interpretation and Definitions">
              <ul className={style.zxs}>
                <li>
                  <b>Interpretation: </b>
                  The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </li>
                <li>
                  <b>Definitions: </b>
                  For the purposes of this Disclaimer:
                  <ul className={style.zxs}>
                    <li><b>Company: </b>(referred to as either "the Company", "We", "Us", or "Our" in this Disclaimer) refers to JobForSarkari.</li>
                    <li><b>Service: </b>refers to the Website.</li>
                    <li><b>You: </b>means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                    <li><b>Website: </b>refers to JobForSarkari, accessible from <a href="https://jobforsarkari.com/" target="_blank" className="link">https://jobforsarkari.com/</a>.</li>
                  </ul>
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Disclaimer">
              <ul className={style.zxs}>
                <li>
                  The information contained on the Service is for general information purposes only.
                </li>
                <li>
                  The Company assumes no responsibility for errors or omissions in the contents of the Service.
                </li>
                <li>
                  In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.
                </li>
                <li>
                  The Company does not warrant that the Service is free of viruses or other harmful components.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="External Links Disclaimer">
              <ul className={style.zxs}>
                <li>
                  The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company.
                </li>
                <li>
                  Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Errors and Omissions Disclaimer">
              <ul className={style.zxs}>
                <li>
                  The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to ensure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules, and regulations, there may be delays, omissions, or inaccuracies in the information contained on the Service.
                </li>
                <li>
                  The JobForSarkari is not responsible for any errors or omissions, or for the results obtained from the use of this information.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Fair Use Disclaimer">
              <ul className={style.zxs}>
                <li>
                  The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.
                </li>
                <li>
                  The Company believes this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright law.
                </li>
                <li>
                  If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Views Expressed Disclaimer">
              <ul className={style.zxs}>
                <li>
                  The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer, or company, including the Company.
                </li>
                <li>
                  Comments published by users are their sole responsibility and the users will take full responsibility, liability, and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The JobForSarkari is not liable for any comment published by users and reserves the right to delete any comment for any reason whatsoever.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="No Responsibility Disclaimer">
              <ul className={style.zxs}>
                <li>
                  The information on the Service is provided with the understanding that the Company is not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal, or other competent advisers.
                </li>
                <li>
                  In no event shall the JobForSarkari or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Use at Your Own Risk Disclaimer">
              <ul className={style.zxs}>
                <li>
                  All information in the Service is provided "as is", with no guarantee of completeness, accuracy, timeliness, or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability, and fitness for a particular purpose.
                </li>
                <li>
                  The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special, or similar damages, even if advised of the possibility of such damages.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Updates">
              <ul className={style.zxs}>
                <li>
                  We reserve the right to update or modify this document at any time. Any changes will be clearly posted on this page.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Contact Us">
              <ul className={style.zxs}>
                <li>
                  If you wish to contact us, please email us at <a href="mailto:ab035780@gmail.com" className="link">ab035780@gmail.com</a> or use the contact us available on our website. Go to homepage <a href="https://jobforsarkari.com/" target="_blank" className="link">JobForSarkari</a>.
                </li>
              </ul>
            </CollapsibleSection>
            <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
              <div className={style.zxv}>
                <div>
                  <a href="https://jobforsarkari.com/" target="_blank" className="link">
                    Visit JobForSarkari Website
                  </a>
                </div>
                <div>
                  <Link to="/contactus" className="link">Contact Support</Link>
                </div>
              </div>
            </div>
            <p className={style.zxc}>
              Thank you for taking the time to visit our Disclaimer.
            </p>
            <Ad type="NativeBanner" />
            <img
              src={a1}
              alt="JobForSarkari Logo"
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

export default A0_Disclaimer;
