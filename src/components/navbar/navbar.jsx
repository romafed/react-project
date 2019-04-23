import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <nav>
                <div className="nav__logo">
                    <Link to='/todo'>Logo</Link>
                </div>
                <div className='nav__menu'>
                    <ul>
                        <NavLink to='/todo' >Todo</NavLink>
                        <NavLink to='/some' >Some</NavLink>
                        <NavLink to='/table' >Table</NavLink>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;