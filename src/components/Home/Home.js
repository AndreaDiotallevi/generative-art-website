import React from "react";
import Moonlight from "../Moonlight/Moonlight";

const Home = (props) => {
  return (
    <div id="home-component">
      <div id="home-container">
        {/* <div id="home-page-text">
          <h3 id="home-page-title">Hello! My name is Andrea.</h3>
          <p className="home-page-paragraph" id="home-page-paragraph-1">
            I am a software engineer and generative artist based in London.
          </p>
          <p className="home-page-paragraph">
            I have expertise in designing, implementing, and maintaining
            full-stack applications with proficiency in Node, React, Python,
            Git, CI/CD, and RESTful APIs.
          </p>
          <p className="home-page-paragraph" id="home-page-paragraph-2">
            I am also fascinated by the intersection between art and technology,
            and I design custom algorithms capable of generating a sequence of
            unique but aesthetically related images.
          </p>
        </div> */}
        <Moonlight />
      </div>
    </div>
  );
};

export default Home;
