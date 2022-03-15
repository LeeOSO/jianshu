import React, {Component, PureComponent} from "react";
import {ListInfo, ListItem, LoadMore} from "../style";
import connect from "react-redux/lib/connect/connect";
import {actionCreators} from "../store";
import {Link} from "react-router-dom";

class List extends PureComponent {
    render() {
        const {list, getMoreList, articlePage} = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            //单页应用，避免html多次加载
                            <Link to={'/detail'} key={item.get('id') + index}>
                                <ListItem >
                                    <img className={'pic'}
                                         src={item.get('imgUrl')}/>
                                    <ListInfo>
                                        <h3 className={'title'}>{item.get('title')}</h3>
                                        <p className={'desc'}>{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        );
                    })
                }
                <LoadMore onClick={() => {
                    getMoreList(articlePage)
                }}>加载更多</LoadMore>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'articleList']),
    articlePage: state.getIn(['home', 'articlePage'])
});

const mapDispatchToProps = (dispatch) => ({
    getMoreList(articlePage) {
        dispatch(actionCreators.getMoreList(articlePage));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);