import {
  ADD_ARTICLE,
  EDIT_ARTICLE,
  DELETE_POST
} from "../constants/action-types";

export function addArticle(payload) {
  return {
    type: ADD_ARTICLE,
    payload
  };
}
export function updateArticle(payload) {
  return {
    type: EDIT_ARTICLE,
    payload
  };
}
export function deletePost(id) {
  return {
    type: DELETE_POST,
    payload: id
  };
}
export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: "DATA_LOADED",
          payload: json
        });
      });
  };
}
