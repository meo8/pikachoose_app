import React from "react";
import ReactDOM from 'react-dom';
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import About from "../../javascript/components/pages/About";
import {shallow} from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

it('About renders without crashing', () => {
  shallow(<About />)
})

