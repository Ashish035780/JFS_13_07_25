
import style from "./000_Content.module.css";
import a1 from "./Pic/Terms_1.jpg";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";

const A0_Terms_Conditions = () => {
  document.title = "Terms and Conditions | Job For Sarkari";

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
          <h1 className={style.zxb}>Terms and Conditions</h1>
          <h2 className={style.sectiontitle}>JobForSarkari Website Terms and Conditions</h2>
          <p className={style.zxc}>
            <b>Brief Summary: </b>
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
              These terms and conditions outline the rules and regulations for the use of JobForSarkari's Website, located at <a href="https://jobforsarkari.com/" target="_blank" className="link">https://jobforsarkari.com/</a>.
            </p>
            <p className={style.zxc}>
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use JobForSarkari if you do not agree to take all of the terms and conditions stated on this page.
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
                  For the purposes of these Terms and Conditions:
                  <ul className={style.zxs}>
                    <li><b>Client, You, Your: </b>refers to you, the person logging on this website and compliant to the Company’s terms and conditions.</li>
                    <li><b>The Company, Ourselves, We, Our, Us: </b>refers to our Company, JobForSarkari.</li>
                    <li><b>Party, Parties, or Us: </b>refers to both the Client and ourselves.</li>
                    <li><b>Service: </b>refers to the Website.</li>
                    <li><b>Website: </b>refers to JobForSarkari, accessible from <a href="https://jobforsarkari.com/" target="_blank" className="link">https://jobforsarkari.com/</a>.</li>
                    <li>
                      All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of the provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization, and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                    </li>
                  </ul>
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Cookies">
              <ul className={style.zxs}>
                <li>
                  We employ the use of cookies. By accessing JobForSarkari, you agreed to use cookies in agreement with JobForSarkari's Privacy Policy.
                </li>
                <li>
                  Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="License">
              <ul className={style.zxs}>
                <li>
                  Unless otherwise stated, JobForSarkari and/or its licensors own the intellectual property rights for all material on JobForSarkari. All intellectual property rights are reserved. You may access this from JobForSarkari for your own personal use subject to restrictions set in these terms and conditions.
                </li>
                <li>
                  You must not:
                  <ul className={style.zxs}>
                    <li>Republish material from JobForSarkari</li>
                    <li>Sell, rent, or sub-license material from JobForSarkari</li>
                    <li>Reproduce, duplicate, or copy material from JobForSarkari</li>
                    <li>Redistribute content from JobForSarkari</li>
                  </ul>
                </li>
                <li>This Agreement shall begin on the date hereof.</li>
                <li>
                  Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. JobForSarkari does not filter, edit, publish, or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of JobForSarkari, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, JobForSarkari shall not be liable for the Comments or for any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
                </li>
                <li>
                  JobForSarkari reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive, or causes breach of these Terms and Conditions.
                </li>
                <li>
                  You warrant and represent that:
                  <ul className={style.zxs}>
                    <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
                    <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party;</li>
                    <li>The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material which is an invasion of privacy;</li>
                    <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
                  </ul>
                </li>
                <li>
                  You hereby grant JobForSarkari a non-exclusive license to use, reproduce, edit, and authorize others to use, reproduce, and edit any of your Comments in any and all forms, formats, or media.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Hyperlinking to our Content">
              <ul className={style.zxs}>
                <li>
                  The following organizations may link to our Website without prior written approval:
                  <ul className={style.zxs}>
                    <li>Government agencies;</li>
                    <li>Search engines;</li>
                    <li>News organizations;</li>
                    <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses;</li>
                    <li>System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Website.</li>
                  </ul>
                </li>
                <li>
                  These organizations may link to our home page, to publications, or to other Website information so long as the link:
                  <ul className={style.zxs}>
                    <li>Is not in any way deceptive;</li>
                    <li>Does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services;</li>
                    <li>Fits within the context of the linking party’s site.</li>
                  </ul>
                </li>
                <li>
                  We may consider and approve other link requests from the following types of organizations:
                  <ul className={style.zxs}>
                    <li>Commonly-known consumer and/or business information sources;</li>
                    <li>Dot-com community sites;</li>
                    <li>Associations or other groups representing charities;</li>
                    <li>Online directory distributors;</li>
                    <li>Internet portals;</li>
                    <li>Accounting, law, and consulting firms;</li>
                    <li>Educational institutions and trade associations.</li>
                  </ul>
                </li>
                <li>
                  We will approve link requests from these organizations if we decide that:
                  <ul className={style.zxs}>
                    <li>The link would not make us look unfavorably to ourselves or to our accredited businesses;</li>
                    <li>The organization does not have any negative records with us;</li>
                    <li>The benefit to us from the visibility of the hyperlink compensates the absence of JobForSarkari;</li>
                    <li>The link is in the context of general resource information.</li>
                  </ul>
                </li>
                <li>
                  These organizations may link to our home page so long as the link:
                  <ul className={style.zxs}>
                    <li>Is not in any way deceptive;</li>
                    <li>Does not falsely imply sponsorship, endorsement, or approval of the linking party and its products or services;</li>
                    <li>Fits within the context of the linking party’s site.</li>
                  </ul>
                </li>
                <li>
                  If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to JobForSarkari. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
                </li>
                <li>
                  Approved organizations may hyperlink to our Website as follows:
                  <ul className={style.zxs}>
                    <li>By use of our corporate name;</li>
                    <li>By use of the uniform resource locator being linked to;</li>
                    <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.</li>
                  </ul>
                </li>
                <li>
                  No use of JobForSarkari's logo or other artwork will be allowed for linking absent a trademark license agreement.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="iFrames">
              <ul className={style.zxs}>
                <li>
                  Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Content Liability">
              <ul className={style.zxs}>
                <li>
                  We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are arising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Privacy Policy">
              <ul className={style.zxs}>
                <li>
                  Please read our <a href="/privacy-policy" className="link">Privacy Policy</a>.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Reservation of Rights">
              <ul className={style.zxs}>
                <li>
                  We reserve the right to request that you remove all links or any particular link to our Website. You agree to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Removal of Links from Our Website">
              <ul className={style.zxs}>
                <li>
                  If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to do so or to respond to you directly.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Disclaimer">
              <ul className={style.zxs}>
                <li>
                  To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
                  <ul className={style.zxs}>
                    <li>Limit or exclude our or your liability for death or personal injury;</li>
                    <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                    <li>Limit any of our or your liabilities in any way that is not permitted under applicable law;</li>
                    <li>Exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                  </ul>
                </li>
                <li>
                  The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.
                </li>
                <li>
                  As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Contact Us">
              <ul className={style.zxs}>
                <li>
                  If you want to contact us then you can email us at <a href="mailto:ab035780@gmail.com" className="link">ab035780@gmail.com</a>.
                </li>
                <li>
                  Go to homepage <a href="https://jobforsarkari.com/" target="_blank" className="link">JobForSarkari</a>.
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
                  <a href="mailto:ab035780@gmail.com" className="link">
                    Contact Support
                  </a>
                </div>
                <div>
                  <a href="/privacy-policy" className="link">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
            <p className={style.zxc}>
              Thank you for taking the time to visit our Terms and Conditions.
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

export default A0_Terms_Conditions;