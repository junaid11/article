import {
    ADD_ARTICLE,
    EDIT_ARTICLE
} from "../constants/action-types";
const initialState = {
    articles: [],
    remoteArticles: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    if (action.type === EDIT_ARTICLE) {
        return {
            ...state,
            remoteArticles: action.payload
        }
    }

    if (action.type === "DELETE_POST") {
        const a = state.remoteArticles.filter(({
            id
        }) => id !== action.payload);
        console.log(a);
        return {
            ...state,
            remoteArticles: a
        }
        //return state.filter((remoteArticle) => remoteArticle.id !== action.payload);
        //        return remoteArticles.omit(state, action.payload);
    }

    if (action.type === "DATA_LOADED") {
        return {
            ...state,
            remoteArticles: action.payload
        }
    };

    return state;
}
export default rootReducer;
