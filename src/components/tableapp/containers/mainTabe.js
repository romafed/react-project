import { connect } from 'react-redux';
import { getPosts } from '../../../Redux/Actions/tableActions';
import Tableapp from './../tableapp';


const mapStateToProps = state => ({
    posts: state.tableState.posts
});

const mainTable = connect(
    mapStateToProps,
    {
        getPosts
    }
)(Tableapp);

export default mainTable;