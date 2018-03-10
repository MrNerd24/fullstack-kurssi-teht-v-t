import React, {Component} from 'react'
import UserStatusComponent from "../components/NavBarComponent";
import {connect} from "react-redux";
import * as Actions from '../Actions'

export class NavBar extends Component {

	handleLogout = () => {
		this.props.logout()
		this.props.notify("Logged out")
	}

	render() {
		return(
			<UserStatusComponent
				user={this.props.user}
				onLogoutClick={this.handleLogout}
			/>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		user: state.users.currentUser
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(Actions.setCurrentUser(null)),
		notify: (message, type) => dispatch(Actions.setNotification(message, type))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)