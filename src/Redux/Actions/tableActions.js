import { GET_POSTS } from '../types';

export const getPosts = posts => dispatch => {
    return dispatch({
        type: GET_POSTS,
        payload: posts
    });
};