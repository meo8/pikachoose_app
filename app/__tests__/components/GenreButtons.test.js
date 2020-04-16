import React from "react";
import { Button, Container } from "reactstrap"
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreButtons from "../../javascript/components/components/GenreButtons";
import sinon from "sinon";
import fetch from 'isomorphic-fetch';
import Pikachu2 from "./pikachu2.png"

Enzyme.configure({ adapter: new Adapter() });

describe('GenreButtons component', () => {
  it('Renders without crashing', () => {
    shallow(<GenreButtons />)
  })
})
