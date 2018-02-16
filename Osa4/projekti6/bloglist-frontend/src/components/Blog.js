import React, {Component} from 'react'
import blogs from "../services/blogs";

export default class Blog extends Component {

	constructor(props) {
		super(props)

		this.state = {
			expanded: false
		}
	}

	renderMoreInfo() {
		if(this.state.expanded) {
			return(
				<div>
					<a href={this.props.blog.url}>{this.props.blog.url}</a>
					<p>{this.props.blog.likes} likes</p>
					<button onClick={() => this.props.onBlogLike(this.props.blog)}>Like</button>
					<p>Added by {this.props.blog.user.name}</p>
					{!this.props.blog.user || this.props.blog.user.username === this.props.user.username ? <button onClick={() => this.props.onBlogDelete(this.props.blog)}>Delete</button> : null}
				</div>
			)
		}
		return null
	}

	render() {
		return (
			<div style={Style.wrapper} onClick={() => this.setState({expanded: !this.state.expanded})}>
				<p>{this.props.blog.title} by {this.props.blog.author}</p>
				{this.renderMoreInfo()}
			</div>
		)
	}

}

const Style = {
	wrapper: {
		borderStyle: "solid",
		borderColor: "black",
		borderWidth: 1,
		marginBottom: 2,
		paddingLeft: 5
	}
}