import { combineReducers } from 'redux';
import {
    GET_POSTS,
    SET_PAGE_SIZE,
    CHANGE_PAGE,
    SEARCH_USERS,
} from '../types';

const tableReducer = combineReducers({
    posts,
    pageSize: pageSize,
    pageNumber,
    searchUsersValue
});

function pageNumber(state = 1, action) {
    switch (action.type) {
        case CHANGE_PAGE:
            return action.payload
        default:
            return state
    }
}

function pageSize(state = 5, action) {
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

function searchUsersValue(state = '', action) {
    switch (action.type) {
        case SEARCH_USERS:
            return action.payload
        default:
            return state
    }
}

export default tableReducer;