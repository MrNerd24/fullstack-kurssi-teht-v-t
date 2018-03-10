import React, {Component} from 'react'
import {Button, TextField} from 'material-ui'
import Container from "./Container";
import Text from "./Text";
import PropTypes from 'prop-types'

export default class LoginFormComponent extends Component {

	render() {
		return (
			<Container actions={(<Button style={Style.button} variant="raised" color="primary" onClick={this.props.onLoginClick}>Login</Button>)}>
				<Text variant="title">
					Login
				</Text>
				<form onSubmit={this.login}>
					<div>
						<TextField
							label="Username"
							value={this.props.username}
							onChange={this.props.onUsernameChange}
						/>
					</div>
					<div>
						<TextField
							label="Password"
							type="password"
							value={this.props.password}
							onChange={this.props.onPasswordChange}
						/>

					</div>

				</form>
			</Container>
		)
	}

}

LoginFormComponent.propTypes = {
	onLoginClick: PropTypes.func.isRequired,
	onUsernameChange: PropTypes.func.isRequired,
	onPasswordChange: PropTypes.func.isRequired,

	username: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
}

let Style={
	button: {
		marginTop: 10
	}
}