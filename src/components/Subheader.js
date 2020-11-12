import React from "react";
import "./Subheader.css";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

function Subheader() {
  return (
    <div className="subheader">
      <div className="subheader__icons">
        {/* Icons here! */}
        <PhoneInTalkIcon /> <span>49 15787986803</span>
        <EmailIcon /> <span>postfach@bestformgym.de</span>
      </div>
      <div className="subheader__social">
        <span>Folgen Sie uns</span>
        <a
          className="subheader__socialicons"
          href="https://www.facebook.com/BestFormGymAugsburg"
          target="_blank"
        >
          <FacebookIcon />
        </a>
        <a
          className="subheader__socialicons"
          href="https://www.instagram.com/bestformgym_augsburg/"
          target="_blank"
        >
          <InstagramIcon />
        </a>
        {/* title */}
        {/* social icons */}
      </div>
    </div>
  );
}

export default Subheader;
