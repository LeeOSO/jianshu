import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    margin-left: 15px;
    float: left;
    padding-top: 30px;
    width: 625px;
    .banner-img {
        width: 100%;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    float: right;
    width: 240px;
`;


export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    border-bottom: 1px solid #dcdcdc;
`;


export const TopicItem = styled.div`
    float: left;
    background: red;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    font-size: 14px;
    color: #000;
    background: #f7f7f7;
    border: 1px sold #dcdcdc;
    border-radius: 4px;
    margin-bottom: 18px;
    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        width: 125px;
        height: 100px;
        float: right;
        display: block;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;