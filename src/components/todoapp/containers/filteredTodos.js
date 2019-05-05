import { connect } from 'react-redux';
import { toggleTodoComplete, deleteTodo } from './../../../Redux/Actions/todoActions';

import Todolist from './../todolist/todolist';
import { Filters } from '../../../Redux/types';

function filterTodos(todos = [], filter) {
    switch (filter) {
        case Filters.COMPLETE_TODOS:
            return todos.filter(item => item.completed === true)
        case Filters.ACTIVE_TODOS:
            return todos.filter(item => item.completed === false)
        default:
            return todos
    }
}


const mapStateToProps = state => ({
    todos: filterTodos(state.todoState.todos, state.todoState.filterForTodos)
});

const mapMethodsToProps = {
    onComplete: toggleTodoComplete,
    onDelete: deleteTodo
}

const FilteredTodos = connect(
    mapStateToProps,
    mapMethodsToProps
)(Todolist);

export default FilteredTodos;
