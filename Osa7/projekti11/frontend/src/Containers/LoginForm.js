import React, {Component} from 'react'
import LoginFormComponent from '../components/LoginFormComponent'
import {connect} from "react-redux";
import login from "../services/login";
import * as Actions from '../Actions'
import Blog from "../services/blogs";

export class LoginForm extends Component {


	constructor(props) {
		super(props)

		this.state={
			username: "",
			password: ""
		}
	}

	handleLogin = async () => {
		try{
			let user = await login.login({username: this.state.username, password: this.state.password})
			if (user) {
				this.props.setCurrentUser(user)
			}
			window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
			this.props.notify("Tervetuloa takaisin")
			Blog.setToken(user.token)
		} catch (e) {
			console.log(e)
			if(e.response) {
				this.props.notify(e.response.data.error, "error")
			} else {
				this.props.notify("Jokin meni pieleen :(", "error")
			}
		}

	}

	render() {
		return (
			<LoginFormComponent
				username={this.state.username}
				password={this.state.password}

				onUsernameChange={(event) => this.setState({username: event.target.value})}
				onPasswordChange={(event) => this.setState({password: event.target.value})}

				onLoginClick={this.handleLogin}
			/>
		)
	}

}

const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentUser: (user) => dispatch(Actions.setCurrentUser(user)),
		notify: (message, type) => dispatch(Actions.setNotification(message, type))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)