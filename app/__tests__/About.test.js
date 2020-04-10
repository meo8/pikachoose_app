import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import About from "../javascript/components/pages/About"
import renderer from "react-test-renderer"


Enzyme.configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const tree = renderer.create(<About/>).toJSON()
  expect(tree).toMatchSnapshot()
})