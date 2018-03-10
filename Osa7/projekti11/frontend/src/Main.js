import React from 'react'
import Blog from './Containers/Blog'
import BlogForm from './Containers/BlogForm'
import Notification from './Containers/Notification'
import blogService from './services/blogs'
import * as Actions from './Actions'
import LoginForm from "./Containers/LoginForm";
import {connect} from "react-redux";
import NavBar from "./Containers/NavBar";
import BlogList from "./Containers/BlogList";
import {Route, BrowserRouter as Router} from "react-router-dom";
import UserList from "./Containers/UserList";
import User from "./Containers/User";

export class Main extends React.Component {


	componentWillMount() {
		this.props.initBlogs()
		this.props.initUsers()
		const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON)
			this.props.setCurrentUser(user)
			blogService.setToken(user.token)
		}
	}

	renderRoutes() {
		return (
			<div>
				<Route exact path="/" render={() => <BlogList/>}/>
				<Route exact path="/create" render={({history}) => <BlogForm history={history}/>}/>
				<Route exact path="/users" render={() => <UserList/>} />
				<Route
					exact
					path="/blogs/:id"
					render={({match, history}) => <Blog history={history} id={match.params.id}/>}
				/>
				<Route
					exact
					path="/users/:username"
					render={({match}) => <User username={match.params.username}/>}
				/>
			</div>
		)
	}

	renderContent() {
		if (this.props.currentUser) {
			return this.renderRoutes()
		} else {
			return (
				<LoginForm/>
			)
		}
	}

	render() {


		return (
			<Router>
				<div>
					<Notification/>
					<NavBar/>
					{this.renderContent()}
				</div>
			</Router>
		)

	}


}

const mapStateToProps = (state) => {
	return {
		currentUser: state.users.currentUser
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		initBlogs: () => dispatch(Actions.initBlogs()),
		setCurrentUser: (user) => dispatch(Actions.setCurrentUser(user)),
		initUsers: () => dispatch(Actions.initUsers())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)