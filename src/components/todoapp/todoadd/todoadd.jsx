import React from 'react';
import { connect } from 'react-redux';
import { addTodo, filterTodosList } from '../../../Redux/Actions/todoActions';
import { Filters } from './../../../Redux/types';
import './todoadd.css';

const Todoadd = ({ addTodo, filterTodosList }) => {

    let input;

    function hendelSubmit(e) {
        e.preventDefault();
        if (input.value.trim() === '') return
        addTodo(input.value);
        filterTodosList(Filters.ALL_TODOS);
        input.value = '';
    }

    return (
        <form className='addtodo' onSubmit={(e) => hendelSubmit(e)}>
            <input className='addtodo__search' ref={inp => input = inp} type="text" placeholder='Add todo...' />
            <button className='addtodo__btn' type='submit'>Add</button>
        </form>
    );

}



export default connect(
    null,
    {
        addTodo,
        filterTodosList
    }
)(Todoadd);