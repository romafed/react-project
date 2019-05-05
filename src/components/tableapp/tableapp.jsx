import React, { Component } from 'react';
import { getUser } from './../../http-modules/user-http';
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
                <h1>Table App</h1>
            </div>
        );
    }
}

export default Tableapp;