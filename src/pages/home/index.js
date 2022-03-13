import React, {Component} from "react";
import {HomeLeft, HomeRight, HomeWrapper} from "./style";
import Topic from "./component/Topic";
import List from "./component/List";
import Recommend from "./component/Recommend";
import Writer from "./component/Writer";
import connect from "react-redux/lib/connect/connect";

class Home extends Component {
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
        </HomeWrapper>);
    }
}
const mapStateToProps = (state) => ({
    list: state.get('home').get('topicList')
});


export default connect(mapStateToProps, null)(Home);

