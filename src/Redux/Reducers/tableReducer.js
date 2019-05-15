import { combineReducers } from 'redux';
import {
    GET_POSTS,
    SET_PAGE_SIZE,
    CHANGE_PAGE
} from '../types';

const tableReducer = combineReducers({
    posts,
    pageSize: pageSize,
    pageNumber
});

function pageNumber(state = 1, action) {
    switch (action.type) {
        case CHANGE_PAGE:
            return action.payload
        default:
            return state
    }
}

function pageSize(state = 3, action) {
    switch (action.type) {
        case SET_PAGE_SIZE:
            return action.payload
        default:
            return state
    }
}

function posts(state = [], action) {
    switch (action.type) {
        case GET_POSTS:
            return action.payload.splice(0, 20)
        default:
            return state;
    }
}

export default tableReducer;