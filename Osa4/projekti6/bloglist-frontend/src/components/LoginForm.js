import React, {Component} from 'react'

export default class LoginForm extends Component {

	render() {
		return(
			<div>
				<h1>
					Log in to application
				</h1>
				<form onSubmit={this.props.onSubmitClick}>
					<div>
						username:
						<input
							type="text"
							name="username"
							value={this.props.username}
							onChange={this.props.onUsernameChange}
						/>
					</div>
					<div>
						password:
						<input
							type="password"
							name="password"
							value={this.props.password}
							onChange={this.props.onPasswordChange}
						/>
					</div>
					<div>
						<input
							type="submit"
							value="login"
						/>
					</div>
				</form>
			</div>
		)
	}

}