import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HistoryIndex from "../javascript/components/pages/HistoryIndex"


Enzyme.configure({ adapter: new Adapter() })

it('HistoryIndex renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HistoryIndex />, div)
})
