import {fromJS} from "immutable";
import {CHANGE_DETAIL} from "./actionTypes";

const defaultState = fromJS({
    title: '',
    content: '<img src={"https://chinese.freecodecamp.org/news/content/images/size/w2000/2021/10/spanvdiv.png"}/><p>我承认，我从小到大都很胆小，怕这怕那的。可是妈妈说，自己的爹，不会让你害怕的，我也觉得我不应该害怕。父亲生前我对他那么好，他怎么能让我害怕呢？可是我就是有点害怕，尤其是天黑的时候，看着黑乎乎的窗外，我就有点发毛，心里慌慌的。</p><p>我承认，我从小到大都很胆小，怕这怕那的。可是妈妈说，自己的爹，不会让你害怕的，我也觉得我不应该害怕。父亲生前我对他那么好，他怎么能让我害怕呢？可是我就是有点害怕，尤其是天黑的时候，看着黑乎乎的窗外，我就有点发毛，心里慌慌的。</p>'
});

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_DETAIL:
            console.log(`${JSON.stringify(action)}`)
            return state.merge({
                title: action.title,
                content: action.content
            });
        default:
            return state;
    }
};