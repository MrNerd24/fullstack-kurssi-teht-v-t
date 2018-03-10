import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class NotificationComponent extends Component {

	render() {

		if (this.props.message) {
			return (
				<div style={this.props.type === "info" ? Style.info : Style.error}>
					<p>{this.props.message}</p>
				</div>
			)
		}
		return null

	}

}

NotificationComponent.propTypes = {
	message: PropTypes.string,
	type: PropTypes.string
}

const Style = {
	info: {
		color: "green",
		borderStyle: "solid",
		padding: 10,
		marginBottom: 10,
	},
	error: {
		color: "red",
		borderStyle: "solid",
		padding: 10,
		marginBottom: 10,
	}
}