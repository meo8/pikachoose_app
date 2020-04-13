import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HistoryShow from "../javascript/components/pages/HistoryShow"


Enzyme.configure({ adapter: new Adapter() });

it('HistoryShow renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HistoryShow />, div)
})