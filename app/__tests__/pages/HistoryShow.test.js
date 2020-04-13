import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HistoryShow from "../../javascript/components/pages/HistoryShow"


Enzyme.configure({ adapter: new Adapter() });

it('HistoryShow renders without crashing', () => {
  const historiesArr = [{decision:"Fight Club", comment:"great movie", id:1}]
  shallow(<HistoryShow histories={historiesArr} match={{params: {id:1} }}/>)
})

it('HistoryShow renders one history', () => {
  const historiesArr = [{decision:"Fight Club", comment:"great movie", id:1}, {decision: "Breakfast Club", comment:"i havent watched yet", id:2}]
  const component = mount(<HistoryShow histories={historiesArr} match={{params: {id:1} }}/>)
  expect(component.find('HistoryShow')).toHaveLength(1)
})
