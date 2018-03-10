let initialState = {
	message: "",
	type: "info"
}

export default (state = initialState, action) => {
	switch (action.type) {
		case "SET_NOTIFICATION":
			return action.notification
		default:
			return state
	}
}