import React from "react";
import App from "./App";
import { configure, shallow, assert } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
describe('The business card data")', () => {
  it("There is one image", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("img").length>0).toBe(true);
  });

  it("There is min five span-elements", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("span").length > 4).toBe(true);
  });
});