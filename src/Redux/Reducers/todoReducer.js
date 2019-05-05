import { combineReducers } from 'redux';

import {
    ADD_SINGLE_TODO,
    TOGGLE_COMPLETE_TODO,
    FILTER_TODS_LIST,
    DELETE_TODO,
    Filters
} from './../types';

function todos(state = [], action) {
    switch (action.type) {
        case ADD_SINGLE_TODO:
            return [
                { id: Date.now(), text: action.payload, completed: false },
                ...state
            ]
        case TOGGLE_COMPLETE_TODO:
            const newTodos = [...state];
            const [toggleTodo] = newTodos.filter(item => item.id === action.payload)
            toggleTodo.completed = !toggleTodo.completed;
            return newTodos;
        case DELETE_TODO:
            const deleteTodos = [...state];
            const newDeletetTodos = deleteTodos.filter(item => item.id !== action.payload);
            return newDeletetTodos;
        default:
            return state;
    }
}

function filterForTodos(state = Filters.ALL_TODOS, action) {
    switch (action.type) {
        case FILTER_TODS_LIST:
            return action.payload
        default:
            return state;
    }
}

const todoReducer = combineReducers({
    todos,
    filterForTodos
});

export default todoReducer;