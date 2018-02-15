import React, {Component} from 'react'
import TextField from "./TextField";

export default class LoginForm extends Component {

	render() {
		return(
			<div>
				<h1>
					Log in to application
				</h1>
				<form onSubmit={this.props.onSubmitClick}>
					<TextField label="Username" value={this.props.username} onChange={this.props.onUsernameChange}/>
					<TextField type="password" label="Password" value={this.props.password} onChange={this.props.onPasswordChange}/>
					<div>
						<input
							type="submit"
							value="Login"
						/>
					</div>
				</form>
			</div>
		)
	}

}