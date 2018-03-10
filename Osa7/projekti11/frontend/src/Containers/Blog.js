import React, {Component} from 'react'
import {connect} from "react-redux";
import BlogComponent from "../components/BlogComponent";
import * as Actions from '../Actions'

export class Blog extends Component {

	constructor(props) {
		super(props)

		this.state={
			comment: ""
		}
	}

	handleDeleteClick = () => {
		if(window.confirm("Delete blog " + this.props.blog.title + " by " + this.props.blog.author + "?")) {
			this.props.deleteBlog(this.props.blog.id)
			this.props.notify("Deleted blog " + this.props.blog.title + " by " + this.props.blog.author)
			this.props.history.push("/")
		}
	}

	handleLikeClick = () => {
		let blog = {...this.props.blog}
		if(blog.user) {
			blog.user = blog.user.id
		}
		blog.likes++
		this.props.notify("Liked blog " + this.props.blog.title + " by " + this.props.blog.author)
		this.props.updateBlog(blog)
	}

	handleCommentSubmit = () => {
		this.props.addComment(this.state.comment, this.props.blog.id)
		this.props.notify('Comment "' + this.state.comment + '" added to blog "' + this.props.blog.title + '"')
		this.setState({comment: ""})

	}

	render() {
		if(this.props.blog) {
			return (
				<BlogComponent
					blog={this.props.blog}
					deletable={this.props.blog.user === undefined || this.props.blog.user.username === this.props.currentUser.username}
					comment={this.state.comment}

					onDeleteClick={this.handleDeleteClick}
					onLikeClick={this.handleLikeClick}
					onCommentChange={(event) => this.setState({comment: event.target.value})}
					onCommentSubmit={this.handleCommentSubmit}
				/>
			)
		}
		return null
	}

}

const mapStateToProps = (state, props) => {
	return {
		blog: state.blogs.find((blog) => blog.id === props.id),
		currentUser: state.users.currentUser,
		history: props.history
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateBlog: (blog) => dispatch(Actions.updateBlog(blog)),
		deleteBlog: (id) => dispatch(Actions.deleteBlog(id)),
		notify: (message, type) => dispatch(Actions.setNotification(message, type)),
		addComment: (comment, id) => dispatch(Actions.addComment(comment, id))
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)