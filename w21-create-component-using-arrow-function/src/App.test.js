import React from "react";
import { configure, shallow, assert } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ComponentName from "./Components/ComponentName";
import App from "./App";

configure({ adapter: new Adapter() });
describe("Should print text", () => {
  it("Returns Hello world", () => {
    const wrapper = shallow(<ComponentName />);
    expect(wrapper.find("div").text()).toEqual("Hello world!");
  });
});

describe("Should print text", () => {
  it("Should initialize Component ComponentName twice", () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.html());
    expect(wrapper.find(ComponentName)).toHaveLength(2);
  });
});