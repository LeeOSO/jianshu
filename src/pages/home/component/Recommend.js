import React, {Component, PureComponent} from "react";
import {RecommendItem, RecommendWrapper} from "../style";
import connect from "react-redux/lib/connect/connect";

class Recommend extends PureComponent {
    render() {
        let {list} = this.props;
        return (
            <RecommendWrapper>
                {
                    list.map((item) => {
                        return (<RecommendItem imgUrl={item.get('imgUrl')}/>);
                    })
                }
            </RecommendWrapper>);
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'recommendList'])
});


export default connect(mapStateToProps, null)(Recommend);