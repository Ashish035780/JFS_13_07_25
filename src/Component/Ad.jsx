// import React, { useEffect } from 'react';

// const GoogleAdsense = ({ adClient, adSlot, adFormat = 'auto', fullWidthResponsive = true }) => {
//   useEffect(() => {
//     try {
//       (window.adsbygoogle = window.adsbygoogle || []).push({});
//     } catch (error) {
//       console.error('AdSense error:', error);
//     }
//   }, []); // Empty dependency array to run once on mount

//   return (
//     <div style={{ margin: '20px 0', textAlign: 'center' }}>
//       <ins
//         className="adsbygoogle"
//         style={{ display: 'block' }}
//         data-ad-client={adClient}
//         data-ad-slot={adSlot}
//         data-ad-format={adFormat}
//         data-full-width-responsive={fullWidthResponsive.toString()}
//       ></ins>
//     </div>
//   );
// };

// export default GoogleAdsense;
import React, { useEffect } from "react";
import "./ad.css";

const Ad = ({ type }) => {
  useEffect(() => {
    let key = "";
    let width = 0;
    let height = 0;
    let containerId = "";
    let srcUrl = "";
    let isAsync = false;
    let hasContainer = true;
    let isDirectScript = false;

    // === Ad Types Configuration ===
    if (type === "300x250") {
      key = "45441011e1df79abba43ad4479673bce";
      width = 300;
      height = 250;
      containerId = "ad-300x250";
      srcUrl = `//www.highperformanceformat.com/${key}/invoke.js`;
    } else if (type === "468x60") {
      key = "51ee1d6eb3dc8d6877c9f9501a20a9ff";
      width = 468;
      height = 60;
      containerId = "ad-468x60";
      srcUrl = `//www.highperformanceformat.com/${key}/invoke.js`;
    } else if (type === "160x300") {
      key = "7d9abd70810deb7deee8e0e0ced9895f";
      width = 160;
      height = 300;
      containerId = "ad-160x300";
      srcUrl = `//www.highperformanceformat.com/${key}/invoke.js`;
    } else if (type === "320x50") {
      key = "4b0a17d027ba6f10364a06d7480e1b77";
      width = 320;
      height = 50;
      containerId = "ad-320x50";
      srcUrl = `//www.highperformanceformat.com/${key}/invoke.js`;
    } else if (type === "160x600") {
      key = "86bb5fe6bb29684225c4b441949c1792";
      width = 160;
      height = 600;
      containerId = "ad-160x600";
      srcUrl = `//www.highperformanceformat.com/${key}/invoke.js`;
    } else if (type === "728x90") {
      key = "d7c5ca0dd75b7d577520d8a4bf9eb016";
      width = 728;
      height = 90;
      containerId = "ad-728x90";
      srcUrl = `//www.highperformanceformat.com/${key}/invoke.js`;
    } else if (type === "NativeBanner") {
      key = "6bca5f4a0d6861332151c7d1878e1879";
      containerId = `container-${key}`;
      srcUrl = `//pl27029872.profitableratecpm.com/${key}/invoke.js`;
      isAsync = true;
      
    } else if (type === "DirectLink") {
      key = "abede076895998979c42070cb82d5dda";
      containerId = "ad-profitablerate2";
      srcUrl = `https://www.profitableratecpm.com/r1pbjkyt5?key=${key}`;
      isAsync = true;
      hasContainer = false;
    } else if (type === "SocialBar") {
      srcUrl = `//pl27029980.profitableratecpm.com/a0/5e/f8/a05ef8048ae4ed679a0cd236c919525f.js`;
      containerId = "ad-profitablerate3";
      isAsync = true;
      hasContainer = false;
      isDirectScript = true;
    } else if (type === "Popunder") {
      srcUrl = `//pl27030144.profitableratecpm.com/f6/78/10/f678108ad53a36d38824299585881320.js`;
      containerId = "ad-profitablerate4";
      isAsync = true;
      hasContainer = false;
      isDirectScript = true;
    } else {
      console.warn("Unsupported ad type:", type);
      return;
    }

    // === Script Injection ===
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = srcUrl;

    if (isAsync) {
      script.async = true;
      script.setAttribute("data-cfasync", "false");
    }

    if (isDirectScript) {
      document.body.appendChild(script);
      return;
    }

    const container = document.getElementById(containerId);

    if (container) {
      container.innerHTML = "";

      if (!hasContainer) {
        document.body.appendChild(script);
      } else if (
        type === "300x250" ||
        type === "468x60" ||
        type === "160x300" ||
        type === "320x50" ||
        type === "160x600" ||
        type === "728x90"
      ) {
        const configScript = document.createElement("script");
        configScript.type = "text/javascript";
        configScript.innerHTML = `
          atOptions = {
            'key': '${key}',
            'format': 'iframe',
            'height': ${height},
            'width': ${width},
            'params': {}
          };
        `;
        container.appendChild(configScript);
        container.appendChild(script);
      } else {
        container.appendChild(script);
      }
    }
  }, [type]);

  // === Styles and ID ===
  const getStyle = () => {
    if (type === "300x250") return { width: 300, height: 250 };
    if (type === "468x60") return { width: 468, height: 60 };
    if (type === "160x300") return { width: 160, height: 300 };
    if (type === "320x50") return { width: 320, height: 50 };
    if (type === "160x600") return { width: 160, height: 600 };
    if (type === "728x90") return { width: 728, height: 90 };
    return {};
  };

  const getId = () => {
    if (type === "300x250") return "ad-300x250";
    if (type === "468x60") return "ad-468x60";
    if (type === "160x300") return "ad-160x300";
    if (type === "320x50") return "ad-320x50";
    if (type === "160x600") return "ad-160x600";
    if (type === "728x90") return "ad-728x90";
    if (type === "NativeBanner") return "container-6bca5f4a0d6861332151c7d1878e1879";
    if (type === "DirectLink") return "ad-profitablerate2";
    if (type === "SocialBar") return "ad-profitablerate3";
    if (type === "Popunder") return "ad-profitablerate4";
    return "ad-unknown";
  };

  return (
    <div
      id={getId()}
      style={{ ...getStyle(), margin: "10px auto", textAlign: "center" }}
    />
  );
};

export default Ad;
