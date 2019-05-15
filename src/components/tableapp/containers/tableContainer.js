import { connect } from 'react-redux';

import Table from './../table/table';

function pagination(posts, pageSize, pageNumber) {
    console.log(posts, pageSize, pageNumber);
    const startPage = (pageNumber - 1) * pageSize;
    const newPosts = posts.slice(startPage, startPage + pageSize);
    console.log(newPosts);
    return newPosts
}

const mapStateToProps = state => ({
    posts: pagination(state.tableState.posts, state.tableState.pageSize, state.tableState.pageNumber)
});

const TableContainer = connect(
    mapStateToProps,
    {}
)(Table);
export default TableContainer;