import React, {Component} from 'react'
import {ListItem} from "material-ui";
import Text from "./Text";
import {Link} from "react-router-dom";
import {userShape} from "../CommonPropTypes";

export default class UserLink extends Component {

	render() {
		return (
			<ListItem>
				<Text><Link to={`/users/${this.props.user.username}`}>{this.props.user.name}</Link> {this.props.user.blogs.length} blogs</Text>
			</ListItem>
		)
	}

}

UserLink.propTypes = {
	user: userShape.isRequired
}