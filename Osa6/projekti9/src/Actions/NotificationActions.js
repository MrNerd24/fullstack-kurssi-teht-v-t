let timeout = null

export const setNotification = (notification) => {
	return async (dispatch) => {
		if(timeout) {
			clearTimeout(timeout)
		}
		dispatch({
			type: 'SET_NOTIFICATION',
			notification
		})

		timeout = setTimeout(() => {
			dispatch({
				type: 'SET_NOTIFICATION',
				notification: ""
			})
		}, 5000)
	}
}

