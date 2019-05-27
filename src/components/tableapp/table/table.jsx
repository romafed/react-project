import React, { Component } from 'react';
import { Transition } from 'react-spring/renderprops';
import './table.css';
class Table extends Component {

    state = {
        thead: ['Title', 'Body']
    }

    render() {
        const { posts } = this.props;
        const { thead } = this.state;
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