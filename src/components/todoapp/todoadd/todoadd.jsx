import React from 'react';
import { connect } from 'react-redux';
import { addTodo, filterTodosList, addValue } from '../../../Redux/Actions/todoActions';
import { Filters } from './../../../Redux/types';
import Search from '../../common/search/search';
import './todoadd.css';

const Todoadd = ({ addTodo, filterTodosList, addValue, addValueP }) => {

    function hendelSubmit(e) {
        e.preventDefault();
        if (addValueP.trim() === '') return
        addTodo(addValueP);
        filterTodosList(Filters.ALL_TODOS);
        addValue('')
    }

    function hendleValue(e) {
        addValue(e.currentTarget.value)
    }


    return (
        <Search
            hendelSubmit={hendelSubmit}
            hendleValue={hendleValue}
            placeholder='Add todo...'
            value={addValueP}
        >
            Add
        </Search >
    );

}

const mapStateToProps = state => ({
    addValueP: state.todoState.addValue
});

export default connect(
    mapStateToProps,
    {
        addTodo,
        filterTodosList,
        addValue
    }
)(Todoadd);