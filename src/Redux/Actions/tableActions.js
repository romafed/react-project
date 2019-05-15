import {
    GET_POSTS,
    SET_PAGE_SIZE,
    CHANGE_PAGE
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