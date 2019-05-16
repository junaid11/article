import React, { Component } from "react";
import { connect } from "react-redux";
import { updateArticle } from "../actions/index";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router";

function mapDispatchToProps(dispatch) {
  return {
    updateArticle: article => dispatch(updateArticle(article))
  };
}
const mapStateToProps = state => {
  return { article: state.remoteArticles };
};

class ConnectedForm extends Component {
  constructor({ article, match }) {
    super();
    const getArticle = this.getArticle(article, match);
    this.state = {
      title: getArticle[0].title,
      body: getArticle[0].body,
      fireRedirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getArticle(article, match) {
    return article.filter(el => el.id == match.params.id && el);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    const article = this.props.article;
    const match = this.props.match;
    event.preventDefault();
    const { title, body } = this.state;
    article.map(el => {
      if (el.id == match.params.id) {
        el.title = title;
        el.body = body;
      }
    });
    this.props.updateArticle(article);
    this.props.history.push("/post/" + this.props.match.params.id);
    //this.setState({ fireRedirect: true });
    //    this.setState({ title: "" });
  }
  render() {
    const { title, body } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={this.handleChange}
            />
            <label htmlFor="body">Body</label>
            <input
              type="text"
              className="form-control"
              id="body"
              value={body}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-success btn-lg">
            SAVE
          </button>
        </form>
        {this.state.fireRedirect && <Redirect to="/posts" />}
      </div>
    );
  }
}
const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ConnectedForm));

export default Form;
