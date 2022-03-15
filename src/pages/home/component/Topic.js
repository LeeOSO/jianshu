import React, {Component, PureComponent} from "react";
import {TopicItem, TopicWrapper} from "../style";
import connect from "react-redux/lib/connect/connect";

class Topic extends PureComponent {
    render() {
        const {list} = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item) => {
                        return (<TopicItem key={item.get('id')}>
                            <img className={'topic-pic'}
                                 src={item.get('imgUrl')}/>
                            {item.get('title')}
                        </TopicItem>);
                    })
                }
            </TopicWrapper>);
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'topicList'])
});


export default connect(mapStateToProps, null)(Topic);