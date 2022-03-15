import React, {Component} from "react";
import {
    Addition,
    Button,
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchInfo,
    SearchInfoTitle, SearchInfoSwitch,
    SearchWrapper, SearchInfoList, SearchInfoItem
} from "./style";
import IconFontStyle from "../../static/iconfont/iconfont";
import {CSSTransition} from "react-transition-group";
import connect from "react-redux/lib/connect/connect";
import {actionCreators} from "./store/";
import {Link} from "react-router-dom";


class Header extends Component {

    render() {
        const {focused, list} = this.props;
        return (
            <HeaderWrapper>
                <IconFontStyle/>
                <Link to={'/'}>
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition timeout={200} in={focused} classNames="slide">
                            <NavSearch className={focused ? 'focused' : ''}
                                       onFocus={() => {
                                           this.props.handleInputFocus(list)
                                       }}
                                       onBlur={this.props.handleInputBlur}
                            />
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe6e4;</i>
                        {this.getArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='reg'>注册</Button>
                    <Button className='writing'> <span className="iconfont">&#xe708;</span>写文章</Button>
                </Addition>
            </HeaderWrapper>
        );
    }


    getArea = () => {
        const {focused, list, page, mouseIn, totalPage} = this.props;
        const pageList = [];
        const jsList = list.toJS(); // state中的数据为immutable
        if (jsList.length) { //避免初始化未获取数据时执行
            for (let i = page * 3; i < (page + 1) * 3; i++) {
                pageList.push(<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>);
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={this.props.handleMouseEnter}
                    onMouseLeave={this.props.handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => {
                            this.props.handlePageClick(page, totalPage, this.spinIcon)
                        }}>
                            <i ref={(icon) => { // ref: 可获取真实dom节点
                                this.spinIcon = icon;
                            }} className={'iconfont spin'}>&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            pageList
                        }
                    </SearchInfoList>
                </SearchInfo>
            );
        } else {
            return null;
        }
    }
}

// state 变为immutable
const mapStateToProps = (state) => { //store数据映射到组件props中
    return {
        //state.get('header').get('focused')
        focused: state.getIn(['header', 'focused']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
    };
};

const mapDispatchToProps = (dispatch) => { //store.dispatch(action);
    return {
        handleInputFocus(list) {
            //异步放到saga或者action(thunk)
            list.size === 0 && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchUnFocus());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handlePageClick(page, totalPage, spinIcon) {
            let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spinIcon.style.transform = `rotate(${originAngle + 360}deg)`;
            if (page < totalPage - 1) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(0));
            }
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);