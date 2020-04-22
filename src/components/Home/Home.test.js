import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";

describe("Home", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it("should render the Home component without errors", () => {
    expect(wrapper.length).toEqual(1);
  });
});
