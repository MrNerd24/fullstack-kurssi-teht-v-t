import React, {Component} from 'react'
import UserListComponent from "../components/UserListComponent";
import {connect} from "react-redux";

export class UserList extends Component {

	render() {
		return(
			<UserListComponent users={this.props.users}/>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		users: state.users.users
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)