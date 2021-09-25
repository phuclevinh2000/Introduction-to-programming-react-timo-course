import React from "react";
import App from "./App";
import { configure, shallow, assert } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
describe('Testing table")', () => {
  it("Table has eight tr:s", () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.html());
    expect(wrapper.find("tr")).toHaveLength(8);
  });
  it("Table thead exists", () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.html());
    expect(
      wrapper
        .find("table")
        .childAt(0)
        .type()
    ).toEqual("thead");
  });
  it("Table tbody exists", () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.html());
    expect(
      wrapper
        .find("table")
        .childAt(1)
        .type()
    ).toEqual("tbody");
  });
  it("thead has tr", () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.html());
    expect(
      wrapper
        .find("thead")
        .childAt(0)
        .type()
    ).toEqual("tr");
  });
  it("thead has tr,td and children Weekday", () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.html());
    expect(wrapper.find("thead").html()).toEqual(
      "<thead><tr><th>Weekday</th></tr></thead>"
    );
  });
  it("tbody has tr,td and Monday as first element", () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.html());
    expect(
      wrapper
        .find("tbody")
        .childAt(0)
        .html()
    ).toEqual("<tr><td>Monday</td></tr>");
  });
  it("tbody has tr,td and Sunday as last element", () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.html());
    expect(
      wrapper
        .find("tbody")
        .childAt(6)
        .html()
    ).toEqual("<tr><td>Sunday</td></tr>");
  });
});