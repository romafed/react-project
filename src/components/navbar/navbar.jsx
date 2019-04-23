import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';
class Navbar extends Component {
    state = {

    }
    render() {
        return (
            <nav className='nav'>
                <div className="nav__logo">
                    <Link to='/todo'>Progect</Link>
                </div>
                <div className='nav__menu'>
                    <ul>
                        <NavLink activeClassName='activeLink' to='/todo' >Todo</NavLink>
                        <NavLink activeClassName='activeLink' to='/some' >Some</NavLink>
                        <NavLink activeClassName='activeLink' to='/table' >Table</NavLink>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;