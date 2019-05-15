import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App.jsx";
import Posts from "./js/components/posts.jsx";
import Show from "./js/components/show.jsx";
import Edit from "./js/components/edit.jsx";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />{" "}
      <Route exact path="/posts" component={Posts} />{" "}
      <Route path="/post/:id" component={Show} />{" "}
      <Route path="/post/edit/:id" component={Edit} />{" "}
    </div>{" "}
  </Router>
);

ReactDOM.render(
  <Provider store={store}> {routing} </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
