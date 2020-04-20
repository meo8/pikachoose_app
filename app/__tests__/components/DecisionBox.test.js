import React from "react";
import ReactDOM from 'react-dom';
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DecisionBox from "../../javascript/components/components/DecisionBox";
import {shallow} from 'enzyme';
import fetch from 'isomorphic-fetch';

Enzyme.configure({ adapter: new Adapter() });

it('DecisionBox renders without crashing', () => {
    const film={comment: "test"}
    shallow(<DecisionBox filmDecision={film}/>)
})
