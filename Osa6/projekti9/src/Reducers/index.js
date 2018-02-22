import anecdotes from './AnecdoteReducer'
import notification from './NotificationReducer'
import filter from './FilterReducer'
import {combineReducers} from 'redux'

export default combineReducers({
	anecdotes, notification, filter
})