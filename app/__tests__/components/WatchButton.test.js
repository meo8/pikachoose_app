import React from "react";
import { Button } from "reactstrap"
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WatchButton from "../../javascript/components/components/WatchButton";
import sinon from "sinon";
import fetch from 'isomorphic-fetch';


Enzyme.configure({ adapter: new Adapter() });

describe('WatchButton component', () => {
  it('Renders without crashing', () => {
    shallow(<WatchButton />)
  });
  
  it('Test click event', () => {
    const mockCallBack = jest.fn();
    const button = mount((<Button onClick={mockCallBack}>Ok!</Button>));
    button.find("Button").simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

//   it('check the onClick callback', () => {  
//     // GIVEN
//     const renderDecisionBox = jest.fn();
  
//     const clickCallback = sinon.spy();
//     const filmDecision = [{title:"Fight Club", overview:"great movie", id:1, vote_average:9, comment:"test"}]
//     const actualNode = mount(<WatchButton  onClick={clickCallback} renderDecisionBox={renderDecisionBox} filmDecision={filmDecision}/>);
//     // WHEN
//     actualNode.find("Button").simulate("click");
//     // THEN
//     sinon.assert.called(clickCallback);
// });

});
