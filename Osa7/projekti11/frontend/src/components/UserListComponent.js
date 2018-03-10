import React, {Component} from 'react'
import Container from "./Container";
import Text from "./Text";
import {List} from "material-ui";
import UserLink from "./UserLink";
import {userShape} from "../CommonPropTypes";
import PropTypes from 'prop-types'

export default class UserListComponent extends Component {

	render() {
		return(
			<Container>
				<Text variant={"headline"}>Users</Text>
				<List>
					{this.props.users.map((user) => <UserLink key={user.username} user={user}/>)}
				</List>
			</Container>
		)
	}

}

UserListComponent.propTypes = {
	users: PropTypes.arrayOf(userShape).isRequired
}