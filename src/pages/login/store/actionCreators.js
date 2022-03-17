import axios from "axios";
import {CHANGE_LOGIN, CHANGE_LOGOUT} from "./actionTypes";

export const logout= () => ({
    type: CHANGE_LOGOUT,
    value: false
});


export const login = (account, password) => {
    return ((dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
            const result = res.data.data;
            if (result) {
                dispatch(changeLogin());
            }
        })
    });
}


const changeLogin = () => ({
    type: CHANGE_LOGIN,
    value: true
});


