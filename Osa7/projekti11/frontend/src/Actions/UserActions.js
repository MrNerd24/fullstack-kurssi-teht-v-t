import User from "../services/Users";

export const setCurrentUser = (user) => {
	return async (dispatch) => {
		dispatch({
			type: "SET_CURRENT_USER",
			user
		})
	}
}

export const initUsers = () => {
	return async (dispatch) => {
		let users = await User.getAll()
		dispatch({
			type: "INIT_USERS",
			users
		})
	}
}