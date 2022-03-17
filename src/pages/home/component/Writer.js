import React, {PureComponent} from "react";
import {WriterContainer, WriterHeader, WriterItem, WriterWrapper} from "../style";

class Writer extends PureComponent {
    render() {
        return (<WriterWrapper>
            <WriterHeader>
                <span className={'title'}>推荐作者</span>
                <a className={'change'}>
                    <i className={'iconfont spin'}>&#xe851;</i>
                    换一批
                </a>
            </WriterHeader>
            <WriterContainer>
                <WriterItem>
                    <a className={'avatar'}>
                        <img className={'avatar_img'} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GCTYXQ4xoUsH6sxRICFCtmjjYFYW9ZlQ6A&usqp=CAU'}/>
                    </a>
                    <a className={'follow'}>
                        关注
                    </a>
                    <a className={'name'}>
                        卢璐说
                    </a>
                    <p className={'info'}>
                        写了2107.2k字 · 34.8k喜欢
                    </p>
                </WriterItem>
                <WriterItem>
                    <a className={'avatar'}>
                        <img className={'avatar_img'} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GCTYXQ4xoUsH6sxRICFCtmjjYFYW9ZlQ6A&usqp=CAU'}/>
                    </a>
                    <a className={'follow'}>
                        关注
                    </a>
                    <a className={'name'}>
                        卢璐说
                    </a>
                    <p className={'info'}>
                        写了2107.2k字 · 34.8k喜欢
                    </p>
                </WriterItem>
                <WriterItem>
                    <a className={'avatar'}>
                        <img className={'avatar_img'} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GCTYXQ4xoUsH6sxRICFCtmjjYFYW9ZlQ6A&usqp=CAU'}/>
                    </a>
                    <a className={'follow'}>
                        关注
                    </a>
                    <a className={'name'}>
                        卢璐说
                    </a>
                    <p className={'info'}>
                        写了2107.2k字 · 34.8k喜欢
                    </p>
                </WriterItem>
                <WriterItem>
                    <a className={'avatar'}>
                        <img className={'avatar_img'} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GCTYXQ4xoUsH6sxRICFCtmjjYFYW9ZlQ6A&usqp=CAU'}/>
                    </a>
                    <a className={'follow'}>
                        关注
                    </a>
                    <a className={'name'}>
                        卢璐说
                    </a>
                    <p className={'info'}>
                        写了2107.2k字 · 34.8k喜欢
                    </p>
                </WriterItem>
            </WriterContainer>
        </WriterWrapper>);
    }
}

export default Writer;