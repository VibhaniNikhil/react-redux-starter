import { combineReducers } from 'redux';
import Users from './User/User.reducer';
import { Auth } from './auth.reducer';

export default combineReducers({
    Users,
    Auth
})