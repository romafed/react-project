import React from 'react';
import './todo.css';

const Todo = ({ children, onComplete, onDelete, completed, id, ...rest }) => {

    const todoStyle = { textDecoration: completed ? 'line-through' : 'none' }

    function onDeleteTodo(e, id) {
        e.stopPropagation();
        onDelete(id);
    }

    return (
        <li className='single-todo'
            {...rest}
        >
            <span
                style={todoStyle}
                onClick={() => onComplete(id)}
            >
                {children}
            </span>
            <i
                onClick={(e) => onDeleteTodo(e, id)}
                className="fa fa-trash"
            ></i>
        </li>
    );
}

export default Todo;