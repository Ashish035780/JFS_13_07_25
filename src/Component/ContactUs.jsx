import React, { useState } from "react";
import a1 from "./Icon/Threads.png"
import a2 from "./Icon/twitter.png"
import style from "./Navcss.module.css"
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");

    // Simulate a form submission process
    try {
      // Replace with actual API call or email-sending logic
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setFormStatus("Thank you for contacting us! We will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFormStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <div>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
          ></textarea>
        </div>
        <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Submit
        </button>
      </form>
      {formStatus && <p style={{ marginTop: "20px", color: "#007BFF" }}>{formStatus}</p>}
    
   <h1 style={{paddingTop:"25px"}}>Email Id :- ab035780@gmail.com </h1>
    </div>
    
    <div>
      
      <div className={style.animation2}>
         <h2>Follow Us :-</h2>
                                    <a href="https://www.facebook.com/jobforsarkari" target="_blank" className="link flex items-center">
                                        <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Follow us on Facebook" className="social-icon mr-2" />

                                    </a>
                                     
                                    <a href="https://www.instagram.com/jobforsarkari/" target="_blank" className="link flex items-center">
                                        <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="Follow us on Instagram" className="social-icon mr-2" />
                                        
                                    </a>
                                    
                                    <a href="https://whatsapp.com/channel/0029VatEOgj0wajl9779pA0f" target="_blank" className="link flex items-center">
                                        <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="Join our WhatsApp" className="social-icon mr-2" />
                                      
                                    </a>
                                
                                    <a href="https://www.youtube.com/yourchannel" target="_blank" className="link flex items-center">
                                        <img src="https://img.icons8.com/color/48/000000/youtube-play.png" alt="Subscribe to our YouTube" className="social-icon mr-2" />
                                        
                                    </a>
                                
                                    <a href="https://www.linkedin.com/company/yourcompany" target="_blank" className="link flex items-center">
                                        <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="Follow us on LinkedIn" className="social-icon mr-2" />
                                        
                                    </a>
                                
                                
                                    <a href="https://x.com/yourprofile" target="_blank" className="link flex items-center">
                                        <img src={a2} alt="Follow us on X" className="social-icon mr-2" />
                                      
                                    </a>
                                
                                
                                    <a href="https://www.threads.net/yourprofile" target="_blank" className="link flex items-center">
                                        <img src={a1} alt="Follow us on Threads" className="social-icon mr-2"/>
                                        
                                    </a>
                                  
                   
    </div>

    </div>
    
    </div>
  
  );
};

export default ContactUs
