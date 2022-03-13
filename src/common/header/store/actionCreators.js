import {CHANGE_LIST, CHANGE_PAGE, MOUSE_ENTER, MOUSE_LEAVE, SEARCH_FOCUS, SEARCH_UN_FOCUS} from "./actionTypes";
import axios from "axios";
import {fromJS} from "immutable";

const changeList = (data) => ({
    data: fromJS(data), //将数据变为immutable
    type: CHANGE_LIST,
    totalPage: Math.ceil(data.length / 3)
});


export const getList = () => {
    // thunk返回函数
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data.data;
            dispatch(changeList(data));
        }).catch(() => {
            console.log('error');
        });
    };
};

export const searchFocus = () => ({
    type: SEARCH_FOCUS
});

export const searchUnFocus = () => ({
    type: SEARCH_UN_FOCUS
});

export const mouseEnter = () => ({
    type: MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: MOUSE_LEAVE
});

export const changePage = (page) => ({
    type: CHANGE_PAGE,
    page: page
});