import React from "react";
import profilePhoto from "../../assets/profile-photo.jpg";

const Contact = () => {
  return (
    <div className="contact-component">
      <div className="contact-container">
        <img className="profile-photo" src={profilePhoto} alt="Profile"></img>
        <div className="contact-overview-container">
          <p>I am a generative artist and creative coder based in London.</p>
          <p>
            As a pianist and former architect, I am fascinated by the
            intersection between art and technology and I am in constant
            exploration of generative art concepts. For each new work, I design
            a custom algorithm capable of generating a sequence of unique, but
            aesthetically related images.
          </p>
          <p className="line-separator">------</p>
          <p>Email</p>
          <a
            className="email-anchor"
            href="mailto: andrea.diotallevi@outlook.com"
          >
            andrea.diotallevi@outlook.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
