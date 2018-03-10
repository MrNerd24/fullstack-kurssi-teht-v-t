import React, {Component} from 'react'
import {Button, Typography} from "material-ui";
import {Link} from "react-router-dom";
import {currentUserShape} from "../CommonPropTypes";
import PropTypes from 'prop-types'

export default class NavBarComponent extends Component {

	renderUserStatus = () => {
		if (this.props.user) {
			return (
				[
					<Button key={"logout"} onClick={this.props.onLogoutClick}>
						Logout
					</Button>,
					<Typography key="user" style={Style.text}>
						{this.props.user.name} logged in.
					</Typography>
				]

			)
		}

	}

	render() {
		return (
			<div style={Style.container}>
				<Button component={Link} to="/">
					Blogs
				</Button>
				<Button component={Link} to="/users">
					Users
				</Button>
				<Button component={Link} to="/create">
					Create
				</Button>
				{this.renderUserStatus()}
			</div>
		)
	}
}

NavBarComponent.propTypes = {

	user: currentUserShape,
	onLogoutClick: PropTypes.func.isRequired,

}


const Style = {
	container: {
		display: 'flex',
		flexDirection: "row",
		alignItems: "center"
	},
	text: {
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
	}
}

