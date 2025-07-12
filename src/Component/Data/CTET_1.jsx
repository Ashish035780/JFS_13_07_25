import style from "./000_Content.module.css";
import a1 from "./Pic/CTET_1.jpg"; // Update with relevant image
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollapsibleSection from "./AA_CollapsibleSection";
import { Link } from "react-router-dom";
import Ad from "../Ad";
import React, { useEffect, useState } from "react";
const CTET_1 = () => {
    
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
      fetch("https://raw.githubusercontent.com/Ashishbhagatraj/JFS_Database/refs/heads/main/CTET.json")
        .then((res) => res.json())
        .then((data) => {
          const job = data.find((item) => item.id === "ctet1");
          if (job) {
            setTitle(job.title)
            document.title =(job.title)
            setPostname(job.postname)
            setDescription(job.description)
            setTotalpost(job.totalpost)
            setPayscale(job.payscale)
            setStartdate(job.startdate)
            setLastdate(job.lastdate)
            setDate(job.date)
            setLink(job.link)
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
          <h1 className={style.zxb}>{title}</h1>
          <h2 className={style.sectiontitle}>Post Name :- {postname} </h2>
          <h2 className={style.sectiontitle} style={{ color: "red" }}>Application Start Date :- {startdate}</h2>
          <h2 className={style.sectiontitle} style={{ color: "red" }}>Application Start Date :- {lastdate}</h2>
          
          <p className={style.zxc}>
            <b>Brief Summary :- </b>
           {description}
          </p>
          <div className={style.zxd}>
            <h1 className={style.zxe}>Www.JobForSarkari.Com</h1>
          </div>
           <Ad type="320x50" />
          <div className={style.zxf}>
            <h2 className={style.zxg}>Central Board of Secondary Education (CBSE)</h2>
            <h3 className={style.zxh}>Total Posts: <span className={style.highlight}>{totalpost}</span></h3>
            <h3 className={style.zxh}>Pay Scale: <span className={style.highlight}>{payscale}</span></h3>
          </div>
          <div className={style.zxi}>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Important Dates</h2>
              <ul className={style.zxk}>{Object.entries(date).map(([key, value]) => (<li key={key}><b>{key} :-</b> {value}</li>))}</ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Application Fee</h2>
              <ul className={style.zxk}>
                <li><b>General/OBC (Single Paper):</b> ₹1,000</li>[](https://www.shiksha.com/exams/ctet-exam)
                <li><b>General/OBC (Both Papers):</b> ₹1,200</li>[](https://www.shiksha.com/exams/ctet-exam)
                <li><b>SC/ST/PWD (Single Paper):</b> ₹500</li>[](https://competition.careers360.com/articles/ctet-application-form)
                <li><b>SC/ST/PWD (Both Papers):</b> ₹600</li>[](https://competition.careers360.com/articles/ctet-application-form)
                <li style={{ marginTop: "1rem" }}>
                  <b style={{ color: "#dc2626" }}>Note:</b> Pay via Debit/Credit Card, Net Banking, or E-Challan (Syndicate/Canara Bank). Fee is non-refundable.[](https://www.careerpower.in/ctet-online-form.html)
                </li>
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Exam Location</h2>
              <ul className={style.zxk}>
                <li>Across India (Delhi, Mumbai, Bengaluru, Kolkata, Patna, etc.)</li>
                <li><b>Note:</b> Select four exam centers in order of preference during application.</li>[](https://www.shiksha.com/exams/ctet-exam-application-form)
              </ul>
            </div>
            <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Age Limit</h2>
              <ul className={style.zxk}>
                <li><b>Minimum Age:</b> No limit.</li>
                <li><b>Maximum Age:</b> No limit.</li>[](https://www.fastjobsearchers.com/job/ctet.html)
                <li><b>Note:</b> Candidates must meet educational eligibility criteria.</li>
              </ul>
            </div>
             <div className={style.zxj}>
              <h2 className={style.sectiontitle}>Eligibility Qualification Details</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Paper</div>
                <div className={style.tablecell}>Eligibility Criteria</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper I (Classes 1-5)</div>
                <div className={style.tablecell}>
                  Senior Secondary (or equivalent) with at least 50% marks and passed or appearing in final year of 2-year Diploma in Elementary Education; OR Senior Secondary with 45% marks and passed or appearing in final year of 2-year Diploma in Elementary Education per NCTE 2002 norms; OR Senior Secondary with 50% marks and passed or appearing in final year of 4-year B.El.Ed; OR Senior Secondary with 50% marks and passed or appearing in final year of 2-year Diploma in Education (Special Education); OR Graduation with 50% marks and passed or appearing in 1-year B.Ed.[](https://www.shiksha.com/exams/ctet-exam)
                </div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Paper II (Classes 6-8)</div>
                <div className={style.tablecell}>
                  Graduation and passed or appearing in final year of 2-year Diploma in Elementary Education; OR Graduation with 50% marks and passed or appearing in 1-year B.Ed; OR Graduation with 45% marks and passed or appearing in 1-year B.Ed per NCTE norms; OR Senior Secondary with 50% marks and passed or appearing in final year of 4-year B.El.Ed; OR Senior Secondary with 50% marks and passed or appearing in final year of 4-year BA/BSc.Ed or BA.Ed/BSc.Ed; OR Graduation with 50% marks and passed or appearing in 1-year B.Ed (Special Education).[](https://www.shiksha.com/exams/ctet-exam)
                </div>
              </div>
            </div>
             <CollapsibleSection title="Exam Pattern">
              <h2 className={style.sectiontitle}>Paper I (Classes 1-5)</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Section</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Child Development and Pedagogy</div>
                <div className={style.tablecell}>30</div>
                <div className={style.tablecell}>30</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Language I (Compulsory)</div>
                <div className={style.tablecell}>30</div>
                <div className={style.tablecell}>30</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Language II (Compulsory)</div>
                <div className={style.tablecell}>30</div>
                <div className={style.tablecell}>30</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Mathematics</div>
                <div className={style.tablecell}>30</div>
                <div className={style.tablecell}>30</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Environmental Studies</div>
                <div className={style.tablecell}>30</div>
                <div className={style.tablecell}>30</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Total: 150 MCQs, 150 marks, 2.5 hours.</li>
                <li>No negative marking.</li>[](https://www.fastjobsearchers.com/job/ctet.html)
                <li>Questions based on NCERT syllabus for Classes 1-5, difficulty up to secondary level.</li>[](https://www.careerpower.in/ctet.html)
              </ul>
              <h2 className={style.sectiontitle}>Paper II (Classes 6-8)</h2>
              <div style={{ backgroundColor: "#f7fafc", fontFamily: "bold" }} className={style.tablerow}>
                <div className={style.tablecell}>Section</div>
                <div className={style.tablecell}>Questions</div>
                <div className={style.tablecell}>Marks</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Child Development and Pedagogy</div>
                <div className={style.tablecell}>30</div>
                <div className={style.tablecell}>30</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Language I (Compulsory)</div>
                <div className={style.tablecell}>30</div>
                <div className={style.tablecell}>30</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Language II (Compulsory)</div>
                <div className={style.tablecell}>30</div>
                <div className={style.tablecell}>30</div>
              </div>
              <div className={style.tablerow}>
                <div className={style.tablecell}>Mathematics and Science (or) Social Studies/Social Science</div>
                <div className={style.tablecell}>60 (30+30)</div>
                <div className={style.tablecell}>60</div>
              </div>
              <h3 className={style.zxt}>Key Points:</h3>
              <ul className={style.zxs}>
                <li>Total: 150 MCQs, 150 marks, 2.5 hours.</li>
                <li>No negative marking.</li>[](https://www.fastjobsearchers.com/job/ctet.html)
                <li>Questions based on NCERT syllabus for Classes 6-8, difficulty up to senior secondary level.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Syllabus Details">
              <h2 className={style.sectiontitle}></h2>
              <h3 style={{ fontWeight: "700" }}>Paper I (Classes 1-5)</h3>
              <ul className={style.zxs}>
                <li><b>Child Development and Pedagogy:</b> Child development (6-11 years), learning theories, inclusive education, pedagogy.</li>
                <li><b>Language I:</b> Comprehension, grammar, pedagogy of language development (Hindi/English or chosen language).</li>
                <li><b>Language II:</b> Comprehension, grammar, pedagogy of language development (different from Language I).</li>
                <li><b>Mathematics:</b> Numbers, geometry, measurement, problem-solving, pedagogy.</li>
                <li><b>Environmental Studies:</b> Family, environment, food, water, pedagogy.</li>[](https://www.careerpower.in/ctet.html)
              </ul>
              <h3 className={style.zxu}>Paper II (Classes 6-8)</h3>
              <ul className={style.zxs}>
                <li><b>Child Development and Pedagogy:</b> Child development (11-14 years), learning theories, inclusive education, pedagogy.</li>
                <li><b>Language I:</b> Comprehension, grammar, pedagogy of language development.</li>
                <li><b>Language II:</b> Comprehension, grammar, pedagogy of language development.</li>
                <li><b>Mathematics and Science:</b> Number systems, algebra, physics, chemistry, biology, pedagogy (for Math/Science teachers).</li>
                <li><b>Social Studies/Social Science:</b> History, geography, civics, pedagogy (for Social Studies teachers).</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Program Descriptions">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Paper I (Primary Stage):</b> For candidates aspiring to teach Classes 1-5, focusing on child development, pedagogy, and basic subjects.</li>
                <li><b>Paper II (Elementary Stage):</b> For candidates aiming to teach Classes 6-8, emphasizing subject-specific pedagogy and concepts.</li>[](https://www.careerpower.in/ctet.html)
                <li><b>Both Papers:</b> For candidates intending to teach Classes 1-8.</li>
              </ul>
            </CollapsibleSection>
           
            <CollapsibleSection title="Exam Analysis and Insights">
              <h2 className={style.sectiontitle}></h2>
              <ul className={style.zxs}>
                <li><b>Difficulty Level (CTET Dec 2024):</b> Moderate; Child Development and Pedagogy (20%) and Languages (40%) were key.</li>
                <li><b>Child Development:</b> Focused on learning theories, inclusive education, and child psychology.</li>
                <li><b>Languages:</b> Emphasis on comprehension and pedagogy questions.</li>
                <li><b>Cut-Off Trends:</b> General: ~90-100 marks (60%), OBC: ~85-90, SC/ST: ~80-85.</li>[](https://www.shiksha.com/exams/ctet-exam-application-form)
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Selection Process">
              <ul className={style.zxs}>
                <li><b>Entrance Exam:</b> 150 MCQs per paper, 2.5 hours, offline pen-and-paper mode.</li>
                <li><b>Result:</b> Candidates scoring 60% or above (90/150 marks) qualify and receive a lifetime-valid CTET certificate.</li>[](https://www.fastjobsearchers.com/job/ctet.html)
                <li><b>Job Application:</b> Qualified candidates apply for teaching positions in KVs, NVs, or other schools based on vacancies.</li>
                <li><b>Note:</b> CTET qualification does not guarantee a job; candidates must apply separately for recruitment.</li>[](https://www.careerpower.in/ctet.html)
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Document Verification Checklist">
              <ul className={style.zxs}>
                <li>CTET 2025 Admit Card and Scorecard (for reference).</li>
                <li>10th/12th mark sheets and certificates.</li>
                <li>Graduation/Diploma/B.Ed certificates and mark sheets.</li>
                <li>Caste Certificate (SC/ST/OBC, in Central Govt. format, if applicable).</li>
                <li>PWD Certificate (if applicable).</li>
                <li>Photo ID (Aadhaar, PAN, Voter ID, or Passport).</li>
                <li>Recent passport-size photographs (6 copies).</li>
                <li><b>Note:</b> Documents are verified during job recruitment, not CTET application. Ensure details match application form.</li>[](https://www.jagranjosh.com/articles/ctet-application-form-2024-out-at-ctet-nic-in-check-december-session-apply-online-link-how-to-fill-online-1726749472-1)
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Career Benefits of CTET">
              <ul className={style.zxs}>
                <li><b>Eligibility:</b> Qualify for teaching positions in KVs, NVs, and private schools.</li>
                <li><b>Salary:</b> Starting salary of ₹35,000-₹50,000/month (basic pay ₹9,300-₹34,800).</li>[](https://www.careerpower.in/ctet.html)
                <li><b>Job Security:</b> Stable teaching jobs in government schools.</li>
                <li><b>Career Growth:</b> Opportunities for promotions to headmaster or educational officer roles.</li>
                <li><b>Recognition:</b> Lifetime-valid certificate enhances credibility for teaching roles nationwide.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="How to Apply">
              <ol className={style.zxs}>
                <li><b>Check Eligibility:</b> Verify educational qualifications for Paper I, Paper II, or both.</li>[](https://www.shiksha.com/exams/ctet-exam)
                <li><b>Visit Official Website:</b> <a href="https://ctet.nic.in" target="_blank" className="link">ctet.nic.in</a>.</li>
                <li><b>Register:</b> Click “Apply Online,” enter name, email, mobile, and create a password. Receive application number via SMS/email.</li>[](https://www.collegedekho.com/exam/ctet/application-form)
                <li><b>Fill Form:</b> Provide personal details, educational qualifications, exam center preferences (four cities), and language choices (English/Hindi or others).</li>
                <li><b>Upload Documents:</b> Scanned photograph (4-100 KB, 3.5x4.5 cm, JPG) and signature (1-25 KB, 3.5x1.5 cm, JPG, running handwriting).</li>[](https://www.collegedekho.com/exam/ctet/application-form)
                <li><b>Pay Fee:</b> ₹1,000 (single paper) or ₹1,200 (both papers) for General/OBC; ₹500/₹600 for SC/ST/PWD via Debit/Credit Card, Net Banking, or E-Challan.</li>[](https://competition.careers360.com/articles/ctet-application-form)
                <li><b>Submit:</b> Review, submit, and download the confirmation page. Keep two printed copies.</li>[](https://www.jagranjosh.com/articles/ctet-application-form-2024-out-at-ctet-nic-in-check-december-session-apply-online-link-how-to-fill-online-1726749472-1)
                <li><b>Track Application:</b> Use login credentials to check status and download admit cards.</li>
                <li><b>Correction Window:</b> Make changes during the 3-5 day correction period (expected April 2025).</li>[](https://testbook.com/ctet)
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="How to Check Result">
              <ol className={style.zxs}>
                <li>Visit the official website: <a href="https://ctet.nic.in" target="_blank" className="link">ctet.nic.in</a>.</li>
                <li>Navigate to the “CTET 2025 Results” section.</li>
                <li>Enter application number and password.</li>
                <li>View result PDF, checking name, roll number, marks, and qualifying status.</li>
                <li>Download and save the PDF; access marksheet/certificate via DigiLocker.</li>[](https://www.fastjobsearchers.com/job/ctet.html)
                <li><b>Note:</b> Check recruitment notifications on school websites for job applications.</li>
              </ol>
            </CollapsibleSection>
            <CollapsibleSection title="Preparation Tips">
              <ul className={style.zxs}>
                <li><b>Understand the Syllabus:</b> Focus on Child Development and Pedagogy, Language comprehension, and subject-specific topics.</li>[](https://www.careerpower.in/ctet.html)
                <li><b>Previous Papers:</b> Solve CTET 2020-2024 papers for question patterns.</li>[](https://www.shiksha.com/exams/ctet-exam)
                <li><b>Time Management:</b> Practice 150 MCQs in 2.5 hours; aim for 70% accuracy.</li>
                <li><b>Child Development:</b> Study “Child Development and Pedagogy” by Arihant or Pearson.</li>
                <li><b>Languages:</b> Read NCERT language books and practice comprehension.</li>
                <li><b>Mock Tests:</b> Use Testbook, Physics Wallah, or Career Launcher for Paper I/II-specific mocks; target 100-110 marks.</li>[](https://testbook.com/ctet/application-form)
                <li><b>Stay Updated:</b> Follow ctet.nic.in for notifications and answer key challenges.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Frequently Asked Questions (FAQs)">
              <ul className={style.zxs}>
                <li><b>What is CTET?</b> A national-level eligibility test for teaching Classes 1-8 in central government schools.</li>[](https://www.fastjobsearchers.com/job/ctet.html)
                <li><b>Can final-year students apply?</b> Yes, candidates appearing in final year of Diploma/B.Ed are eligible.</li>[](https://www.shiksha.com/exams/ctet-exam)
                <li><b>Is there negative marking?</b> No, CTET has no negative marking.</li>[](https://www.fastjobsearchers.com/job/ctet.html)
                <li><b>How many attempts for CTET?</b> No limit; candidates can attempt multiple times to improve scores.</li>[](https://www.fastjobsearchers.com/job/ctet.html)
                <li><b>What is the certificate validity?</b> Lifetime for all categories.</li>[](https://www.fastjobsearchers.com/job/ctet.html)
                <li><b>Can non-Indian citizens apply?</b> Only Indian citizens are eligible.</li>[](https://aissee.co.in/ctet-online-form/)
                <li><b>What if I forget my application number?</b> Recover it via ctet.nic.in using registered email/mobile.</li>[](https://competition.careers360.com/articles/ctet-application-form)
                <li><b>Where are exam centers?</b> Major cities like Delhi, Mumbai, Bengaluru, etc.</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Additional Resources">
              <ul className={style.zxs}>
                <li><a href="https://ctet.nic.in" target="_blank" className="link">CTET Official Website</a>: Notifications, application, admit cards, results.</li>
                <li><a href="https://testbook.com" target="_blank" className="link">Testbook</a>: Mock tests and study material for CTET.</li>[](https://testbook.com/ctet/application-form)
                <li><a href="https://www.pw.live" target="_blank" className="link">Physics Wallah</a>: Free notes, mock tests, and coaching.</li>[](https://www.pw.live/teaching/exams/ctet-application-form-2024)
                <li><a href="https://www.careerlauncher.com" target="_blank" className="link">Career Launcher</a>: CTET preparation courses and mocks.</li>
                <li><b>Books:</b>
                  <ul>
                    <li>“CTET Paper I & II” by Arihant Experts.</li>
                    <li>“Child Development and Pedagogy” by Pearson.</li>
                    <li>“NCERT Books” for Languages, Math, EVS, and Social Studies.</li>
                    <li>“Quantitative Aptitude” by RS Aggarwal (for Math).</li>
                  </ul>
                </li>
                <li><b>YouTube Channels:</b> Follow “Adda247” or “TeachersAdda247” for CTET tips and live classes.</li>
              </ul>
            </CollapsibleSection>
            <div className={style.zxr}>
              <h2 className={style.sectiontitle}>Important Links</h2>
              <div className={style.zxv}>
                <div >{Object.entries(link).map(([key, value]) => ( <li> <a href={value} target="_blank" className="link"> {key}</a></li> ))}</div>
              </div>
            </div>
            <Ad type="NativeBanner" />
            <img src={a1} alt="CTET 2025 Exam" className={style.imga} />
            <div id={style.ins}>
              <h1>Www.JobForSarkari.Com</h1>
              <h2>Welcome to Our Website</h2>
              <p>Our website provides official links for entrance exam information, ensuring you stay informed about opportunities like CTET.</p>
              <p>We do not charge for any services, offering free access to exam details and updates.</p>
              <p>Please read all instructions carefully before applying to avoid errors and ensure a smooth process.</p>
            </div>
            <div id={style.ins}>
              <h1>Latest Entrance Exam Updates</h1>
              <h2>Latest CTET & Other Exam Updates & Free Alerts</h2>
              <p>Looking for teaching eligibility exams? Our portal delivers the latest updates on CTET and other competitive exams tailored to your needs.</p>
              <p>Explore comprehensive details on eligibility, syllabus, and exam updates for teaching aspirants.</p>
              <p>Subscribe to our free alert service to receive real-time notifications about exam dates, admit cards, and results.</p>
              <p>Start your teaching career journey today and secure your future with the best opportunities!</p>
            </div>
            <div id={style.ins}>
              <h1>Latest Entrance Exam Updates</h1>
              <h2>Apply for Exams like CTET, TET, NET & More</h2>
              <p>Seeking teaching eligibility exams like CTET, State TETs, or UGC NET?</p>
              <p>Stay updated with free alerts and never miss an opportunity to apply for top teaching certifications.</p>
              <p>Our portal provides the latest updates on exam notifications, application processes, and results.</p>
              <p>Explore opportunities in teaching, research, and academic careers.</p>
              <p>Whether you’re aiming for primary or upper primary teaching, we bring you the most recent exam openings.</p>
              <p>Stay ahead with real-time alerts and apply easily through our portal to secure your dream teaching career.</p>
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

export default CTET_1;