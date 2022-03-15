import axios from "axios";
import * as actionTypes from "./actionTypes";
import {fromJS} from "immutable";

export const toggleTopShow = (show) => ({
    type: actionTypes.TOGGLE_TOP_SHOW,
    show: show
});

export const getMoreList = (articlePage) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?articlePage=' + articlePage).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result, articlePage + 1));
        })
    }
};

const addHomeList = (list, nextPage) => ({
    type: actionTypes.ADD_ARTICLE_LIST,
    articleList: fromJS(list),
    articlePage: fromJS(nextPage)
});

const changeHomeData = (result) => ({
        type: actionTypes.CHANGE_HOME_DATA,
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList
    }
);

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        })
    }
};