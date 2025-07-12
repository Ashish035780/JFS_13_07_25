
import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import style from "./000_Content.module.css"; 

const AACollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style.zxx}>
      <h2 className={style.zxy} onClick={() => setIsOpen(!isOpen)}>
        {title}
        <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </h2>
      <div style={{ display: isOpen ? "block" : "none", marginTop: "1rem" }}>
        {children}
      </div>
    </div>
  );
};

export default AACollapsibleSection;