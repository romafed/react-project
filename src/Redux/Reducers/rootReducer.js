import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import tableReducer from './tableReducer';

const rootReducer = combineReducers({
    todoState: todoReducer,
    tableState: tableReducer
});

export default rootReducer;