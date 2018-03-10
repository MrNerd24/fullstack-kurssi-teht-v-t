let initialState = {
	users: [],
	currentUser: null
}

export default (state = initialState, action) => {
	switch (action.type) {
		case "SET_CURRENT_USER":
			return {...state, currentUser: action.user}
		case "INIT_USERS":
			return {...state, users: action.users}
		default:
			return state
	}
}