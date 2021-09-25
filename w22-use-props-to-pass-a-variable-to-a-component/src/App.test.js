import React from "react";
import { configure, shallow, assert } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ComponentName from "./ComponentName";
import App from "./App";

configure({ adapter: new Adapter() });
describe("Should print text", () => {
  it("Returns Hello and the country given in attribite country", () => {
    const wrapper = shallow(<ComponentName country="Finland" />);
    expect(wrapper.find("div").text()).toEqual("Hello Finland!");
  });
  it("Returns Hello and the country given in attribite country 1", () => {
    const wrapper = shallow(<ComponentName country="Sweden" />);
    expect(wrapper.find("div").text()).toEqual("Hello Sweden!");
  });
});