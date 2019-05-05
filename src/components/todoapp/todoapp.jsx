import React from 'react';
import Todoadd from './todoadd/todoadd';
import FilteredTodos from './containers/filteredTodos';
import Todofooter from './todofooter/todofooter';
import './todoapp.css'

const Todoapp = () => {
    return (
        <div className="page">

            <section className='todo-app'>
                <Todoadd />
                <FilteredTodos />
                <Todofooter />
            </section>

        </div>
    );
}

export default Todoapp;