import {
    GET_POSTS,
    SET_PAGE_SIZE,
    CHANGE_PAGE,
    SEARCH_USERS
} from '../types';

export const getPosts = posts => dispatch => {
    return dispatch({
        type: GET_POSTS,
        payload: posts
    });
};

export const setPageSize = size => dispatch => {
    return dispatch({
        type: SET_PAGE_SIZE,
        payload: size
    });
};

export const changePage = pageNumber => dispatch => {
    return dispatch({
        type: CHANGE_PAGE,
        payload: pageNumber
    })
}

export const searchUsers = value => dispatch => {
    return dispatch({
        type: SEARCH_USERS,
        payload: value
    });
}

