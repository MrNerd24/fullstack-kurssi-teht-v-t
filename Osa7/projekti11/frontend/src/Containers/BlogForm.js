import React, {Component} from 'react'
import BlogFormComponent from "../components/BlogFormComponent";
import * as Actions from '../Actions'
import {connect} from "react-redux";

export class BlogForm extends Component {

	constructor(props) {
		super(props)

		this.state = {
			title: "",
			author: "",
			url: ""
		}

	}

	handleSubmit = () => {
		let blog = {
			title: this.state.title,
			author: this.state.author,
			url: this.state.url,
			likes: 0,
		}
		this.props.addBlog(blog)
		this.props.history.push("/")
		this.props.notify(`blog '${blog.title}' by ${blog.author} added`)
	}

	render() {
		return(
			<BlogFormComponent
				onSubmitClick={this.handleSubmit}

				onTitleChange={(event) => this.setState({title: event.target.value})}
				onAuthorChange={(event) => this.setState({author: event.target.value})}
				onUrlChange={(event) => this.setState({url: event.target.value})}

				author={this.state.author}
				title={this.state.title}
				url={this.state.url}
			/>
		)
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		addBlog: (blog) => dispatch(Actions.addBlog(blog)),
		notify: (message, type) => dispatch(Actions.setNotification(message,type))
	}
}

export default connect(null, mapDispatchToProps)(BlogForm)