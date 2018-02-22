
export default (state = "", action) => {
	switch(action.type) {
		case 'SET_NOTIFICATION':
			return action.notification
		default:
			return state
	}
}