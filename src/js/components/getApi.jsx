import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";
import { Link } from "react-router-dom";
export class Post extends Component {
  constructor(props) {
    super();
  }
  componentDidMount() {
    this.props.articles.length === 0 && this.props.getData();
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.articles.map(el => (
          <li className="list-group-item" key={el.id}>
            <Link to={`/post/${el.id}`}>
              <b>Title:{el.title}</b>
            </Link>

            <br />
            <p>
              <b>Body:</b>
              {el.body.slice(0, 50)}
            </p>
          </li>
        ))}
      </ul>
    );
  }
}
function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 50)
  };
}
export default connect(
  mapStateToProps,
  { getData }
)(Post);
