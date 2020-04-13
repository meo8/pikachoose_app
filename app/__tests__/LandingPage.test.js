import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LandingPage from "../javascript/components/pages/LandingPage"


Enzyme.configure({ adapter: new Adapter() });

it('Landing Page renders without crashing', () => {
  shallow(<LandingPage/>)
})

