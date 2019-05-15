import React, { Component } from 'react';
import { getUser } from './../../http-modules/user-http';
import TableContainer from './containers/tableContainer';
import Peginating from './../common/pegination/pegination';
import './tableapp.css';
class Tableapp extends Component {

    async componentDidMount() {
        const { getPosts } = this.props;
        try {
            const users = await getUser();
            getPosts(users);
        } catch (ex) {
            console.log('SHIT: ', ex);
        }
    }

    render() {
        const { pageSize, posts, changePage } = this.props;
        return (
            <div className="page">
                <div className='tableapp'>
                    <TableContainer />
                    <Peginating pageSize={pageSize} postsLength={posts.length} onPage={changePage} />
                </div>
            </div>
        );
    }
}

export default Tableapp;