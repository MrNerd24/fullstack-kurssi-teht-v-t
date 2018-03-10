import blogs from './BlogsReducer'
import users from './UsersReducer'
import notification from './NotificationReducer'
import {combineReducers} from 'redux'

export default combineReducers({
	blogs, users, notification
})