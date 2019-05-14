import { connect } from 'react-redux';

import Table from './../table/table';

const mapStateToProps = state => ({
    posts: state.tableState.posts
});

const TableContainer = connect(
    mapStateToProps,
    {}
)(Table);
export default TableContainer;