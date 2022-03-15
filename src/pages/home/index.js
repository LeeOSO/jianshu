import React, {Component, PureComponent} from "react";
import {BackTop, HomeLeft, HomeRight, HomeWrapper} from "./style";
import Topic from "./component/Topic";
import List from "./component/List";
import Recommend from "./component/Recommend";
import Writer from "./component/Writer";
import connect from "react-redux/lib/connect/connect";
import {actionCreators} from "./store/";

class Home extends PureComponent {
    //PureComponent自动实现shouldUpdateComponent
    //不使用immutable.js的不适用

    handleScrollTo() {
        window.scrollTo(0, 0);
    }

    render() {
        return (<HomeWrapper>
            <HomeLeft>
                <img className={'banner-img'}
                     src={'https://upload.jianshu.io/admin_banners/web_images/5055/348f9e194f4062a17f587e2963b7feb0b0a5a982.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'}/>
                <Topic/>
                <List/>
            </HomeLeft>
            <HomeRight>
                <Recommend/>
                <Writer/>
            </HomeRight>
            {this.props.showScroll ? <BackTop onClick={this.handleScrollTo}>回到顶部</BackTop>
                : null}
        </HomeWrapper>);
    }


    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }


    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.get('home').get('showScroll')
});

const mapDispatchToProps = (dispatch) => ({
        changeHomeData() {
            const action = actionCreators.getHomeInfo();
            dispatch(action);
        },
        changeScrollTopShow() {
            if (document.documentElement.scrollTop > 100) {
                dispatch(actionCreators.toggleTopShow(true));
            } else {
                dispatch(actionCreators.toggleTopShow(false));
            }
        }
    }
);


export default connect(mapStateToProps, mapDispatchToProps)(Home);

