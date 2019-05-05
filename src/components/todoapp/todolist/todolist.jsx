import React from 'react';
import Todo from '../todo/todo';
import { Transition } from 'react-spring/renderprops';
import './todolist.css';

const Todolist = ({ todos, onComplete, onDelete }) => {

    const show = todos.length <= 0;

    return (
        <section className='todo-list'>
            <Transition
                items={show}
                from={{ transform: 'translateX(-150%)' }}
                enter={{ transform: 'translateX(0)', opacity: 1 }}
                leave={{ transform: 'translateX(-150%)', opacity: 0 }}
                config={{ mass: 2, delay: 0 }}
            >
                {show => show ?
                    props => <p style={props} className='todo-list__empty todo-absolute'>List is empty</p> :
                    props =>
                        <ul style={props} className='todo-absolute'>
                            <Transition
                                items={todos} keys={item => item.id}
                                from={{ transform: 'translateX(-150%)' }}
                                enter={{ transform: 'translateX(0)', opacity: 1 }}
                                leave={{ transform: 'translateX(-150%)', opacity: 0 }}
                                config={{ mass: 2, delay: 0 }}
                            >
                                {item => props => (
                                    <Todo style={props}
                                        onComplete={onComplete}
                                        onDelete={onDelete}
                                        key={item.id}
                                        {...item}
                                    >
                                        {item.text}
                                    </Todo>
                                )}
                            </Transition>
                        </ul>}
            </Transition>
        </section >
    );
}

export default Todolist;