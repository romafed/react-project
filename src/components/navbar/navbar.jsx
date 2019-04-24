import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import Backbar from './backBar';
import './navbar.css';
class Navbar extends Component {
    state = {
        menuText: [
            { id: 1, text: 'Todo', to: '/todo' },
            { id: 2, text: 'Some', to: '/some' },
            { id: 3, text: 'Table', to: '/table' },
        ],
        show: false
    }

    handleToggleMenu = () => {
        this.setState((prevState, prevProps) => {
            return {
                ...prevState,
                show: !prevState.show
            }
        })
    }

    hendleCloseMenu = () => {
        this.setState({ show: false })
    }

    render() {
        const { menuText, show } = this.state;
        return (
            <nav className='nav'>
                <div className="nav__logo">
                    <Link to='/todo'>Projects</Link>
                </div>
                <i
                    onClick={this.handleToggleMenu}
                    className="fa fa-bars nav_icon"
                ></i>
                <div className='nav__menu'>
                    <ul>
                        {menuText.map(item => (
                            <NavLink
                                key={item.id}
                                to={item.to}
                                activeClassName='activeLink'
                            >
                                {item.text}
                            </NavLink>
                        ))
                        }
                    </ul>
                </div>
                <Backbar
                    menuText={menuText} show={show}
                    onCloseMenu={this.hendleCloseMenu}
                />
            </nav>
        );
    }
}

export default Navbar;