import React from 'react'
import Store from '../Store'
import * as Actions from "../Actions";

class Notification extends React.Component {
	render() {
		const style = {
			border: 'solid',
			padding: 10,
			borderWidth: 1
		}
		let message = this.props.store.getState().notification
		if(message) {
			return (
				<div style={style}>
					{this.props.store.getState().notification}
				</div>
			)
		}
		
		return null

	}
}

export default Notification

let timeout = null

export const notify = (message) => {
	if(timeout) {
		clearTimeout(timeout)
	}
	Store.dispatch(Actions.setNotification(message))
	timeout = setTimeout(() => {
		Store.dispatch(Actions.setNotification(""))
	}, 5000)
}