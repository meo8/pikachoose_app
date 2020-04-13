import React from "react";
import ReactDOM from "react-dom";
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HistoryIndex from "../javascript/components/pages/HistoryIndex";
import {shallow} from 'enzyme';



Enzyme.configure({ adapter: new Adapter() })

it('HistoryIndex renders without crashing', () => {
  const historiesArr = [{
        comment: "this movie is so wholesum & stupid."
      }]
  shallow(<HistoryIndex histories= {historiesArr} />)
})
