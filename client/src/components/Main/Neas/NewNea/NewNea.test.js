import React from "react";
import { shallow } from "enzyme";
import NewNea from "./NewNea";

describe("NewNea", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewNea />);
    expect(wrapper).toMatchSnapshot();
  });
});
