import React from "react";
import ReactDOM from 'react-dom';
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../javascript/components/App";
import fetch from 'isomorphic-fetch';


Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
    it('Renders without crashing', () => {
      shallow(<App />)
    })
    it('Renders without crashing', () => {
        shallow(<App />)
      })

})