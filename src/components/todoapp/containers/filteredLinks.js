import { connect } from 'react-redux';

import { filterTodosList } from './../../../Redux/Actions/todoActions';
import Todolink from './../todolink/todolink';


const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.todoState.filterForTodos,
    todosLength: state.todoState.todos.length
});

const mapMethodsToProps = {
    onFilter: filterTodosList
}

const FilteredLink = connect(
    mapStateToProps,
    mapMethodsToProps
)(Todolink)

export default FilteredLink;