import React, { Component } from 'react';
import { getUser } from './../../http-modules/user-http';
import TableContainer from './containers/tableContainer';
import Peginating from './../common/pegination/pegination';
import Search from './../common/search/search';
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
        const { pageSize, posts, changePage, pageNumber } = this.props;
        return (
            <div className="page">
                <div className='tableapp'>
                    <div className='table-container '>
                        <Search
                            placeholder='Search...'
                        >
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </Search>
                        <TableContainer />
                        <Peginating
                            pageSize={pageSize}
                            postsLength={posts.length}
                            pageNumber={pageNumber}
                            onPage={changePage}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Tableapp;