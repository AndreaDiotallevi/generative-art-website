import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";

describe("Home", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it("should render Hello! My name is Andrea.", () => {
    const h3 = wrapper.find({ id: "home-page-title" });
    expect(h3.text()).toEqual("Hello! My name is Andrea.");
  });
});
