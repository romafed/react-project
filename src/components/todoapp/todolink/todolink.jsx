import React from 'react';
import './todolink.css';

const Todolink = ({ filter, active, onFilter, children, todosLength }) => {

    const todolinkClass = active ? 'todo-link activeTodoLink' : 'todo-link';

    return (
        <button
            className={todolinkClass}
            disabled={todosLength <= 0}
            onClick={() => onFilter(filter)}
        >
            {children}
        </button>
    );
}

export default Todolink;