import React from "react";
import { shallow } from "enzyme";
import Navbar from "./Navbar";

describe("Navbar", () => {
  let wrapper;

  describe("When not in Home", () => {
    let props = { location: { pathname: "/artworks" } };

    beforeEach(() => {
      wrapper = shallow(<Navbar {...props} />);
    });

    it("should render ANDREA DIOTALLEVI", () => {
      const h1 = wrapper.find({ id: "navbar-title" });
      expect(h1.text()).toEqual("ANDREA DIOTALLEVI");
    });

    it("should render the contact navbar link", () => {
      const homeLink = wrapper.find({ id: "navbar-contact" });
      expect(homeLink.text()).toEqual("Contact");
    });
  });

  describe("When in Home", () => {
    let props = { location: { pathname: "/" } };

    beforeEach(() => {
      wrapper = shallow(<Navbar {...props} />);
    });

    it("should render the navbar component with the class home", () => {
      const div = wrapper.find({ id: "navbar-component" });
      expect(div.hasClass("home")).toEqual(true);
    });
  });
});
