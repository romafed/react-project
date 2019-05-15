import React, { Component } from 'react';
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
                    {posts.map(post => (
                        <tr key={post.id} >
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Table;