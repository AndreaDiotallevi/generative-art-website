import React from "react";
import profilePhoto from "../../assets/profile-photo.jpg";

const Contact = () => {
  return (
    <div className="contact-component">
      <img className="profile-photo" src={profilePhoto} alt="Profile"></img>
      <div className="contact-overview-container">
        {/* <h4>
          I am a full-stack software developer and creative coder based in
          London, UK.
        </h4>
        <p>
          I have expertise in designing, implementing, and maintaining
          full-stack applications with proficiency in Node, React, Python, Git,
          CI/CD, and RESTful APIs. I have also experience collaborating in
          modern software methodologies like test-driven development, pair
          programming, code reviews and AGILE.
        </p>
        <p>
          As a pianist and former architect, I am also fascinated by the
          intersection between art and technology and I am in constant
          exploration of generative art concepts. For each new work, I design a
          custom algorithm capable of generating a sequence of unique, but
          aesthetically related images.
        </p>
        <p className="line-separator">------</p> */}
        <h4>Email</h4>
        <a className="email-anchor" href="andrea.diotallevi@outlook.com">
          andrea.diotallevi@outlook.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
