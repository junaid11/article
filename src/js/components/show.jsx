import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions/index";
import { Link } from "react-router-dom";

const mapStateToProps = state => {
  return { article: state.remoteArticles };
};

class ShowPost extends Component {
  onDeleteClick(id) {
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const article = this.props.article;
    const match = this.props.match;
    return (
      <div>
        {article.map(
          el =>
            el.id == match.params.id && (
              <div>
                <h2>Title : {el.title}</h2>
                <b>Body:</b>
                {el.body}
                <br />
                <Link to={`/post/edit/${el.id}`}>
                  <b>Edit </b>
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => this.onDeleteClick(el.id)}
                >
                  Delete
                </button>
              </div>
            )
        )}
      </div>
    );
  }
}

const Show = connect(
  mapStateToProps,
  { deletePost }
)(ShowPost);
export default Show;
