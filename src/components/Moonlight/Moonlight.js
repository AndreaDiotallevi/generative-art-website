import React from "react";
import Sketch from "react-p5";
 
class Moonlight extends React.Component {
  t = 0;

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight - 85 - 70).parent(canvasParentRef);
    p5.background(56, 68, 76);
    let h3 = p5.createDiv('Hello! My name is Andrea.');
    h3.style('font-size', '32px');
    h3.style('font-weight', '300');
    h3.style('color', 'white');
    h3.position(p5.windowWidth / 2, p5.windowHeight / 2);
    let p = p5.createDiv('I am a Software Engineer.');
    p.style('font-size', '17px');
    p.style('font-weight', '300');
    p.style('color', 'white');
    p.position(p5.windowWidth / 2, p5.windowHeight / 2 + 50);
  };

  draw = p5 => {
    p5.translate(p5.windowWidth / 2, p5.windowHeight / 2);
    const w = p5.min(p5.windowWidth, p5.windowHeight);
    const n = p5.noise

    let a = n(this.t + 9) * w / 2;
    let b = n(w) * w / 2;
    let c = n(this.t) * 6;
    let d = n(this.t++ + 60) * 6;

    p5.noFill();
    p5.stroke(255, 30);
    p5.line(p5.cos(c) * a, p5.sin(c) * a, p5.cos(d) * b, p5.sin(d) * b);
  };

  mouseClicked = p5 => {
    // p5.noiseSeed(p5.random());
    // p5.background(56, 68, 76);
    // p5.redraw();
    p5.noLoop();
  }

  windowResized = p5 => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    p5.noiseSeed(p5.random());
    p5.background(56, 68, 76);
    p5.redraw();
  }
 
  render() {
    return <Sketch setup={this.setup} draw={this.draw} mouseClicked={this.mouseClicked} windowResized={this.windowResized}/>;
  }
}

export default Moonlight;
