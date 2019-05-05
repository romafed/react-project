import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';

import Backbar from './backBar';
import './navbar.css';
class Navbar extends Component {
    state = {
        menuText: [
            { id: 1, text: 'Todo with Redux', to: '/todo' },
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
            <React.Fragment>
                <Spring
                    from={{ transform: 'translateY(-100%)' }}
                    to={{ transform: 'translateY(0)' }}
                >
                    {props => (
                        <nav className='nav' style={props}>
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
                        </nav>
                    )}
                </Spring>

                <Backbar
                    menuText={menuText} show={show}
                    onCloseMenu={this.hendleCloseMenu}
                />
            </React.Fragment>
        );
    }
}

export default Navbar;