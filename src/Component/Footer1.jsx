import style from "./Navcss.module.css"
import img from "./Image/logo1.png"
import Ad from "./Ad"

const Footer1=()=>{
    document.title="Home | Job For Sarkari"
    return(
        <div id={style.des}>
            <Ad type="468x60" />
                <h1>Your Victory Is Our Victory</h1>
                 
                <img src={img} alt="" style={{width:"100%"}}/>
                <section> <Ad type="NativeBanner" /></section>
                
                <div>
                    <h1>start your career with us</h1>
                    <h3> <b style={{color:"red"}}>{`1.)`}</b> Looking for the latest government jobs? Our job search website provides real-time updates on Sarkari Naukri, free job alerts, and govt job vacancies across railway jobs, banking, SSC, UPSC, police recruitment, and teaching jobs.</h3>
                     <h3><b style={{color:"red"}}>{`2.)`}</b> Easily apply online, check eligibility, and get exam notifications for central and state government jobs.</h3>
                     <h3> <b style={{color:"red"}}>{`3.)`}</b> Find 10th pass jobs, 12th pass vacancies, and graduate-level government job opportunities in one place.</h3>
                     <h3> <b style={{color:"red"}}>{`4.)`}</b> Stay updated with the best government job portal and kickstart your career with verified job listings. </h3>
                     <h3><b style={{color:"red"}}>{`5.)`}</b> Explore now for upcoming govt exams and secure your dream job!</h3>
                     <h3> <b style={{color:"red"}}>{`6.)`}</b> Find the latest government jobs and Sarkari Naukri updates on our job search website.</h3>
                     <h3><b style={{color:"red"}}>{`7.)`}</b>  Get real-time notifications for central and state government job vacancies, including railway jobs, banking jobs, SSC recruitment, UPSC exams, police vacancies, and teaching jobs.</h3>
                     <h3> <b style={{color:"red"}}>{`8.)`}</b> Easily apply online, check eligibility, download admit cards, and track results.</h3>
                     <h3> <b style={{color:"red"}}>{`9.)`}</b> Our platform provides free job alerts, exam syllabi, and previous year question papers to help you prepare. Whether you’re looking for 10th pass, 12th pass, graduate, or postgraduate government jobs, we have you covered.</h3>
                     <h3><b style={{color:"red"}}>{`10.)`}</b> Stay updated with Govt Job Notifications and kickstart your career today!</h3>
                </div>
                   
                <div> 

                    <h1>What is our job</h1>
                <h3><b style={{color:"red"}}>{`1.)`}</b> Our job is we are provide latest and updated jobs.</h3>
                <h3><b style={{color:"red"}}>{`2.)`}</b> Provide Importants date are provide. Its help you to full fill the form.</h3>
                <h3> <b style={{color:"red"}}>{`3.)`}</b> Before fill the form you must be check all Criteria. If all Criteria are matched you can apply your form.</h3>
                <h3><b style={{color:"red"}}>{`4.)`}</b> We are Provide Privious Year Questions Papers. So you can easily identify the type of question paper.</h3>
                <h3> <b style={{color:"red"}}>{`5.)`}</b> We are provide Short Information Like :-</h3>
                <li>Number Of Vacancies</li>
                <li>Important Date</li>
                <li>Fee Details</li>
                <li>Job Location</li>
                <li>Educational Eligibility</li>
                <li>Age Eligibility</li>
                <li>Exam Related Notification</li>
                <section><Ad type="300x250" /></section>
                </div>
                <div>
                    <h1>Here We Describe Our Each Job Section</h1>
                    <h3 style={{color:"red", paddingLeft:"10%"}}>New Job :- </h3>
                    <li style={{paddingLeft:"15%", paddingRight:"5%"}}><b>In this section we are provides you new or latest jobs links. Also providing upcoming Jobs links. So here you are Apply Goverment Job Respective your Criteria</b></li>
                    <h3 style={{color:"red", paddingLeft:"10%"}}>Admit Card :- </h3>
                    <li style={{paddingLeft:"15%", paddingRight:"5%"}}><b>In this section we are provides you Admit Card links. Here you can log in the respect job official website go to Admit Card section or download your Admit Card.</b></li>
                    <h3 style={{color:"red", paddingLeft:"10%"}}>Result :- </h3>
                    <li style={{paddingLeft:"15%", paddingRight:"5%"}}><b>In this section we are provides you Result or Score Card links.Here You Need Registration Number, Roll Number Or D.O.B To Check Your Marks.</b></li>
                    <h3 style={{color:"red", paddingLeft:"10%"}}>Answer Key :- </h3>
                    <li style={{paddingLeft:"15%", paddingRight:"5%"}}><b>In this section we are provides you Answer Key links. Simple, you click on Answer Key link then insert required Data to log in portal and check your Answer Key.</b></li>
                    <h3 style={{color:"red", paddingLeft:"10%"}}>Document Verification :- </h3>
                    <li style={{paddingLeft:"15%", paddingRight:"5%"}}><b>In this section we are provides you Document Verification like appy new pan Card voter id card and download the certificate like Jati parman patra, niwas parman patra, income certificate Or AadharCard PanCard Id Online download. Also check the application status.</b></li>
                    <h3 style={{color:"red", paddingLeft:"10%"}}>Admission Form :- </h3>
                    <li style={{paddingLeft:"15%", paddingRight:"5%"}}><b>In this section we are provides you new Admission Form links. Also providing upcoming University or college entrance Examinations links</b></li>
                    <h3 style={{color:"red", paddingLeft:"10%"}}>Syllabus :- </h3>
                    <li style={{paddingLeft:"15%", paddingRight:"5%"}}><b>In this section we are provides Syllbus links for respective post. here we are provide syllabus from official website as well as third party website links</b></li>
                    <h3 style={{color:"red", paddingLeft:"10%"}}>Diploma/IT :- </h3>
                    <li style={{paddingLeft:"15%", paddingRight:"5%"}}><b>In this section we are provides you diploma or iti level vecancy level JObs links. Also providing upcoming diploma or iti level vecancy level links</b></li>
                    <h3 style={{color:"red", paddingLeft:"10%"}}>B.Tech/M.Tech :- </h3>
                    <li style={{paddingLeft:"15%", paddingRight:"5%"}}><b>In this section we are provides you B.Tech/M.Tech level vecancy level jobs links. Providing Engineering level goverment Level Jobs links as well as Graduation Level Jobs links.</b></li>
                
                </div>
            
                </div>
    )
}

export default Footer1