import React, {Component} from "react";
import {Content, DetailWrapper, Header} from "./style";
import connect from "react-redux/lib/connect/connect";
import {actionCreators} from "./store";

class Detail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(`${this.props.location.search}`);
        return (
            <DetailWrapper>
                <Header>
                    {this.props.title}
                </Header>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}}/>
            </DetailWrapper>);
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

export const mapStateToProps = (state) => ({
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content'])
    }
);

export const mapDispatchToProps = (dispatch) => ({
        getDetail(id) {
            dispatch(actionCreators.getDetail(id));
        }
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Detail);