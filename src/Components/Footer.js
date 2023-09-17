import React from "react";
import facebook from "../Assets/socialMedia/facebook.svg";
import instagram from "../Assets/socialMedia/instagram.svg";
import linkedin from "../Assets/socialMedia/linkedin.svg";
import youtube from "../Assets/socialMedia/youtube.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Logo">
        <img src="https://assets.website-files.com/61ae28f54843d30203fad6db/61c20adcfff22fd7c76d8911_Group%202620.svg" alt="Logo" />
      </div>
      <div className="Footer-menu">
        <div className="Footer-element">
          <p>About us</p>
          <p>Contact us</p>
          <p>Support</p>
        </div>
        <div className="Footer-element">
          <p>Terms of use</p>
          <p>Privacy policy</p>
          <p>Cookie policy</p>
          <p>Accessibility</p>
        </div>
        <div className="Footer-element">
          <a href="https://www.facebook.com/salineroyaleacademy/"><img src={facebook} alt="Facebook" /></a>
          <a href="https://www.instagram.com/salineroyaleacademy/?hl=fr"><img src={instagram} alt="Instagram" /></a>
          <a href="https://www.linkedin.com/company/saline-royale-academy/?originalSubdomain=fr"><img src={linkedin} alt="Linkedin" /></a>
          <a href="https://www.youtube.com/channel/UCFEULSLZCpnrODoKJdqYVEg"><img src={youtube} alt="Youtube" /></a>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
