import {CHANGE_LIST, CHANGE_PAGE, MOUSE_ENTER, MOUSE_LEAVE, SEARCH_FOCUS, SEARCH_UN_FOCUS} from "./actionTypes";
import {fromJS} from "immutable";

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [], //immutable数组
    page: 0,
    totalPage: 1
});

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SEARCH_FOCUS:
            // immutable结合之前的值和设置的值返回一个全新的对象
            return state.set('focused', true);
        case SEARCH_UN_FOCUS:
            return state.set('focused', false);
        case CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            });
        case MOUSE_ENTER:
            return state.set('mouseIn', true);
        case MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case CHANGE_PAGE:
            return state.set('page', action.page);
        default:
            return state;
    }
};