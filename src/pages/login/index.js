import React, {Component, useEffect} from "react";
import connect from "react-redux/lib/connect/connect";
import {Button, Input, LoginBox, LoginWrapper} from "./style";
import {actionCreators} from "./store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navigate, useNavigate} from "react-router";

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(`${this.props.loginStatus}`);
        if (this.props.loginStatus) {
            return <Navigate to='/' replace={true} />;
        } else {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder={'账号'} ref={(input) => {
                            this.account = input
                        }}/>
                        <Input placeholder={'密码'} type={'password'} ref={(input) => {
                            this.password = input
                        }}/>
                        <Button onClick={() => {
                            this.props.login(this.account, this.password)
                        }}>登录</Button>
                    </LoginBox>
                </LoginWrapper>);
        }

    }
}

export const mapStateToProps = (state) => ({
        loginStatus: state.getIn(['login', 'login'])
    }
);

export const mapDispatchToProps = (dispatch) => ({
        login(account, password) {
            dispatch(actionCreators.login(account.value, password.value));
        }
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);