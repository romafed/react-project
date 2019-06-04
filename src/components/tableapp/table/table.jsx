import React, { Component } from 'react';
import { Transition, Spring } from 'react-spring/renderprops';
import './table.css';
class Table extends Component {

    state = {
        thead: ['Title', 'Body']
    }

    render() {
        const { posts } = this.props;
        const { thead } = this.state;

        if (posts <= 1) return (
            <Spring
                from={{ opacity: 0, transform: 'translateX(-200%)' }}
                to={{ opacity: 1, transform: 'translateX(0)' }}
            >
                {props => <p style={props}>Cant find user</p>}
            </Spring>
        );

        return (
            <table className='main-table'>
                <thead>
                    <tr>
                        {thead.map((title, index) => (
                            <th key={index} >{title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <Transition
                        items={posts} keys={item => item.id}
                        from={{ opacity: 0 }}
                        enter={{ opacity: 1 }}
                        leave={{ display: 'none', position: 'absolute' }}
                    >
                        {post => props => (
                            <tr style={props}>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        )}
                    </Transition>
                </tbody>
            </table>
        );
    }
}

export default Table;