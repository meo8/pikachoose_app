import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HistoryIndex from "../javascript/components/pages/HistoryIndex"
import renderer from "react-test-renderer"


Enzyme.configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const tree = renderer.create(<HistoryIndex/>).toJSON()
  expect(tree).toMatchSnapshot()
})

