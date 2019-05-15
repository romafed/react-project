import { connect } from 'react-redux';
import { getPosts, changePage } from '../../../Redux/Actions/tableActions';
import Tableapp from './../tableapp';


const mapStateToProps = state => ({
    posts: state.tableState.posts,
    pageSize: state.tableState.pageSize
});

const mainTable = connect(
    mapStateToProps,
    {
        getPosts,
        changePage
    }
)(Tableapp);

export default mainTable;