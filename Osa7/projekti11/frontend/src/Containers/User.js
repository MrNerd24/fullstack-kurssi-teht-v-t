import React, {Component} from 'react'
import UserComponent from "../components/UserComponent";
import {connect} from "react-redux";


export class User extends Component {

	render() {
		if(this.props.user) {
			return(
				<UserComponent
					user={this.props.user}
					blogs={this.props.blogs}
				/>
			)
		}
		return null
	}

}


const mapStateToProps = (state, props) => {
	let user = state.users.users.find((user) => user.username === props.username);
	return {
		user,
		blogs: state.blogs.filter((blog) => (blog.user && user) && blog.user.username === user.username)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(User)