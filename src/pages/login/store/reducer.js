import {fromJS} from "immutable";
import {CHANGE_LOGIN, CHANGE_LOGOUT} from "./actionTypes";

const defaultState = fromJS({
    login: false
});

export const reducer = (state = defaultState, action) => {
    console.log(`${JSON.stringify(action)}`)
    switch (action.type) {
        case CHANGE_LOGIN:
            return state.set('login', action.value);
        case CHANGE_LOGOUT:
            return state.set('login', action.value);
        default:
            return state;
    }
};