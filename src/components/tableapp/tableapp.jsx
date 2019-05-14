import React, { Component } from 'react';
import { getUser } from './../../http-modules/user-http';
import TableContainer from './containers/tableContainer';
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
        return (
            <div className="page">
                <div className='tableapp'>
                    <TableContainer />
                </div>
            </div>
        );
    }
}

export default Tableapp;