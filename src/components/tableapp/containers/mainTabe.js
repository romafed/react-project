import { connect } from 'react-redux';
import { getPosts, changePage, searchUsers } from '../../../Redux/Actions/tableActions';
import Tableapp from './../tableapp';

function searchUserVue(posts, searchUsersValue) {
    const searchUsers = posts.filter(post => {
        const searchValue = searchUsersValue.toLowerCase().split(' ').join('');
        const userValue = post.title.toLowerCase().split(' ').join('');
        return userValue.trim().includes(searchValue.trim());
    });
    return searchUsers;
}

function filterUsers(state) {
    const { posts, pageSize, pageNumber, searchUsersValue } = state.tableState;
    // Serach filter
    const searchUsers = searchUserVue(posts, searchUsersValue);
    // Pegination
    const startPage = (pageNumber - 1) * pageSize;
    const newPosts = searchUsers.slice(startPage, startPage + pageSize);
    return newPosts
}

const mapStateToProps = state => ({
    posts: filterUsers(state),
    usersSize: searchUserVue(state.tableState.posts, state.tableState.searchUsersValue).length,
    pageSize: state.tableState.pageSize,
    pageNumber: state.tableState.pageNumber,
    searchValue: state.tableState.searchUsersValue
});

const mainTable = connect(
    mapStateToProps,
    {
        getPosts,
        changePage,
        searchUsers,

    }
)(Tableapp);

export default mainTable;