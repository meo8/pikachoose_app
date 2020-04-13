import React from "react";
import ReactDOM from "react-dom";
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HistoryIndex from "../javascript/components/pages/HistoryIndex"


Enzyme.configure({ adapter: new Adapter() })

it('HistoryIndex renders without crashing', () => {
  const div = document.createElement('div')
  const historiesArr = [{
    comment: "this movie is so wholesum & stupid.",
    created_at: "2020-04-10T18:03:30.421Z",
    decision: "be kind rewind",
    id: 2,
    is_favorite: true,
    kind: "movie",
    link: "https://www.imdb.com/title/tt0799934/",
    updated_at: "2020-04-10T18:03:30.421Z",
    user_id: 1
  }];
  ReactDOM.render(<Router><HistoryIndex histories={ historiesArr } /></Router>, div);
});
