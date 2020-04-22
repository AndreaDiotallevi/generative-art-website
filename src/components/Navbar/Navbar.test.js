import React from "react";
import { shallow } from "enzyme";
import Navbar from "./Navbar";

describe("Navbar", () => {
  let wrapper;

  describe("When not in Home", () => {
    let props = { history: { location: { pathname: "/artworks" } } };

    beforeEach(() => {
      wrapper = shallow(<Navbar {...props} />);
    });

    it("should render ANDREA DIOTALLEVI", () => {
      const h1 = wrapper.find({ id: "navbar-title" });
      expect(h1.text()).toEqual("ANDREA DIOTALLEVI");
    });
  });

  describe("When in Home", () => {
    let props = { history: { location: { pathname: "/" } } };

    beforeEach(() => {
      wrapper = shallow(<Navbar {...props} />);
    });

    it("should render the navbar component with the class is-home-component", () => {
      const div = wrapper.find({ id: "navbar-component" });
      expect(div.hasClass("is-home-component")).toEqual(true);
    });
  });
});
