import React, { Component } from 'react';
import { getUser } from './../../http-modules/user-http';
import Table from './table/table';
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

    hendleSearch = (e) => {
        const { searchUsers, changePage } = this.props
        changePage(1);
        searchUsers(e.currentTarget.value)
    }

    render() {
        const { pageSize, posts, changePage, pageNumber, usersSize, searchValue } = this.props;
        return (
            <div className="page">
                <div className='tableapp'>
                    <div className='table-container '>
                        <Search
                            placeholder='Search...'
                            hendleValue={this.hendleSearch}
                            hendelSubmit={(e) => e.preventDefault()}
                            value={searchValue}
                        >
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </Search>
                        <Table
                            posts={posts}
                        />
                        <Peginating
                            viseblePagesLength={posts.length}
                            pageSize={pageSize}
                            postsLength={usersSize}
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