import {
    ADD_SINGLE_TODO,
    TOGGLE_COMPLETE_TODO,
    FILTER_TODS_LIST,
    DELETE_TODO,
    SEARCH_VALUE
} from './../types';

export const addTodo = text => dispatch => {
    return dispatch({
        type: ADD_SINGLE_TODO,
        payload: text
    })
}

export const deleteTodo = id => dispatch => {
    return dispatch({
        type: DELETE_TODO,
        payload: id
    })
}

export const toggleTodoComplete = id => dispatch => {
    return dispatch({
        type: TOGGLE_COMPLETE_TODO,
        payload: id
    })
}

export const filterTodosList = filter => dispatch => {
    return dispatch({
        type: FILTER_TODS_LIST,
        payload: filter
    });
}

export const addValue = value => dispatch => {
    return dispatch({
        type: SEARCH_VALUE,
        payload: value
    })
}