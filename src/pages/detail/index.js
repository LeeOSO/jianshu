import React, {Component} from "react";
import {Content, DetailWrapper, Header} from "./style";
import connect from "react-redux/lib/connect/connect";
import {actionCreators} from "./store";
import {useLocation, useNavigate, useParams, useRoutes} from "react-router";

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
// export function withRouter( Child ) {
//     return ( props ) => {
//         const location = useLocation();
//         const navigate = useNavigate();
//         return <Child { ...props } navigate={ navigate } location={ location } />;
//     }
// }

export const mapStateToProps = (state) => ({
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content'])
    }
);

const Wrapper = (props) => {//router6以上获取路由参数方法
    const params = useParams();
    return <Detail{...{...props, match: {params}}} />
};

export const mapDispatchToProps = (dispatch) => ({
        getDetail(id) {
            dispatch(actionCreators.getDetail(id));
        }
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);