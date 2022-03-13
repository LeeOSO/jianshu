import {fromJS} from "immutable";

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: 'https://upload.jianshu.io/users/upload_avatars/7133325/f4370cf6-cf4d-4839-9b54-87beaa767d48?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    }, {
        id: 2,
        title: '手绘',
        imgUrl: 'https://upload.jianshu.io/users/upload_avatars/7133325/f4370cf6-cf4d-4839-9b54-87beaa767d48?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    }],
    articleList: [{
        id: 1,
        title: '1美美的一天',
        desc: '今天行程有点满。 提前预约行政大厅九点的业务，没想到办得很顺利，不到十点就结束了。于是，按照原计划，大珠山走起。 因为yi情，错过了今年大珠山的...',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GCTYXQ4xoUsH6sxRICFCtmjjYFYW9ZlQ6A&usqp=CAU'
    },
        {
            id: 2,
            title: '2美美的一天',
            desc: '今天行程有点满。 提前预约行政大厅九点的业务，没想到办得很顺利，不到十点就结束了。于是，按照原计划，大珠山走起。 因为yi情，错过了今年大珠山的...',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GCTYXQ4xoUsH6sxRICFCtmjjYFYW9ZlQ6A&usqp=CAU'
        },
        {
            id: 3,
            title: '3美美的一天',
            desc: '今天行程有点满。 提前预约行政大厅九点的业务，没想到办得很顺利，不到十点就结束了。于是，按照原计划，大珠山走起。 因为yi情，错过了今年大珠山的...',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GCTYXQ4xoUsH6sxRICFCtmjjYFYW9ZlQ6A&usqp=CAU'
        },
        {
            id: 4,
            title: '4美美的一天',
            desc: '今天行程有点满。 提前预约行政大厅九点的业务，没想到办得很顺利，不到十点就结束了。于是，按照原计划，大珠山走起。 因为yi情，错过了今年大珠山的...',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GCTYXQ4xoUsH6sxRICFCtmjjYFYW9ZlQ6A&usqp=CAU'
        },
    ]
});

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};