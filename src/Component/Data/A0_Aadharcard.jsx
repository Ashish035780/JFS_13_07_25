import style from "./000_Content.module.css"
import a1 from "./Pic/Aadhar_1.jpg"
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";

const A0_Aadharcard=()=>{
//     
//     return(
//         <div>
//             <div id={style.page}> 
//              <h1></h1>
            
//              <h2><b style={{color:"red"}}>Post-Name :-</b> </h2>
//              <h2><b style={{color:"red"}}>Starting Date :- </b></h2>
//              <h2><b style={{color:"red"}}>Last Date :- </b>NA</h2>
//              <h2 style={{paddingTop:"20px"}}> <b style={{color:"red"}}>Quick Overview :-</b></h2>
//              <div  id={style.aa} style={{border:"none"}}><h1>Www.JobForSarkari.Com</h1></div>
             
//              <div>
//                 <div id={style.p1}>
//                     <h1></h1>
//                     <h3>()</h3>
//                     <h2>Download Aadhar Card, Check Aadhar Card Status,Modify Aadhar Card Online</h2>
                    
//                 </div>
//                 <div id={style.p2}>
//                     <h1></h1>
//                 </div>
//                 <div id={style.p3}>
//                     <div>
//                         <h1>Important Date</h1>
//                         <p><li></li></p>
//                         <p><li><b>Applying Started Date :-</b> 28/01/2009</li></p>
//                         <p><li><b>Last Date For Apply Date :-</b> NA</li></p>
                       
//                     </div>
//                    
//                 </div>
//                 <div id={style.p3}>
//                 <div>
//                         <h1>eligible for Aadhaar card</h1>
//                         <p><li><b>Nationality :-</b>Indian</li></p>
//                         <p><li><b>Nationals of Nepal and Bhutan :-</b>valid passport or other relevant documents</li></p>
//                         <p><li><b>NRI :-</b>present in India for at least 182 days in a yea</li></p>
//                     </div>
//                     <div>
//                         <h1>Age Limit <h5 style={{color:"red"}}>Age Limit</h5></h1>  
//                         <p><li><b>Minimum Age :-</b>NA</li></p> 
//                         <p><li><b>Maximum Age :-</b>NA</li></p> 
                                  
//                     </div>
//                 </div>
//                 <div id={style.p6}>
//                     <h1>Please read all the information carefully before filling the form</h1>
//                 </div>
//                 <div id={style.p7}>
//                     <h1>Respective Documents Needed For Respective Modification :-</h1>
//                     <h3><li>Passport Size Photo</li></h3>
//                     <h3><li>Signture</li></h3>
//                     <h3><li>Aadhar Card No</li></h3>
//                     <h3><li>Email Id</li></h3>
//                     <h3><li>Phone Number</li></h3>
//                 </div>
//                 <div id={style.p8}>
//                     <div><h1 style={{color:"blue"}}>Needed Mobile Or Laptop To Download, Modify Aadhar Card</h1></div>
//                     <div><h1 style={{color:"green"}}>Here Some Important Links</h1></div>
//                 </div>
//                 <div id={style.p9}>
//                     
//                 </div>
//              </div>
             
//               />


document.title="Download Aadhar Card, Check Aadhar Card Status,Modify Aadhar Card Online | Job For Sarkari"

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
        if (match) {setSociallink(match.data);}
        if (newQuicklink) {const shuffledJobs = shuffleArray(newQuicklink.data).slice(0, 12); setQuicklink(shuffledJobs)}
         });
  }, []);

 return (
    <div className={style.aaa}>
      <div className={style.aaa1}>
        <Ad type="728x90" />
        <section className={style.zxa}>
          <h1 className={style.zxb}>Download Aadhar Card, Check Aadhar Card Status,Modify Aadhar Card Online</h1>
          <h2 className={style.sectiontitle}>Post Name: Download Aadhar Card, Check Aadhar Card Status,Modify Aadhar Card Online</h2>
          <h2 className={style.sectiontitle} style={{ color: "red" }}>
            Application Start Date: NA
          </h2>
          <h2 className={style.sectiontitle} style={{ color: "red" }}>
            Application Last Date: NA
          </h2>
          <p className={style.zxc}>
           <b>Brief Summary :- </b> Aadhar Card is one of the most essential identity documents for Indian citizens. Issued by the Unique Identification Authority of India (UIDAI), this 12-digit unique number is used for identity verification and availing various government and private services. In today's digital era, the online Aadhar services provided by UIDAI make it quick and easy to download Aadhar card, check Aadhar card status, or modify Aadhar details online. Here’s a simple guide to help you through the most important Aadhar-related tasks online.You can download your e-Aadhar card online via the official UIDAI website (https://eaadhaar.uidai.gov.in). The e-Aadhar is a valid digital version of your physical card and is accepted across India.After applying for Aadhar enrollment or updating Aadhar details, you can check Aadhar card status online in real time.If there’s an error in your name, address, date of birth, mobile number, or gender on your Aadhar, you can update Aadhar card online through UIDAI’s Self-Service Update Portal (SSUP).
          </p>
          <div className={style.zxd}>
            <h1 className={style.zxe}>Www.JobForSarkari.Com</h1>
          </div>
           <Ad type="320x50" />
          <div className={style.zxf}>
            <h2 className={style.zxg}>Unique Identification Authority of India (UIDAI)</h2>
            <h3 className={style.zxh}><span className={style.highlight}>Mera Aadhaar, Meri Pehchaan</span></h3>
           
          </div>
          <div className={style.zxi}>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Important Dates</h2>
              <ul className={style.zxk}>
                <li><b>Scheme Started Date :-</b> 28/01/2009</li>
                <li><b>Application Start Date:</b> NA</li>
                <li><b>Application Last Date:</b> NA</li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Application Fee</h2>
             <ul className={style.zxk}>
                <li><b>New Aadhar Card:</b> Free</li>
                <li><b>Demographic Update (Name, Address, etc.):</b> ₹50/-</li>
                <li><b>Biometric Update (Fingerprint, Iris):</b> ₹100/-</li>
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Fees can be paid through Credit Card, Debit Card, or Net Banking at Aadhaar Enrollment Centers.
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
                <li><b>Minimum Age :</b> NA</li>
                <li><b>Maximum Age :</b> NA</li>
               </ul>
            </div>
          <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Eligibility</h2>
              <ul className={style.zxk}>
                <li><b>Indian Citizens:</b> Any resident of India (no age limit).</li>
                <li><b>Nationals of Nepal and Bhutan:</b> Valid passport or other relevant documents required.</li>
                <li><b>NRIs:</b> Must be present in India for at least 182 days in the preceding 12 months.</li>
              </ul>
            </div>
            <CollapsibleSection title="How to Download Aadhar Card">
              <ul className={style.zxs}>
                <li>Visit <a href="https://eaadhaar.uidai.gov.in/" target="_blank" className="link">eaadhaar.uidai.gov.in</a>.</li>
                <li>Enter your 12-digit Aadhaar number or Enrollment ID, full name, and pin code.</li>
                <li>Request an OTP sent to your registered mobile number.</li>
                <li>Enter the OTP and download the e-Aadhaar PDF.</li>
                <li>Use your Aadhaar number or registered mobile number as the password to open the PDF.</li>
                <li><b>Note:</b> The e-Aadhaar is a valid digital version accepted across India.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Check Aadhar Card Status">
              <ul className={style.zxs}>
                <li>Go to <a href="https://resident.uidai.gov.in/check-aadhaar" target="_blank" className="link">resident.uidai.gov.in/check-aadhaar</a>.</li>
                <li>Enter your Enrollment ID (EID) from the acknowledgment slip.</li>
                <li>Input the date and time of enrollment as mentioned on the slip.</li>
                <li>Enter the captcha code and submit to view the status.</li>
                <li><b>Note:</b> Status updates are available within 90 days of enrollment or update request.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Modify Aadhar Card">
              <ul className={style.zxs}>
                <li>Visit <a href="https://ssup.uidai.gov.in/ssup/login.html" target="_blank" className="link">ssup.uidai.gov.in</a>.</li>
                <li>Log in using your Aadhaar number and OTP sent to your registered mobile number.</li>
                <li>Select the fields to update (e.g., name, address, mobile number).</li>
                <li>Upload scanned copies of supporting documents (e.g., passport, voter ID for address proof).</li>
                <li>Submit the request and note the Update Request Number (URN).</li>
                <li>Pay ₹50 for demographic updates or ₹100 for biometric updates at an Aadhaar center if required.</li>
                <li>Track the update status using the URN at <a href="https://resident.uidai.gov.in/check-aadhaar" target="_blank" className="link">resident.uidai.gov.in</a>.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Required Documents for Aadhar Updates">
              <ul className={style.zxs}>
                <li><b>Identity Proof:</b> Passport, PAN card, Voter ID, or Driving License.</li>
                <li><b>Address Proof:</b> Utility bill, ration card, bank passbook, or rental agreement.</li>
                <li><b>Date of Birth Proof:</b> Birth certificate, SSLC certificate, or passport.</li>
                <li><b>Photograph:</b> Recent passport-size photo (for biometric updates).</li>
                <li><b>Aadhaar Number:</b> Mandatory for updates.</li>
                <li><b>Registered Mobile Number:</b> For OTP verification.</li>
                <li><b>Note:</b> Ensure documents are valid and match the details being updated.</li>
              </ul>
            </CollapsibleSection>
            <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
              <div className={style.zxv}> 
                <div>
                  <a href="https://eaadhaar.uidai.gov.in/" target="_blank" className="link">Download Online Aadhar Card</a>
                </div>
                <div>
                  <a href="https://ssup.uidai.gov.in/ssup/login.html" target="_blank" className="link">Update Aadhar Card Online</a>
                </div>
                  <div>
                  <a href="https://resident.uidai.gov.in/lost-uideid" target="_blank" className="link">Find Enrollment ID / Aadhar No</a>
                </div>
                <div>
                  <a href="https://appointments.uidai.gov.in/GenericErrorPage.htm?aspxerrorpath=/easearch.aspx" target="_blank" className="link">Locate Enrollment Center</a>
                </div>
                <div>
                  <a href="https://resident.uidai.gov.in/check-aadhaar" target="_blank" className="link">Check Aadhar Card Status</a>
                </div>
                <div>
                  <a href="https://www.youtube.com/watch?v=NdIVh5ye4y8" target="_blank" className="link">How to Download Aadhar Card</a>
                </div>
                <div>
                  <a href="https://www.iloveimg.com/resize-image" target="_blank" className="link">Resize Images</a>
                </div>
                <div>
                  <a href="https://uidai.gov.in/" target="_blank" className="link">Official Website</a>
                </div>
              </div>
            </div>
            <Ad type="NativeBanner" />
             <img src={a1} alt="Description of the image" id={style.pic} loading="lazy" style={{ maxWidth: '100%', height: 'auto' }}></img>
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
                               {quicklink.map((job, index) => ( <Link to={job.link} className={style.link}>
                               <React.Fragment key={index}> <li>{job.title}</li>
                               {index === 1 && (<Ad type="300x250" /> )}
                               {index === 6 && (<Ad type="300x250" />)}
                              </React.Fragment> 
                              </Link>))}
                               </li>
                            </ul>
                        </aside>
                        <Ad type="320x50" />
                        <aside className={style.zxw}>
                            <h2 className={style.sectiontitle}>Follow Us</h2>
                            <ul className={style.zxs}>
                                {sociallink.map((item, index) => (<li key={index}><a href={item.link} target="_blank" className={style.link}>{item.title}</a></li>))}   
                            </ul>
                        </aside> 
                         <Ad type="160x300" />
                       <Ad type="160x600" />
                </div>
    </div>
  );
};


export default A0_Aadharcard