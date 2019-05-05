import React from 'react';
import { Filters } from '../../../Redux/types';
import FilteredLink from './../containers/filteredLinks';
import './todofooter.css'

const Todofooter = () => {
    return (
        <section className='todo-footer'>
            <FilteredLink filter={Filters.ALL_TODOS}>All</FilteredLink>
            <FilteredLink filter={Filters.ACTIVE_TODOS}>Active</FilteredLink>
            <FilteredLink filter={Filters.COMPLETE_TODOS} >Completed</FilteredLink>
        </section>
    );
}

export default Todofooter;