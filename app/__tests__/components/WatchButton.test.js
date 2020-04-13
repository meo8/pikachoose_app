import React from "react";
import { Button } from "reactstrap"
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WatchButton from "../../javascript/components/components/WatchButton";

Enzyme.configure({ adapter: new Adapter() });

describe('WatchButton component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();
    const button = mount((<Button onClick={mockCallBack}>Ok!</Button>));
    button.find('Button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});