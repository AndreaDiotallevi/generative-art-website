import React from "react";
import Sketch from "react-p5";

class Moonlight extends React.Component {
  t = 0;

  setup = (p5, canvasParentRef) => {
    const height = document.getElementById("home-container").offsetHeight;
    const width = document.getElementById("home-container").offsetWidth;
    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.background(56, 68, 76);
  };

  draw = (p5) => {
    if (this.t > 0) {
      const height = document.getElementById("home-container").offsetHeight;
      const width = document.getElementById("home-container").offsetWidth;

      p5.translate(width / 2, height / 2);
      const w = p5.min(width, height);
      const n = p5.noise;

      const a = 0.48 * w;
      let b = n(this.t) * 6;
      let c = n(this.t + 60) * 6;

      p5.noFill();
      p5.stroke(255, 25);
      p5.line(p5.cos(b) * a, p5.sin(b) * a, p5.cos(c) * a, p5.sin(c) * a);
    }

    this.t++;
  };

  mouseClicked = (p5) => {
    p5.noiseSeed(p5.random(1000));
    p5.background(56, 68, 76);
    this.t = 0;
    p5.draw();
  };

  windowResized = (p5) => {
    const height = document.getElementById("home-container").offsetHeight;
    const width = document.getElementById("home-container").offsetWidth;
    p5.resizeCanvas(width, height);
    p5.noiseSeed(p5.random());
    p5.background(56, 68, 76);
    this.t = 0;
    p5.draw();
  };

  render() {
    return (
      <Sketch
        setup={this.setup}
        draw={this.draw}
        mouseClicked={this.mouseClicked}
        windowResized={this.windowResized}
      />
    );
  }
}

export default Moonlight;
