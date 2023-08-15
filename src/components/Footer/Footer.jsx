import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
// import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
// import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <img  className="wave" src={Wave} alt="" />
      <div className="f-content">
        {/* <a className="email-link" href="mailto:simransinha280@gmail.com">simransinha280@gmail.com</a> */}
        <span>simransinha280@gmail.com</span>
        <p>Contact: 1234567890</p>
        <div className="i-icons">
          <a href="https://github.com/Simransinha456" target="_main">
          <img src={Github} alt="" /> </a>

          <a href="https://www.linkedin.com/in/simran-sinha-54b4241b7/" target="_main">
          <img src={LinkedIn} alt="" /></a>

          <a href="https://www.instagram.com/" target="_main">
          <img src={Instagram} alt="" /></a>
        </div>
        {/* <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} />
        </div> */}
      </div>
    </div>
  ); 
};

export default Footer;
