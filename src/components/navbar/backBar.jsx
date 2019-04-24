import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Spring, Trail, config } from 'react-spring/renderprops';

import './backbar.css'

const Backbar = ({ menuText, show, onCloseMenu }) => {
    return (
        <Spring
            from={{ transform: 'translateX(-100%)' }}
            to={{ transform: show ? 'translateX(0)' : 'translateX(-100%)' }}
            delay={!show ? 400 : 0}
        >
            {props => (
                <nav
                    className="backbar" style={props}
                    onClick={onCloseMenu}
                >
                    <div className="backbar__logo">
                        <Link to='/todo'>Projects</Link>
                    </div>

                    <div className='backbar__menu'>
                        <ul>
                            <Trail
                                items={menuText} keys={item => item.id}
                                from={{
                                    transform: 'translateX(-300%)'
                                }}
                                to={{
                                    transform: show ? 'translateX(0)' : 'translateX(-300%)'
                                }}
                                config={{ mass: 4, tension: 170, friction: 26 }}
                            >
                                {item => ({ transform }) => (
                                    <NavLink style={{ transform }} to={item.to} activeClassName='activeLink' >
                                        {item.text}
                                    </NavLink>
                                )}
                            </Trail>
                        </ul>
                    </div>
                </nav>
            )}
        </Spring>
    );
}

export default Backbar;