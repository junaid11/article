// src/js/components/App.jsx
import React from "react";
import List from "./list";
import Form from "./form.jsx";
import GetApi from "./getApi.jsx";

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Articles</h2>
      <List />
    </div>
    <div className="col-md-3 offset-md-1">
      <h2>Add a new article</h2>
      <Form />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>API posts</h2>
      <GetApi />
    </div>
  </div>
);
export default App;
