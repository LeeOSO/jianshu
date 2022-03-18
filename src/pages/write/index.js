import React, {Component, useEffect} from "react";
import connect from "react-redux/lib/connect/connect";
import {Navigate, useNavigate} from "react-router";

class Write extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(`${this.props.loginStatus}`);
        if (this.props.loginStatus) {
            return <div>write page.</div>;
        } else {
            return <Navigate to='/login' replace={true}/>;
        }
    }
}

export const mapStateToProps = (state) => ({
        loginStatus: state.getIn(['login', 'login'])
    }
);


export default connect(mapStateToProps, null)(Write);