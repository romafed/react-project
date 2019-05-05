import { combineReducers } from 'redux';
import {
    GET_POSTS
} from '../types';

const tableReducer = combineReducers({
    posts
});

function posts(state = [], action) {
    switch (action.type) {
        case GET_POSTS:
            return action.payload
        default:
            return state;
    }
}

export default tableReducer;