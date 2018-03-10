let timeout = null

export const setNotification = (message, type="info") => {
	return async (dispatch) => {
		if(timeout) {
			clearTimeout(timeout)
		}
		let notification = {
			message, type
		}
		dispatch({
			type: "SET_NOTIFICATION",
			notification
		})
		timeout = setTimeout(() => {
			dispatch({
				type: "SET_NOTIFICATION",
				notification: {message: "", type}
			})
		}, 10000)
	}
}